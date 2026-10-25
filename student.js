let student = loadStudent();
const sectionStorageKey = "eapihs-teacher-sections";
const enrollmentStorageKey = "eapihs-section-enrollments";
const activityDueDatesStorageKey = "eapihs-activity-due-dates";
const gradebookStorageKey = "eapihs-gradebook-entries";
const activityCountsStorageKey = "eapihs-gradebook-activity-counts";
const sectionChatStorageKey = "eapihs-section-chat";
const themePreferenceStorageKey = "eapihs-theme-preference";
const deviceNotificationSeenKeyPrefix = "eapihs-device-notification-seen-";
const deviceNotificationRegistration = "serviceWorker" in navigator && window.isSecureContext
  ? navigator.serviceWorker.register("./sw.js").catch(() => null)
  : Promise.resolve(null);
const studentNotificationsInFlight = new Set();
let sections = loadJson(sectionStorageKey, []);
let enrollments = loadJson(enrollmentStorageKey, {});
let dueDatesBySection = loadJson(activityDueDatesStorageKey, {});
let gradebooks = loadJson(gradebookStorageKey, {});
let activityCountsBySection = loadJson(activityCountsStorageKey, {});
let sectionChats = loadJson(sectionChatStorageKey, {});

function loadStudent() {
  let storedStudent;
  try {
    storedStudent = JSON.parse(window.portalStorage.getItem("eapihs-current-student") ?? "null");
  } catch {
    storedStudent = null;
  }

  if (
    !storedStudent ||
    typeof storedStudent.name !== "string" ||
    !storedStudent.name.trim() ||
    typeof storedStudent.lrn !== "string" ||
    !storedStudent.lrn.trim() ||
    typeof storedStudent.qrValue !== "string" ||
    !storedStudent.qrValue.trim()
  ) {
    window.location.replace("index.html");
    return { name: "", lrn: "", qrValue: "" };
  }

  return storedStudent;
}

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(window.portalStorage.getItem(key) ?? "null");
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  window.portalStorage.setItem(key, JSON.stringify(value));
}

function getSectionId(section) {
  if (section.id) return section.id;
  const source = `${section.grade}-${section.name}`.toUpperCase().replace(/[^A-Z0-9]+/g, "-");
  const code = source.replace(/-/g, "").slice(0, 6).padEnd(6, "X");
  return `SECTION-${code}-${stringHash(source)}`;
}

function stringHash(value) {
  let hash = 0;
  for (const character of value) hash = ((hash << 5) - hash + character.charCodeAt(0)) | 0;
  return Math.abs(hash).toString(36).toUpperCase().slice(0, 6).padEnd(6, "0");
}

function ensureSectionIds() {
  let changed = false;
  for (const section of sections) {
    if (!section.id) {
      section.id = getSectionId(section);
      changed = true;
    }
  }
  if (changed) saveJson(sectionStorageKey, sections);
}

ensureSectionIds();
const qrFrame = document.querySelector(".qr-frame");
qrFrame.replaceChildren();
const qrHost = document.createElement("div");
qrFrame.append(qrHost);

function renderStudentIdentity() {
  document.querySelector("#student-name").textContent = student.name;
  document.querySelector("#student-lrn").textContent = student.lrn;
  document.querySelector("#student-qr-value").textContent = student.qrValue;
  document.querySelector("#settings-student-name").textContent = student.name;
  document.querySelector("#settings-student-lrn").textContent = student.lrn;
  document.querySelector("#settings-student-email").textContent = student.email || "Not provided";
  qrHost.replaceChildren();
  if (!student.qrValue) return;
  new QRCode(qrHost, {
    text: student.qrValue,
    width: 280,
    height: 280,
    correctLevel: QRCode.CorrectLevel.H,
  });
}

renderStudentIdentity();
const studentThemeToggle = document.querySelector("#student-theme-toggle");
studentThemeToggle.checked = window.portalStorage.getItem(themePreferenceStorageKey) === "dark";
document.body.classList.toggle("dark-mode", studentThemeToggle.checked);

const studentDeviceNotificationStatus = document.querySelector("#student-device-notification-status");
const studentEnableNotificationsButton = document.querySelector("#student-enable-notifications");
const studentTestNotificationButton = document.querySelector("#student-test-notification");

function getStudentNotificationSeenKey() {
  return `${deviceNotificationSeenKeyPrefix}${student.lrn}`;
}

function updateStudentNotificationPermissionStatus() {
  if (!("Notification" in window)) {
    studentDeviceNotificationStatus.textContent = "This browser does not support device notifications.";
    studentEnableNotificationsButton.disabled = true;
    return;
  }
  if (window.location.protocol === "file:") {
    studentDeviceNotificationStatus.textContent = "Open the portal over HTTPS or localhost and allow notifications in the browser's site settings.";
    studentEnableNotificationsButton.disabled = true;
    studentTestNotificationButton.disabled = true;
    return;
  }
  const permission = Notification.permission;
  if (window.location.protocol !== "file:") studentDeviceNotificationStatus.textContent = permission === "granted"
    ? "Enabled in this browser. Keep the student portal open to receive new alerts."
    : permission === "denied"
      ? "Notifications are blocked. Change the permission in the browser's site settings."
      : "Not enabled. Allow notifications to receive reminders.";
  studentEnableNotificationsButton.textContent = permission === "granted" ? "Notifications Enabled" : "Enable Notifications";
  studentEnableNotificationsButton.disabled = permission === "granted" || permission === "denied";
  studentTestNotificationButton.disabled = permission !== "granted";
}

async function showStudentDeviceNotification(id, title, body) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const seenKey = getStudentNotificationSeenKey();
  const seen = loadJson(seenKey, []);
  if (seen.includes(id) || studentNotificationsInFlight.has(id)) return;
  studentNotificationsInFlight.add(id);
  try {
    const registration = await deviceNotificationRegistration;
    if (registration?.showNotification) {
      await registration.showNotification(title, { body, tag: id, data: { url: window.location.href } });
    } else {
      const notification = new Notification(title, { body, tag: id });
      notification.addEventListener("click", () => {
        window.focus();
        notification.close();
      });
    }
    saveJson(seenKey, [...seen.slice(-99), id]);
  } catch {
    studentDeviceNotificationStatus.textContent = "Could not display a notification. Check browser and device permissions.";
  } finally {
    studentNotificationsInFlight.delete(id);
  }
}

function notifyStudentAboutRequirements(alerts) {
  for (const alert of alerts) {
    const id = `due:${alert.sectionId}:${alert.activityKey}:${alert.dueDate}`;
    const timing = alert.overdue ? "Overdue" : "Due soon";
    showStudentDeviceNotification(id, `${timing}: ${alert.activity}`, `${alert.sectionName} · Due ${new Date(`${alert.dueDate}T00:00:00`).toLocaleDateString()}. Status: Incomplete.`);
  }
}

studentEnableNotificationsButton.addEventListener("click", async () => {
  if (!("Notification" in window)) {
    updateStudentNotificationPermissionStatus();
    return;
  }
  try {
    const permission = await Notification.requestPermission();
    updateStudentNotificationPermissionStatus();
    if (permission === "granted") renderRequirementNotifications();
  } catch {
    studentDeviceNotificationStatus.textContent = "Could not request notification permission. Open the portal over HTTPS and try again.";
  }
});

studentTestNotificationButton.addEventListener("click", async () => {
  if (!("Notification" in window) || Notification.permission !== "granted") {
    updateStudentNotificationPermissionStatus();
    return;
  }
  try {
    const registration = await deviceNotificationRegistration;
    if (registration?.showNotification) {
      await registration.showNotification(`${window.APP_BRANDING.appName} notification test`, {
        body: "Device notifications are working for this student portal.",
        tag: `student-test-${Date.now()}`,
        data: { url: window.location.href },
      });
    } else {
      new Notification(`${window.APP_BRANDING.appName} notification test`, { body: "Device notifications are working for this student portal." });
    }
    studentDeviceNotificationStatus.textContent = "Test notification sent. Check your device notification area.";
  } catch {
    studentDeviceNotificationStatus.textContent = "Could not display the test notification. Check browser and device settings.";
  }
});

updateStudentNotificationPermissionStatus();

document.querySelector("#student-open-settings").addEventListener("click", () => {
  document.querySelector("#student-home-view").hidden = true;
  document.querySelector("#student-settings-view").hidden = false;
  document.querySelector("#student-settings-title").focus();
});

document.querySelector("#student-settings-back").addEventListener("click", () => {
  document.querySelector("#student-settings-view").hidden = true;
  document.querySelector("#student-home-view").hidden = false;
  document.querySelector("#student-open-settings").focus();
});

studentThemeToggle.addEventListener("change", () => {
  window.portalStorage.setItem(themePreferenceStorageKey, studentThemeToggle.checked ? "dark" : "light");
  document.body.classList.toggle("dark-mode", studentThemeToggle.checked);
});

window.addEventListener("storage", (event) => {
  if (window.portalStorage.eventKey(event) !== themePreferenceStorageKey) return;
  const isDark = event.newValue === "dark";
  studentThemeToggle.checked = isDark;
  document.body.classList.toggle("dark-mode", isDark);
});

document.querySelector("#student-logout").addEventListener("click", async () => {
  if (!window.portalStorage.isDemoMode && window.portalAuth) {
    await window.portalAuth.auth.signOut();
  }
  window.portalStorage.removeItem("eapihs-current-student");
  window.portalStorage.setItem("eapihs-local-session", "signed-out");
  window.location.href = "index.html";
});

document.querySelector("#download-qr").addEventListener("click", () => {
  const qrImage = qrHost.querySelector("img") ?? qrHost.querySelector("canvas");
  if (!qrImage) return;
  const link = document.createElement("a");
  link.download = `EAPIHS-LRN-${student.lrn}.png`;
  link.href = qrImage.tagName === "CANVAS" ? qrImage.toDataURL("image/png") : qrImage.src;
  link.click();
});

function renderJoinedSections() {
  const list = document.querySelector("#student-section-list");
  list.replaceChildren();
  const joinedIds = Object.keys(enrollments).filter((id) =>
    enrollments[id].some((entry) => entry.lrn === student.lrn),
  );

  for (const id of joinedIds) {
    const section = sections.find((entry) => getSectionId(entry) === id);
    const item = document.createElement("li");
    const name = document.createElement("strong");
    const details = document.createElement("span");
    name.textContent = section ? `${section.name} Section` : id;
    details.textContent = section ? `Grade ${section.grade} · ${id}` : id;
    item.append(name, details);
    list.append(item);
  }
}

renderJoinedSections();
renderRequirementNotifications();
populateChatSections();
renderStudentChat();

function getSectionKey(section) {
  return JSON.stringify([String(section.grade), section.name]);
}

function getActivityDefinitions(counts = {}) {
  const defaults = { ww: 5, pt: 3, st: 2, te: 1 };
  const activityCounts = Object.fromEntries(Object.entries(defaults).map(([key, value]) => {
    const count = Number(counts[key]);
    return [key, Number.isInteger(count) && count >= 1 && count <= 20 ? count : value];
  }));
  return [
    ...Array.from({ length: activityCounts.ww }, (_, index) => ({ key: `ww:${index}`, label: `WW${index + 1}` })),
    ...Array.from({ length: activityCounts.pt }, (_, index) => ({ key: `pt:${index}`, label: `PT${index + 1}` })),
    ...Array.from({ length: activityCounts.st }, (_, index) => ({ key: `st:${index}`, label: `ST${index + 1}` })),
    ...Array.from({ length: activityCounts.te }, (_, index) => ({ key: `te:${index}`, label: activityCounts.te === 1 ? "TE" : `TE${index + 1}` })),
  ];
}

function renderRequirementNotifications() {
  const list = document.querySelector("#student-notification-list");
  const empty = document.querySelector("#student-notification-empty");
  list.replaceChildren();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const alerts = [];

  for (const [sectionId, enrolledStudents] of Object.entries(enrollments)) {
    if (!enrolledStudents.some((entry) => entry.lrn === student.lrn && entry.status !== "kicked" && entry.status !== "locked")) continue;
    const section = sections.find((entry) => getSectionId(entry) === sectionId);
    if (!section) continue;
    const sectionKey = getSectionKey(section);
    for (const term of [1, 2, 3]) {
      const termKey = JSON.stringify([sectionKey, term]);
      const dueDates = dueDatesBySection[termKey] ?? (term === 1 ? dueDatesBySection[sectionKey] : null) ?? {};
      const values = gradebooks[termKey]?.values ?? (term === 1 ? gradebooks[sectionKey]?.values : null) ?? {};
      const counts = activityCountsBySection[termKey] ?? (term === 1 ? activityCountsBySection[sectionKey] : null) ?? {};
      for (const activity of getActivityDefinitions(counts)) {
        const dueDate = dueDates[activity.key];
        if (!dueDate || String(values[`learner:${student.lrn}:${activity.key}`] ?? "").trim()) continue;
        const due = new Date(`${dueDate}T00:00:00`);
        const daysRemaining = Math.ceil((due - today) / 86400000);
        if (daysRemaining > 3) continue;
        alerts.push({
          sectionId,
          sectionName: `Grade ${section.grade} ${section.name}`,
          activityKey: `term-${term}:${activity.key}`,
          activity: `Term ${term} ${activity.label}`,
          dueDate,
          overdue: daysRemaining < 0,
        });
      }
    }
  }

  alerts.sort((first, second) => first.dueDate.localeCompare(second.dueDate));
  notifyStudentAboutRequirements(alerts);
  for (const alert of alerts) {
    const item = document.createElement("li");
    const title = document.createElement("strong");
    const detail = document.createElement("span");
    const status = document.createElement("b");
    item.className = "student-notification-item";
    title.textContent = `${alert.sectionName} · ${alert.activity}`;
    detail.textContent = `Due ${new Date(`${alert.dueDate}T00:00:00`).toLocaleDateString()}`;
    status.className = alert.overdue ? "notification-overdue" : "notification-upcoming";
    status.textContent = alert.overdue ? "Overdue · Incomplete" : "Due soon · Incomplete";
    item.append(title, detail, status);
    list.append(item);
  }
  empty.hidden = alerts.length > 0;
  empty.textContent = alerts.length ? "" : "No incomplete or upcoming activities.";
}

function populateChatSections() {
  const select = document.querySelector("#student-chat-section");
  select.replaceChildren();
  const joinedIds = Object.keys(enrollments).filter((id) => enrollments[id].some((entry) =>
    entry.lrn === student.lrn && entry.status !== "kicked" && entry.status !== "locked",
  ));
  for (const id of joinedIds) {
    const section = sections.find((entry) => getSectionId(entry) === id);
    if (!section) continue;
    const option = document.createElement("option");
    option.value = id;
    option.textContent = `Grade ${section.grade} - ${section.name}`;
    select.append(option);
  }
  if (!select.options.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Join a section to open its chat";
    select.append(option);
    select.disabled = true;
    document.querySelector("#student-chat-message").disabled = true;
    document.querySelector("#student-chat-form button").disabled = true;
  } else {
    select.disabled = false;
    document.querySelector("#student-chat-message").disabled = false;
    document.querySelector("#student-chat-form button").disabled = false;
  }
}

function renderStudentChat() {
  const list = document.querySelector("#student-chat-messages");
  const sectionId = document.querySelector("#student-chat-section").value;
  list.replaceChildren();
  for (const message of sectionChats[sectionId] ?? []) {
    const item = document.createElement("li");
    const heading = document.createElement("strong");
    const body = document.createElement("span");
    const time = document.createElement("time");
    heading.textContent = message.sender;
    body.textContent = message.text;
    time.dateTime = message.sentAt;
    time.textContent = new Date(message.sentAt).toLocaleString();
    item.append(heading, body, time);
    list.append(item);
  }
  list.scrollTop = list.scrollHeight;
}

document.querySelector("#student-chat-section").addEventListener("change", renderStudentChat);
document.querySelector("#student-chat-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const sectionId = document.querySelector("#student-chat-section").value;
  const messageInput = document.querySelector("#student-chat-message");
  const text = messageInput.value.trim();
  if (!sectionId || !text) return;
  sectionChats[sectionId] ??= [];
  sectionChats[sectionId].push({ sender: student.name, role: "student", text, sentAt: new Date().toISOString() });
  try {
    saveJson(sectionChatStorageKey, sectionChats);
    messageInput.value = "";
    renderStudentChat();
  } catch {
    document.querySelector("#join-status").dataset.state = "error";
    document.querySelector("#join-status").textContent = "The chat message could not be saved in this browser.";
  }
});

window.addEventListener("storage", (event) => {
  const key = window.portalStorage.eventKey(event);
  if (!key) return;
  if (key === "eapihs-current-student") {
    student = loadStudent();
    renderStudentIdentity();
    renderJoinedSections();
    renderRequirementNotifications();
    populateChatSections();
    renderStudentChat();
  }
  if ([sectionStorageKey, enrollmentStorageKey].includes(key)) {
    sections = loadJson(sectionStorageKey, []);
    enrollments = loadJson(enrollmentStorageKey, {});
    renderJoinedSections();
    populateChatSections();
  }
  if ([activityDueDatesStorageKey, gradebookStorageKey, activityCountsStorageKey].includes(key)) {
    dueDatesBySection = loadJson(activityDueDatesStorageKey, {});
    gradebooks = loadJson(gradebookStorageKey, {});
    activityCountsBySection = loadJson(activityCountsStorageKey, {});
    renderRequirementNotifications();
  }
  if (key === sectionChatStorageKey) {
    const previousChats = (() => {
      try { return JSON.parse(event.oldValue ?? "{}"); } catch { return {}; }
    })();
    sectionChats = loadJson(sectionChatStorageKey, {});
    for (const [sectionId, messages] of Object.entries(sectionChats)) {
      const previousMessages = previousChats[sectionId] ?? [];
      const previousIds = new Set(previousMessages.map((message) => `${message.sentAt}:${message.sender}:${message.text}`));
      const isMember = (enrollments[sectionId] ?? []).some((entry) => entry.lrn === student.lrn && entry.status !== "kicked" && entry.status !== "locked");
      if (!isMember) continue;
      for (const message of messages) {
        if (message.role !== "teacher" || previousIds.has(`${message.sentAt}:${message.sender}:${message.text}`)) continue;
        showStudentDeviceNotification(`chat:${sectionId}:${message.sentAt}`, `New message from ${message.sender}`, message.text);
      }
    }
    renderStudentChat();
  }
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    dueDatesBySection = loadJson(activityDueDatesStorageKey, {});
    gradebooks = loadJson(gradebookStorageKey, {});
    activityCountsBySection = loadJson(activityCountsStorageKey, {});
    renderRequirementNotifications();
  }
});

document.querySelector("#join-section-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const sectionId = document.querySelector("#section-id").value.trim().toUpperCase();
  const status = document.querySelector("#join-status");
  const section = sections.find((entry) => getSectionId(entry) === sectionId);

  if (!section) {
    status.dataset.state = "error";
    status.textContent = "Section ID not found on this device.";
    return;
  }

  enrollments[sectionId] ??= [];
  if (!enrollments[sectionId].some((entry) => entry.lrn === student.lrn)) {
    enrollments[sectionId].push({ lrn: student.lrn, name: student.name, source: "student-id" });
    saveJson(enrollmentStorageKey, enrollments);
  }

  status.dataset.state = "success";
  status.textContent = `You joined Grade ${section.grade} ${section.name}.`;
  document.querySelector("#section-id").value = "";
  renderJoinedSections();
  renderRequirementNotifications();
  populateChatSections();
  renderStudentChat();
});

if (window.portalStorage.isDemoMode) {
  document.body.hidden = false;
} else if (window.portalAuth) {
  window.portalAuth.auth.onAuthStateChanged(async (user) => {
    if (!user) {
      window.location.replace("index.html");
      return;
    }
    try {
      const token = await user.getIdTokenResult();
      const claims = token.claims;
      if (
        claims.role !== "student" ||
        String(claims.lrn || "") !== student.lrn ||
        user.email !== student.email
      ) {
        await window.portalAuth.auth.signOut();
        window.localStorage.removeItem("eapihs-current-student");
        window.location.replace("index.html");
        return;
      }
      document.body.hidden = false;
    } catch {
      await window.portalAuth.auth.signOut();
      window.location.replace("index.html");
    }
  });
} else {
  window.location.replace("index.html");
}
