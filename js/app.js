/**
 * Unstuckable.com - Main Application Scripts
 * Executive Luxury Theme (Champagne Gold & Warm Obsidian)
 * Upgraded Animations, Scroll Reveal & Interactive Controls
 */

document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
  initSlideTabs();
  initAgitationToggle();
  initVideoModal();
  initFaqAccordion();
  initMobileNav();
  initScrollEffects();
});

/* ==========================================================
   1. Scroll Reveal Engine (Intersection Observer)
   ========================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll, .reveal-scale");

  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.12
  });

  revealElements.forEach((el) => observer.observe(el));
}

/* ==========================================================
   2. S.L.I.D.E. Framework Interactive Tabs
   ========================================================== */
const slideFrameworkData = {
  S: {
    letter: "S",
    name: "Story",
    question: "What script are you running that no longer serves your future?",
    subtitle: "Dismantling Obsolete Identity Narratives",
    description: "High performers rarely fail due to a lack of effort. They fail because they are unconsciously executing rules, defensive scripts, and expectations written for an earlier version of their life or organization. When forward is blocked, the first step is interrogating the operating story.",
    coreQuestion: "“Is this decision serving who I am becoming, or who I used to be to survive?”",
    keyActions: [
      "Identify the unspoken mental contract keeping you locked in gridlock.",
      "Distinguish between empirical reality vs. inherited psychological conditioning.",
      "Rewrite the 1-sentence governing narrative of your current venture."
    ],
    metric: "Eliminates ~40% of cognitive decision fatigue"
  },
  L: {
    letter: "L",
    name: "Load",
    question: "What emotional cargo from 5 years ago are you forcing into today's decision?",
    subtitle: "Jettisoning Historical Weight & Cognitive Sunk Costs",
    description: "When an airplane is over maximum gross weight, pushing the throttles harder won't create lift—it only burns through fuel faster. The 'Load' phase audits unresolved past commitments, old resentments, and sunk costs that weigh down your execution velocity.",
    coreQuestion: "“If I started with zero historical obligations today, would I re-choose this burden?”",
    keyActions: [
      "Conduct a ruthless cognitive audit of past commitments draining vital bandwidth.",
      "Renegotiate or formally sunset outdated relational and operational agreements.",
      "Protect executive focus by reclaiming high-yield creative capacity."
    ],
    metric: "Reclaims 12-15 hours/week of clear strategic headspace"
  },
  I: {
    letter: "I",
    name: "Imagine",
    question: "What else becomes possible if failure is completely off the table?",
    subtitle: "Uncapping Constrained Vision & Creative Horizons",
    description: "When stuck, the human nervous system naturally narrows its horizon into fight, flight, or freeze. In the 'Imagine' phase, empirical psychological tools remove artificial self-imposed ceilings, allowing leaders to explore bold, non-linear solutions without the paralyzing fear of short-term risk.",
    coreQuestion: "“What would we build if we had zero need to defend past decisions?”",
    keyActions: [
      "Temporarily suspend risk calculation to unlock lateral possibilities.",
      "Map out 3 high-impact asymmetric opportunities with high upside.",
      "Align team vision around expansive momentum rather than defensive preservation."
    ],
    metric: "Unlocks 3x more innovative strategic pathways"
  },
  D: {
    letter: "D",
    name: "Detour",
    question: "If the front door is barricaded, where is the side entrance?",
    subtitle: "Bypassing Barricades Through Lateral Navigation",
    description: "When forward isn't working, force only deepens the gridlock. Resistance is not your enemy—resistance is vital diagnostic information. The 'Detour' framework maps side entrances, unconventional partnerships, and flank maneuvers that bypass the locked front gate entirely.",
    coreQuestion: "“Where is the friction-free side door that everyone else is ignoring?”",
    keyActions: [
      "Stop wasting political, financial, and emotional capital on immovable barriers.",
      "Identify lateral leverage points, hidden champions, and alternative routes.",
      "Design agile, lightweight exploratory probes to test new corridors."
    ],
    metric: "Reduces cycle time to breakthrough by up to 60%"
  },
  E: {
    letter: "E",
    name: "Execute",
    question: "How do you convert raw psychological insight into immediate, tangible momentum?",
    subtitle: "High-Velocity Micro-Actions & Sustained Momentum",
    description: "Insight without action is just intellectual entertainment. The final pillar of S.L.I.D.E. converts empirical breakthroughs into tangible, micro-velocity momentum that builds unstoppable compounding progress.",
    coreQuestion: "“What is the 7-minute decisive action that initiates physical momentum today?”",
    keyActions: [
      "Break complex breakthroughs down into high-velocity 24-hour sprints.",
      "Deploy real-world experiments to gather rapid empirical feedback.",
      "Anchor momentum with systematic accountability and reinforcement loops."
    ],
    metric: "Generates measurable forward traction within 48 hours"
  }
};

function initSlideTabs() {
  const tabButtons = document.querySelectorAll(".slide-tab-btn");
  const letterBadge = document.getElementById("slide-detail-letter");
  const nameDisplay = document.getElementById("slide-detail-name");
  const subtitleDisplay = document.getElementById("slide-detail-subtitle");
  const questionDisplay = document.getElementById("slide-detail-question");
  const descriptionDisplay = document.getElementById("slide-detail-desc");
  const coreQuestionDisplay = document.getElementById("slide-detail-core-q");
  const metricDisplay = document.getElementById("slide-detail-metric");
  const actionsList = document.getElementById("slide-detail-actions");

  if (!tabButtons.length || !letterBadge) return;

  function switchTab(key) {
    const data = slideFrameworkData[key];
    if (!data) return;

    // Update active state on tab buttons with smooth feedback
    tabButtons.forEach(btn => {
      const btnKey = btn.getAttribute("data-slide-key");
      if (btnKey === key) {
        btn.classList.add("executive-tab-active", "border-[#d4af37]", "text-white");
        btn.classList.remove("border-stone-800", "text-stone-400");
      } else {
        btn.classList.remove("executive-tab-active", "border-[#d4af37]", "text-white");
        btn.classList.add("border-stone-800", "text-stone-400");
      }
    });

    // Content container transition
    const contentArea = document.getElementById("slide-detail-content");
    if (contentArea) {
      contentArea.style.opacity = "0";
      contentArea.style.transform = "translateY(12px)";
      
      setTimeout(() => {
        letterBadge.innerText = data.letter;
        nameDisplay.innerText = data.name;
        subtitleDisplay.innerText = data.subtitle;
        questionDisplay.innerText = `“${data.question}”`;
        descriptionDisplay.innerText = data.description;
        coreQuestionDisplay.innerText = data.coreQuestion;
        if (metricDisplay) metricDisplay.innerText = data.metric;

        if (actionsList) {
          actionsList.innerHTML = data.keyActions.map((action, idx) => `
            <li class="flex items-start gap-3.5 text-sm sm:text-base text-stone-300 transform translate-y-2 opacity-0 transition-all duration-300" style="transition-delay: ${idx * 60}ms" id="action-item-${idx}">
              <span class="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#fef08a] border border-[#d4af37]/40 flex items-center justify-center shrink-0 mt-0.5 text-xs font-serif font-bold">✓</span>
              <span>${action}</span>
            </li>
          `).join("");

          setTimeout(() => {
            data.keyActions.forEach((_, idx) => {
              const item = document.getElementById(`action-item-${idx}`);
              if (item) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
              }
            });
          }, 30);
        }

        contentArea.style.opacity = "1";
        contentArea.style.transform = "translateY(0)";
      }, 160);
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-slide-key");
      switchTab(key);
    });
  });
}

/* ==========================================================
   3. Agitation Section: Force vs Navigation Interactive Toggle
   ========================================================== */
function initAgitationToggle() {
  const btnForce = document.getElementById("toggle-force-mode");
  const btnSlide = document.getElementById("toggle-slide-mode");
  const forceCard = document.getElementById("card-force-approach");
  const slideCard = document.getElementById("card-slide-approach");

  if (!btnForce || !btnSlide || !forceCard || !slideCard) return;

  btnForce.addEventListener("click", () => {
    btnForce.classList.add("bg-rose-950/40", "text-rose-200", "border-rose-500/50");
    btnForce.classList.remove("bg-stone-900/60", "text-stone-400", "border-stone-800");

    btnSlide.classList.remove("bg-[#d4af37]/20", "text-[#fef08a]", "border-[#d4af37]/50");
    btnSlide.classList.add("bg-stone-900/60", "text-stone-400", "border-stone-800");

    forceCard.classList.remove("opacity-40", "scale-95");
    forceCard.classList.add("ring-2", "ring-rose-500/40", "scale-100");

    slideCard.classList.add("opacity-40", "scale-95");
    slideCard.classList.remove("ring-2", "ring-[#d4af37]/40", "scale-100");
  });

  btnSlide.addEventListener("click", () => {
    btnSlide.classList.add("bg-[#d4af37]/20", "text-[#fef08a]", "border-[#d4af37]/50");
    btnSlide.classList.remove("bg-stone-900/60", "text-stone-400", "border-stone-800");

    btnForce.classList.remove("bg-rose-950/40", "text-rose-200", "border-rose-500/50");
    btnForce.classList.add("bg-stone-900/60", "text-stone-400", "border-stone-800");

    slideCard.classList.remove("opacity-40", "scale-95");
    slideCard.classList.add("ring-2", "ring-[#d4af37]/40", "scale-100");

    forceCard.classList.add("opacity-40", "scale-95");
    forceCard.classList.remove("ring-2", "ring-rose-500/40", "scale-100");
  });
}

/* ==========================================================
   4. 2-Minute Video / Explainer Modal with Smooth Pop
   ========================================================== */
function initVideoModal() {
  const modal = document.getElementById("video-modal");
  const modalBox = modal ? modal.querySelector("div") : null;
  const openButtons = document.querySelectorAll(".open-video-modal-btn");
  const closeButtons = document.querySelectorAll(".close-video-modal-btn");

  if (!modal) return;

  function openModal() {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    if (modalBox) {
      modalBox.style.opacity = "0";
      modalBox.style.transform = "scale(0.95)";
      setTimeout(() => {
        modalBox.style.transition = "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
        modalBox.style.opacity = "1";
        modalBox.style.transform = "scale(1)";
      }, 10);
    }
  }

  function closeModal() {
    if (modalBox) {
      modalBox.style.opacity = "0";
      modalBox.style.transform = "scale(0.95)";
      setTimeout(() => {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
      }, 200);
    } else {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  }

  openButtons.forEach(btn => btn.addEventListener("click", openModal));
  closeButtons.forEach(btn => btn.addEventListener("click", closeModal));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

/* ==========================================================
   5. FAQ Accordion with Silky Smooth Expansion
   ========================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    if (trigger && content) {
      trigger.addEventListener("click", () => {
        const isOpen = content.classList.contains("open");

        // Close all other items smoothly
        items.forEach(otherItem => {
          const otherContent = otherItem.querySelector(".faq-content");
          const otherIcon = otherItem.querySelector(".faq-icon");
          if (otherContent) otherContent.classList.remove("open");
          if (otherIcon) otherIcon.classList.remove("rotate-180");
        });

        // Toggle current item
        if (!isOpen) {
          content.classList.add("open");
          if (icon) icon.classList.add("rotate-180");
        }
      });
    }
  });
}

/* ==========================================================
   6. Mobile Navigation Toggle
   ========================================================== */
function initMobileNav() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

/* ==========================================================
   7. Scroll Effects & Floating Diagnostic Pill
   ========================================================== */
function initScrollEffects() {
  const floatingPill = document.getElementById("floating-assessment-pill");
  const heroSection = document.getElementById("hero-section");

  if (!floatingPill || !heroSection) return;

  window.addEventListener("scroll", () => {
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    if (heroBottom < 0) {
      floatingPill.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
      floatingPill.classList.add("opacity-100", "pointer-events-auto", "translate-y-0");
    } else {
      floatingPill.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
      floatingPill.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
    }
  }, { passive: true });
}
