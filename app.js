/* ==========================================================================
   Arpit Kumar Gupta — Editorial Pastel Portfolio, Infinite R→L Bento Showcase,
   Strict Skill/Domain Filtering, Cursor Spotlight & Calm Silk Wave Canvas
   ========================================================================== */

const EMAIL = "arpitkumar81008@gmail.com";

const PROJECTS = [
  {
    id: "meridian-proxy",
    title: "Meridian × Proxy",
    category: "web",
    bentoSize: "wide",
    badge: "1st Place · Unprompted",
    aiPill: "✦ Made with AI in Antigravity",
    warmBadge: true,
    year: "2026",
    role: "Meridian Burnout Concept & HTML · Made with AI in Antigravity",
    summary:
      "Dual-product remote collaboration web app—built using HTML fundamentals and AI-assisted coding in Antigravity—pairing Meridian (overtime & late-night meeting burnout tracker) with Proxy (async meeting summaries).",
    preview: {
      type: "image",
      src: "./assets/meridian-preview.png",
      drawerIframe: "./assets/meridian-demo/dashboard.html",
      alt: "Meridian Timezone Equity & Burnout Tracker Dashboard",
    },
    leadMetric: "1st Place · Burnout Tracker · Made with AI in Antigravity",
    stack: ["HTML", "Antigravity (AI)", "CSS", "Tailwind CSS", "JavaScript", "Python", "Git & GitHub"],
    links: [
      {
        label: "Burnout Dashboard Demo",
        url: "./assets/meridian-demo/dashboard.html",
        primary: true,
      },
      {
        label: "Full Product Demo",
        url: "./assets/meridian-demo/index.html",
        primary: false,
      },
    ],
    metrics: [
      { label: "Result", value: "1st Place" },
      { label: "My Module", value: "Meridian Tracker" },
      { label: "Built With", value: "HTML + Antigravity" },
    ],
    architecture: [
      "Team Calendar Logs ──▶ Meridian Burnout Tracker (My Concept)",
      "                                 │ (Flags Overtime & Late-Night Load)",
      "                                 ▼",
      "             Fair Rotation Scheduler   OR  Proxy Async Attendance",
      "                                                 │",
      "                                                 ▼",
      "                              Sunrise Decision & Action Summary",
    ].join("\n"),
    highlights: [
      "Designed the Meridian burnout-tracking concept to monitor how many overtime and late-night meetings a person attends and reduce individual burnout.",
      "Built the multi-screen web interface using my HTML foundation paired with AI-assisted development in Antigravity for CSS, Tailwind, and JavaScript logic.",
      "Collaborated with teammates to connect Meridian with Proxy and pitched our prototype live to win 1st Place at the Unprompted Hackathon.",
    ],
    mediaGallery: {
      photos: [
        {
          src: "./assets/unprompted-team.jpg",
          label: "Team at Unprompted",
          caption: "Arpit and teammates building Meridian × Proxy during the Unprompted Hackathon (IEEE GUSB TEMS) — 1st Place Winners.",
        },
        {
          src: "./assets/unprompted-stage.jpg",
          label: "Unprompted Stage",
          caption: "Unprompted Hackathon main stage at Galgotias University (IEEE GUSB TEMS).",
        },
      ],
    },
  },
  {
    id: "vanshvriksha",
    title: "VanshVriksha (वंश वृक्ष)",
    category: "web",
    bentoSize: "wide",
    badge: "Live Production App",
    aiPill: "✦ Made with AI in Antigravity",
    warmBadge: false,
    year: "2026",
    role: "Solo Product Direction & Kinship UX · Made with AI in Antigravity",
    summary:
      "Bilingual (English & हिन्दी) multi-generational family tree web platform—made with AI in Antigravity—featuring Indian kinship resolution, non-overlapping tree layouts, and private cloud sync.",
    preview: {
      type: "image",
      src: "./assets/vanshvriksha.jpg",
      alt: "VanshVriksha Bilingual Family Tree Platform",
    },
    leadMetric: "Live Web App · EN ↔ हिन्दी · Made with AI in Antigravity",
    stack: ["Antigravity (AI)", "HTML", "React", "Vite", "Firebase", "JavaScript", "CSS", "Git & GitHub"],
    links: [
      {
        label: "Live App",
        url: "https://vanshvriksha.web.app",
        primary: true,
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/arpitkumar81008-cmd/family-tree",
        primary: false,
      },
    ],
    metrics: [
      { label: "Workflow", value: "AI in Antigravity" },
      { label: "Language", value: "EN ↔ हिन्दी" },
      { label: "Sync", value: "Firebase Cloud" },
    ],
    architecture: [
      "Product & Kinship Prompts ──▶ AI-Assisted Build in Antigravity",
      "                                      │",
      "                                      ▼",
      "       Bilingual (EN / हिन्दी) Tree Layout & Indian Kinship Solver",
      "                                      │",
      "                                      ▼",
      "          Private Firebase Sync + Poster & Backup Exports",
    ].join("\n"),
    highlights: [
      "Directed the entire product vision, authentic Indian kinship rules (Tauji, Chacha, Bua, Mama, Mausi, etc.), and bilingual English ↔ हिन्दी experience using Antigravity.",
      "Used AI-assisted coding in Antigravity to build and ship a full React, Vite, and Firebase application beyond my classroom languages (C, C++, Java, HTML).",
      "Iteratively tested, refined, and deployed private family sharing, Hindi name transliteration, and high-res poster exports live at vanshvriksha.web.app.",
    ],
  },
  {
    id: "campus-water-conservation",
    title: "Campus Water Leak Portal",
    category: "web",
    bentoSize: "compact",
    badge: "1st Place · Problem Protocol",
    aiPill: "✦ Made with AI in Antigravity",
    warmBadge: true,
    year: "2026",
    role: "Leak Website & Maps Flow (HTML + AI in Antigravity)",
    summary:
      "Campus water leak reporting website—built with HTML and AI in Antigravity—where people click photos of leaks, upload them with their Google Maps API address, and route reports to a repair team.",
    preview: {
      type: "image",
      src: "./assets/campus-water-preview.png",
      alt: "Campus Water Leak Photo Upload & Google Maps API Dispatch Portal",
    },
    leadMetric: "1st Place · Photo + Maps API · Made with AI in Antigravity",
    stack: ["HTML", "Antigravity (AI)", "CSS", "JavaScript", "Google Maps API", "Git & GitHub"],
    links: [
      {
        label: "GitHub Profile",
        url: "https://github.com/arpitkumar81008-cmd",
        primary: true,
      },
    ],
    metrics: [
      { label: "Result", value: "1st Place" },
      { label: "Built With", value: "HTML + Antigravity" },
      { label: "Routing", value: "Maintenance Crew" },
    ],
    architecture: [
      "Campus Visitor ──▶ Click & Upload Leak Photo on Website",
      "                                │",
      "                                ▼",
      "           Google Maps API Address & Location Pinning",
      "                                │",
      "                                ▼",
      "         Forwarded to Separate Maintenance Team to Fix Leak",
    ].join("\n"),
    highlights: [
      "Worked on the website flow where people on campus click photos of active water leaks and upload them directly through the browser.",
      "Used HTML alongside AI-assisted coding in Antigravity to set up Google Maps API address pinning on each report.",
      "Configured submissions to route directly to a dedicated repair team workflow, winning 1st Place at The Problem Protocol Hackathon.",
    ],
    mediaGallery: {
      photos: [
        {
          src: "./assets/problem-protocol-award.jpg",
          label: "1st Place Award Ceremony",
          caption: "Arpit receiving the 1st Place Certificate from faculty judges at The Problem Protocol Hackathon (IEEE Student Branch, Galgotias University).",
        },
        {
          src: "./assets/problem-protocol-stage.jpg",
          label: "The Problem Protocol",
          caption: "The Problem Protocol Hackathon at Galgotias University (IEEE Student Branch & WIE).",
        },
      ],
    },
  },
  {
    id: "sih-voice-assistant",
    title: "Edge AI Voice Assistant",
    category: "hardware",
    bentoSize: "wide",
    badge: "6th Place · SIH 2026",
    aiPill: "✦ Soldering + AI in Antigravity",
    warmBadge: false,
    year: "2026",
    role: "Hardware Soldering, Compiling onto ESP32 & Pitch · AI in Antigravity",
    summary:
      "Group SIH 2026 ESP32-S3 voice assistant where I soldered the hardware prototype, compiled and flashed teammates' code onto the ESP32-S3 (with backend/tooling built via Antigravity), and pitched live.",
    preview: {
      type: "image",
      src: "./assets/sih-voice-assistant.png",
      alt: "ESP32-S3 and INMP441 hardware schematic",
    },
    leadMetric: "6th Place · Hand-Soldered Rig + Live Pitch · AI-Assisted",
    stack: [
      "C",
      "C++",
      "ESP32-S3",
      "INMP441 I2S",
      "Hardware Soldering",
      "Antigravity (AI)",
      "Python",
      "FastAPI",
      "Faster-Whisper",
      "Silero VAD",
    ],
    links: [
      {
        label: "Hardware Schematic",
        url: "./assets/sih-voice-assistant.png",
        primary: true,
      },
      {
        label: "GitHub Profile",
        url: "https://github.com/arpitkumar81008-cmd",
        primary: false,
      },
    ],
    metrics: [
      { label: "My Focus", value: "Hardware & Pitch" },
      { label: "Latency", value: "~1.5s Demo" },
      { label: "SIH 2026", value: "6th Place" },
    ],
    architecture: [
      "Hand-Soldered INMP441 Mic ──▶ Wired ESP32-S3 Breadboard Prototype",
      "                                        │ (Compiled & Flashed C/C++ Code)",
      "                                        ▼",
      "                   AI-Assisted Python / Whisper Server Pipeline",
      "                                        │",
      "                                        ▼",
      "                     Live Jury Stage Pitch & Wake-Word Demo",
    ].join("\n"),
    highlights: [
      "Worked hands-on on the hardware side: soldering the INMP441 microphone headers and assembling the physical ESP32-S3 breadboard prototype.",
      "Compiled teammates' modules using my C/C++ foundation and AI assistance in Antigravity, flashing the integrated build directly onto the ESP32-S3.",
      "Delivered the live stage pitch and working wake-word hardware demonstration before the SIH 2026 internal jury, placing 6th.",
    ],
    mediaGallery: {
      video: {
        src: "./assets/sih-demo.mp4",
        poster: "./assets/sih-jury-pitch.jpg",
        caption: "Live bench demo: Arpit testing wake-word LED flash & low-latency (~1.5s) voice detection on the ESP32-S3 + INMP441 rig.",
      },
      photos: [
        {
          src: "./assets/sih-jury-pitch.jpg",
          label: "SIH 2026 Jury Evaluation",
          caption: "Presenting the wired ESP32-S3 voice assistant live before the SIH 2026 internal evaluation jury.",
        },
        {
          src: "./assets/sih-esp32-bench.jpg",
          label: "ESP32-S3-N16R8 Bench",
          caption: "ESP32-S3-N16R8 powered on the breadboard running the compiled voice-capture firmware.",
        },
        {
          src: "./assets/sih-inmp441-mic.jpg",
          label: "Soldered INMP441 Mic",
          caption: "Close-up of the 6-pin soldered INMP441 digital I2S MEMS microphone capture setup.",
        },
        {
          src: "./assets/sih-voice-assistant.png",
          label: "Hardware EDA Schematic",
          caption: "Full ESP32-S3 to INMP441 I2S electrical logic schematic & pinout specification.",
        },
      ],
    },
  },
  {
    id: "researchmesh",
    title: "ResearchMesh",
    category: "ai",
    bentoSize: "compact",
    badge: "Solo ~1-Hr Sprint · TechnoJam",
    aiPill: "✦ Made with AI in Antigravity",
    warmBadge: false,
    year: "2026",
    role: "Solo ~1-Hour Sprint Build · Made with AI in Antigravity",
    summary:
      "Autonomous web research agent built solo in a ~1-hour online sprint with TechnoJam Club—made with AI in Antigravity to orchestrate web search, extraction, and Gemini report synthesis.",
    preview: {
      type: "image",
      src: "./assets/researchmesh.png",
      alt: "ResearchMesh web application interface",
    },
    leadMetric: "Solo 1-Hr Sprint · Made with AI in Antigravity",
    stack: ["Antigravity (AI)", "Python", "Google Gemini", "TinyFish SDK", "Pydantic", "Streamlit", "Git & GitHub"],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/arpitkumar81008-cmd/ResearchMesh",
        primary: true,
      },
    ],
    metrics: [
      { label: "Sprint", value: "Solo (~1 Hr)" },
      { label: "Built With", value: "Antigravity AI" },
      { label: "Export", value: "JSON & MD" },
    ],
    architecture: [
      "User Research Prompt ──▶ AI-Built 4-Stage Pipeline (Antigravity)",
      "                                        │",
      "                                        ▼",
      "             TinyFish Web Search & Extraction ──▶ Gemini Synthesis",
      "                                        │",
      "                                        ▼",
      "                       Structured Streamlit Report (MD / JSON)",
    ].join("\n"),
    highlights: [
      "Built solo during a ~1-hour online hackathon-style sprint with Galgotias University's TechnoJam Club using AI-assisted coding in Antigravity.",
      "Directed the research workflow—combining web discovery, page extraction, Gemini rate-limit fallback, and structured report export.",
      "Tested and shipped the complete repository within the 1-hour sprint window using Antigravity.",
    ],
  },
];

/* Handwritten Core CS Repository shown when filtering by Java */
const SUPPLEMENTAL_SKILL_PROJECTS = [
  {
    id: "java-dsa-suite",
    title: "Java Algorithms & OOP Suite",
    category: "cs",
    bentoSize: "wide",
    badge: "40+ Programs · Handwritten Java",
    aiPill: "Handwritten Core CS",
    warmBadge: false,
    year: "2025 — 2026",
    role: "Handwritten by Me — Java OOP, Matrices, Recursion & Algorithms",
    summary:
      "My personal repository of 40+ handwritten Java programs covering 2D matrices, recursion, string algorithms, sorting, and object-oriented programming across ICSE/ISC and B.Tech CSE.",
    leadMetric: "40+ Handwritten Java Programs · Core CS Foundation",
    stack: ["Java", "Git & GitHub"],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/arpitkumar81008-cmd/Arpit-github-all-projects",
        primary: true,
      },
    ],
    metrics: [
      { label: "Programs", value: "40+ Handwritten" },
      { label: "Language", value: "Pure Java" },
      { label: "Foundation", value: "ISC → B.Tech" },
    ],
    architecture: [
      "Problem Specification ──▶ Handwritten Java OOP Class Design",
      "                                      │",
      "                                      ▼",
      "        Matrix / String / Recursive Algorithm Implementation",
      "                                      │",
      "                                      ▼",
      "               CLI & Swing GUI Verification Suites",
    ].join("\n"),
    highlights: [
      "Hand-coded 40+ standalone Java programs covering 2D matrix transposition/rotation, anagram generators, number theory, and custom OOP classes.",
      "Built without AI code generation as my core programming foundation from Little Flower School (ICSE/ISC) into B.Tech CSE.",
    ],
  },
];

const ALL_LOOKUP_PROJECTS = [...PROJECTS, ...SUPPLEMENTAL_SKILL_PROJECTS];

const SKILL_GROUPS = [
  {
    title: "Languages I Know (Hands-On)",
    skills: ["C", "C++", "Java", "HTML"],
  },
  {
    title: "AI Workflow & Hardware",
    skills: ["Antigravity (AI)", "ESP32-S3", "INMP441 I2S", "Hardware Soldering", "Git & GitHub"],
  },
  {
    title: "Web Stacks (Made with Antigravity)",
    skills: ["CSS", "Tailwind CSS", "JavaScript", "React", "Vite", "Firebase", "Google Maps API"],
  },
  {
    title: "AI & Backend (Made with Antigravity)",
    skills: ["Python", "FastAPI", "Google Gemini", "Faster-Whisper", "Silero VAD", "Pydantic", "TinyFish SDK", "Streamlit"],
  },
];

/* ==========================================================================
   1. Infinite Right-to-Left Auto-Scrolling Bento Showcase + Strict Filter
   ========================================================================== */

const projectsShowcase = document.getElementById("projects-showcase");
const activeFilterBar = document.getElementById("active-filter-bar");
const activeFilterText = document.getElementById("active-filter-text");
const clearFilterBtn = document.getElementById("clear-filter-btn");
const skillsGrid = document.getElementById("skills-grid");
const skillStatus = document.getElementById("skill-status");

let activeFilter = "all";
let activeSkill = null;

// Marquee animation state (Right -> Left + Left/Right Step Controls + Drag)
let marqueeRafId = null;
let marqueeAbortController = null;
let marqueeLastTs = 0;
let marqueeOffsetX = 0;
let marqueeCurrentSpeed = 48; // px per second moving Right -> Left
let marqueeHovered = false;
let marqueeManualPaused = false;
let marqueeTouchHoldUntil = 0;
let marqueePendingShift = 0; // smooth pixel impulse for Left / Right arrow clicks
let marqueeSingleWidth = 0;
let suppressCardClickUntil = 0;

function stopMarqueeLoop() {
  if (marqueeRafId) {
    cancelAnimationFrame(marqueeRafId);
    marqueeRafId = null;
  }
  if (marqueeAbortController) {
    marqueeAbortController.abort();
    marqueeAbortController = null;
  }
  marqueeLastTs = 0;
  marqueePendingShift = 0;
}

function wrapMarqueeOffset() {
  if (marqueeSingleWidth <= 0) return;
  while (marqueeOffsetX <= -marqueeSingleWidth) marqueeOffsetX += marqueeSingleWidth;
  while (marqueeOffsetX > 0) marqueeOffsetX -= marqueeSingleWidth;
}

function stepMarqueeBy(direction) {
  // direction: "prev" = Left button (bring previous card from left -> shift track right)
  //            "next" = Right button (advance to next card on right -> shift track left)
  const stepPx = Math.min(430, Math.max(300, window.innerWidth * 0.72));
  marqueePendingShift += direction === "prev" ? stepPx : -stepPx;
  if (!marqueeHovered) {
    marqueeTouchHoldUntil = performance.now() + 4000;
  }
}

function getFilteredProjects() {
  if (activeSkill) {
    const primaryMatches = PROJECTS.filter((p) =>
      p.stack.some((s) => s.toLowerCase() === activeSkill.toLowerCase())
    );
    if (primaryMatches.length > 0) return primaryMatches;

    return SUPPLEMENTAL_SKILL_PROJECTS.filter((p) =>
      p.stack.some((s) => s.toLowerCase() === activeSkill.toLowerCase())
    );
  }

  if (activeFilter !== "all") {
    return PROJECTS.filter((p) => p.category === activeFilter);
  }

  return PROJECTS;
}

function buildCardHTML(project, { cardIdx = 0, isClone = false } = {}) {
  const primaryLink = project.links[0];
  const badgeClass = project.warmBadge ? "project-badge is-warm" : "project-badge";
  const sizeClass = project.bentoSize === "wide" ? "project-card--wide" : "project-card--compact";

  const previewMarkup =
    project.preview?.type === "image"
      ? `<div class="project-preview"><img src="${project.preview.src}" alt="${project.preview.alt}" loading="lazy" draggable="false" /></div>`
      : "";

  const aiPillMarkup = project.aiPill
    ? `<span class="ai-origin-pill">${project.aiPill}</span>`
    : "";

  const tabIndexAttr = isClone ? `-1` : `0`;
  const ariaHiddenAttr = isClone ? `aria-hidden="true"` : `role="button" aria-label="Open ${project.title} details"`;
  const linkTabIndex = isClone ? `tabindex="-1"` : "";

  return `
    <article
      class="project-card ${sizeClass}"
      style="--card-idx: ${cardIdx}"
      data-open-project="${project.id}"
      tabindex="${tabIndexAttr}"
      ${ariaHiddenAttr}
    >
      <div>
        ${previewMarkup}
        <div class="project-top">
          <div class="project-badges-left">
            <span class="${badgeClass}">${project.badge}</span>
            ${aiPillMarkup}
          </div>
          <span class="project-year">${project.year}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-role">${project.role}</p>
        <p class="project-summary">${project.summary}</p>
        <div class="project-metric">${project.leadMetric}</div>
        <div class="project-stack">
          ${project.stack
            .map((tech) => {
              const isMatched =
                activeSkill && tech.toLowerCase() === activeSkill.toLowerCase();
              return `<span class="${isMatched ? "is-matched-skill" : ""}">${tech}</span>`;
            })
            .join("")}
        </div>
      </div>

      <div class="project-footer">
        <a href="${primaryLink.url}" target="_blank" rel="noopener noreferrer" class="text-link" ${linkTabIndex}>
          ${primaryLink.label}
        </a>
        <span class="text-link text-link-muted">Inspect role &amp; flow →</span>
      </div>
    </article>
  `;
}

function updateFilterUI(filteredCount) {
  if (!activeFilterBar || !activeFilterText) return;

  if (activeSkill) {
    activeFilterBar.hidden = false;
    activeFilterText.textContent = `Strictly showing ${filteredCount} project${filteredCount === 1 ? "" : "s"} built with ${activeSkill}`;
  } else if (activeFilter !== "all") {
    const labelMap = { web: "Web", hardware: "Hardware", ai: "AI Systems" };
    activeFilterBar.hidden = false;
    activeFilterText.textContent = `Category: ${labelMap[activeFilter] || activeFilter} — ${filteredCount} project${filteredCount === 1 ? "" : "s"}`;
  } else {
    activeFilterBar.hidden = true;
  }
}

function updatePausePillUI() {
  const pauseBtn = projectsShowcase?.querySelector("[data-marquee-pause]");
  if (!pauseBtn) return;
  pauseBtn.classList.toggle("is-paused", marqueeManualPaused);
  pauseBtn.setAttribute("aria-pressed", String(marqueeManualPaused));
  pauseBtn.textContent = marqueeManualPaused
    ? "▶ Paused — Click to resume auto-scroll (or use ‹ ›)"
    : "⏸ Auto-scrolling — Click to pause · Drag or use ‹ ›";
}

function startRightToLeftMarquee() {
  stopMarqueeLoop();

  const shellEl = projectsShowcase?.querySelector(".bento-marquee-shell");
  const marqueeEl = projectsShowcase?.querySelector(".bento-marquee");
  const trackEl = projectsShowcase?.querySelector(".bento-marquee__track");
  const firstGroup = projectsShowcase?.querySelector(".bento-marquee__group");
  if (!shellEl || !marqueeEl || !trackEl || !firstGroup) return;

  marqueeAbortController = new AbortController();
  const { signal } = marqueeAbortController;

  function measure() {
    marqueeSingleWidth = firstGroup.offsetWidth;
    wrapMarqueeOffset();
  }

  measure();
  marqueeOffsetX = 0;
  marqueeCurrentSpeed = marqueeManualPaused ? 0 : 48;
  marqueeHovered = false;

  shellEl.addEventListener("pointerenter", (e) => {
    if (e.pointerType !== "touch") marqueeHovered = true;
  });
  shellEl.addEventListener("pointerleave", () => {
    marqueeHovered = false;
  });
  shellEl.addEventListener("focusin", () => {
    marqueeHovered = true;
  });
  shellEl.addEventListener("focusout", (e) => {
    if (!shellEl.contains(e.relatedTarget)) {
      marqueeHovered = false;
    }
  });

  // Left & Right cycle buttons
  shellEl.querySelectorAll("[data-marquee-step]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dir = btn.getAttribute("data-marquee-step");
      stepMarqueeBy(dir === "prev" ? "prev" : "next");
    });
  });

  // Click-to-lock-pause button
  const pauseBtn = projectsShowcase?.querySelector("[data-marquee-pause]");
  pauseBtn?.addEventListener("click", () => {
    marqueeManualPaused = !marqueeManualPaused;
    updatePausePillUI();
  });

  // Horizontal trackpad wheel scrolling
  marqueeEl.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && marqueeSingleWidth > 0) {
        e.preventDefault();
        marqueeOffsetX -= e.deltaX;
        wrapMarqueeOffset();
        trackEl.style.transform = `translate3d(${marqueeOffsetX.toFixed(2)}px, 0, 0)`;
      }
    },
    { passive: false }
  );

  // Pointer drag / touch swipe scrubbing
  let isDragging = false;
  let dragStartX = 0;
  let dragLastX = 0;
  let dragMoved = 0;

  marqueeEl.addEventListener("pointerdown", (e) => {
    if (e.button !== 0 || (e.target instanceof Element && e.target.closest("a, button"))) return;
    isDragging = true;
    dragStartX = e.clientX;
    dragLastX = e.clientX;
    dragMoved = 0;
    marqueePendingShift = 0;
    marqueeEl.classList.add("is-dragging");
  });

  window.addEventListener(
    "pointermove",
    (e) => {
      if (!isDragging || marqueeSingleWidth <= 0) return;
      const dx = e.clientX - dragLastX;
      dragLastX = e.clientX;
      dragMoved = Math.max(dragMoved, Math.abs(e.clientX - dragStartX));
      if (dragMoved > 6) {
        marqueeOffsetX += dx;
        wrapMarqueeOffset();
        trackEl.style.transform = `translate3d(${marqueeOffsetX.toFixed(2)}px, 0, 0)`;
      }
    },
    { passive: true, signal }
  );

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    marqueeEl.classList.remove("is-dragging");
    if (dragMoved > 6) {
      suppressCardClickUntil = performance.now() + 180;
      if (!marqueeHovered) {
        marqueeTouchHoldUntil = performance.now() + 3000;
      }
    }
  }

  window.addEventListener("pointerup", endDrag, { signal });
  window.addEventListener("pointercancel", endDrag, { signal });

  marqueeEl.querySelectorAll("img").forEach((img) => {
    if (!img.complete) {
      img.addEventListener("load", measure, { once: true });
    }
  });

  function step(ts) {
    if (!marqueeLastTs) marqueeLastTs = ts;
    const dt = Math.min(0.05, (ts - marqueeLastTs) / 1000);
    marqueeLastTs = ts;

    if (marqueeSingleWidth <= 0) measure();

    const overlayOpen =
      (projectDrawer && !projectDrawer.hidden) ||
      (resumeModal && !resumeModal.hidden);

    const shouldPauseAuto =
      marqueeHovered ||
      marqueeManualPaused ||
      isDragging ||
      overlayOpen ||
      ts < marqueeTouchHoldUntil;

    const targetSpeed = shouldPauseAuto ? 0 : 48;
    marqueeCurrentSpeed += (targetSpeed - marqueeCurrentSpeed) * 0.09;

    let moved = false;

    if (marqueeSingleWidth > 0 && marqueeCurrentSpeed > 0.05 && !isDragging) {
      // Negative delta moves cards smoothly from RIGHT to LEFT
      marqueeOffsetX -= marqueeCurrentSpeed * dt;
      moved = true;
    }

    if (Math.abs(marqueePendingShift) > 0.4) {
      const stepChunk = marqueePendingShift * Math.min(1, dt * 11);
      marqueeOffsetX += stepChunk;
      marqueePendingShift -= stepChunk;
      moved = true;
    } else if (marqueePendingShift !== 0) {
      marqueeOffsetX += marqueePendingShift;
      marqueePendingShift = 0;
      moved = true;
    }

    if (moved && marqueeSingleWidth > 0) {
      wrapMarqueeOffset();
      trackEl.style.transform = `translate3d(${marqueeOffsetX.toFixed(2)}px, 0, 0)`;
    }

    marqueeRafId = requestAnimationFrame(step);
  }

  trackEl.style.transform = `translate3d(0px, 0, 0)`;
  updatePausePillUI();
  marqueeRafId = requestAnimationFrame(step);
}

window.addEventListener("resize", () => {
  const firstGroup = projectsShowcase?.querySelector(".bento-marquee__group");
  if (firstGroup) {
    marqueeSingleWidth = firstGroup.offsetWidth;
    wrapMarqueeOffset();
  }
});

function renderProjects() {
  if (!projectsShowcase) return;
  stopMarqueeLoop();

  const filtered = getFilteredProjects();
  updateFilterUI(filtered.length);

  if (filtered.length === 1) {
    projectsShowcase.innerHTML = `
      <div class="single-project-wrap">
        ${buildCardHTML(filtered[0], { cardIdx: 0, isClone: false })}
      </div>
    `;
    return;
  }

  const primaryCards = filtered
    .map((project, idx) => buildCardHTML(project, { cardIdx: idx, isClone: false }))
    .join("");
  const cloneCards = filtered
    .map((project, idx) => buildCardHTML(project, { cardIdx: idx, isClone: true }))
    .join("");

  const extraCloneGroup =
    filtered.length < 4
      ? `<div class="bento-marquee__group" aria-hidden="true">${cloneCards}</div>`
      : "";

  projectsShowcase.innerHTML = `
    <div class="bento-marquee-shell">
      <button type="button" class="marquee-nav-btn marquee-nav-btn--prev" data-marquee-step="prev" aria-label="Scroll to previous project" title="Previous project (←)">‹</button>
      <div class="bento-marquee" aria-label="Auto-scrolling selected projects showcase">
        <div class="bento-marquee__track">
          <div class="bento-marquee__group">${primaryCards}</div>
          <div class="bento-marquee__group" aria-hidden="true">${cloneCards}</div>
          ${extraCloneGroup}
        </div>
      </div>
      <button type="button" class="marquee-nav-btn marquee-nav-btn--next" data-marquee-step="next" aria-label="Scroll to next project" title="Next project (→)">›</button>
    </div>
    <div class="marquee-controls-row">
      <button type="button" class="marquee-pause-pill" data-marquee-pause aria-pressed="false">
        ⏸ Auto-scrolling — Click to pause · Drag or use ‹ ›
      </button>
    </div>
  `;

  startRightToLeftMarquee();
}

function resetAllFilters() {
  activeFilter = "all";
  activeSkill = null;
  if (skillStatus) skillStatus.textContent = "All skills";
  updateFilterTabs();
  renderSkills();
  renderProjects();
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
                <button type="button" class="skill-pill ${activeSkill === skill ? "is-active" : ""}" data-skill="${skill}" aria-pressed="${activeSkill === skill}">
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
        const matches = getFilteredProjects();
        if (skillStatus) {
          skillStatus.innerHTML = `${activeSkill} (${matches.length}) <button type="button" class="skill-clear-inline" data-clear-skill>Clear ×</button>`;
          skillStatus.querySelector("[data-clear-skill]")?.addEventListener("click", resetAllFilters);
        }
        renderSkills();
        renderProjects();
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        if (skillStatus) skillStatus.textContent = "All skills";
        renderSkills();
        renderProjects();
      }
    });
  });
}

function updateFilterTabs() {
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    const isMatch = tab.getAttribute("data-filter") === activeFilter && !activeSkill;
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

clearFilterBtn?.addEventListener("click", resetAllFilters);

/* ==========================================================================
   2. Cursor-Tracked Specular Glass Spotlight
   ========================================================================== */

document.addEventListener(
  "pointermove",
  (e) => {
    const target = e.target instanceof Element ? e.target.closest(".project-card, .glass-spotlight") : null;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mx", `${(e.clientX - rect.left).toFixed(1)}px`);
    target.style.setProperty("--my", `${(e.clientY - rect.top).toFixed(1)}px`);
  },
  { passive: true }
);

/* ==========================================================================
   3. Right-Side Project Drawer, Lightbox Cycling & Printable Resume Modal
   ========================================================================== */

const projectDrawer = document.getElementById("project-drawer");
const drawerKicker = document.getElementById("drawer-kicker");
const drawerTitle = document.getElementById("drawer-title");
const drawerBody = document.getElementById("drawer-body");
const drawerCloseBtn = document.getElementById("drawer-close-btn");
const drawerPrevBtn = document.getElementById("drawer-prev-btn");
const drawerNextBtn = document.getElementById("drawer-next-btn");
const resumeModal = document.getElementById("resume-modal");
const resumeCloseBtn = document.getElementById("resume-close-btn");
const mediaLightbox = document.getElementById("media-lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxCounter = document.getElementById("lightbox-counter");
const lightboxPrevBtn = document.getElementById("lightbox-prev-btn");
const lightboxNextBtn = document.getElementById("lightbox-next-btn");

let lastFocusedElement = null;
let currentDrawerProjectId = null;
let currentLightboxPhotos = [];
let currentLightboxIndex = 0;

function renderLightboxSlide() {
  if (!mediaLightbox || !lightboxImg || currentLightboxPhotos.length === 0) return;
  const item = currentLightboxPhotos[currentLightboxIndex];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.caption || item.label || "Project photo";
  if (lightboxCaption) lightboxCaption.textContent = item.caption || "";
  if (lightboxCounter) {
    lightboxCounter.textContent =
      currentLightboxPhotos.length > 1
        ? `Photo ${currentLightboxIndex + 1} of ${currentLightboxPhotos.length}`
        : "";
  }
  const hasMultiple = currentLightboxPhotos.length > 1;
  if (lightboxPrevBtn) lightboxPrevBtn.hidden = !hasMultiple;
  if (lightboxNextBtn) lightboxNextBtn.hidden = !hasMultiple;
}

function openLightbox(photos, index = 0) {
  if (!mediaLightbox || !photos.length) return;
  currentLightboxPhotos = photos;
  currentLightboxIndex = Math.max(0, Math.min(index, photos.length - 1));
  renderLightboxSlide();
  mediaLightbox.hidden = false;
}

function stepLightbox(delta) {
  if (currentLightboxPhotos.length <= 1) return;
  currentLightboxIndex =
    (currentLightboxIndex + delta + currentLightboxPhotos.length) %
    currentLightboxPhotos.length;
  renderLightboxSlide();
}

function closeLightbox() {
  if (!mediaLightbox) return;
  mediaLightbox.hidden = true;
  if (lightboxImg) lightboxImg.src = "";
  currentLightboxPhotos = [];
}

lightboxPrevBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  stepLightbox(-1);
});

lightboxNextBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  stepLightbox(1);
});

function cycleDrawerProject(delta) {
  if (!currentDrawerProjectId) return;
  const pool = PROJECTS.some((p) => p.id === currentDrawerProjectId)
    ? PROJECTS
    : ALL_LOOKUP_PROJECTS;
  const idx = pool.findIndex((p) => p.id === currentDrawerProjectId);
  if (idx === -1) return;
  const nextProject = pool[(idx + delta + pool.length) % pool.length];
  openProjectDrawer(nextProject.id, true, false);
}

drawerPrevBtn?.addEventListener("click", () => cycleDrawerProject(-1));
drawerNextBtn?.addEventListener("click", () => cycleDrawerProject(1));

function openProjectDrawer(projectId, updateHash = true, saveFocus = true) {
  const project = ALL_LOOKUP_PROJECTS.find((p) => p.id === projectId);
  if (!project || !projectDrawer) return;

  projectDrawer.querySelectorAll("video").forEach((v) => v.pause());

  if (saveFocus && projectDrawer.hidden) {
    lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  }
  currentDrawerProjectId = project.id;

  drawerKicker.textContent = project.aiPill
    ? `${project.badge} · ${project.aiPill} · ${project.year}`
    : `${project.badge} · ${project.year}`;
  drawerTitle.textContent = project.title;

  const hasVideo = Boolean(project.mediaGallery?.video);

  const drawerPreviewMarkup = hasVideo
    ? `
      <div class="drawer-video-wrap">
        <video controls playsinline preload="metadata" poster="${project.mediaGallery.video.poster}">
          <source src="${project.mediaGallery.video.src}" type="video/mp4" />
        </video>
        <div class="drawer-video-caption">${project.mediaGallery.video.caption}</div>
      </div>
    `
    : project.preview?.drawerIframe
      ? `<div class="project-preview project-preview--iframe"><iframe src="${project.preview.drawerIframe}" title="${project.preview.alt}" loading="lazy" tabindex="-1"></iframe></div>`
      : project.preview?.type === "image"
        ? `<div class="drawer-preview"><img src="${project.preview.src}" alt="${project.preview.alt}" /></div>`
        : "";

  const galleryPhotosMarkup = project.mediaGallery?.photos?.length
    ? `
      <div>
        <div class="drawer-label">Event, Award &amp; Prototype Gallery (Click to Enlarge)</div>
        <div class="drawer-photo-grid">
          ${project.mediaGallery.photos
            .map(
              (p, idx) => `
                <button type="button" class="drawer-photo-btn" data-lightbox-idx="${idx}">
                  <img src="${p.src}" alt="${p.label}" loading="lazy" />
                  <span>${p.label}</span>
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    `
    : "";

  const pool = PROJECTS.some((p) => p.id === project.id) ? PROJECTS : ALL_LOOKUP_PROJECTS;
  const pIdx = pool.findIndex((p) => p.id === project.id);
  const prevProj = pool[(pIdx - 1 + pool.length) % pool.length];
  const nextProj = pool[(pIdx + 1) % pool.length];

  drawerBody.innerHTML = `
    ${drawerPreviewMarkup}

    <div class="drawer-role-box">
      <strong>My Role &amp; Ownership</strong>
      <span>${project.role}</span>
    </div>

    <p class="project-summary">${project.summary}</p>

    ${galleryPhotosMarkup}

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
      <div class="drawer-label">What I Built &amp; Key Highlights</div>
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

    <div class="drawer-cycle-footer">
      <button type="button" class="text-link text-link-muted" data-drawer-goto="${prevProj.id}">← ${prevProj.title}</button>
      <button type="button" class="text-link" data-drawer-goto="${nextProj.id}">${nextProj.title} →</button>
    </div>
  `;

  projectDrawer.hidden = false;
  projectDrawer.querySelector(".drawer-panel")?.scrollTo({ top: 0 });
  document.body.style.overflow = "hidden";
  if (updateHash) {
    try {
      history.replaceState(null, "", `#project=${encodeURIComponent(project.id)}`);
    } catch {}
  }
  if (saveFocus) {
    drawerCloseBtn?.focus({ preventScroll: true });
  }
}

function openResumeModal() {
  if (!resumeModal) return;
  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  resumeModal.hidden = false;
  document.body.style.overflow = "hidden";
  resumeCloseBtn?.focus({ preventScroll: true });
}

function closeOverlays() {
  const wasOpen =
    (projectDrawer && !projectDrawer.hidden) || (resumeModal && !resumeModal.hidden);

  projectDrawer?.querySelectorAll("video").forEach((v) => v.pause());

  if (projectDrawer) projectDrawer.hidden = true;
  if (resumeModal) resumeModal.hidden = true;
  currentDrawerProjectId = null;
  closeLightbox();
  document.body.style.overflow = "";

  if (window.location.hash.startsWith("#project=")) {
    try {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    } catch {}
  }

  if (wasOpen && lastFocusedElement) {
    lastFocusedElement.focus({ preventScroll: true });
    lastFocusedElement = null;
  }
}

document.addEventListener("click", (e) => {
  const target = e.target;
  if (!(target instanceof Element)) return;

  if (target.closest("a")) {
    return;
  }

  const drawerGoto = target.closest("[data-drawer-goto]");
  if (drawerGoto) {
    openProjectDrawer(drawerGoto.getAttribute("data-drawer-goto"), true, false);
    return;
  }

  const lightboxTrigger = target.closest("[data-lightbox-idx]");
  if (lightboxTrigger && currentDrawerProjectId) {
    const proj = ALL_LOOKUP_PROJECTS.find((p) => p.id === currentDrawerProjectId);
    if (proj?.mediaGallery?.photos?.length) {
      openLightbox(
        proj.mediaGallery.photos,
        Number(lightboxTrigger.getAttribute("data-lightbox-idx") || 0)
      );
    }
    return;
  }

  if (target.closest("[data-close-lightbox]") || target === mediaLightbox) {
    closeLightbox();
    return;
  }

  const projectTrigger = target.closest("[data-open-project]");
  if (projectTrigger) {
    if (performance.now() < suppressCardClickUntil) return;
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
  if (e.key === "Escape") {
    if (mediaLightbox && !mediaLightbox.hidden) {
      closeLightbox();
    } else {
      closeOverlays();
    }
    return;
  }

  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    const delta = e.key === "ArrowLeft" ? -1 : 1;
    if (mediaLightbox && !mediaLightbox.hidden) {
      e.preventDefault();
      stepLightbox(delta);
      return;
    }
    if (projectDrawer && !projectDrawer.hidden) {
      e.preventDefault();
      cycleDrawerProject(delta);
      return;
    }
    if (marqueeHovered || document.activeElement?.closest("#work")) {
      e.preventDefault();
      stepMarqueeBy(delta < 0 ? "prev" : "next");
      return;
    }
  }

  if (
    (e.key === "Enter" || e.key === " ") &&
    document.activeElement instanceof HTMLElement &&
    document.activeElement.hasAttribute("data-open-project") &&
    document.activeElement.tagName !== "BUTTON" &&
    document.activeElement.tagName !== "A"
  ) {
    e.preventDefault();
    openProjectDrawer(document.activeElement.getAttribute("data-open-project"));
    return;
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
   4. Copy Email & Toast
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

document.querySelectorAll("[data-send-email]").forEach((link) => {
  link.addEventListener("click", async (e) => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      e.preventDefault();
      window.location.href = `mailto:${EMAIL}`;
      return;
    }
    try {
      await navigator.clipboard.writeText(EMAIL);
      showToast(`Opening Gmail · Copied ${EMAIL}`);
    } catch {
      showToast(`Opening Gmail (${EMAIL})`);
    }
  });
});

/* ==========================================================================
   5. Scroll Progress, Active Nav, Back-to-Top & Reveal Choreography
   ========================================================================== */

const siteHeader = document.getElementById("site-header");
const progressBar = document.getElementById("scroll-progress-bar");
const ledgerWrap = document.getElementById("ledger-wrap");
const ledgerRailFill = document.getElementById("ledger-rail-fill");
const backToTopBtn = document.getElementById("back-to-top-btn");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sectionIds = [...new Set(navLinks.map((l) => l.getAttribute("data-section")).filter(Boolean))];
const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let scrollRatio = 0;

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollRatio = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0;

  if (progressBar) progressBar.style.width = `${(scrollRatio * 100).toFixed(2)}%`;
  if (siteHeader) siteHeader.classList.toggle("is-scrolled", scrollTop > 18);
  if (backToTopBtn) backToTopBtn.classList.toggle("is-visible", scrollTop > 520);

  if (ledgerWrap && ledgerRailFill) {
    const rect = ledgerWrap.getBoundingClientRect();
    const viewH = window.innerHeight;
    const fill = Math.min(1, Math.max(0, (viewH * 0.72 - rect.top) / Math.max(1, rect.height)));
    ledgerRailFill.style.height = `${(fill * 100).toFixed(1)}%`;
  }

  let currentId = null;
  const atPageBottom = docHeight > 0 && scrollTop >= docHeight - 28;
  if (atPageBottom && sections.length > 0) {
    currentId = sections[sections.length - 1].id;
  } else {
    for (const sec of sections) {
      if (sec.getBoundingClientRect().top <= 170) {
        currentId = sec.id;
      }
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
   6. Theme Switcher (Editorial Light ↔ Warm Charcoal Dark)
   ========================================================================== */

const themeToggleBtn = document.getElementById("theme-toggle-btn");
const metaThemeColor = document.getElementById("meta-theme-color");

function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (metaThemeColor) metaThemeColor.setAttribute("content", "#161614");
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (metaThemeColor) metaThemeColor.setAttribute("content", "#f4f1ea");
  }
  try {
    localStorage.setItem("arpit-theme", theme);
  } catch {}
}

// Sync meta theme-color with initial head script state
if (getCurrentTheme() === "dark" && metaThemeColor) {
  metaThemeColor.setAttribute("content", "#161614");
}

themeToggleBtn?.addEventListener("click", () => {
  const next = getCurrentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  showToast(next === "dark" ? "Dark mode" : "Light mode");
});

/* ==========================================================================
   7. Visibly Animated Calm Pastel Silk Waves (Organic + Cursor/Scroll Reactive)
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
  let waveRafId = null;
  const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!motionEnabled) drawFrame();
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

  const lightLayers = [
    { baseY: 0.24, amp: 54, freq: 0.0021, color: "rgba(186, 211, 193, 0.36)", stroke: "rgba(25, 66, 53, 0.1)" },
    { baseY: 0.48, amp: 68, freq: 0.0017, color: "rgba(236, 207, 188, 0.33)", stroke: "rgba(138, 54, 25, 0.09)" },
    { baseY: 0.72, amp: 60, freq: 0.0024, color: "rgba(195, 214, 228, 0.32)", stroke: "rgba(58, 92, 122, 0.09)" },
    { baseY: 0.9, amp: 44, freq: 0.0019, color: "rgba(218, 206, 224, 0.28)", stroke: "rgba(88, 72, 108, 0.08)" },
  ];

  const darkLayers = [
    { baseY: 0.24, amp: 54, freq: 0.0021, color: "rgba(44, 72, 62, 0.42)", stroke: "rgba(127, 184, 163, 0.14)" },
    { baseY: 0.48, amp: 68, freq: 0.0017, color: "rgba(74, 52, 43, 0.38)", stroke: "rgba(224, 145, 114, 0.12)" },
    { baseY: 0.72, amp: 60, freq: 0.0024, color: "rgba(42, 57, 72, 0.4)", stroke: "rgba(148, 180, 206, 0.12)" },
    { baseY: 0.9, amp: 44, freq: 0.0019, color: "rgba(56, 48, 66, 0.36)", stroke: "rgba(176, 160, 196, 0.1)" },
  ];

  function drawFrame() {
    ctx.clearRect(0, 0, width, height);

    const layers = getCurrentTheme() === "dark" ? darkLayers : lightLayers;

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
  }

  function loop() {
    drawFrame();
    if (motionEnabled) {
      t += 0.0085;
      waveRafId = requestAnimationFrame(loop);
    } else {
      waveRafId = null;
    }
  }

  resize();

  toggleMotionBtn?.addEventListener("click", () => {
    motionEnabled = !motionEnabled;
    toggleMotionBtn.textContent = motionEnabled
      ? "Background motion: On"
      : "Background motion: Paused";
    if (motionEnabled && !waveRafId) {
      waveRafId = requestAnimationFrame(loop);
    }
  });

  if (motionEnabled) {
    waveRafId = requestAnimationFrame(loop);
  } else {
    drawFrame();
  }
}

// Boot
renderProjects();
renderSkills();
initPastelWaveCanvas();

// Support direct deep-links and browser Back/Forward hash changes (#project=... or #resume)
function syncFromLocationHash() {
  if (window.location.hash.startsWith("#project=")) {
    const targetId = decodeURIComponent(window.location.hash.replace("#project=", ""));
    if (currentDrawerProjectId !== targetId || projectDrawer?.hidden) {
      openProjectDrawer(targetId, false);
    }
  } else if (window.location.hash === "#resume") {
    if (resumeModal?.hidden) {
      openResumeModal();
    }
  } else if (
    (projectDrawer && !projectDrawer.hidden) ||
    (resumeModal && !resumeModal.hidden)
  ) {
    // Only auto-close if hash moved to a non-overlay hash (e.g. Back button)
    if (!window.location.hash || !window.location.hash.startsWith("#project=")) {
      closeOverlays();
    }
  }
}

syncFromLocationHash();
window.addEventListener("hashchange", syncFromLocationHash);

let openedForPrint = false;
window.addEventListener("beforeprint", () => {
  if (resumeModal && resumeModal.hidden) {
    resumeModal.hidden = false;
    openedForPrint = true;
  }
});
window.addEventListener("afterprint", () => {
  if (openedForPrint && resumeModal) {
    resumeModal.hidden = true;
    openedForPrint = false;
  }
});
