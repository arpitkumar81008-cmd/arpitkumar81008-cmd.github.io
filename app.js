/* ==========================================================================
   Arpit Kumar Gupta — Editorial Pastel Portfolio, Infinite L→R Bento Showcase,
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
    warmBadge: true,
    year: "2026",
    role: "Built the Meridian Burnout Tracker & Fair-Rotation Engine",
    summary:
      "Dual-product remote collaboration platform pairing Meridian (individual overtime & late-night meeting burnout tracker) with Proxy (asynchronous meeting attendance & sunrise summaries).",
    preview: {
      type: "image",
      src: "./assets/meridian-preview.png",
      drawerIframe: "./assets/meridian-demo/dashboard.html",
      alt: "Meridian Timezone Equity & Burnout Tracker Dashboard",
    },
    leadMetric: "1st Place · Individual Burnout & Overtime Tracker",
    stack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Python", "Git & GitHub"],
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
      { label: "Workflow", value: "Burn Risk → Rotate" },
    ],
    architecture: [
      "Team Calendar Logs ──▶ Meridian Burnout Tracker (My Module)",
      "                                 │ (Flags Overtime & Late-Night Load)",
      "                                 ▼",
      "             Fair Rotation Scheduler   OR  Proxy Async Attendance",
      "                                                 │",
      "                                                 ▼",
      "                              Sunrise Decision & Action Summary",
    ].join("\n"),
    highlights: [
      "Engineered the Meridian burnout-tracking engine to monitor how many overtime and late-night meetings each individual attends across global timezones.",
      "Designed automated burn-risk scoring and fair-rotation scheduling so off-hours sacrifices are shared equitably instead of overloading one teammate.",
      "Integrated Meridian seamlessly with the Proxy async briefing/summary workflow across a 6-screen interactive product, winning 1st Place at the Unprompted Hackathon.",
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
    warmBadge: false,
    year: "2026",
    role: "Solo Creator — Layout Engine, Bilingual Kinship & Cloud Sync",
    summary:
      "Bilingual (English & हिन्दी) multi-generational family tree web platform with an authentic Indian kinship solver, dual-mode zero-collision spatial layout engine, and private Cloud Firestore sync.",
    preview: {
      type: "image",
      src: "./assets/vanshvriksha.jpg",
      alt: "VanshVriksha Bilingual Family Tree Platform",
    },
    leadMetric: "Live PWA · Dual-Mode Spatial Engine · EN ↔ हिन्दी",
    stack: ["React", "Vite", "Firebase", "JavaScript", "CSS", "Git & GitHub"],
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
      { label: "Layout", value: "Zero-Collision DAG" },
      { label: "Language", value: "EN ↔ हिन्दी" },
      { label: "Sync", value: "Firestore + PWA" },
    ],
    architecture: [
      "React 18 + Vite ──▶ Dual-Mode Spatial Engine (Subtree + Manhattan)",
      "                                 │",
      "                                 ▼",
      "      Phonetic Devanagari Translit (Online + Offline) & Kinship Solver",
      "                                 │",
      "                                 ▼",
      "    Private Firestore ACLs + HEIC Compression + 2× DPI Poster Export",
    ].join("\n"),
    highlights: [
      "Engineered a dual-mode zero-collision flowchart engine supporting both full top-down lineage packing and person-centric bilateral Manhattan routing.",
      "Built instant English ↔ हिन्दी switching, offline-capable phonetic Devanagari transliteration, and authentic Indian kinship resolution (Tauji, Chacha, Bua, Mama, Mausi, etc.).",
      "Implemented private-by-default Cloud Firestore multi-tree security rules, 25-step undo/redo, family invite codes, client-side HEIC photo compression (<= 8 KB), and 2× DPI PNG/PDF poster export.",
    ],
  },
  {
    id: "campus-water-conservation",
    title: "Campus Water Leak Portal",
    category: "web",
    bentoSize: "compact",
    badge: "1st Place · Problem Protocol",
    warmBadge: true,
    year: "2026",
    role: "Built Photo-Upload Web Portal & Google Maps API Integration",
    summary:
      "Campus-wide water leak reporting website where students and staff snap leak photos, attach live Google Maps API location pins, and dispatch repair tickets to maintenance teams.",
    preview: {
      type: "image",
      src: "./assets/campus-water-preview.png",
      alt: "Campus Water Leak Photo Upload & Google Maps API Dispatch Portal",
    },
    leadMetric: "1st Place · Photo Evidence + Google Maps Geotagging",
    stack: ["HTML", "CSS", "JavaScript", "Google Maps API", "Git & GitHub"],
    links: [
      {
        label: "GitHub Profile",
        url: "https://github.com/arpitkumar81008-cmd",
        primary: true,
      },
    ],
    metrics: [
      { label: "Result", value: "1st Place" },
      { label: "My Focus", value: "Web + Maps API" },
      { label: "Routing", value: "Maintenance Crew" },
    ],
    architecture: [
      "Campus Reporter ──▶ Web Camera / Photo Evidence Upload (My Module)",
      "                                 │",
      "                                 ▼",
      "             Google Maps API Pin & Address Verification",
      "                                 │",
      "                                 ▼",
      "         Automated Ticket Dispatch ──▶ Campus Maintenance Team",
    ].join("\n"),
    highlights: [
      "Built the user-facing web application allowing anyone on campus to photograph active water leaks and submit structured incident reports in seconds.",
      "Integrated the Google Maps API so every uploaded leak photo carries verified campus coordinates and exact building/zone address details.",
      "Wired submissions to forward directly to the dedicated maintenance response workflow for rapid pipe repair, winning 1st Place at The Problem Protocol Hackathon.",
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
    warmBadge: false,
    year: "2026",
    role: "Hardware Prototyping, Soldering, Firmware Integration & Live Pitch",
    summary:
      "Low-latency ESP32-S3 hardware voice assistant streaming 16kHz I2S MEMS audio to a local FastAPI, Silero VAD, and Faster-Whisper server—cutting latency from ~4.5s to ~1.5s.",
    preview: {
      type: "image",
      src: "./assets/sih-voice-assistant.png",
      alt: "ESP32-S3 and INMP441 hardware schematic",
    },
    leadMetric: "Latency: ~4.5s → ~1.5s · 921,600 Baud · Live Demo",
    stack: [
      "C",
      "C++",
      "ESP32-S3",
      "FreeRTOS",
      "INMP441 I2S",
      "Hardware Soldering",
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
      { label: "Latency", value: "~1.5s (-66%)" },
      { label: "Serial Rate", value: "921,600 baud" },
      { label: "SIH 2026", value: "6th Place" },
    ],
    architecture: [
      "Soldered INMP441 Mic (I2S) ──▶ ESP32-S3 Core 0 (DMA + DC Filter)",
      "                                        │ (3s FIFO Ring Buffer)",
      "                                        ▼",
      "                        ESP32-S3 Core 1 (921,600-Baud Framing)",
      "                                        │",
      "                                        ▼",
      "             FastAPI ──▶ Silero VAD ──▶ Faster-Whisper ──▶ Live Demo",
    ].join("\n"),
    highlights: [
      "Handled physical hardware prototyping and precision pin-header soldering for the ESP32-S3-WROOM-1 board and INMP441 digital I2S MEMS microphone bench.",
      "Compiled teammates' modules, resolved integration bottlenecks, and flashed the combined dual-core FreeRTOS firmware directly onto the ESP32-S3.",
      "Led the stage presentation and live voice-assistant demonstration before the Smart India Hackathon (SIH) 2026 internal jury, securing 6th Place.",
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
          caption: "Dual-core ESP32-S3-N16R8 powered on the breadboard running integrated FreeRTOS firmware.",
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
    warmBadge: false,
    year: "2026",
    role: "Solo Builder — End-to-End Agent Pipeline (~1-Hour Sprint)",
    summary:
      "Evidence-backed autonomous research agent built solo during a ~1-hour online sprint—discovering sources, extracting rendered pages, and synthesizing conflict-aware reports.",
    preview: {
      type: "image",
      src: "./assets/researchmesh.png",
      alt: "ResearchMesh web application interface",
    },
    leadMetric: "Solo 1-Hr Build · 4-Stage Pipeline · 429/503 Fallback",
    stack: ["Python", "Google Gemini", "TinyFish SDK", "Pydantic", "Streamlit", "Git & GitHub"],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/arpitkumar81008-cmd/ResearchMesh",
        primary: true,
      },
    ],
    metrics: [
      { label: "Sprint", value: "Solo (~1 Hr)" },
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
      "Built solo end-to-end during an intensive ~1-hour online hackathon-style sprint in collaboration with Galgotias University's TechnoJam Club.",
      "Engineered multi-query web discovery, parallel Chromium extraction, and tiered Google Gemini fallback to survive 429 rate-limit and 503 capacity spikes.",
      "Enforced strict Pydantic schemas separating corroborated evidence from conflicting claims, with one-click Markdown and JSON export.",
    ],
  },
];

/* Dedicated Coursework / Algorithm Repository shown when filtering strictly by Java */
const SUPPLEMENTAL_SKILL_PROJECTS = [
  {
    id: "java-dsa-suite",
    title: "Java Algorithms & OOP Suite",
    category: "cs",
    bentoSize: "wide",
    badge: "40+ Programs · Core CS",
    warmBadge: false,
    year: "2025 — 2026",
    role: "Solo Author — Data Structures, Matrix Manipulation & OOP",
    summary:
      "Comprehensive repository of 40+ Java implementations spanning matrix transformations, recursion, string algorithms, sorting, and object-oriented programming from ICSE/ISC through B.Tech CSE.",
    leadMetric: "40+ Java Source Files · Matrices, Recursion & OOP",
    stack: ["Java", "Git & GitHub"],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/arpitkumar81008-cmd/Arpit-github-all-projects",
        primary: true,
      },
    ],
    metrics: [
      { label: "Programs", value: "40+ in Java" },
      { label: "Focus", value: "DSA & OOP" },
      { label: "Foundation", value: "ISC → B.Tech" },
    ],
    architecture: [
      "Problem Specification ──▶ Object-Oriented Class Design (Java)",
      "                                      │",
      "                                      ▼",
      "        Matrix / String / Recursive Algorithm Implementation",
      "                                      │",
      "                                      ▼",
      "               CLI & Swing GUI Verification Suites",
    ].join("\n"),
    highlights: [
      "Implemented 40+ standalone Java programs covering 2D matrix transposition/rotation, anagram generators, number theory, and custom OOP data models.",
      "Built interactive Java Swing mini-applications alongside core algorithmic problem sets.",
      "Serves as my foundational problem-solving repository across ICSE/ISC computer science and first-year B.Tech CSE.",
    ],
  },
];

const ALL_LOOKUP_PROJECTS = [...PROJECTS, ...SUPPLEMENTAL_SKILL_PROJECTS];

const SKILL_GROUPS = [
  {
    title: "Core CS & Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Web & Cloud Platforms",
    skills: ["React", "Vite", "Firebase", "Google Maps API", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Hardware & Edge Systems",
    skills: ["ESP32-S3", "FreeRTOS", "INMP441 I2S", "Hardware Soldering"],
  },
  {
    title: "AI, Backend & Workflow",
    skills: ["Google Gemini", "FastAPI", "Faster-Whisper", "Silero VAD", "Pydantic", "TinyFish SDK", "Streamlit", "Git & GitHub"],
  },
];

/* ==========================================================================
   1. Infinite Left-to-Right Bento Showcase + Strict In-Place Filter
   ========================================================================== */

const projectsShowcase = document.getElementById("projects-showcase");
const activeFilterBar = document.getElementById("active-filter-bar");
const activeFilterText = document.getElementById("active-filter-text");
const clearFilterBtn = document.getElementById("clear-filter-btn");
const layoutModeBtn = document.getElementById("layout-mode-btn");
const layoutModeLabel = document.getElementById("layout-mode-label");
const skillsGrid = document.getElementById("skills-grid");
const skillStatus = document.getElementById("skill-status");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let activeFilter = "all";
let activeSkill = null;
let userPrefersGrid = prefersReducedMotion;

// Marquee animation state
let marqueeRafId = null;
let marqueeLastTs = 0;
let marqueeOffsetX = 0;
let marqueeCurrentSpeed = 42; // px per second moving Left -> Right
let marqueeHovered = false;
let marqueeSingleWidth = 0;

function stopMarqueeLoop() {
  if (marqueeRafId) {
    cancelAnimationFrame(marqueeRafId);
    marqueeRafId = null;
  }
  marqueeLastTs = 0;
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

function isMarqueeActive() {
  return activeFilter === "all" && !activeSkill && !userPrefersGrid;
}

function buildCardHTML(project, { gridSpanClass = "", cardIdx = 0, isClone = false } = {}) {
  const primaryLink = project.links[0];
  const badgeClass = project.warmBadge ? "project-badge is-warm" : "project-badge";
  const sizeClass = project.bentoSize === "wide" ? "project-card--wide" : "project-card--compact";

  const previewMarkup =
    project.preview?.type === "image"
      ? `<div class="project-preview"><img src="${project.preview.src}" alt="${project.preview.alt}" loading="lazy" /></div>`
      : "";

  const tabIndexAttr = isClone ? `-1` : `0`;
  const ariaHiddenAttr = isClone ? `aria-hidden="true"` : `role="button" aria-label="Open ${project.title} details"`;
  const linkTabIndex = isClone ? `tabindex="-1"` : "";

  return `
    <article
      class="project-card ${sizeClass} ${gridSpanClass}"
      style="--card-idx: ${cardIdx}"
      data-open-project="${project.id}"
      tabindex="${tabIndexAttr}"
      ${ariaHiddenAttr}
    >
      <div>
        ${previewMarkup}
        <div class="project-top">
          <span class="${badgeClass}">${project.badge}</span>
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

function computeBentoSpans(count) {
  if (count === 5) return ["span-7", "span-5", "span-5", "span-7", "span-12"];
  if (count === 4) return ["span-7", "span-5", "span-5", "span-7"];
  if (count === 3) return ["span-7", "span-5", "span-12"];
  if (count === 2) return ["span-6", "span-6"];
  return ["span-12"];
}

function updateFilterUI(filteredCount) {
  const isStrictFiltered = activeFilter !== "all" || Boolean(activeSkill);

  if (activeFilterBar && activeFilterText) {
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

  if (layoutModeBtn && layoutModeLabel) {
    if (isStrictFiltered) {
      layoutModeBtn.hidden = true;
    } else {
      layoutModeBtn.hidden = false;
      layoutModeBtn.classList.toggle("is-grid", userPrefersGrid);
      layoutModeLabel.textContent = userPrefersGrid ? "Bento Grid (Click to Auto-Scroll)" : "Auto-Scroll L→R (Click for Grid)";
    }
  }
}

function startLeftToRightMarquee() {
  stopMarqueeLoop();

  const marqueeEl = projectsShowcase?.querySelector(".bento-marquee");
  const trackEl = projectsShowcase?.querySelector(".bento-marquee__track");
  const firstGroup = projectsShowcase?.querySelector(".bento-marquee__group");
  if (!marqueeEl || !trackEl || !firstGroup) return;

  function measure() {
    marqueeSingleWidth = firstGroup.offsetWidth;
    if (marqueeSingleWidth > 0 && (marqueeOffsetX < -marqueeSingleWidth || marqueeOffsetX > 0)) {
      marqueeOffsetX = -marqueeSingleWidth;
    }
  }

  measure();
  marqueeOffsetX = -marqueeSingleWidth;
  marqueeCurrentSpeed = 42;
  marqueeHovered = false;

  marqueeEl.addEventListener("pointerenter", () => {
    marqueeHovered = true;
  });
  marqueeEl.addEventListener("pointerleave", () => {
    marqueeHovered = false;
  });
  marqueeEl.addEventListener("focusin", () => {
    marqueeHovered = true;
  });
  marqueeEl.addEventListener("focusout", (e) => {
    if (!marqueeEl.contains(e.relatedTarget)) {
      marqueeHovered = false;
    }
  });

  // Allow horizontal trackpad scrolling along the reel
  marqueeEl.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && marqueeSingleWidth > 0) {
        e.preventDefault();
        marqueeOffsetX -= e.deltaX;
        while (marqueeOffsetX >= 0) marqueeOffsetX -= marqueeSingleWidth;
        while (marqueeOffsetX < -marqueeSingleWidth) marqueeOffsetX += marqueeSingleWidth;
        trackEl.style.transform = `translate3d(${marqueeOffsetX.toFixed(2)}px, 0, 0)`;
      }
    },
    { passive: false }
  );

  // Re-measure when images finish decoding or viewport resizes
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

    const targetSpeed = marqueeHovered || !motionEnabled ? 0 : 44;
    marqueeCurrentSpeed += (targetSpeed - marqueeCurrentSpeed) * 0.085;

    if (marqueeSingleWidth > 0 && marqueeCurrentSpeed > 0.05) {
      // Positive delta moves cards smoothly from LEFT to RIGHT
      marqueeOffsetX += marqueeCurrentSpeed * dt;
      if (marqueeOffsetX >= 0) {
        marqueeOffsetX -= marqueeSingleWidth;
      }
      trackEl.style.transform = `translate3d(${marqueeOffsetX.toFixed(2)}px, 0, 0)`;
    }

    marqueeRafId = requestAnimationFrame(step);
  }

  trackEl.style.transform = `translate3d(${marqueeOffsetX.toFixed(2)}px, 0, 0)`;
  marqueeRafId = requestAnimationFrame(step);
}

window.addEventListener("resize", () => {
  if (isMarqueeActive()) {
    const firstGroup = projectsShowcase?.querySelector(".bento-marquee__group");
    if (firstGroup) {
      marqueeSingleWidth = firstGroup.offsetWidth;
    }
  }
});

function renderProjects() {
  if (!projectsShowcase) return;
  stopMarqueeLoop();

  const filtered = getFilteredProjects();
  updateFilterUI(filtered.length);

  if (isMarqueeActive()) {
    const primaryCards = filtered
      .map((project, idx) => buildCardHTML(project, { cardIdx: idx, isClone: false }))
      .join("");
    const cloneCards = filtered
      .map((project, idx) => buildCardHTML(project, { cardIdx: idx, isClone: true }))
      .join("");

    projectsShowcase.innerHTML = `
      <div class="bento-marquee" aria-label="Auto-scrolling selected projects showcase">
        <div class="bento-marquee__track">
          <div class="bento-marquee__group">${primaryCards}</div>
          <div class="bento-marquee__group" aria-hidden="true">${cloneCards}</div>
        </div>
      </div>
    `;

    startLeftToRightMarquee();
  } else {
    const spans = computeBentoSpans(filtered.length);
    projectsShowcase.innerHTML = `
      <div class="projects-grid">
        ${filtered
          .map((project, idx) =>
            buildCardHTML(project, {
              gridSpanClass: spans[idx] || "span-12",
              cardIdx: idx,
              isClone: false,
            })
          )
          .join("")}
      </div>
    `;
  }
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
          skillStatus.textContent = `${activeSkill} — showing ${matches.length} matching project${matches.length === 1 ? "" : "s"}`;
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

clearFilterBtn?.addEventListener("click", () => {
  activeFilter = "all";
  activeSkill = null;
  if (skillStatus) skillStatus.textContent = "All skills";
  updateFilterTabs();
  renderSkills();
  renderProjects();
});

layoutModeBtn?.addEventListener("click", () => {
  userPrefersGrid = !userPrefersGrid;
  renderProjects();
});

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
   3. Right-Side Project Drawer, Deep-Linking & Printable Resume Modal
   ========================================================================== */

const projectDrawer = document.getElementById("project-drawer");
const drawerKicker = document.getElementById("drawer-kicker");
const drawerTitle = document.getElementById("drawer-title");
const drawerBody = document.getElementById("drawer-body");
const drawerCloseBtn = document.getElementById("drawer-close-btn");
const resumeModal = document.getElementById("resume-modal");
const resumeCloseBtn = document.getElementById("resume-close-btn");
const mediaLightbox = document.getElementById("media-lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

let lastFocusedElement = null;

function openLightbox(src, caption) {
  if (!mediaLightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = caption || "Project photo";
  if (lightboxCaption) lightboxCaption.textContent = caption || "";
  mediaLightbox.hidden = false;
}

function closeLightbox() {
  if (!mediaLightbox) return;
  mediaLightbox.hidden = true;
  if (lightboxImg) lightboxImg.src = "";
}

function openProjectDrawer(projectId, updateHash = true) {
  const project = ALL_LOOKUP_PROJECTS.find((p) => p.id === projectId);
  if (!project || !projectDrawer) return;

  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;

  drawerKicker.textContent = `${project.badge} · ${project.year}`;
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
              (p) => `
                <button type="button" class="drawer-photo-btn" data-lightbox-src="${p.src}" data-lightbox-caption="${p.caption}">
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
  `;

  projectDrawer.hidden = false;
  document.body.style.overflow = "hidden";
  if (updateHash) {
    try {
      history.replaceState(null, "", `#project=${encodeURIComponent(project.id)}`);
    } catch {}
  }
  drawerCloseBtn?.focus({ preventScroll: true });
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

  // Pause any playing drawer video before hiding
  projectDrawer?.querySelectorAll("video").forEach((v) => v.pause());

  if (projectDrawer) projectDrawer.hidden = true;
  if (resumeModal) resumeModal.hidden = true;
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

  const lightboxTrigger = target.closest("[data-lightbox-src]");
  if (lightboxTrigger) {
    openLightbox(
      lightboxTrigger.getAttribute("data-lightbox-src"),
      lightboxTrigger.getAttribute("data-lightbox-caption")
    );
    return;
  }

  if (target.closest("[data-close-lightbox]") || target === mediaLightbox) {
    closeLightbox();
    return;
  }

  const projectTrigger = target.closest("[data-open-project]");
  if (projectTrigger) {
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

/* ==========================================================================
   5. Scroll Progress, Active Nav, Ledger Trace & Reveal Choreography
   ========================================================================== */

const siteHeader = document.getElementById("site-header");
const progressBar = document.getElementById("scroll-progress-bar");
const ledgerWrap = document.getElementById("ledger-wrap");
const ledgerRailFill = document.getElementById("ledger-rail-fill");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sectionIds = [...new Set(navLinks.map((l) => l.getAttribute("data-section")).filter(Boolean))];
const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

let scrollRatio = 0;

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollRatio = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0;

  if (progressBar) progressBar.style.width = `${(scrollRatio * 100).toFixed(2)}%`;
  if (siteHeader) siteHeader.classList.toggle("is-scrolled", scrollTop > 18);

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
    if (metaThemeColor) metaThemeColor.setAttribute("content", "#ede9e0");
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

let motionEnabled = !prefersReducedMotion;
const toggleMotionBtn = document.getElementById("toggle-motion-btn");

if (toggleMotionBtn && !motionEnabled) {
  toggleMotionBtn.textContent = "Background motion: Paused";
}

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

// Support direct deep-links like #project=vanshvriksha or #resume
if (window.location.hash.startsWith("#project=")) {
  const initialId = decodeURIComponent(window.location.hash.replace("#project=", ""));
  openProjectDrawer(initialId, false);
} else if (window.location.hash === "#resume") {
  openResumeModal();
}

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
