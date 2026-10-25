const welcomeScreen = document.querySelector("#welcome-screen");
const dashboard = document.querySelector("#teacher-dashboard");
const continueButton = document.querySelector("#welcome-continue");
const teacherMain = document.querySelector(".teacher-main");
const controlCenter = document.querySelector(".control-center");
const sectionsView = document.querySelector("#sections-view");
const sectionsTitle = document.querySelector("#sections-title");
const sectionDashboardView = document.querySelector("#section-dashboard-view");
const sectionDashboardGrade = document.querySelector("#section-dashboard-grade");
const sectionDashboardTitle = document.querySelector("#section-dashboard-title");
const sectionDashboardId = document.querySelector("#section-dashboard-id");
const sectionStudentCode = document.querySelector("#section-student-code");
const addSectionStudentForm = document.querySelector("#add-section-student-form");
const sectionEnrollmentList = document.querySelector("#section-enrollment-list");
const studentEnrollmentStatus = document.querySelector("#student-enrollment-status");
const classListFile = document.querySelector("#class-list-file");
const classListPaste = document.querySelector("#class-list-paste");
const importPastedListButton = document.querySelector("#import-pasted-list");
const classListPreview = document.querySelector("#class-list-preview");
const gradebookSection = document.querySelector("#gradebook-section");
const gradebookSubject = document.querySelector("#gradebook-subject");
const printRecordTitle = document.querySelector("#print-record-title");
const printRecordTermLabel = document.querySelector("#print-record-term-label");
const printRegion = document.querySelector("#print-region");
const printDivision = document.querySelector("#print-division");
const printSchoolId = document.querySelector("#print-school-id");
const printSchoolYear = document.querySelector("#print-school-year");
const printClassRecordButton = document.querySelector("#print-class-record");
const termDashboardTabs = document.querySelector("#term-dashboard-tabs");
const termDashboardPanel = document.querySelector("#term-dashboard-panel");
const gradebookHead = document.querySelector("#gradebook-head");
const gradebookBody = document.querySelector("#gradebook-body");
const gradebookTeacher = document.querySelector("#gradebook-teacher");
const gradebookConfigStatus = document.querySelector("#gradebook-config-status");
const activityDeadlineList = document.querySelector("#activity-deadline-list");
const teacherChatMessages = document.querySelector("#teacher-chat-messages");
const teacherChatForm = document.querySelector("#teacher-chat-form");
const teacherChatMessage = document.querySelector("#teacher-chat-message");
const activityCountInputs = {
  ww: document.querySelector("#activity-count-ww"),
  pt: document.querySelector("#activity-count-pt"),
  st: document.querySelector("#activity-count-st"),
  te: document.querySelector("#activity-count-te"),
};
const openQrScannerButton = document.querySelector("#open-qr-scanner");
const qrScannerView = document.querySelector("#qr-scanner-view");
const qrScannerTitle = document.querySelector("#qr-scanner-title");
const closeQrScannerButton = document.querySelector("#close-qr-scanner");
const qrCamera = document.querySelector("#qr-camera");
const qrScannerStatus = document.querySelector("#qr-scanner-status");
const qrStudentLrn = document.querySelector("#qr-student-lrn");
const findQrStudentButton = document.querySelector("#find-qr-student");
const startQrCameraButton = document.querySelector("#start-qr-camera");
const stopQrCameraButton = document.querySelector("#stop-qr-camera");
const qrSectionChoices = document.querySelector("#qr-section-choices");
const qrStudentRecord = document.querySelector("#qr-student-record");
const qrRecordSection = document.querySelector("#qr-record-section");
const qrRecordTitle = document.querySelector("#qr-record-title");
const qrRecordStudent = document.querySelector("#qr-record-student");
const qrActivityList = document.querySelector("#qr-activity-list");
const qrRecordEmpty = document.querySelector("#qr-record-empty");
const backFromQrRecordButton = document.querySelector("#back-from-qr-record");
const assessmentWeightInputs = {
  ww: document.querySelector("#weight-ww"),
  pt: document.querySelector("#weight-pt"),
  qa: document.querySelector("#weight-qa"),
};
const openSectionsButton = document.querySelector("#open-sections");
const openSectionEvidenceButton = document.querySelector("#open-section-evidence");
const evidenceView = document.querySelector("#evidence-view");
const headerSettingsButton = document.querySelector("#header-settings");
const settingsView = document.querySelector("#settings-view");
const settingsTitle = document.querySelector("#settings-title");
const backToSettingsDashboard = document.querySelector("#back-to-settings-dashboard");
const settingsForm = document.querySelector("#settings-form");
const settingsTeacherName = document.querySelector("#settings-teacher-name");
const settingsSchoolYear = document.querySelector("#settings-school-year");
const settingsCameraReminder = document.querySelector("#settings-camera-reminder");
const settingsCompactTable = document.querySelector("#settings-compact-table");
const settingsDarkMode = document.querySelector("#settings-dark-mode");
const teacherDeviceNotificationStatus = document.querySelector("#teacher-device-notification-status");
const teacherEnableNotificationsButton = document.querySelector("#teacher-enable-notifications");
const teacherTestNotificationButton = document.querySelector("#teacher-test-notification");
const teacherCameraPermissionStatus = document.querySelector("#teacher-camera-permission-status");
const teacherEnableCameraButton = document.querySelector("#teacher-enable-camera");
const settingsStatus = document.querySelector("#settings-status");
const logoutButton = document.querySelector("#logout-button");
const evidenceTitle = document.querySelector("#evidence-title");
const backToEvidenceDashboard = document.querySelector("#back-to-evidence-dashboard");
const evidencePhoto = document.querySelector("#evidence-photo");
const evidencePreview = document.querySelector("#evidence-preview");
const evidenceForm = document.querySelector("#evidence-form");
const evidenceSection = document.querySelector("#evidence-section");
const evidenceStudent = document.querySelector("#evidence-student");
const evidenceCategory = document.querySelector("#evidence-category");
const evidenceNumber = document.querySelector("#evidence-number");
const evidenceMaxScore = document.querySelector("#evidence-max-score");
const evidenceAwardedScore = document.querySelector("#evidence-awarded-score");
const evidenceStatus = document.querySelector("#evidence-status");
const evidenceRecordList = document.querySelector("#evidence-record-list");
const backButton = document.querySelector("#back-to-control-center");
const backToSectionsButton = document.querySelector("#back-to-sections");
const addSectionButton = document.querySelector("#add-section");
const sectionDialog = document.querySelector("#section-dialog");
const sectionForm = document.querySelector("#section-form");
const sectionGrade = document.querySelector("#section-grade");
const sectionName = document.querySelector("#section-name");
const sectionList = document.querySelector("#section-list");
const sectionsEmpty = document.querySelector("#sections-empty");
const sectionStatus = document.querySelector("#section-status");
const sectionsStorageKey = "eapihs-teacher-sections";
const activityCountsStorageKey = "eapihs-gradebook-activity-counts";
const gradebookStorageKey = "eapihs-gradebook-entries";
const gradebookWeightsStorageKey = "eapihs-gradebook-weights";
const activityDueDatesStorageKey = "eapihs-activity-due-dates";
const sectionChatStorageKey = "eapihs-section-chat";
const enrollmentStorageKey = "eapihs-section-enrollments";
const importedRosterStorageKey = "eapihs-imported-rosters";
const currentStudentStorageKey = "eapihs-current-student";
const evidenceStorageKey = "eapihs-camera-evidence";
const settingsStorageKey = "eapihs-teacher-settings";
const themePreferenceStorageKey = "eapihs-theme-preference";
const teacherNotificationSeenStorageKey = "eapihs-teacher-notification-seen";
const teacherDeviceNotificationRegistration = "serviceWorker" in navigator && window.isSecureContext
  ? navigator.serviceWorker.register("./sw.js").catch(() => null)
  : Promise.resolve(null);
const teacherNotificationsInFlight = new Set();
const teacherWelcomeSeenStorageKey = "eapihs-teacher-welcome-seen";
const defaultActivityCounts = { ww: 5, pt: 3, st: 2, te: 1 };
const defaultAssessmentWeights = { ww: 20, pt: 50, qa: 30 };
const termNames = { 1: "FIRST TERM", 2: "SECOND TERM", 3: "THIRD TERM" };

let sections = loadSections();
let activityCountsBySection = loadActivityCounts();
let assessmentWeightsBySection = loadLocalJson(gradebookWeightsStorageKey, {});
let activityDueDatesBySection = loadLocalJson(activityDueDatesStorageKey, {});
let sectionChats = loadLocalJson(sectionChatStorageKey, {});
let enrollments = loadLocalJson(enrollmentStorageKey, {});
let importedRosters = loadLocalJson(importedRosterStorageKey, {});
let evidenceRecords = loadLocalJson(evidenceStorageKey, []);
let evidencePhotoData = "";
let teacherSettings = loadLocalJson(settingsStorageKey, {});
let activityCounts = { ...defaultActivityCounts };
let assessmentWeights = { ...defaultAssessmentWeights };
let activeSection = null;
let activeSectionKey = "";
let activeTerm = 1;
let qrCameraStream = null;
let qrScanFrame = 0;
const teacherViews = [
  controlCenter,
  qrScannerView,
  qrStudentRecord,
  sectionsView,
  sectionDashboardView,
  evidenceView,
  settingsView,
];
let currentTeacherView = controlCenter;
let teacherViewHistory = [];

function showTeacherView(nextView, remember = true) {
  if (!teacherViews.includes(nextView)) return;
  if (currentTeacherView !== nextView && remember) teacherViewHistory.push(currentTeacherView);
  for (const view of teacherViews) view.hidden = view !== nextView;
  currentTeacherView = nextView;
}

function goBackTeacherView() {
  const previousView = teacherViewHistory.pop() ?? controlCenter;
  showTeacherView(previousView, false);
  return previousView;
}

function showTeacherDashboard() {
  window.portalStorage.setItem(teacherWelcomeSeenStorageKey, "true");
  welcomeScreen.hidden = true;
  dashboard.hidden = false;
  teacherViewHistory = [];
  showTeacherView(controlCenter, false);
  teacherMain.classList.add("dashboard-open");
  dashboard.focus({ preventScroll: true });
}

function openQrScanner() {
  showTeacherView(qrScannerView);
  qrSectionChoices.replaceChildren();
  qrSectionChoices.hidden = true;
  qrScannerStatus.textContent = "Start the camera or enter the student's LRN.";
  qrScannerStatus.dataset.state = "";
  qrStudentLrn.value = "";
  qrScannerTitle.focus();
}

function stopQrCamera() {
  if (qrScanFrame) cancelAnimationFrame(qrScanFrame);
  qrScanFrame = 0;
  qrCameraStream?.getTracks().forEach((track) => track.stop());
  qrCameraStream = null;
  qrCamera.srcObject = null;
  qrCamera.hidden = true;
  startQrCameraButton.disabled = false;
  stopQrCameraButton.disabled = true;
}

function getLrnFromQr(value) {
  const normalized = String(value ?? "").trim().toUpperCase();
  const match = normalized.match(/^(?:EAPIHS-LRN-)?(\d{12})$/);
  return match?.[1] ?? "";
}

function findStudentSections(lrn) {
  return sections.filter((section) => (enrollments[ensureSectionId(section)] ?? []).some((student) =>
    student.lrn === lrn && student.status !== "kicked" && student.status !== "locked",
  ));
}

function routeScannedStudent(value) {
  const lrn = getLrnFromQr(value);
  if (!lrn) {
    qrScannerStatus.textContent = "This QR code is not valid. Use an EAPIHS student QR code or a 12-digit LRN.";
    qrScannerStatus.dataset.state = "error";
    return;
  }

  qrStudentLrn.value = lrn;
  const matchingSections = findStudentSections(lrn);
  if (!matchingSections.length) {
    qrScannerStatus.textContent = "This student was not found in your sections.";
    qrScannerStatus.dataset.state = "error";
    return;
  }

  stopQrCamera();
  if (matchingSections.length === 1) {
    openQrStudentRecord(matchingSections[0], lrn);
    return;
  }

  qrSectionChoices.replaceChildren();
  for (const section of matchingSections) {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `Grade ${section.grade} - ${section.name}`;
    button.addEventListener("click", () => openQrStudentRecord(section, lrn));
    item.append(button);
    qrSectionChoices.append(item);
  }
  qrSectionChoices.hidden = false;
  qrScannerStatus.textContent = "This student is in more than one section. Select a class record.";
  qrScannerStatus.dataset.state = "success";
}

function openQrStudentRecord(section, lrn) {
  const student = (enrollments[ensureSectionId(section)] ?? []).find((entry) => entry.lrn === lrn);
  if (!student) return;

  stopQrCamera();
  showTeacherView(qrStudentRecord);
  qrRecordSection.textContent = `GRADE ${section.grade} · ${section.name}`;
  qrRecordStudent.textContent = `${student.name} · LRN ${student.lrn}`;
  qrActivityList.replaceChildren();

  const sectionKey = getSectionKey(section);
  const countsBySection = loadActivityCounts();
  const savedGradebooks = loadLocalJson(gradebookStorageKey, {});
  const activities = [1, 2, 3].flatMap((term) => {
    const counts = normalizeActivityCounts(getTermRecord(countsBySection, sectionKey, term));
    const values = getTermRecord(savedGradebooks, sectionKey, term)?.values ?? {};
    return [
      ...Array.from({ length: counts.ww }, (_, index) => ({ term, key: `ww:${index}`, label: `T${term} WW${index + 1}`, complete: String(values[`learner:${lrn}:ww:${index}`] ?? "").trim() !== "" })),
      ...Array.from({ length: counts.pt }, (_, index) => ({ term, key: `pt:${index}`, label: `T${term} PT${index + 1}`, complete: String(values[`learner:${lrn}:pt:${index}`] ?? "").trim() !== "" })),
      ...Array.from({ length: counts.st }, (_, index) => ({ term, key: `st:${index}`, label: `T${term} ST${index + 1}`, complete: String(values[`learner:${lrn}:st:${index}`] ?? "").trim() !== "" })),
      ...Array.from({ length: counts.te }, (_, index) => ({ term, key: `te:${index}`, label: `T${term} ${counts.te === 1 ? "TE" : `TE${index + 1}`}`, complete: String(values[`learner:${lrn}:te:${index}`] ?? "").trim() !== "" })),
    ];
  });

  for (const activity of activities) {
    const item = document.createElement("li");
    const name = document.createElement("span");
    const status = document.createElement("strong");
    item.className = "qr-activity-item";
    name.textContent = activity.label;
    status.className = `qr-activity-status ${activity.complete ? "is-complete" : "is-incomplete"}`;
    status.textContent = activity.complete ? "Complete" : "Incomplete";
    item.append(name, status);
    qrActivityList.append(item);
  }

  qrRecordEmpty.hidden = activities.length > 0;
  qrRecordTitle.focus();
}

async function startQrCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    qrScannerStatus.textContent = "The camera is unavailable. Enter the LRN or open the app over a secure HTTPS connection.";
    qrScannerStatus.dataset.state = "error";
    return;
  }
  if (!window.jsQR) {
    qrScannerStatus.textContent = "The QR scanner library could not load. Check your internet connection and refresh.";
    qrScannerStatus.dataset.state = "error";
    return;
  }

  try {
    qrCameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
    qrCamera.srcObject = qrCameraStream;
    qrCamera.hidden = false;
    await qrCamera.play();
    startQrCameraButton.disabled = true;
    stopQrCameraButton.disabled = false;
    qrScannerStatus.textContent = "Point the camera at the student's QR code.";
    qrScannerStatus.dataset.state = "success";
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d", { willReadFrequently: true });
    const scanFrame = () => {
      if (!qrCameraStream) return;
      if (qrCamera.readyState === qrCamera.HAVE_ENOUGH_DATA) {
        canvas.width = qrCamera.videoWidth;
        canvas.height = qrCamera.videoHeight;
        context.drawImage(qrCamera, 0, 0, canvas.width, canvas.height);
        const image = context.getImageData(0, 0, canvas.width, canvas.height);
        const decoded = window.jsQR(image.data, image.width, image.height, { inversionAttempts: "dontInvert" });
        if (decoded?.data) {
          routeScannedStudent(decoded.data);
          return;
        }
      }
      qrScanFrame = requestAnimationFrame(scanFrame);
    };
    qrScanFrame = requestAnimationFrame(scanFrame);
  } catch (error) {
    stopQrCamera();
    qrScannerStatus.textContent = error.name === "NotAllowedError"
      ? "Camera access was denied. Allow camera access in browser settings to scan QR codes."
      : "The camera could not be opened. Check the camera connection and permissions.";
    qrScannerStatus.dataset.state = "error";
  }
}

openQrScannerButton.addEventListener("click", openQrScanner);
closeQrScannerButton.addEventListener("click", () => {
  stopQrCamera();
  goBackTeacherView();
  openQrScannerButton.focus();
});
startQrCameraButton.addEventListener("click", startQrCamera);
stopQrCameraButton.addEventListener("click", () => {
  stopQrCamera();
  qrScannerStatus.textContent = "Camera stopped.";
});
findQrStudentButton.addEventListener("click", () => routeScannedStudent(qrStudentLrn.value));
qrStudentLrn.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    routeScannedStudent(qrStudentLrn.value);
  }
});
backFromQrRecordButton.addEventListener("click", () => {
  goBackTeacherView();
  qrScannerTitle.focus();
});

continueButton.addEventListener("click", showTeacherDashboard);
continueButton.addEventListener("touchend", (event) => {
  event.preventDefault();
  showTeacherDashboard();
});

function loadSections() {
  try {
    const savedSections = JSON.parse(window.portalStorage.getItem(sectionsStorageKey) ?? "[]");
    const normalized = Array.isArray(savedSections) ? savedSections : [];
    normalized.forEach((section) => ensureSectionId(section));
    return normalized;
  } catch {
    return [];
  }
}

function loadLocalJson(key, fallback) {
  try {
    return JSON.parse(window.portalStorage.getItem(key) ?? "null") ?? fallback;
  } catch {
    return fallback;
  }
}

function stringHash(value) {
  let hash = 0;
  for (const character of value) hash = ((hash << 5) - hash + character.charCodeAt(0)) | 0;
  return Math.abs(hash).toString(36).toUpperCase().slice(0, 6).padEnd(6, "0");
}

function ensureSectionId(section) {
  if (section.id) return section.id;
  const source = `${section.grade}-${section.name}`.toUpperCase().replace(/[^A-Z0-9]+/g, "-");
  const code = source.replace(/-/g, "").slice(0, 6).padEnd(6, "X");
  section.id = `SECTION-${code}-${stringHash(source)}`;
  return section.id;
}

function loadActivityCounts() {
  try {
    const savedCounts = JSON.parse(window.portalStorage.getItem(activityCountsStorageKey) ?? "{}");
    return savedCounts && typeof savedCounts === "object" && !Array.isArray(savedCounts)
      ? savedCounts
      : {};
  } catch {
    return {};
  }
}

function getSectionKey(section) {
  return JSON.stringify([String(section.grade), section.name]);
}

function getTermStorageKey(sectionKey = activeSectionKey, term = activeTerm) {
  return JSON.stringify([sectionKey, Number(term)]);
}

function getTermRecord(storageMap, sectionKey = activeSectionKey, term = activeTerm) {
  const termKey = getTermStorageKey(sectionKey, term);
  if (Object.hasOwn(storageMap, termKey)) return storageMap[termKey];
  if (Number(term) === 1 && Object.hasOwn(storageMap, sectionKey)) return storageMap[sectionKey];
  return undefined;
}

function setTermRecord(storageMap, value, sectionKey = activeSectionKey, term = activeTerm) {
  storageMap[getTermStorageKey(sectionKey, term)] = value;
}

function getTermGradebook(sectionKey = activeSectionKey, term = activeTerm) {
  const savedGradebooks = loadLocalJson(gradebookStorageKey, {});
  return getTermRecord(savedGradebooks, sectionKey, term) ?? { subject: "", values: {} };
}

function persistTermGradebook(savedGradebook, sectionKey = activeSectionKey, term = activeTerm) {
  const savedGradebooks = loadLocalJson(gradebookStorageKey, {});
  setTermRecord(savedGradebooks, savedGradebook, sectionKey, term);
  window.portalStorage.setItem(gradebookStorageKey, JSON.stringify(savedGradebooks));
}

function normalizeActivityCounts(savedCounts = {}) {
  return Object.fromEntries(Object.entries(defaultActivityCounts).map(([key, defaultCount]) => {
    const count = Number(savedCounts[key]);
    return [key, Number.isInteger(count) && count >= 1 && count <= 20 ? count : defaultCount];
  }));
}

function normalizeAssessmentWeights(savedWeights = {}) {
  const weights = Object.fromEntries(Object.keys(defaultAssessmentWeights).map((key) => [key, Number(savedWeights[key])]));
  const values = Object.values(weights);
  const validValues = values.every((weight) => Number.isFinite(weight) && weight >= 0 && weight <= 100);
  const total = values.reduce((sum, weight) => sum + weight, 0);
  return validValues && Math.abs(total - 100) < 0.001 ? weights : { ...defaultAssessmentWeights };
}

function saveActivityCounts() {
  try {
    setTermRecord(activityCountsBySection, { ...activityCounts });
    window.portalStorage.setItem(activityCountsStorageKey, JSON.stringify(activityCountsBySection));
    return true;
  } catch {
    gradebookConfigStatus.textContent = "The activity count could not be saved in this browser.";
    gradebookConfigStatus.dataset.state = "error";
    return false;
  }
}

function saveSections() {
  try {
    window.portalStorage.setItem(sectionsStorageKey, JSON.stringify(sections));
    return true;
  } catch {
    sectionStatus.textContent = "The section could not be saved. Check the browser's storage settings.";
    sectionStatus.dataset.state = "error";
    return false;
  }
}

function renderSections() {
  sectionList.replaceChildren();
  sectionsEmpty.hidden = sections.length > 0;

  for (const section of sections) {
    const item = document.createElement("li");
    const openButton = document.createElement("button");
    const name = document.createElement("strong");
    const grade = document.createElement("span");
    const removeButton = document.createElement("button");

    item.className = "section-list-item";
    openButton.className = "section-open";
    openButton.type = "button";
    openButton.setAttribute("aria-label", `Open Grade ${section.grade} ${section.name}`);
    name.className = "section-name";
    name.textContent = section.name;
    grade.className = "section-grade";
    grade.textContent = `Grade ${section.grade}`;
    openButton.append(name, grade);
    openButton.addEventListener("click", () => openSection(section));
    removeButton.className = "remove-section";
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("aria-label", `Remove Grade ${section.grade} ${section.name}`);
    removeButton.addEventListener("click", () => removeSection(section));
    item.append(openButton, removeButton);
    sectionList.append(item);
  }
}

function getSectionStudents() {
  const sectionStudents = (enrollments[activeSection?.id] ?? []).filter((student) =>
    student.status !== "kicked" && student.status !== "locked",
  );
  return [...sectionStudents].sort((first, second) =>
    getSurname(first.name).localeCompare(getSurname(second.name), "en", { sensitivity: "base" }),
  );
}

function normalizeName(name) {
  const value = String(name ?? "").replace(/\s+/g, " ").trim();
  if (!value) return "";
  if (value.includes(",")) {
    const [surname, given] = value.split(/,/, 2);
    return `${surname.trim().replace(/\b\w/g, (letter) => letter.toUpperCase())}, ${given.trim().replace(/\b\w/g, (letter) => letter.toUpperCase())}`;
  }
  const parts = value.split(" ").filter(Boolean);
  if (parts.length < 2) return parts[0]?.replace(/\b\w/g, (letter) => letter.toUpperCase()) ?? "";
  const surname = parts.pop();
  const given = parts.join(" ");
  return `${surname.replace(/\b\w/g, (letter) => letter.toUpperCase())}, ${given.replace(/\b\w/g, (letter) => letter.toUpperCase())}`;
}

function getSurname(name) {
  if (!name) return "";
  const value = String(name).trim();
  if (value.includes(",")) return value.split(",", 1)[0].trim();
  return value.split(/\s+/).at(-1) ?? value;
}

function normalizeGender(value) {
  const gender = String(value ?? "").trim().toUpperCase();
  if (["F", "FEMALE", "GIRL"].includes(gender)) return "FEMALE";
  return "MALE";
}

function normalizeHeader(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function findColumn(headers, aliases) {
  return headers.findIndex((header) => aliases.includes(normalizeHeader(header)));
}

function parseClassRows(rows) {
  if (!rows.length) return [];
  const headers = Object.keys(rows[0]);
  const nameIndex = findColumn(headers, ["name", "learners name", "learner name", "student name", "fullname", "full name", "student", "learner"]);
  const lrnIndex = findColumn(headers, ["lrn", "learner reference number"]);
  const sexIndex = findColumn(headers, ["sex", "gender", "sex gender"]);
  if (nameIndex < 0 || lrnIndex < 0) {
    throw new Error("Excel needs Name and LRN columns.");
  }

  return rows.map((row) => {
    const values = Object.values(row);
    const lrn = String(values[lrnIndex] ?? "").replace(/[^0-9]/g, "");
    const name = String(values[nameIndex] ?? "").trim();
    if (!name || lrn.length !== 12) return null;
    return { name: normalizeName(name), lrn, gender: sexIndex >= 0 ? normalizeGender(values[sexIndex]) : "MALE", source: "import" };
  }).filter(Boolean);
}

function parsePastedClassList(text) {
  if (!window.XLSX) throw new Error("Excel/CSV parser did not load. Check your internet connection and refresh.");
  const workbook = XLSX.read(text, { type: "string", raw: true });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "", raw: false });
  if (!rows.length) return [];

  const headers = rows[0].map(String);
  const hasHeaders = findColumn(headers, ["name", "learners name", "learner name", "student name", "fullname", "full name", "student", "learner"]) >= 0
    && findColumn(headers, ["lrn", "learner reference number"]) >= 0;
  if (hasHeaders) {
    const records = rows.slice(1).map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ""])));
    return parseClassRows(records);
  }

  const students = [];
  const seen = new Set();
  for (const row of rows) {
    const values = row.map((value) => String(value ?? "").trim());
    const lrnIndex = values.findIndex((value) => value.replace(/\D/g, "").length === 12);
    if (lrnIndex < 0) continue;
    const lrn = values[lrnIndex].replace(/\D/g, "");
    const name = values.find((value, index) => index !== lrnIndex && /[A-Za-zÀ-ÖØ-öø-ÿÑñ]/.test(value) && !/^(male|female|sex|gender)$/i.test(value));
    const genderValue = values.find((value) => /^(male|female|m|f)$/i.test(value));
    if (!name || seen.has(lrn)) continue;
    seen.add(lrn);
    students.push({ name: normalizeName(name), lrn, gender: genderValue ? normalizeGender(genderValue) : "MALE", source: "paste" });
  }
  return students;
}

function cleanOcrName(value) {
  return String(value ?? "")
    .replace(/\d+/g, "")
    .replace(/\b(?:LRN|MALE|FEMALE|LEARNERS|NAMES)\b/gi, "")
    .replace(/[|:;]+/g, " ")
    .replace(/[^A-Za-zÀ-ÖØ-öø-ÿÑñ.,'\-\s]/g, " ")
    .replace(/[-.]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/^(?:\s*[,.]+\s*)+/, "")
    .trim();
}

function parseCoordinateOcrRows(words) {
  const imageWidth = Math.max(...[...words].map((word) => word.bbox?.x1 ?? word.x1 ?? 0), 1);
  const center = imageWidth / 2;
  const wordRows = new Map();
  for (const word of words) {
    const x = word.bbox?.x0 ?? word.x0 ?? 0;
    const half = x < center ? "male" : "female";
    const y = Math.round((word.bbox?.y0 ?? word.baseline?.y0 ?? word.y0 ?? 0) / 12);
    const key = `${half}:${y}`;
    const rowWords = wordRows.get(key) ?? [];
    rowWords.push(word);
    wordRows.set(key, rowWords);
  }

  const students = [];
  const seen = new Set();
  for (const rowWords of wordRows.values()) {
    const wordsInRow = [...rowWords].sort((first, second) => (first.bbox?.x0 ?? first.x0 ?? 0) - (second.bbox?.x0 ?? second.x0 ?? 0));
    const rowText = wordsInRow.map((word) => word.text).join(" ");
    const lrnMatch = rowText.match(/(?<!\d)(\d(?:[\s.-]?\d){11})(?!\d)/);
    if (!lrnMatch) continue;
    const lrn = lrnMatch[1].replace(/\D/g, "");
    if (!/^\d{12}$/.test(lrn) || seen.has(lrn)) continue;
    const rowX = wordsInRow.find((word) => /\d/.test(word.text))?.bbox?.x0 ?? wordsInRow[0]?.x0 ?? 0;
    const cleanedName = cleanOcrName(rowText.replace(lrnMatch[0], ""));
    if (!cleanedName) continue;
    seen.add(lrn);
    students.push({ name: normalizeName(cleanedName), lrn, gender: rowX < center ? "MALE" : "FEMALE", source: "ocr" });
  }
  return students;
}

function parseOcrClassList(text, words = []) {
  const coordinateRows = parseCoordinateOcrRows(words);
  if (coordinateRows.length) return coordinateRows;
  const lines = String(text ?? "")
    .split(/\r?\n/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  const students = [];
  const seen = new Set();
  let currentGender = "MALE";

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const upperLine = line.toUpperCase();
    if (/\bFEMALE\b/.test(upperLine)) currentGender = "FEMALE";
    if (/\bMALE\b/.test(upperLine) && !/\bFEMALE\b/.test(upperLine)) currentGender = "MALE";

    const lrnMatch = line.match(/(?<!\d)(\d(?:[\s.-]?\d){11})(?!\d)/);
    if (!lrnMatch) continue;
    let lrn = lrnMatch[0].replace(/\D/g, "");
    if (!/^\d{12}$/.test(lrn) || seen.has(lrn)) continue;

    let name = line
      .replace(lrnMatch[0], "")
      .replace(/\b(?:LRN|MALE|FEMALE|LEARNERS|NAMES)\b/gi, "")
      .replace(/[|:;]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/^[-.\d\s]+/, "")
      .trim();

    if (!name && index > 0) {
      name = lines[index - 1]
        .replace(/\b(?:LRN|MALE|FEMALE|LEARNERS|NAMES)\b/gi, "")
        .replace(/\d{12}/g, "")
        .replace(/^[-.\s]+/, "")
        .trim();
    }
    if (!name && index + 1 < lines.length) {
      name = lines[index + 1]
        .replace(/\b(?:LRN|MALE|FEMALE|LEARNERS|NAMES)\b/gi, "")
        .replace(/^[-.\s]+/, "")
        .trim();
    }

    if (!name || /^(LRN|HIGHEST|SCHOOL|REGION|DIVISION|TEACHER)$/i.test(name)) continue;
    seen.add(lrn);
    students.push({ name: normalizeName(name), lrn, gender: currentGender, source: "ocr" });
  }

  return students;
}

function mergeImportedStudents(importedStudents) {
  const currentStudents = enrollments[activeSection.id] ?? [];
  const byLrn = new Map(currentStudents.map((student) => [student.lrn, student]));
  for (const student of importedStudents) {
    if (!byLrn.has(student.lrn)) {
      byLrn.set(student.lrn, { ...student, status: "not-added" });
    }
  }
  enrollments[activeSection.id] = [...byLrn.values()];
  importedRosters[activeSection.id] = [...byLrn.values()].map((student) => ({ ...student }));
  window.portalStorage.setItem(enrollmentStorageKey, JSON.stringify(enrollments));
  window.portalStorage.setItem(importedRosterStorageKey, JSON.stringify(importedRosters));
}

function finishStudentImport(importedStudents, sourceLabel) {
  if (!importedStudents.length) {
    throw new Error("No valid student rows found. Include a Name column and a 12-digit LRN for each student.");
  }
  const previousValues = captureGradebookValues();
  mergeImportedStudents(importedStudents);
  renderSectionEnrollments();
  renderGradebook(previousValues);
  studentEnrollmentStatus.dataset.state = "success";
  studentEnrollmentStatus.textContent = `${sourceLabel} ${importedStudents.length} student${importedStudents.length === 1 ? "" : "s"}. Review them below before adding.`;
}

importPastedListButton.addEventListener("click", () => {
  if (!activeSection) return;
  try {
    finishStudentImport(parsePastedClassList(classListPaste.value), "Imported");
    classListPaste.value = "";
  } catch (error) {
    studentEnrollmentStatus.dataset.state = "error";
    studentEnrollmentStatus.textContent = error.message || "Could not import the pasted class list.";
  }
});

classListPaste.addEventListener("paste", (event) => {
  const image = [...(event.clipboardData?.items ?? [])].find((item) => item.type.startsWith("image/"));
  if (!image) return;
  event.preventDefault();
  const file = image.getAsFile();
  if (file) processClassListFile(file);
});

async function processClassListFile(file) {
  if (!file || !activeSection) return;

  if (file.type.startsWith("image/")) {
    classListPreview.src = URL.createObjectURL(file);
    classListPreview.hidden = false;
    studentEnrollmentStatus.dataset.state = "success";
    studentEnrollmentStatus.textContent = "Reading class list image...";

    try {
      if (!window.Tesseract) throw new Error("OCR library did not load. Check your internet connection and refresh.");
      const result = await window.Tesseract.recognize(file, "eng", {
        rotateAuto: true,
        preserve_interword_spaces: true,
        tessedit_pageseg_mode: 6,
        logger: (message) => {
          if (message.status === "recognizing text" && message.progress) {
            studentEnrollmentStatus.textContent = `Reading names and LRNs... ${Math.round(message.progress * 100)}%`;
          }
        },
      });
      const importedStudents = parseOcrClassList(result.data.text, result.data.words ?? []);
      finishStudentImport(importedStudents, "OCR detected");
    } catch (error) {
      studentEnrollmentStatus.dataset.state = "error";
      studentEnrollmentStatus.textContent = error.message || "Could not read the class list image.";
    }
    return;
  }

  try {
    const extension = file.name.split(".").at(-1)?.toLowerCase();
    if (["txt", "tsv", "csv"].includes(extension)) {
      finishStudentImport(parsePastedClassList(await file.text()), "Imported");
      classListPreview.hidden = true;
      return;
    }
    if (!window.XLSX) throw new Error("Excel parser did not load. Check your internet connection and refresh.");
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data, { type: "array" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
    const importedStudents = parseClassRows(rows);
    finishStudentImport(importedStudents, "Imported");
    classListPreview.hidden = true;
  } catch (error) {
    studentEnrollmentStatus.dataset.state = "error";
    studentEnrollmentStatus.textContent = error.message || "Could not import the class list.";
  }
}

classListFile.addEventListener("change", () => processClassListFile(classListFile.files?.[0]));

function openSection(section) {
  ensureSectionId(section);
  activeSection = section;
  showTeacherView(sectionDashboardView);
  sectionDashboardGrade.textContent = `GRADE ${section.grade}`;
  sectionDashboardTitle.textContent = section.name;
  sectionDashboardId.textContent = section.id;
  activeSectionKey = getSectionKey(section);
  gradebookSection.value = `Grade ${section.grade} - ${section.name}`;
  renderSectionEnrollments();
  renderSectionChat();
  selectTermDashboard(1, false);
  teacherMain.classList.add("section-dashboard-open");
  sectionDashboardTitle.focus();
}

function selectTermDashboard(term, rememberValues = true) {
  const nextTerm = Number(term);
  if (![1, 2, 3].includes(nextTerm) || !activeSectionKey) return;
  if (rememberValues) {
    const previousValues = captureGradebookValues();
    if (previousValues.size) persistTermGradebook({
      subject: gradebookSubject.value,
      teacher: gradebookTeacher.value,
      printMetadata: getPrintMetadata(),
      values: Object.fromEntries(previousValues),
    });
  }

  activeTerm = nextTerm;
  for (const tab of termDashboardTabs.querySelectorAll("[data-term]")) {
    const selected = Number(tab.dataset.term) === activeTerm;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  }
  termDashboardPanel.setAttribute("aria-labelledby", `term-tab-${activeTerm}`);
  termDashboardPanel.setAttribute("aria-label", `${termNames[activeTerm]} grade record`);

  const savedCounts = getTermRecord(activityCountsBySection);
  activityCounts = normalizeActivityCounts(savedCounts);
  assessmentWeights = normalizeAssessmentWeights(getTermRecord(assessmentWeightsBySection));
  for (const [key, input] of Object.entries(activityCountInputs)) input.value = activityCounts[key];
  for (const [key, input] of Object.entries(assessmentWeightInputs)) input.value = assessmentWeights[key];

  const savedGradebook = getTermGradebook();
  gradebookSubject.value = savedGradebook.subject ?? "";
  gradebookTeacher.value = savedGradebook.teacher ?? teacherSettings.teacherName ?? "Ms. Reyes";
  setPrintMetadata(savedGradebook.printMetadata ?? {});
  gradebookConfigStatus.textContent = "";
  renderGradebook(new Map(Object.entries(savedGradebook.values ?? {})));
  renderActivityDeadlines();
  termDashboardPanel.querySelector(".gradebook-term-row th").textContent = termNames[activeTerm];
  printRecordTitle.textContent = `CLASS RECORD - TERM ${activeTerm}`;
  printRecordTermLabel.textContent = termNames[activeTerm];
}

function getPrintMetadata() {
  return {
    region: printRegion.value.trim(),
    division: printDivision.value.trim(),
    schoolId: printSchoolId.value.trim(),
    schoolYear: printSchoolYear.value.trim(),
  };
}

function setPrintMetadata(metadata) {
  printRegion.value = metadata.region ?? "";
  printDivision.value = metadata.division ?? "";
  printSchoolId.value = metadata.schoolId ?? "";
  printSchoolYear.value = metadata.schoolYear ?? "";
}

function savePrintMetadata() {
  if (!activeSectionKey) return;
  const savedGradebook = getTermGradebook();
  persistTermGradebook({
    ...savedGradebook,
    subject: gradebookSubject.value,
    teacher: gradebookTeacher.value,
    printMetadata: getPrintMetadata(),
    values: Object.fromEntries(captureGradebookValues()),
  });
}

for (const input of [printRegion, printDivision, printSchoolId, printSchoolYear]) {
  input.addEventListener("change", savePrintMetadata);
}

printClassRecordButton.addEventListener("click", () => {
  savePrintMetadata();
  window.print();
});

termDashboardTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-term]");
  if (tab) selectTermDashboard(tab.dataset.term);
});

termDashboardTabs.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const nextTerm = event.key === "Home" ? 1 : event.key === "End" ? 3
    : Math.min(3, Math.max(1, activeTerm + (event.key === "ArrowRight" ? 1 : -1)));
  selectTermDashboard(nextTerm);
  termDashboardTabs.querySelector(`[data-term="${nextTerm}"]`).focus();
});

function getGradebookGroups() {
  const numberedActivities = (key, prefix) => Array.from(
    { length: activityCounts[key] },
    (_, index) => ({ key, index, label: `${prefix}${index + 1}` }),
  );

  return [
    {
      key: "ww",
      label: "Written/Oral Works",
      weight: `${assessmentWeights.ww}%`,
      activities: numberedActivities("ww", "WW"),
    },
    {
      key: "pt",
      label: "Product/Performance Tasks",
      weight: `${assessmentWeights.pt}%`,
      activities: numberedActivities("pt", "PT"),
    },
    {
      key: "summative",
      label: "Quarterly Assessment",
      weight: `${assessmentWeights.qa}%`,
      activities: [
        ...numberedActivities("st", "ST"),
        ...Array.from({ length: activityCounts.te }, (_, index) => ({
          key: "te",
          index,
          label: activityCounts.te === 1 ? "TE" : `TE${index + 1}`,
        })),
      ],
    },
  ];
}

function getSectionActivities() {
  return [
    ...Array.from({ length: activityCounts.ww }, (_, index) => ({ key: `ww:${index}`, label: `WW${index + 1}` })),
    ...Array.from({ length: activityCounts.pt }, (_, index) => ({ key: `pt:${index}`, label: `PT${index + 1}` })),
    ...Array.from({ length: activityCounts.st }, (_, index) => ({ key: `st:${index}`, label: `ST${index + 1}` })),
    ...Array.from({ length: activityCounts.te }, (_, index) => ({ key: `te:${index}`, label: activityCounts.te === 1 ? "TE" : `TE${index + 1}` })),
  ];
}

function renderActivityDeadlines() {
  activityDeadlineList.replaceChildren();
  if (!activeSectionKey) return;
  const savedDates = getTermRecord(activityDueDatesBySection) ?? {};
  for (const activity of getSectionActivities()) {
    const label = document.createElement("label");
    const name = document.createElement("span");
    const input = document.createElement("input");
    label.className = "activity-deadline-item";
    name.textContent = activity.label;
    input.type = "date";
    input.value = savedDates[activity.key] ?? "";
    input.setAttribute("aria-label", `${activity.label} due date`);
    input.addEventListener("change", () => {
      const currentDates = getTermRecord(activityDueDatesBySection) ?? {};
      if (input.value) currentDates[activity.key] = input.value;
      else delete currentDates[activity.key];
      setTermRecord(activityDueDatesBySection, currentDates);
      try {
        window.portalStorage.setItem(activityDueDatesStorageKey, JSON.stringify(activityDueDatesBySection));
        gradebookConfigStatus.textContent = `${activity.label} due date saved.`;
        gradebookConfigStatus.dataset.state = "success";
      } catch {
        gradebookConfigStatus.textContent = "The due date could not be saved in this browser.";
        gradebookConfigStatus.dataset.state = "error";
      }
    });
    label.append(name, input);
    activityDeadlineList.append(label);
  }
}

function renderSectionChat() {
  if (!activeSection) return;
  teacherChatMessages.replaceChildren();
  for (const message of sectionChats[activeSection.id] ?? []) {
    const item = document.createElement("li");
    const heading = document.createElement("strong");
    const body = document.createElement("span");
    const time = document.createElement("time");
    heading.textContent = message.sender;
    body.textContent = message.text;
    time.dateTime = message.sentAt;
    time.textContent = new Date(message.sentAt).toLocaleString();
    item.append(heading, body, time);
    teacherChatMessages.append(item);
  }
  teacherChatMessages.scrollTop = teacherChatMessages.scrollHeight;
}

function updateTeacherNotificationPermissionStatus() {
  if (!("Notification" in window)) {
    teacherDeviceNotificationStatus.textContent = "This browser does not support device notifications.";
    teacherEnableNotificationsButton.disabled = true;
    return;
  }
  if (window.location.protocol === "file:") {
    teacherDeviceNotificationStatus.textContent = "Open the portal over HTTPS or localhost and allow notifications in browser site settings.";
    teacherEnableNotificationsButton.disabled = true;
    teacherTestNotificationButton.disabled = true;
    return;
  }
  const permission = Notification.permission;
  if (window.location.protocol !== "file:") teacherDeviceNotificationStatus.textContent = permission === "granted"
    ? "Enabled in this browser. Keep the teacher portal open to receive new chat alerts."
    : permission === "denied"
      ? "Notifications are blocked. Change permission in the browser's site settings."
      : "Not enabled. Allow notifications to receive student chat replies.";
  teacherEnableNotificationsButton.textContent = permission === "granted" ? "Notifications Enabled" : "Enable Notifications";
  teacherEnableNotificationsButton.disabled = permission === "granted" || permission === "denied";
  teacherTestNotificationButton.disabled = permission !== "granted";
}

function updateTeacherCameraPermissionStatus() {
  if (!navigator.mediaDevices?.getUserMedia || !window.isSecureContext) {
    teacherCameraPermissionStatus.textContent = "Camera access requires a supported browser and a secure HTTPS connection.";
    teacherEnableCameraButton.disabled = true;
    return;
  }
  teacherCameraPermissionStatus.textContent = "Not requested. Camera access is used only when you select Start Camera.";
  teacherEnableCameraButton.disabled = false;
}

teacherEnableCameraButton.addEventListener("click", async () => {
  if (!navigator.mediaDevices?.getUserMedia || !window.isSecureContext) {
    updateTeacherCameraPermissionStatus();
    return;
  }
  teacherEnableCameraButton.disabled = true;
  teacherCameraPermissionStatus.textContent = "Waiting for camera permission…";
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    stream.getTracks().forEach((track) => track.stop());
    teacherCameraPermissionStatus.textContent = "Camera permission is enabled. The camera is used only when scanning a student QR code.";
    teacherEnableCameraButton.textContent = "Camera Permission Enabled";
  } catch (error) {
    if (error.name === "NotAllowedError" || error.name === "SecurityError") {
      teacherCameraPermissionStatus.textContent = "Camera access was denied. Allow it in your browser's site settings, then try again.";
    } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
      teacherCameraPermissionStatus.textContent = "No camera was found on this device.";
    } else {
      teacherCameraPermissionStatus.textContent = "The camera could not be opened. Check that it is connected and not in use by another app.";
    }
    teacherEnableCameraButton.disabled = false;
  }
});

async function showTeacherDeviceNotification(id, title, body) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const seen = loadLocalJson(teacherNotificationSeenStorageKey, []);
  if (seen.includes(id) || teacherNotificationsInFlight.has(id)) return;
  teacherNotificationsInFlight.add(id);
  try {
    const registration = await teacherDeviceNotificationRegistration;
    if (registration?.showNotification) {
      await registration.showNotification(title, { body, tag: id, data: { url: window.location.href } });
    } else {
      const notification = new Notification(title, { body, tag: id });
      notification.addEventListener("click", () => {
        window.focus();
        notification.close();
      });
    }
    window.portalStorage.setItem(teacherNotificationSeenStorageKey, JSON.stringify([...seen.slice(-99), id]));
  } catch {
    teacherDeviceNotificationStatus.textContent = "Could not display a notification. Check browser and device permissions.";
  } finally {
    teacherNotificationsInFlight.delete(id);
  }
}

teacherEnableNotificationsButton.addEventListener("click", async () => {
  if (!("Notification" in window)) {
    updateTeacherNotificationPermissionStatus();
    updateTeacherCameraPermissionStatus();
    return;
  }
  try {
    await Notification.requestPermission();
    updateTeacherNotificationPermissionStatus();
  } catch {
    teacherDeviceNotificationStatus.textContent = "Could not request permission. Open this portal over HTTPS and try again.";
  }
});

teacherTestNotificationButton.addEventListener("click", async () => {
  if (!("Notification" in window) || Notification.permission !== "granted") {
    updateTeacherNotificationPermissionStatus();
    return;
  }
  try {
    const registration = await teacherDeviceNotificationRegistration;
    if (registration?.showNotification) {
      await registration.showNotification(`${window.APP_BRANDING.appName} notification test`, {
        body: "Device notifications are working for this teacher portal.",
        tag: `teacher-test-${Date.now()}`,
        data: { url: window.location.href },
      });
    } else {
      new Notification(`${window.APP_BRANDING.appName} notification test`, { body: "Device notifications are working for this teacher portal." });
    }
    teacherDeviceNotificationStatus.textContent = "Test notification sent. Check your device notification area.";
  } catch {
    teacherDeviceNotificationStatus.textContent = "Could not display the test notification. Check browser and device settings.";
  }
});

updateTeacherNotificationPermissionStatus();
updateTeacherCameraPermissionStatus();

teacherChatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = teacherChatMessage.value.trim();
  if (!activeSection || !text) return;
  sectionChats[activeSection.id] ??= [];
  sectionChats[activeSection.id].push({
    sender: teacherSettings.teacherName ?? "Teacher",
    role: "teacher",
    text,
    sentAt: new Date().toISOString(),
  });
  try {
    window.portalStorage.setItem(sectionChatStorageKey, JSON.stringify(sectionChats));
    teacherChatMessage.value = "";
    renderSectionChat();
  } catch {
    gradebookConfigStatus.textContent = "The chat message could not be saved in this browser.";
    gradebookConfigStatus.dataset.state = "error";
  }
});

window.addEventListener("storage", (event) => {
  if (window.portalStorage.eventKey(event) !== sectionChatStorageKey) return;
  let previousChats = {};
  try { previousChats = JSON.parse(event.oldValue ?? "{}"); } catch { previousChats = {}; }
  sectionChats = loadLocalJson(sectionChatStorageKey, {});
  for (const [sectionId, messages] of Object.entries(sectionChats)) {
    if (!sections.some((section) => section.id === sectionId)) continue;
    const previousMessages = previousChats[sectionId] ?? [];
    const previousIds = new Set(previousMessages.map((message) => `${message.sentAt}:${message.sender}:${message.text}`));
    for (const message of messages) {
      if (message.role !== "student" || previousIds.has(`${message.sentAt}:${message.sender}:${message.text}`)) continue;
      showTeacherDeviceNotification(`student-chat:${sectionId}:${message.sentAt}`, `New message from ${message.sender}`, message.text);
    }
  }
  if (activeSection) renderSectionChat();
});

function createGradebookHeader(text, className, options = {}) {
  const cell = document.createElement("th");
  cell.textContent = text;
  cell.scope = options.scope ?? "col";
  if (className) cell.className = className;
  if (options.rowSpan) cell.rowSpan = options.rowSpan;
  if (options.colSpan) cell.colSpan = options.colSpan;
  return cell;
}

function renderGradebookHead(groups) {
  const columnCount = 3 + groups.reduce((total, group) => total + group.activities.length + 3, 0) + 3;
  const groupRow = document.createElement("tr");
  const activityRow = document.createElement("tr");
  groupRow.className = "gradebook-groups";
  activityRow.className = "gradebook-subheads";
  groupRow.append(createGradebookHeader("", "row-number-heading", { rowSpan: 2 }));
  groupRow.append(createGradebookHeader("LRN", "lrn-heading", { rowSpan: 2 }));
  groupRow.append(createGradebookHeader("LEARNERS' NAMES", "learner-heading", { rowSpan: 2 }));

  for (const group of groups) {
    groupRow.append(createGradebookHeader(`${group.label} (${group.weight})`, "", {
      colSpan: group.activities.length + 3,
      scope: "colgroup",
    }));
    for (const activity of group.activities) {
      activityRow.append(createGradebookHeader(activity.label));
    }
    for (const label of ["Total", "PS", "WS"]) {
      activityRow.append(createGradebookHeader(label));
    }
  }

  groupRow.append(createGradebookHeader("Initial Grade", "grade-heading", { rowSpan: 2 }));
  groupRow.append(createGradebookHeader("Term Grade", "grade-heading", { rowSpan: 2 }));
  groupRow.append(createGradebookHeader("Descriptor", "descriptor-heading", { rowSpan: 2 }));
  gradebookHead.replaceChildren(groupRow, activityRow);
  return columnCount;
}

function captureGradebookValues() {
  const values = new Map();
  for (const input of gradebookBody.querySelectorAll("[data-gradebook-cell-key]")) {
    values.set(input.dataset.gradebookCellKey, input.value);
  }
  return values;
}

function createGradebookComputedCell(label, cellKey = "") {
  const cell = document.createElement("td");
  cell.className = "gradebook-computed-cell";
  if (cellKey.endsWith(":descriptor")) cell.classList.add("gradebook-descriptor-cell");
  cell.setAttribute("aria-label", label);
  if (cellKey) cell.dataset.computedGradebookCellKey = cellKey;
  cell.textContent = "—";
  return cell;
}

function formatGrade(value) {
  return Number.isFinite(value) ? value.toFixed(2) : "—";
}

function roundGrade(value) {
  return Number.isFinite(value) ? Math.round((value + Number.EPSILON) * 100) / 100 : NaN;
}

function getGradeDescriptor(termGrade) {
  if (termGrade >= 90) return "Outstanding";
  if (termGrade >= 85) return "Very Satisfactory";
  if (termGrade >= 80) return "Satisfactory";
  if (termGrade >= 75) return "Fairly Satisfactory";
  return "Did Not Meet Expectations";
}

function recalculateGradebook() {
  const inputs = new Map([...gradebookBody.querySelectorAll("[data-gradebook-cell-key]")]
    .map((input) => [input.dataset.gradebookCellKey, input]));
  const computedCells = new Map([...gradebookBody.querySelectorAll("[data-computed-gradebook-cell-key]")]
    .map((cell) => [cell.dataset.computedGradebookCellKey, cell]));
  const groupDefinitions = getGradebookGroups();
  const weights = { ww: assessmentWeights.ww, pt: assessmentWeights.pt, summative: assessmentWeights.qa };
  const groupTotals = {};

  for (const group of groupDefinitions) {
    const highestScores = group.activities.map((activity) => Number(inputs.get(`highest:${activity.key}:${activity.index}`)?.value));
    const highestScoresComplete = highestScores.length > 0 && highestScores.every((score) => Number.isFinite(score) && score > 0);
    const highestTotal = highestScoresComplete ? highestScores.reduce((total, score) => total + score, 0) : NaN;
    groupTotals[group.key] = { highestTotal, highestScoresComplete };
    const totalCell = computedCells.get(`highest:${group.key}:total`);
    if (totalCell) totalCell.textContent = formatGrade(highestTotal);

    for (const row of gradebookBody.querySelectorAll(".gradebook-learner-row")) {
      const learnerKey = row.dataset.learnerKey;
      if (!learnerKey) continue;
      const scoreInputs = group.activities.map((activity) => inputs.get(`${learnerKey}:${activity.key}:${activity.index}`));
      const enteredScores = scoreInputs.map((input) => input?.value.trim() ?? "");
      const hasScores = enteredScores.some((score) => score !== "");
      const numericScores = enteredScores.map((score) => score === "" ? 0 : Number(score));
      const totalScore = numericScores.reduce((total, score) => total + (Number.isFinite(score) ? score : 0), 0);
      const validScores = numericScores.every(Number.isFinite)
        && scoreInputs.every((input, index) => {
          if (!input) return true;
          const highestInput = inputs.get(`highest:${group.activities[index].key}:${group.activities[index].index}`);
          const highestValue = Number(highestInput?.value);
          const scoreIsValid = enteredScores[index] === "" || (Number.isFinite(highestValue) && highestValue > 0 && Number(enteredScores[index]) <= highestValue);
          input.setCustomValidity(scoreIsValid ? "" : "Score cannot exceed the activity's highest possible score.");
          input.classList.toggle("gradebook-input-invalid", !scoreIsValid);
          return scoreIsValid;
        });
      const percentage = highestScoresComplete && hasScores && validScores ? roundGrade((totalScore / highestTotal) * 100) : NaN;
      const weightedScore = Number.isFinite(percentage) ? roundGrade(percentage * weights[group.key] / 100) : NaN;

      for (const [suffix, value] of [["total", totalScore], ["ps", percentage], ["ws", weightedScore]]) {
        const cell = computedCells.get(`${learnerKey}:${group.key}:${suffix}`);
        if (cell) cell.textContent = formatGrade(value);
      }
    }
  }

  for (const row of gradebookBody.querySelectorAll(".gradebook-learner-row")) {
    const learnerKey = row.dataset.learnerKey;
    if (!learnerKey) continue;
    const studentInputs = [...row.querySelectorAll("input[data-gradebook-cell-key]")];
    const hasScores = studentInputs.some((input) => /:(ww|pt|st|te):\d+$/.test(input.dataset.gradebookCellKey) && input.value.trim() !== "");
    const allComponentsReady = groupDefinitions.every((group) => groupTotals[group.key].highestScoresComplete);
    const weightedCells = groupDefinitions.map((group) => computedCells.get(`${learnerKey}:${group.key}:ws`));
    const hasInvalidScore = studentInputs.some((input) => {
      if (!/:(ww|pt|st|te):\d+$/.test(input.dataset.gradebookCellKey) || input.value.trim() === "") return false;
      const key = input.dataset.gradebookCellKey;
      const match = key.match(/:(ww|pt|st|te):(\d+)$/);
      const highest = inputs.get(`highest:${match[1]}:${match[2]}`)?.value;
      return !highest || Number(input.value) > Number(highest);
    });
    const weightedValues = weightedCells.map((cell) => Number(cell?.textContent));
    const canCalculate = hasScores && allComponentsReady && !hasInvalidScore && weightedValues.every(Number.isFinite);
    const initialGrade = canCalculate ? roundGrade(weightedValues.reduce((total, value) => total + value, 0)) : NaN;
    const initialCell = computedCells.get(`${learnerKey}:initial`);
    const termInput = inputs.get(`${learnerKey}:term`);
    const descriptorCell = computedCells.get(`${learnerKey}:descriptor`);
    if (initialCell) initialCell.textContent = formatGrade(initialGrade);
    if (termInput) {
      const termValue = termInput.value.trim();
      const validTermGrade = termValue === "" || (Number.isInteger(Number(termValue)) && Number(termValue) >= 0 && Number(termValue) <= 100);
      termInput.setCustomValidity(validTermGrade ? "" : "Term Grade must be a whole number from 0 to 100.");
      termInput.classList.toggle("gradebook-input-invalid", !validTermGrade);
      if (descriptorCell) descriptorCell.textContent = validTermGrade && termValue !== "" ? getGradeDescriptor(Number(termValue)) : "—";
    }
  }
}

function createGradebookInput(label, cellKey, type = "number", previousValues = new Map()) {
  const cell = document.createElement("td");
  const input = document.createElement("input");

  cell.className = label.toUpperCase().includes("LRN")
    ? "gradebook-lrn-cell"
    : type === "text" ? "gradebook-name-cell" : "gradebook-input-cell";
  input.className = "gradebook-input";
  input.type = type;
  input.dataset.gradebookCellKey = cellKey;
  input.setAttribute("aria-label", label);
  input.value = previousValues.get(cellKey) ?? "";
  input.addEventListener("input", recalculateGradebook);
  if (type === "number") {
    input.min = "0";
    input.step = "any";
    input.inputMode = "decimal";
    if (cellKey.endsWith(":term")) {
      input.max = "100";
      input.step = "1";
      input.placeholder = "Teacher decision";
    }
  }
  cell.append(input);
  return cell;
}

function renderGradebook(previousValues = new Map()) {
  const groups = getGradebookGroups();
  const columnCount = renderGradebookHead(groups);
  gradebookBody.replaceChildren();

  const termRow = document.createElement("tr");
  termRow.className = "gradebook-term-row";
  const termNumberCell = document.createElement("td");
  const termCell = document.createElement("th");
  termCell.colSpan = columnCount - 1;
  termCell.scope = "row";
  termCell.textContent = termNames[activeTerm];
  termRow.append(termNumberCell, termCell);
  gradebookBody.append(termRow);

  const possibleScoreRow = document.createElement("tr");
  possibleScoreRow.className = "highest-score-row";
  const scoreNumberCell = document.createElement("td");
  const scoreLabelCell = document.createElement("th");
  scoreLabelCell.scope = "row";
  scoreLabelCell.textContent = "HIGHEST POSSIBLE SCORE";
  possibleScoreRow.append(scoreNumberCell, scoreLabelCell);

  for (const group of groups) {
    for (const activity of group.activities) {
      possibleScoreRow.append(createGradebookInput(
        `${activity.label} highest possible score`,
        `highest:${activity.key}:${activity.index}`,
        "number",
        previousValues,
      ));
    }
    possibleScoreRow.append(createGradebookComputedCell(
      `${group.label} total highest possible score`,
      `highest:${group.key}:total`,
    ));
    for (const [label, value] of [["PS", "100.00"], ["WS", group.weight]]) {
      const cell = document.createElement("td");
      cell.textContent = value;
      cell.setAttribute("aria-label", `${group.label} ${label}: ${value}`);
      possibleScoreRow.append(cell);
    }
  }

  possibleScoreRow.append(createGradebookComputedCell("Highest possible initial grade"));
  possibleScoreRow.append(createGradebookComputedCell("Highest possible term grade"));
  possibleScoreRow.append(createGradebookComputedCell("Term grade descriptor"));
  gradebookBody.append(possibleScoreRow);

  for (const gender of ["MALE", "FEMALE"]) {
    const genderRow = document.createElement("tr");
    genderRow.className = "gradebook-gender-row";
    const genderCell = document.createElement("th");
    genderCell.colSpan = columnCount;
    genderCell.scope = "rowgroup";
    genderCell.textContent = gender;
    genderRow.append(genderCell);
    gradebookBody.append(genderRow);

    const genderStudents = getSectionStudents().filter((student) => normalizeGender(student.gender) === gender);
    const visibleRows = Math.max(genderStudents.length, 1);
    for (let rowNumber = 1; rowNumber <= visibleRows; rowNumber += 1) {
      const student = genderStudents[rowNumber - 1];
      const learnerKey = student ? `learner:${student.lrn}` : `learner:${gender}:${rowNumber}`;
      const row = document.createElement("tr");
      row.className = "gradebook-learner-row";
      row.dataset.learnerKey = learnerKey;
      const numberCell = document.createElement("td");
      numberCell.className = "gradebook-row-number";
      numberCell.textContent = rowNumber;
      row.append(numberCell);

      const nameInputCell = createGradebookInput(
        `${gender} learner ${rowNumber} name`,
        `${learnerKey}:name`,
        "text",
        previousValues,
      );
      const lrnInputCell = createGradebookInput(
        `${gender} learner ${rowNumber} LRN`,
        `${learnerKey}:lrn`,
        "text",
        previousValues,
      );
      nameInputCell.firstElementChild.value = student?.name ?? nameInputCell.firstElementChild.value;
      lrnInputCell.firstElementChild.value = student?.lrn ?? lrnInputCell.firstElementChild.value;
      row.append(lrnInputCell, nameInputCell);
      for (const group of groups) {
        for (const activity of group.activities) {
          row.append(createGradebookInput(
            `${gender} learner ${rowNumber}, ${activity.label}`,
            `${learnerKey}:${activity.key}:${activity.index}`,
            "number",
            previousValues,
          ));
        }
        row.append(createGradebookComputedCell(
          `${gender} learner ${rowNumber}, ${group.label} total`,
          `${learnerKey}:${group.key}:total`,
        ));
        row.append(createGradebookComputedCell(
          `${gender} learner ${rowNumber}, ${group.label} percentage score`,
          `${learnerKey}:${group.key}:ps`,
        ));
        row.append(createGradebookComputedCell(
          `${gender} learner ${rowNumber}, ${group.label} weighted score`,
          `${learnerKey}:${group.key}:ws`,
        ));
      }
      row.append(createGradebookComputedCell(
        `${gender} learner ${rowNumber}, initial grade`,
        `${learnerKey}:initial`,
      ));
      row.append(createGradebookInput(
        `${gender} learner ${rowNumber}, teacher-decided term grade`,
        `${learnerKey}:term`,
        "number",
        previousValues,
      ));
      row.append(createGradebookComputedCell(
        `${gender} learner ${rowNumber}, term grade descriptor`,
        `${learnerKey}:descriptor`,
      ));
      gradebookBody.append(row);
    }
  }
  recalculateGradebook();
}

function saveGradebook() {
  if (!activeSectionKey) return;
  const savedGradebook = {
    subject: gradebookSubject.value,
    teacher: gradebookTeacher.value,
    printMetadata: getPrintMetadata(),
    values: Object.fromEntries(captureGradebookValues()),
  };

  try {
    persistTermGradebook(savedGradebook);
    gradebookConfigStatus.textContent = "";
  } catch {
    gradebookConfigStatus.textContent = "The gradebook could not be saved in this browser.";
    gradebookConfigStatus.dataset.state = "error";
  }
}

gradebookBody.addEventListener("input", saveGradebook);
gradebookSubject.addEventListener("input", saveGradebook);
gradebookTeacher.addEventListener("input", saveGradebook);

function updateActivityCount(key, input) {
  const nextCount = Number(input.value);
  if (!Number.isInteger(nextCount) || nextCount < 1 || nextCount > 20) {
    input.value = activityCounts[key];
    gradebookConfigStatus.textContent = "Choose a count from 1 to 20.";
    gradebookConfigStatus.dataset.state = "error";
    return;
  }

  const previousValues = captureGradebookValues();
  activityCounts[key] = nextCount;
  input.value = nextCount;
  if (saveActivityCounts()) {
    gradebookConfigStatus.textContent = `${key.toUpperCase()} activity count saved for this section.`;
    gradebookConfigStatus.dataset.state = "success";
  }
  renderGradebook(previousValues);
  saveGradebook();
  input.focus();
}

for (const [key, input] of Object.entries(activityCountInputs)) {
  input.addEventListener("change", () => updateActivityCount(key, input));
}

function updateAssessmentWeights() {
  const nextWeights = Object.fromEntries(Object.entries(assessmentWeightInputs).map(([key, input]) => [key, Number(input.value)]));
  const weights = Object.values(nextWeights);
  const previousValues = captureGradebookValues();
  if (!weights.every((weight) => Number.isFinite(weight) && weight >= 0 && weight <= 100)) {
    gradebookConfigStatus.textContent = "Enter each weight from 0 to 100.";
    gradebookConfigStatus.dataset.state = "error";
    return;
  }

  const total = weights.reduce((sum, weight) => sum + weight, 0);
  if (Math.abs(total - 100) >= 0.001) {
    gradebookConfigStatus.textContent = `Total weight: ${total}%. The total must be exactly 100% before it can be saved.`;
    gradebookConfigStatus.dataset.state = "error";
    return;
  }

  assessmentWeights = nextWeights;
  renderGradebook(previousValues);
  setTermRecord(assessmentWeightsBySection, { ...assessmentWeights });
  try {
    window.portalStorage.setItem(gradebookWeightsStorageKey, JSON.stringify(assessmentWeightsBySection));
    gradebookConfigStatus.textContent = "Assessment weights saved for this section.";
    gradebookConfigStatus.dataset.state = "success";
  } catch {
    gradebookConfigStatus.textContent = "The assessment weights could not be saved in this browser.";
    gradebookConfigStatus.dataset.state = "error";
  }
}

for (const input of Object.values(assessmentWeightInputs)) {
  input.addEventListener("input", updateAssessmentWeights);
}

function removeSection(sectionToRemove) {
  const confirmed = window.confirm(`Remove Grade ${sectionToRemove.grade} ${sectionToRemove.name}?`);
  if (!confirmed) return;

  const previousSections = sections;
  sections = sections.filter((section) =>
    section.grade !== sectionToRemove.grade || section.name !== sectionToRemove.name,
  );

  if (!saveSections()) {
    sections = previousSections;
    return;
  }

  sectionStatus.textContent = `Removed Grade ${sectionToRemove.grade} ${sectionToRemove.name}.`;
  sectionStatus.dataset.state = "success";
  renderSections();
}

function applyTeacherSettings() {
  settingsTeacherName.value = teacherSettings.teacherName ?? settingsTeacherName.value;
  settingsSchoolYear.value = teacherSettings.schoolYear ?? "";
  settingsCameraReminder.checked = teacherSettings.cameraReminder !== false;
  settingsCompactTable.checked = teacherSettings.compactTable === true;
  settingsDarkMode.checked = window.portalStorage.getItem(themePreferenceStorageKey) === "dark";
  document.querySelector(".teacher-identity strong").textContent = settingsTeacherName.value;
  document.querySelector(".teacher-avatar").textContent = settingsTeacherName.value
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  document.body.classList.toggle("compact-gradebook", settingsCompactTable.checked);
  document.body.classList.toggle("dark-mode", settingsDarkMode.checked);
}

settingsDarkMode.addEventListener("change", () => {
  window.portalStorage.setItem(themePreferenceStorageKey, settingsDarkMode.checked ? "dark" : "light");
  document.body.classList.toggle("dark-mode", settingsDarkMode.checked);
});

window.addEventListener("storage", (event) => {
  if (window.portalStorage.eventKey(event) !== themePreferenceStorageKey) return;
  const isDark = event.newValue === "dark";
  settingsDarkMode.checked = isDark;
  document.body.classList.toggle("dark-mode", isDark);
});

function openSettings() {
  showTeacherView(settingsView);
  settingsTitle.focus();
}

applyTeacherSettings();
headerSettingsButton.addEventListener("click", openSettings);
backToSettingsDashboard.addEventListener("click", () => {
  goBackTeacherView();
  headerSettingsButton.focus();
});

settingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  teacherSettings = {
    teacherName: settingsTeacherName.value.trim() || "Ms. Reyes",
    schoolYear: settingsSchoolYear.value.trim(),
    cameraReminder: settingsCameraReminder.checked,
    compactTable: settingsCompactTable.checked,
  };
  window.portalStorage.setItem(settingsStorageKey, JSON.stringify(teacherSettings));
  applyTeacherSettings();
  settingsStatus.textContent = "Settings saved.";
  settingsStatus.dataset.state = "success";
});

logoutButton.addEventListener("click", async () => {
  if (!window.portalStorage.isDemoMode && window.portalAuth) {
    await window.portalAuth.auth.signOut();
  }
  window.portalStorage.setItem("eapihs-local-session", "signed-out");
  window.location.href = "index.html";
});

function openSectionEvidence() {
  if (!activeSection) return;
  showTeacherView(evidenceView);
  evidenceTitle.focus();
  populateEvidenceSections(activeSection);
  populateEvidenceStudents();
  renderEvidenceRecords();
}

if (openSectionEvidenceButton) {
  openSectionEvidenceButton.addEventListener("click", openSectionEvidence);
}

backToEvidenceDashboard.addEventListener("click", () => {
  const previousView = goBackTeacherView();
  if (previousView === sectionDashboardView) sectionDashboardTitle.focus();
  else openSectionsButton.focus();
});

function populateEvidenceSections(selectedSection = null) {
  evidenceSection.replaceChildren();
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select section";
  evidenceSection.append(placeholder);

  for (const section of sections) {
    ensureSectionId(section);
    const option = document.createElement("option");
    option.value = section.id;
    option.textContent = `Grade ${section.grade} - ${section.name}`;
    evidenceSection.append(option);
  }
  evidenceSection.value = selectedSection?.id ?? (activeSection?.id ?? "");
  evidenceSection.disabled = Boolean(selectedSection);
}

function populateEvidenceStudents() {
  evidenceStudent.replaceChildren();
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select student";
  evidenceStudent.append(placeholder);
  evidenceStudent.disabled = !evidenceSection.value;

  for (const student of (enrollments[evidenceSection.value] ?? []).filter((entry) => entry.status === "added")) {
    const option = document.createElement("option");
    option.value = student.lrn;
    option.textContent = `${student.name} · ${student.lrn}`;
    evidenceStudent.append(option);
  }
}

evidenceSection.addEventListener("change", populateEvidenceStudents);

evidencePhoto.addEventListener("change", () => {
  const file = evidencePhoto.files?.[0];
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    evidencePhotoData = String(reader.result ?? "");
    evidencePreview.src = evidencePhotoData;
    evidencePreview.hidden = false;
  });
  reader.readAsDataURL(file);
});

function renderEvidenceRecords() {
  evidenceRecordList.replaceChildren();
  for (const record of evidenceRecords.slice().reverse()) {
    const item = document.createElement("li");
    const title = document.createElement("strong");
    const details = document.createElement("span");
    title.textContent = `${record.category}${record.number} · ${record.score}/${record.maxScore}`;
    details.textContent = `${record.studentName} · ${record.studentLrn} · Grade ${record.grade} ${record.sectionName}`;
    item.append(title, details);
    if (record.photo) {
      const image = document.createElement("img");
      image.src = record.photo;
      image.alt = `${record.studentName} evidence`;
      item.append(image);
    }
    evidenceRecordList.append(item);
  }
}

function getEvidenceActivityKey(category, activityNumber) {
  const categoryKeys = { WW: "ww", PT: "pt", ST: "st", TE: "te" };
  const key = categoryKeys[category];
  if (!key) return null;
  return { key, index: Number(activityNumber) - 1 };
}

function saveEvidenceScoreToGradebook(section, student, category, activityNumber, maxScore, score) {
  const activity = getEvidenceActivityKey(category, activityNumber);
  const sectionKey = getSectionKey(section);
  const countsBySection = loadActivityCounts();
  const counts = normalizeActivityCounts(getTermRecord(countsBySection, sectionKey, activeTerm));
  if (!activity || activity.index < 0 || activity.index >= counts[activity.key]) {
    throw new Error(`Add ${category}${activityNumber} to the section activity count before saving its score.`);
  }

  const savedGradebooks = loadLocalJson(gradebookStorageKey, {});
  const previousGradebook = getTermGradebook(sectionKey, activeTerm);
  const values = { ...(previousGradebook.values ?? {}) };
  const learnerKey = `learner:${student.lrn}`;
  values[`highest:${activity.key}:${activity.index}`] = String(maxScore);
  values[`${learnerKey}:${activity.key}:${activity.index}`] = String(score);
  persistTermGradebook({ ...previousGradebook, values }, sectionKey, activeTerm);

  if (activeSection?.id === section.id) {
    const highestInput = gradebookBody.querySelector(`[data-gradebook-cell-key="highest:${activity.key}:${activity.index}"]`);
    const scoreInput = gradebookBody.querySelector(`[data-gradebook-cell-key="${learnerKey}:${activity.key}:${activity.index}"]`);
    if (highestInput) highestInput.value = String(maxScore);
    if (scoreInput) scoreInput.value = String(score);
    recalculateGradebook();
    saveGradebook();
  }
}

evidenceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!evidenceForm.reportValidity()) return;
  if (!evidencePhotoData) {
    evidenceStatus.dataset.state = "error";
    evidenceStatus.textContent = "Take or choose a photo first.";
    return;
  }

  const maxScore = Number(evidenceMaxScore.value);
  const awardedScore = Number(evidenceAwardedScore.value);
  if (awardedScore > maxScore || !Number.isFinite(awardedScore) || !Number.isFinite(maxScore)) {
    evidenceStatus.dataset.state = "error";
    evidenceStatus.textContent = "Teacher score cannot be higher than the highest score.";
    return;
  }

  const section = sections.find((entry) => entry.id === evidenceSection.value);
  const student = (enrollments[evidenceSection.value] ?? []).find((entry) => entry.lrn === evidenceStudent.value);
  if (!section || !student) {
    evidenceStatus.dataset.state = "error";
    evidenceStatus.textContent = "Select a valid section and enrolled student.";
    return;
  }

  const gradebookStorageBeforeEvidence = window.portalStorage.getItem(gradebookStorageKey);
  const activity = getEvidenceActivityKey(evidenceCategory.value, evidenceNumber.value);
  const gradebookActivityInputs = activeSection?.id === section.id && activity
    ? {
      highest: gradebookBody.querySelector(`[data-gradebook-cell-key="highest:${activity.key}:${activity.index}"]`),
      score: gradebookBody.querySelector(`[data-gradebook-cell-key="learner:${student.lrn}:${activity.key}:${activity.index}"]`),
    }
    : null;
  const gradebookActivityInputsBeforeEvidence = gradebookActivityInputs
    ? { highest: gradebookActivityInputs.highest?.value, score: gradebookActivityInputs.score?.value }
    : null;

  try {
    saveEvidenceScoreToGradebook(section, student, evidenceCategory.value, evidenceNumber.value, maxScore, awardedScore);
  } catch (error) {
    evidenceStatus.dataset.state = "error";
    evidenceStatus.textContent = error.message || "Could not save the score to the Class Record.";
    return;
  }

  evidenceRecords.push({
    sectionId: section.id,
    grade: section.grade,
    sectionName: section.name,
    studentLrn: student.lrn,
    studentName: student.name,
    category: evidenceCategory.value,
    number: evidenceNumber.value,
    maxScore,
    score: awardedScore,
    photo: evidencePhotoData,
    savedAt: new Date().toISOString(),
  });

  try {
    window.portalStorage.setItem(evidenceStorageKey, JSON.stringify(evidenceRecords));
    evidenceStatus.dataset.state = "success";
    evidenceStatus.textContent = `${evidenceCategory.value}${evidenceNumber.value} score copied to the Class Record. The score remains editable there.`;
    evidenceForm.reset();
    evidenceNumber.value = "1";
    evidenceMaxScore.value = "10";
    evidencePhotoData = "";
    evidencePreview.hidden = true;
    renderEvidenceRecords();
    populateEvidenceStudents();
  } catch {
    evidenceRecords.pop();
    if (gradebookStorageBeforeEvidence === null) window.portalStorage.removeItem(gradebookStorageKey);
    else window.portalStorage.setItem(gradebookStorageKey, gradebookStorageBeforeEvidence);
    if (gradebookActivityInputs && gradebookActivityInputsBeforeEvidence) {
      if (gradebookActivityInputs.highest) gradebookActivityInputs.highest.value = gradebookActivityInputsBeforeEvidence.highest ?? "";
      if (gradebookActivityInputs.score) gradebookActivityInputs.score.value = gradebookActivityInputsBeforeEvidence.score ?? "";
      recalculateGradebook();
    }
    evidenceStatus.dataset.state = "error";
    evidenceStatus.textContent = "Photo storage is too large for this browser.";
  }
});

openSectionsButton.addEventListener("click", () => {
  showTeacherView(sectionsView);
  teacherMain.classList.add("sections-open");
  sectionStatus.textContent = "";
  renderSections();
  sectionsTitle.focus();
});

backButton.addEventListener("click", () => {
  goBackTeacherView();
  teacherMain.classList.remove("sections-open");
  openSectionsButton.focus();
});

backToSectionsButton.addEventListener("click", () => {
  goBackTeacherView();
  teacherMain.classList.remove("section-dashboard-open");
  sectionsTitle.focus();
});

addSectionButton.addEventListener("click", () => {
  sectionForm.reset();
  sectionDialog.showModal();
  sectionGrade.focus();
});

function renderSectionEnrollments() {
  sectionEnrollmentList.replaceChildren();
  if (!activeSection) return;
  const students = [...(enrollments[activeSection.id] ?? [])].sort((first, second) =>
    getSurname(first.name).localeCompare(getSurname(second.name), "en", { sensitivity: "base" }),
  );
  if (students.length === 0) {
    const item = document.createElement("li");
    item.className = "section-enrollment-empty";
    item.textContent = "No students imported in this section yet.";
    sectionEnrollmentList.append(item);
    return;
  }
  for (const student of students) {
    const status = student.status ?? "added";
    const item = document.createElement("li");
    const name = document.createElement("strong");
    const lrn = document.createElement("span");
    const badge = document.createElement("span");
    const actions = document.createElement("div");
    name.textContent = student.name;
    lrn.textContent = student.lrn;
    badge.className = `student-status-badge student-status-${status}`;
    badge.textContent = status === "not-added" ? "Not Added" : status === "kicked" ? "Kicked Out" : status === "locked" ? "Locked" : "Added";
    actions.className = "student-roster-actions";

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.textContent = status === "added" ? "Added" : "Add";
    addButton.disabled = status === "added";
    addButton.addEventListener("click", () => updateStudentStatus(student.lrn, "added"));

    const kickButton = document.createElement("button");
    kickButton.type = "button";
    kickButton.textContent = "Kick Out";
    kickButton.addEventListener("click", () => updateStudentStatus(student.lrn, "kicked"));

    const lockButton = document.createElement("button");
    lockButton.type = "button";
    lockButton.textContent = status === "locked" ? "Locked" : "Lock";
    lockButton.addEventListener("click", () => updateStudentStatus(student.lrn, "locked"));

    actions.append(addButton, kickButton, lockButton);
    item.append(name, lrn, badge, actions);
    sectionEnrollmentList.append(item);
  }
}

function updateStudentStatus(lrn, status) {
  const student = (enrollments[activeSection.id] ?? []).find((entry) => entry.lrn === lrn);
  if (!student) return;
  student.status = status;
  window.portalStorage.setItem(enrollmentStorageKey, JSON.stringify(enrollments));
  studentEnrollmentStatus.dataset.state = "success";
  studentEnrollmentStatus.textContent = `${student.name} is now ${status === "not-added" ? "Not Added" : status === "kicked" ? "Kicked Out" : status === "locked" ? "Locked" : "Added"}.`;
  renderSectionEnrollments();
  renderGradebook();
}

addSectionStudentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!activeSection) return;
  const code = sectionStudentCode.value.trim().toUpperCase();
  const lrn = code.startsWith("EAPIHS-LRN-") ? code.replace("EAPIHS-LRN-", "") : code;
  const currentStudent = loadLocalJson(currentStudentStorageKey, null);
  enrollments[activeSection.id] ??= [];
  let knownStudent = enrollments[activeSection.id].find((entry) => entry.lrn === lrn);
  if (!knownStudent && currentStudent && String(currentStudent.lrn).replace(/\D/g, "") === lrn) {
    knownStudent = { lrn, name: currentStudent.name, gender: "MALE", source: "teacher" };
    enrollments[activeSection.id].push(knownStudent);
  }
  if (!/^\d{12}$/.test(lrn) || !knownStudent) {
    studentEnrollmentStatus.dataset.state = "error";
    studentEnrollmentStatus.textContent = "Student LRN not found in the section class list.";
    return;
  }

  knownStudent.status = "added";
  window.portalStorage.setItem(enrollmentStorageKey, JSON.stringify(enrollments));
  studentEnrollmentStatus.dataset.state = "success";
  studentEnrollmentStatus.textContent = `${knownStudent.name} was added to Grade ${activeSection.grade} ${activeSection.name}.`;
  renderSectionEnrollments();
  renderGradebook();
  sectionStudentCode.value = "";
  renderSectionEnrollments();
});

document.querySelector("#cancel-section").addEventListener("click", () => {
  sectionDialog.close();
  addSectionButton.focus();
});

sectionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!sectionForm.reportValidity()) return;

  const name = sectionName.value.trim();
  const grade = sectionGrade.value;
  const alreadyExists = sections.some((section) =>
    section.grade === grade && section.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
  );

  if (alreadyExists) {
    sectionStatus.textContent = "A section with this grade level and name already exists.";
    sectionStatus.dataset.state = "error";
    sectionDialog.close();
    sectionsTitle.focus();
    return;
  }

  const newSection = { grade, name };
  ensureSectionId(newSection);
  sections.unshift(newSection);
  if (!saveSections()) {
    sections.shift();
    return;
  }

  sectionStatus.textContent = "The section was added and saved.";
  sectionStatus.dataset.state = "success";
  renderSections();
  sectionDialog.close();
  sectionsTitle.focus();
});

renderSections();

if (window.portalStorage.getItem(teacherWelcomeSeenStorageKey) === "true") {
  showTeacherDashboard();
}

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
      if (token.claims.role !== "teacher") {
        await window.portalAuth.auth.signOut();
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