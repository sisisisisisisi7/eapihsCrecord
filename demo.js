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
const demoBackupStorageKey = "eapihs-demo-data-backup";
const demoDataStorageKeys = [
  sectionsStorageKey,
  activityCountsStorageKey,
  gradebookStorageKey,
  gradebookWeightsStorageKey,
  activityDueDatesStorageKey,
  sectionChatStorageKey,
  enrollmentStorageKey,
  importedRosterStorageKey,
  currentStudentStorageKey,
  evidenceStorageKey,
];

const loadDemoDataButton = document.querySelector("#load-demo-data");
const removeDemoDataButton = document.querySelector("#remove-demo-data");
const demoDataStatus = document.querySelector("#demo-data-status");

function setDemoControls(active) {
  loadDemoDataButton.disabled = active;
  removeDemoDataButton.disabled = !active;
}

function buildDemoData() {
  const section = { grade: "7", name: "DEMO - Rizal", id: "DEMO-GRADE-7-RIZAL" };
  const sectionKey = JSON.stringify([String(section.grade), section.name]);
  const today = new Date();
  const dueYesterday = new Date(today.getTime() - 86400000).toISOString().slice(0, 10);
  const dueTomorrow = new Date(today.getTime() + 86400000).toISOString().slice(0, 10);
  const sampleImage = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420"><rect width="640" height="420" fill="#edf1ef"/><rect x="42" y="32" width="556" height="356" rx="10" fill="#fff" stroke="#123d30" stroke-width="4"/><text x="320" y="112" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="700" fill="#123d30">DEMO STUDENT WORK</text><text x="82" y="190" font-family="sans-serif" font-size="24" fill="#29352f">1. Sample written response</text><path d="M82 216h455M82 254h430M82 292h380" stroke="#8b9991" stroke-width="5" stroke-linecap="round"/><text x="82" y="352" font-family="sans-serif" font-size="18" fill="#7f2924">Sample evidence image only</text></svg>')}`;
  const values = {
    "highest:ww:0": "30", "highest:ww:1": "30", "highest:ww:2": "20",
    "highest:pt:0": "50", "highest:pt:1": "50",
    "highest:st:0": "50", "highest:te:0": "50",
  };
  const students = [
    { name: "Dela Cruz, Ana Marie", lrn: "123456789012", gender: "FEMALE", source: "demo", status: "added" },
    { name: "Santos, Miguel Jose", lrn: "123456789013", gender: "MALE", source: "demo", status: "added" },
    { name: "Reyes, Carla Mae", lrn: "123456789014", gender: "FEMALE", source: "demo", status: "added" },
  ];
  const sampleScores = {
    "123456789012": { "ww:0": "24", "ww:1": "27", "pt:0": "42", "pt:1": "46", "st:0": "40", "te:0": "44" },
    "123456789013": { "ww:0": "26", "ww:1": "25", "ww:2": "17", "pt:0": "45", "pt:1": "43", "st:0": "38", "te:0": "41" },
    "123456789014": { "ww:0": "28", "ww:2": "18", "pt:0": "48", "st:0": "46", "te:0": "47" },
  };
  const sampleFinalGrades = { "123456789012": "90", "123456789013": "88", "123456789014": "78" };

  for (const student of students) {
    values[`learner:${student.lrn}:name`] = student.name;
    values[`learner:${student.lrn}:lrn`] = student.lrn;
    values[`learner:${student.lrn}:term`] = sampleFinalGrades[student.lrn];
    for (const [activityKey, score] of Object.entries(sampleScores[student.lrn])) {
      values[`learner:${student.lrn}:${activityKey}`] = score;
    }
  }

  const termKey = (term) => JSON.stringify([sectionKey, term]);
  const payload = {
    [sectionsStorageKey]: [section],
    [activityCountsStorageKey]: { [termKey(1)]: { ww: 3, pt: 2, st: 1, te: 1 } },
    [gradebookStorageKey]: {
      [termKey(1)]: { subject: "Science", teacher: "Ms. Reyes", values },
      [termKey(2)]: { subject: "Science", teacher: "Ms. Reyes", values: {} },
      [termKey(3)]: { subject: "Science", teacher: "Ms. Reyes", values: {} },
    },
    [gradebookWeightsStorageKey]: { [termKey(1)]: { ww: 20, pt: 50, qa: 30 } },
    [activityDueDatesStorageKey]: { [termKey(1)]: { "ww:2": dueYesterday, "pt:1": dueTomorrow } },
    [sectionChatStorageKey]: {
      [section.id]: [
        { sender: "Ms. Reyes", role: "teacher", text: "Welcome to our demo section. WW3 is overdue; please check your requirements.", sentAt: new Date(today.getTime() - 3600000).toISOString() },
        { sender: "Dela Cruz, Ana Marie", role: "student", text: "Noted po, Ma'am. I will submit it today.", sentAt: new Date(today.getTime() - 1800000).toISOString() },
      ],
    },
    [enrollmentStorageKey]: { [section.id]: students },
    [importedRosterStorageKey]: { [section.id]: students.map((student) => ({ ...student })) },
    [currentStudentStorageKey]: { name: students[0].name, lrn: students[0].lrn, email: "ana.demo@example.test", qrValue: `EAPIHS-LRN-${students[0].lrn}` },
    [evidenceStorageKey]: [{
      sectionId: section.id,
      grade: section.grade,
      sectionName: section.name,
      studentLrn: students[0].lrn,
      studentName: students[0].name,
      category: "WW",
      number: "1",
      maxScore: 30,
      score: 24,
      photo: sampleImage,
      savedAt: new Date(today.getTime() - 7200000).toISOString(),
    }],
  };
  return { payload };
}

function restoreBackup(backup) {
  for (const key of demoDataStorageKeys) {
    const value = backup[key];
    if (value === null || value === undefined) window.portalStorage.removeItem(key);
    else window.portalStorage.setItem(key, value);
  }
  window.portalStorage.removeItem(demoBackupStorageKey);
}

function loadDemo() {
  if (window.portalStorage.getItem(demoBackupStorageKey)) return;
  const backup = Object.fromEntries(demoDataStorageKeys.map((key) => [key, window.portalStorage.getItem(key)]));
  const { payload } = buildDemoData();
  try {
    window.portalStorage.setItem(demoBackupStorageKey, JSON.stringify(backup));
    for (const key of demoDataStorageKeys) window.portalStorage.setItem(key, JSON.stringify(payload[key] ?? []));
    demoDataStatus.dataset.state = "success";
    demoDataStatus.textContent = "Demo loaded. Open Teacher Portal and Student Portal in separate tabs to explore. Previous sandbox data is backed up.";
    setDemoControls(true);
  } catch {
    try { restoreBackup(backup); } catch { window.portalStorage.removeItem(demoBackupStorageKey); }
    demoDataStatus.dataset.state = "error";
    demoDataStatus.textContent = "Could not load demo data. No existing data was intentionally changed.";
  }
}

function removeDemo() {
  const encodedBackup = window.portalStorage.getItem(demoBackupStorageKey);
  if (!encodedBackup) return;
  try {
    restoreBackup(JSON.parse(encodedBackup));
    demoDataStatus.dataset.state = "success";
    demoDataStatus.textContent = "Demo removed. The previous sandbox data has been restored.";
    setDemoControls(false);
  } catch {
    demoDataStatus.dataset.state = "error";
    demoDataStatus.textContent = "Could not restore the saved data. Remove Demo remains available for retry.";
    setDemoControls(true);
  }
}

loadDemoDataButton.addEventListener("click", loadDemo);
removeDemoDataButton.addEventListener("click", removeDemo);
const demoIsActive = Boolean(window.portalStorage.getItem(demoBackupStorageKey));
setDemoControls(demoIsActive);
if (demoIsActive) demoDataStatus.textContent = "Demo data is active. Remove Demo restores the previous sandbox data.";
