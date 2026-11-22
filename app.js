/* ==========================================================================
   Arpit Kumar Gupta — Editorial Pastel Portfolio & Calm Wave Animation
   ========================================================================== */

const EMAIL = "arpitkumar81008@gmail.com";

const PROJECTS = [
  {
    id: "meridian-proxy",
    title: "Meridian × Proxy",
    category: "web",
    badge: "1st Place · Unprompted",
    warmBadge: true,
    year: "2026",
    summary:
      "Dual-product web platform built to reduce remote timezone burnout by rotating meetings fairly and handling unavoidable calls asynchronously.",
    preview: { type: "iframe", src: "./assets/meridian-demo/index.html", alt: "Meridian x Proxy interactive web preview" },
    leadMetric: "1st Place · Multi-View Interactive Product",
    stack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Python"],
    links: [
      {
        label: "Live Demo",
        url: "./assets/meridian-demo/index.html",
        primary: true,
      },
      {
        label: "GitHub Profile",
        url: "https://github.com/arpitkumar81008-cmd",
        primary: false,
      },
    ],
    metrics: [
      { label: "Result", value: "1st Place" },
      { label: "Modules", value: "Meridian + Proxy" },
      { label: "Workflow", value: "Briefing → Summary" },
    ],
    architecture: [
      "Global Team Schedule ──▶ Meridian Fairness Engine (Rotation)",
      "                                 │",
      "                                 ▼ (Unavoidable Off-Hours Call)",
      "                   Proxy Pre-Meeting Briefing ──▶ Async Attendance",
      "                                 │",
      "                                 ▼",
      "              Structured Decision Summary & Follow-Up Dashboard",
    ].join("\n"),
    highlights: [
      "Meridian tracks timezone burden across distributed teams and rotates recurring calls so no region consistently pays the late-night cost.",
      "Proxy lets engineers submit context ahead of unavoidable meetings and wake up to concise decision summaries and action items.",
      "Built as a cohesive multi-screen interactive demo (Landing, Dashboard, Briefing, Meeting, Reschedule, Summary) and won 1st Place at Unprompted.",
    ],
  },
  {
    id: "campus-water-conservation",
    title: "Campus Water Leak & Conservation",
    category: "hardware",
    badge: "1st Place · Problem Protocol",
    warmBadge: true,
    year: "2026",
    summary:
      "Campus-scale water conservation and leak detection system designed to flag pipeline anomalies early and minimize institutional water wastage.",
    leadMetric: "1st Place · Real-Time Leak Alert Workflow",
    stack: ["Systems Design", "IoT Monitoring", "Python", "C++"],
    links: [
      {
        label: "GitHub Profile",
        url: "https://github.com/arpitkumar81008-cmd",
        primary: true,
      },
    ],
    metrics: [
      { label: "Result", value: "1st Place" },
      { label: "Focus", value: "Campus Sustainability" },
      { label: "Detection", value: "Zone-Level Alerts" },
    ],
    architecture: [
      "Campus Supply Lines ──▶ Zone Flow & Pressure Monitoring",
      "                                 │",
      "                                 ▼ (Anomaly / Night-Flow Spike)",
      "                    Leak Classification & Location Pinpointing",
      "                                 │",
      "                                 ▼",
      "           Maintenance Alert & Conservation Usage Dashboard",
    ].join("\n"),
    highlights: [
      "Addressed real-world campus water wastage by monitoring zone-level consumption baselines and flagging abnormal off-hour flow spikes.",
      "Designed an actionable maintenance dispatch workflow to locate leaks rapidly before minor pipe failures turn into sustained water loss.",
      "Presented and won 1st Place at The Problem Protocol hackathon.",
    ],
  },
  {
    id: "sih-voice-assistant",
    title: "Edge AI Voice Assistant",
    category: "hardware",
    badge: "6th Place · SIH 2026",
    warmBadge: false,
    year: "2026",
    summary:
      "Low-latency ESP32-S3 hardware voice assistant streaming 16kHz I2S audio to a local FastAPI, Silero VAD, and Faster-Whisper inference server.",
    preview: { type: "image", src: "./assets/sih-voice-assistant.png", alt: "ESP32-S3 and INMP441 hardware schematic" },
    leadMetric: "Latency: ~4.5s → ~1.5s · 921,600 Baud",
    stack: ["C++", "ESP32-S3", "FreeRTOS", "Python", "FastAPI", "Faster-Whisper", "Silero VAD"],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/arpitkumar81008-cmd/SIH-ESP32-S3-Voice-Assistant",
        primary: true,
      },
    ],
    metrics: [
      { label: "Latency", value: "~1.5s (-66%)" },
      { label: "Serial Rate", value: "921,600 baud" },
      { label: "SIH 2026", value: "6th Place" },
    ],
    architecture: [
      "INMP441 MEMS Mic (I2S) ──▶ ESP32-S3 Core 0 (DMA + DC Filter)",
      "                                  │",
      "                                  ▼ (3s FIFO Ring Buffer)",
      "                      ESP32-S3 Core 1 (Framing + Status LED)",
      "                                  │ (USB Serial / WebSocket)",
      "                                  ▼",
      "           FastAPI ──▶ Silero VAD ──▶ Faster-Whisper ──▶ SSE Dashboard",
    ].join("\n"),
    highlights: [
      "Partitioned ESP32-S3 dual-core FreeRTOS firmware so Core 0 handles uninterrupted I2S DMA capture while Core 1 manages ring-buffer framing and telemetry.",
      "Added Silero Voice Activity Detection and acoustic energy gating to finalize utterances within 1.0s of silence.",
      "Built a live Server-Sent Events (SSE) dashboard monitoring free heap, CPU load, microphone peaks, and transcription latency.",
    ],
  },
  {
    id: "researchmesh",
    title: "ResearchMesh",
    category: "ai",
    badge: "Agentic AI · TechnoJam Club",
    warmBadge: false,
    year: "2026",
    summary:
      "Evidence-backed autonomous research agent that discovers sources, extracts rendered pages, and synthesizes conflict-aware structured reports.",
    preview: { type: "image", src: "./assets/researchmesh.png", alt: "ResearchMesh web application interface" },
    leadMetric: "4-Stage Pipeline · Automatic 429/503 Fallback",
    stack: ["Python", "Google Gemini", "TinyFish SDK", "Pydantic", "Streamlit"],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/arpitkumar81008-cmd/ResearchMesh",
        primary: true,
      },
    ],
    metrics: [
      { label: "Architecture", value: "4-Stage Agent" },
      { label: "Resilience", value: "4-Tier Fallback" },
      { label: "Export", value: "JSON & MD" },
    ],
    architecture: [
      "User Query ──▶ Query Expansion ──▶ TinyFish Search",
      "                                        │",
      "                                        ▼",
      "         TinyFish Fetch (Chromium) ──▶ Web Agent Escalation",
      "                                        │",
      "                                        ▼",
      "     Gemini Tiered Fallback ──▶ Pydantic Report ──▶ Streamlit UI",
    ].join("\n"),
    highlights: [
      "Combines multi-query search, parallel Chromium markdown extraction, and autonomous web-agent escalation for JS-heavy or gated pages.",
      "Engineered tiered Google Gemini model fallback to handle 429 rate-limit and 503 capacity spikes without failing mid-research.",
      "Enforces strict Pydantic schemas (claims, timeline events, source citations) with one-click Markdown and JSON export.",
    ],
  },
];

const SKILL_GROUPS = [
  {
    title: "Core CS & Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Hardware & Edge",
    skills: ["ESP32-S3", "FreeRTOS", "INMP441 I2S", "Arduino"],
  },
  {
    title: "AI & Backend",
    skills: ["Google Gemini", "FastAPI", "Faster-Whisper", "Silero VAD", "Pydantic", "TinyFish SDK"],
  },
  {
    title: "Web & Tools",
    skills: ["HTML", "CSS", "Tailwind CSS", "Streamlit", "Git", "GitHub"],
  },
];

/* ==========================================================================
   1. Render Projects & Skills
   ========================================================================== */

const projectsList = document.getElementById("projects-list");
const skillsGrid = document.getElementById("skills-grid");
const skillStatus = document.getElementById("skill-status");

let activeFilter = "all";
let activeSkill = null;

function renderProjects() {
  if (!projectsList) return;

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const spans =
    filtered.length === 4
      ? ["span-7", "span-5", "span-5", "span-7"]
      : filtered.length === 3
        ? ["span-7", "span-5", "span-12"]
        : ["span-12", "span-12", "span-12"];

  projectsList.innerHTML = filtered
    .map((project, idx) => {
      const matchesSkill = activeSkill
        ? project.stack.some((s) => s.toLowerCase() === activeSkill.toLowerCase())
        : false;

      const stateClass = activeSkill
        ? matchesSkill
          ? "is-highlighted"
          : "is-dimmed"
        : "";

      const primaryLink = project.links[0];
      const badgeClass = project.warmBadge ? "project-badge is-warm" : "project-badge";

      const previewMarkup =
        project.preview?.type === "iframe"
          ? `<div class="project-preview project-preview--iframe"><iframe src="${project.preview.src}" title="${project.preview.alt}" loading="lazy" tabindex="-1"></iframe></div>`
          : project.preview?.type === "image"
            ? `<div class="project-preview"><img src="${project.preview.src}" alt="${project.preview.alt}" loading="lazy" /></div>`
            : "";

      return `
        <article class="project-card ${spans[idx] || "span-12"} ${stateClass}" data-open-project="${project.id}" tabindex="0" role="button" aria-label="Open ${project.title} details">
          <div>
            ${previewMarkup}
            <div class="project-top">
              <span class="${badgeClass}">${project.badge}</span>
              <span class="project-year">${project.year}</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-summary">${project.summary}</p>
            <div class="project-metric">${project.leadMetric}</div>
            <div class="project-stack">
              ${project.stack.map((tech) => `<span>${tech}</span>`).join("")}
            </div>
          </div>

          <div class="project-footer">
            <a href="${primaryLink.url}" target="_blank" rel="noopener noreferrer" class="text-link" onclick="event.stopPropagation()">
              ${primaryLink.label}
            </a>
            <span class="text-link text-link-muted">Architecture →</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderSkills() {
  if (!skillsGrid) return;

  skillsGrid.innerHTML = SKILL_GROUPS.map(
    (group) => `
      <div>
        <h3 class="skill-group-title">${group.title}</h3>
        <div class="skill-pills">
          ${group.skills
            .map(
              (skill) => `
                <button type="button" class="skill-pill ${activeSkill === skill ? "is-active" : ""}" data-skill="${skill}">
                  ${skill}
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    `
  ).join("");

  skillsGrid.querySelectorAll("[data-skill]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const skill = btn.getAttribute("data-skill");
      activeSkill = activeSkill === skill ? null : skill;

      if (activeSkill) {
        activeFilter = "all";
        updateFilterTabs();
        const count = PROJECTS.filter((p) =>
          p.stack.some((s) => s.toLowerCase() === activeSkill.toLowerCase())
        ).length;

        skillStatus.textContent =
          count > 0
            ? `${activeSkill} — used in ${count} project${count > 1 ? "s" : ""}`
            : `${activeSkill} — core CS foundation`;

        if (count > 0) {
          document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        skillStatus.textContent = "All skills";
      }

      renderSkills();
      renderProjects();
    });
  });
}

function updateFilterTabs() {
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    const isMatch = tab.getAttribute("data-filter") === activeFilter;
    tab.classList.toggle("is-active", isMatch);
    tab.setAttribute("aria-selected", String(isMatch));
  });
}

document.querySelectorAll(".filter-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeFilter = tab.getAttribute("data-filter") || "all";
    activeSkill = null;
    if (skillStatus) skillStatus.textContent = "All skills";
    updateFilterTabs();
    renderSkills();
    renderProjects();
  });
});

/* ==========================================================================
   2. Right-Side Project Drawer & Printable Resume Modal
   ========================================================================== */

const projectDrawer = document.getElementById("project-drawer");
const drawerKicker = document.getElementById("drawer-kicker");
const drawerTitle = document.getElementById("drawer-title");
const drawerBody = document.getElementById("drawer-body");
const resumeModal = document.getElementById("resume-modal");

function openProjectDrawer(projectId) {
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project || !projectDrawer) return;

  drawerKicker.textContent = `${project.badge} · ${project.year}`;
  drawerTitle.textContent = project.title;

  const drawerPreviewMarkup =
    project.preview?.type === "image"
      ? `<div class="drawer-preview"><img src="${project.preview.src}" alt="${project.preview.alt}" /></div>`
      : project.preview?.type === "iframe"
        ? `<div class="project-preview project-preview--iframe"><iframe src="${project.preview.src}" title="${project.preview.alt}" tabindex="-1"></iframe></div>`
        : "";

  drawerBody.innerHTML = `
    ${drawerPreviewMarkup}
    <p class="project-summary">${project.summary}</p>

    <div class="drawer-metrics">
      ${project.metrics
        .map(
          (m) => `
            <div class="drawer-metric-box">
              <span>${m.label}</span>
              <strong>${m.value}</strong>
            </div>
          `
        )
        .join("")}
    </div>

    <div>
      <div class="drawer-label">System Flow</div>
      <div class="arch-flow">${project.architecture}</div>
    </div>

    <div>
      <div class="drawer-label">Engineering Highlights</div>
      <ul class="drawer-list">
        ${project.highlights.map((h) => `<li>${h}</li>`).join("")}
      </ul>
    </div>

    <div class="project-stack">
      ${project.stack.map((tech) => `<span>${tech}</span>`).join("")}
    </div>

    <div class="drawer-actions">
      ${project.links
        .map(
          (link) => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn ${link.primary ? "btn-primary" : "btn-outline"}">
              ${link.label}
            </a>
          `
        )
        .join("")}
    </div>
  `;

  projectDrawer.hidden = false;
  document.body.style.overflow = "hidden";
}

function openResumeModal() {
  if (!resumeModal) return;
  resumeModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeOverlays() {
  if (projectDrawer) projectDrawer.hidden = true;
  if (resumeModal) resumeModal.hidden = true;
  document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
  const target = e.target;
  if (!(target instanceof Element)) return;

  const projectTrigger = target.closest("[data-open-project]");
  if (projectTrigger && !target.closest("a")) {
    openProjectDrawer(projectTrigger.getAttribute("data-open-project"));
    return;
  }

  if (target.closest("[data-open-resume]") || target.closest("#open-resume-btn")) {
    openResumeModal();
    return;
  }

  if (target.closest("[data-close-overlay]") || target === projectDrawer || target === resumeModal) {
    closeOverlays();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeOverlays();
  if (e.key === "Enter" && document.activeElement?.hasAttribute("data-open-project")) {
    openProjectDrawer(document.activeElement.getAttribute("data-open-project"));
  }
  if (
    e.key.toLowerCase() === "t" &&
    !e.metaKey &&
    !e.ctrlKey &&
    !e.altKey &&
    !(e.target instanceof HTMLInputElement) &&
    !(e.target instanceof HTMLTextAreaElement)
  ) {
    const next = getCurrentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    showToast(next === "dark" ? "Dark mode" : "Light mode");
  }
});

document.getElementById("print-resume-btn")?.addEventListener("click", () => {
  window.print();
});

/* ==========================================================================
   3. Copy Email & Toast
   ========================================================================== */

const toastEl = document.getElementById("toast");
let toastTimer = null;

function showToast(message) {
  if (!toastEl) return;
  if (toastTimer) clearTimeout(toastTimer);
  toastEl.textContent = message;
  toastEl.hidden = false;
  toastTimer = setTimeout(() => {
    toastEl.hidden = true;
  }, 2400);
}

document.querySelectorAll("[data-copy-email]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      showToast(`Copied ${EMAIL}`);
    } catch {
      showToast(EMAIL);
    }
  });
});

/* ==========================================================================
   4. Scroll Progress, Active Nav, Ledger Trace & Reveal Choreography
   ========================================================================== */

const siteHeader = document.getElementById("site-header");
const progressBar = document.getElementById("scroll-progress-bar");
const ledgerWrap = document.getElementById("ledger-wrap");
const ledgerRailFill = document.getElementById("ledger-rail-fill");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sections = navLinks
  .map((link) => document.getElementById(link.getAttribute("data-section")))
  .filter(Boolean);

let scrollRatio = 0;

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollRatio = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0;

  if (progressBar) progressBar.style.width = `${(scrollRatio * 100).toFixed(2)}%`;
  if (siteHeader) siteHeader.classList.toggle("is-scrolled", scrollTop > 20);

  if (ledgerWrap && ledgerRailFill) {
    const rect = ledgerWrap.getBoundingClientRect();
    const viewH = window.innerHeight;
    const fill = Math.min(1, Math.max(0, (viewH * 0.72 - rect.top) / Math.max(1, rect.height)));
    ledgerRailFill.style.height = `${(fill * 100).toFixed(1)}%`;
  }

  let currentId = null;
  for (const sec of sections) {
    if (sec.getBoundingClientRect().top <= 160) {
      currentId = sec.id;
    }
  }
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("data-section") === currentId);
  });
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ==========================================================================
   Theme Switcher (Editorial Light ↔ Warm Charcoal Dark)
   ========================================================================== */

const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeToggleLabel = document.getElementById("theme-toggle-label");

function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  try {
    localStorage.setItem("arpit-theme", theme);
  } catch {
    // Ignore storage restriction
  }
}

try {
  const saved = localStorage.getItem("arpit-theme");
  if (saved === "dark" || saved === "light") applyTheme(saved);
} catch {
  // Ignore
}

themeToggleBtn?.addEventListener("click", () => {
  const next = getCurrentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  showToast(next === "dark" ? "Dark mode" : "Light mode");
});

/* ==========================================================================
   5. Visibly Animated Calm Pastel Silk Waves (Organic + Cursor/Scroll Reactive)
   ========================================================================== */

let motionEnabled = true;
const toggleMotionBtn = document.getElementById("toggle-motion-btn");

function initPastelWaveCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let t = 0;
  const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener("resize", resize);
  window.addEventListener(
    "mousemove",
    (e) => {
      pointer.tx = e.clientX / Math.max(1, width);
      pointer.ty = e.clientY / Math.max(1, height);
    },
    { passive: true }
  );

  resize();

  // Theme-aware organic silk ribbons
  const lightLayers = [
    { baseY: 0.24, amp: 54, freq: 0.0021, color: "rgba(186, 211, 193, 0.52)", stroke: "rgba(37, 79, 66, 0.09)" },
    { baseY: 0.48, amp: 68, freq: 0.0017, color: "rgba(236, 207, 188, 0.48)", stroke: "rgba(166, 75, 42, 0.08)" },
    { baseY: 0.72, amp: 60, freq: 0.0024, color: "rgba(195, 214, 228, 0.46)", stroke: "rgba(58, 92, 122, 0.08)" },
    { baseY: 0.9, amp: 44, freq: 0.0019, color: "rgba(218, 206, 224, 0.42)", stroke: "rgba(88, 72, 108, 0.07)" },
  ];

  const darkLayers = [
    { baseY: 0.24, amp: 54, freq: 0.0021, color: "rgba(44, 72, 62, 0.42)", stroke: "rgba(127, 184, 163, 0.14)" },
    { baseY: 0.48, amp: 68, freq: 0.0017, color: "rgba(74, 52, 43, 0.38)", stroke: "rgba(224, 145, 114, 0.12)" },
    { baseY: 0.72, amp: 60, freq: 0.0024, color: "rgba(42, 57, 72, 0.4)", stroke: "rgba(148, 180, 206, 0.12)" },
    { baseY: 0.9, amp: 44, freq: 0.0019, color: "rgba(56, 48, 66, 0.36)", stroke: "rgba(176, 160, 196, 0.1)" },
  ];

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const layers = getCurrentTheme() === "dark" ? darkLayers : lightLayers;

    // Smoothly ease pointer influence
    pointer.x += (pointer.tx - pointer.x) * 0.035;
    pointer.y += (pointer.ty - pointer.y) * 0.035;

    const scrollShift = scrollRatio * 90;

    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const yCenter =
        height * layer.baseY +
        (pointer.y - 0.5) * (24 + i * 8) -
        scrollShift * (0.35 + i * 0.15);

      ctx.beginPath();
      ctx.moveTo(0, height);

      const step = Math.max(18, Math.floor(width / 56));
      for (let x = 0; x <= width + step; x += step) {
        const wave1 = Math.sin(x * layer.freq + t * (1 + i * 0.18) + pointer.x * 1.4) * layer.amp;
        const wave2 = Math.cos(x * layer.freq * 0.55 - t * 0.7 + i * 2.1) * (layer.amp * 0.45);
        const y = yCenter + wave1 + wave2;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      ctx.fillStyle = layer.color;
      ctx.fill();

      // Crisp delicate topographic hairline along the crest of each pastel wave
      ctx.beginPath();
      for (let x = 0; x <= width + step; x += step) {
        const wave1 = Math.sin(x * layer.freq + t * (1 + i * 0.18) + pointer.x * 1.4) * layer.amp;
        const wave2 = Math.cos(x * layer.freq * 0.55 - t * 0.7 + i * 2.1) * (layer.amp * 0.45);
        const y = yCenter + wave1 + wave2;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = layer.stroke;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    if (motionEnabled) {
      t += 0.0085;
      requestAnimationFrame(draw);
    }
  }

  toggleMotionBtn?.addEventListener("click", () => {
    motionEnabled = !motionEnabled;
    toggleMotionBtn.textContent = motionEnabled
      ? "Background motion: On"
      : "Background motion: Paused";
    if (motionEnabled) requestAnimationFrame(draw);
  });

  requestAnimationFrame(draw);
}

// Boot
renderProjects();
renderSkills();
initPastelWaveCanvas();
