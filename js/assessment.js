/**
 * Unstuckable.com - The 2-Minute Diagnostic Index Engine
 * Executive Luxury Theme (Champagne Gold & Warm Obsidian)
 * Upgraded Micro-Animations & Dynamic Feedback
 */

const diagnosticData = {
  questions: [
    {
      id: 1,
      pillar: "STORY",
      title: "1. The Default Mental Script",
      question: "When you hit a sudden gridlock in your leadership or high-stakes project, what is the default thought that loops in your mind?",
      options: [
        {
          text: "“I must not be working hard enough” or “I'm missing a core credential to pull this off.”",
          pillar: "S",
          weight: 3
        },
        {
          text: "“I am carrying too much old baggage and past promises to make a clean, unburdened move.”",
          pillar: "L",
          weight: 3
        },
        {
          text: "“I can't afford to take a radical swing right now—failure would be too costly to risk.”",
          pillar: "I",
          weight: 3
        },
        {
          text: "“The main front door is locked, and I don't see any other legitimate way through.”",
          pillar: "D",
          weight: 3
        },
        {
          text: "“I know exactly what to do conceptually, but I can't seem to translate it into physical action.”",
          pillar: "E",
          weight: 3
        }
      ]
    },
    {
      id: 2,
      pillar: "LOAD",
      title: "2. Emotional & Cognitive Cargo",
      question: "Reflecting on your current decision-making bandwidth, what feels heaviest right now?",
      options: [
        {
          text: "Unresolved commitments, legacy expectations, or emotional residue from 3–5 years ago.",
          pillar: "L",
          weight: 3
        },
        {
          text: "Outdated definitions of success that were handed to me by previous mentors or culture.",
          pillar: "S",
          weight: 3
        },
        {
          text: "A self-imposed ceiling on how big or bold the next chapter is allowed to be.",
          pillar: "I",
          weight: 3
        },
        {
          text: "The sheer exhaustion of banging on a locked gate instead of finding an open side door.",
          pillar: "D",
          weight: 3
        },
        {
          text: "Friction between high-level vision and the granular daily execution protocol.",
          pillar: "E",
          weight: 3
        }
      ]
    },
    {
      id: 3,
      pillar: "IMAGINE",
      title: "3. Unconstrained Vision",
      question: "If failure, external judgment, and historical precedent were eliminated for 30 days, what would you do immediately?",
      options: [
        {
          text: "Pivot our strategy radically and launch an audacious project I've been keeping secret.",
          pillar: "I",
          weight: 3
        },
        {
          text: "Rewrite our foundational narrative and terminate the obsolete script we've been clinging to.",
          pillar: "S",
          weight: 3
        },
        {
          text: "Immediately jettison 3 heavy obligations that are draining 70% of our creative vitality.",
          pillar: "L",
          weight: 3
        },
        {
          text: "Bypass the traditional hierarchy and take an unconventional, lateral approach to the goal.",
          pillar: "D",
          weight: 3
        },
        {
          text: "Stop over-analyzing and deploy the prototype/decision into the wild within 24 hours.",
          pillar: "E",
          weight: 3
        }
      ]
    },
    {
      id: 4,
      pillar: "DETOUR",
      title: "4. Navigating Resistance",
      question: "When an unexpected barricade blocks your primary route, what is your most common reaction?",
      options: [
        {
          text: "Double down on brute force: work longer hours and push harder against the same wall.",
          pillar: "D",
          weight: 3
        },
        {
          text: "Feel intense internal guilt and question whether our core mission is doomed.",
          pillar: "S",
          weight: 3
        },
        {
          text: "Feel paralyzed by how much emotional and financial capital we've already sunk into this.",
          pillar: "L",
          weight: 3
        },
        {
          text: "Settle for a much smaller, mediocre outcome rather than reinventing the possibility.",
          pillar: "I",
          weight: 3
        },
        {
          text: "Schedule more consensus meetings rather than committing to a swift tactical experiment.",
          pillar: "E",
          weight: 3
        }
      ]
    },
    {
      id: 5,
      pillar: "EXECUTE",
      title: "5. Velocity & Momentum",
      question: "What is currently creating the thickest layer of 'Crust' over your daily execution?",
      options: [
        {
          text: "Overthinking the micro-steps and hesitating to pull the trigger until conditions are 'perfect'.",
          pillar: "E",
          weight: 3
        },
        {
          text: "Clinging to a past narrative of who I used to be or what I used to excel at.",
          pillar: "S",
          weight: 3
        },
        {
          text: "Depleted emotional reserves due to unmanaged chronic load.",
          pillar: "L",
          weight: 3
        },
        {
          text: "Inability to see past the present roadblock and imagine alternate futures.",
          pillar: "I",
          weight: 3
        },
        {
          text: "Refusing to accept that the direct path is closed and delaying a strategic detour.",
          pillar: "D",
          weight: 3
        }
      ]
    }
  ],
  resultsProfiles: {
    S: {
      letter: "S",
      pillar: "Story",
      title: "Narrative Gridlock (Story Friction)",
      tagline: "You are running an outdated mental script that was written for a version of you that no longer exists.",
      description: "Your primary bottleneck is not competence or drive—it is narrative inertia. You are unconsciously attempting to solve today's high-level complexities using rules, expectations, or identities formed during a past struggle. The 'Crust' over your capacity is an obsolete storyline.",
      antidote: [
        "Audit the Script: Write down the top 3 unspoken rules you believe about what you 'must' do.",
        "Dismantle the Contract: Identify which rule was inherited from an old boss, past failure, or outdated goal.",
        "Draft the New Premise: Define the 1-sentence operating story for your next 12 months."
      ],
      scorePercent: "88% Story Blocker Detected"
    },
    L: {
      letter: "L",
      pillar: "Load",
      title: "Emotional Cargo Friction (Load Burden)",
      tagline: "You are carrying 5 years of historical cargo into today's immediate tactical decisions.",
      description: "Your momentum is stifled because you are over-leveraged on emotional bandwidth. Sunk costs, old resentments, lingering loyalties, and unresolved past friction are consuming the cognitive RAM needed for decisive forward movement. Before you can accelerate, you must drop the deadweight.",
      antidote: [
        "Inventory the Cargo: List the 3 lingering obligations or past regrets that take up mental space.",
        "Perform a Cognitive Jettison: Formally close, delegate, or renegotiate at least two legacy commitments.",
        "Reset the Bandwidth: Protect your prime 90-minute morning focus window strictly for zero-cargo creation."
      ],
      scorePercent: "92% Load Blocker Detected"
    },
    I: {
      letter: "I",
      pillar: "Imagine",
      title: "Imagination Ceiling (Possibility Cap)",
      tagline: "You have subconsciously capped what is possible to protect yourself from potential disappointment.",
      description: "When high performers repeatedly encounter resistance, they often narrow their field of vision to 'safe, predictable' horizons. Your crust is a constrained imagination. You are optimizing within existing boundaries instead of questioning whether the entire boundary itself can be shifted.",
      antidote: [
        "Remove the Safety Net: Spend 10 minutes free-writing what you would build if failure had zero social cost.",
        "10x the Horizon: Take your current 90-day goal and ask: 'What does a 10x version of this look like?'",
        "Reframe the Constraints: Treat current limitations not as walls, but as design parameters."
      ],
      scorePercent: "85% Imagine Blocker Detected"
    },
    D: {
      letter: "D",
      pillar: "Detour",
      title: "Front-Door Fixation (Detour Resistance)",
      tagline: "You are exhausting your vital energy banging against a barricaded front door instead of exploiting the side entrance.",
      description: "Your gridlock comes from linear rigidity. When high performers get blocked, their instinct is to push with 2x force. But resistance is information: the front door is barricaded. By pivoting to lateral navigation, hidden allies, and side-door detours, momentum returns immediately.",
      antidote: [
        "Accept the Barricade: Stop pushing the locked front gate—acknowledge the impasse without judgment.",
        "Map 3 Unconventional Detours: Identify who already has access to your desired outcome through a side angle.",
        "Launch a 48-Hour Flank: Test the lowest-friction detour with a small, lightweight experiment."
      ],
      scorePercent: "90% Detour Blocker Detected"
    },
    E: {
      letter: "E",
      pillar: "Execute",
      title: "Execution Friction (Micro-Action Stall)",
      tagline: "You have deep intellectual clarity, but there is a disconnect in converting insight into tangible velocity.",
      description: "You have analyzed the terrain, but friction exists at the threshold of physical execution. You may be over-polishing, waiting for absolute certainty, or orchestrating rather than delivering. The remedy is micro-velocity: converting big conceptual breakthroughs into tiny, unstoppable physical actions.",
      antidote: [
        "Shrink the First Step: Reduce your next action to something so small it takes less than 7 minutes to complete.",
        "Enforce a 24-Hour Shipping Rule: Release imperfect prototypes to gather real-world empirical feedback.",
        "Establish Accountability Anchors: Create daily proof-of-work check-ins with an executive peer."
      ],
      scorePercent: "87% Execution Blocker Detected"
    }
  }
};

class AssessmentEngine {
  constructor() {
    this.currentQuestionIndex = 0;
    this.answers = [];
    this.scores = { S: 0, L: 0, I: 0, D: 0, E: 0 };
    this.userData = { name: "", email: "", role: "" };

    this.container = document.getElementById("assessment-container");
    this.progressBar = document.getElementById("assessment-progress-bar");
    this.progressText = document.getElementById("assessment-progress-text");

    this.init();
  }

  init() {
    this.renderQuestion();
  }

  updateProgress() {
    const totalSteps = diagnosticData.questions.length + 1;
    const currentStep = this.currentQuestionIndex + 1;
    const percent = Math.round((this.currentQuestionIndex / totalSteps) * 100);
    
    if (this.progressBar) {
      this.progressBar.style.width = `${percent}%`;
    }
    if (this.progressText) {
      this.progressText.innerText = `Step ${currentStep} of ${totalSteps}`;
    }
  }

  renderQuestion() {
    const q = diagnosticData.questions[this.currentQuestionIndex];
    if (!q) return;

    this.updateProgress();

    this.container.innerHTML = `
      <div class="transition-all duration-300 transform opacity-0 translate-y-3" id="question-card">
        
        <!-- Header Pill & Step Meta -->
        <div class="flex items-center justify-between mb-5">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#ff6b00]/15 text-[#fb923c] border border-[#ff6b00]/30 animate-pulse">
            <span class="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
            ${q.title}
          </span>
          <span class="text-xs text-stone-400 font-medium font-serif italic">Question ${this.currentQuestionIndex + 1} of 5</span>
        </div>

        <!-- Question Headline -->
        <h3 class="font-serif text-2xl sm:text-3xl font-normal text-[#fdfbf7] mb-7 leading-snug tracking-tight">
          ${q.question}
        </h3>

        <!-- Options List with Staggered Entrance -->
        <div class="space-y-3.5">
          ${q.options.map((opt, idx) => `
            <button 
              type="button" 
              onclick="window.assessmentInstance.selectOption('${opt.pillar}', ${opt.weight}, ${idx})"
              class="option-btn group w-full text-left p-4 sm:p-5 rounded-2xl bg-[#131622]/90 hover:bg-[#191d2c] border border-stone-800 hover:border-[#ff6b00]/50 transition-all duration-200 flex items-start gap-4 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/40 cursor-pointer shadow-lg hover:translate-x-1"
              id="opt-btn-${idx}"
            >
              <div class="w-7 h-7 rounded-xl border border-stone-700 group-hover:border-[#ff6b00] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#ff6b00]/15 transition-all">
                <span class="text-xs font-serif font-bold text-stone-400 group-hover:text-[#ffedd5]">${String.fromCharCode(65 + idx)}</span>
              </div>
              <span class="text-sm sm:text-base text-stone-200 group-hover:text-[#fdfbf7] leading-relaxed font-normal">
                ${opt.text}
              </span>
            </button>
          `).join('')}
        </div>

        <!-- Card Footer Navigation -->
        <div class="mt-8 flex items-center justify-between pt-5 border-t border-stone-800/80">
          ${this.currentQuestionIndex > 0 ? `
            <button 
              type="button" 
              onclick="window.assessmentInstance.previousQuestion()"
              class="text-xs sm:text-sm text-stone-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer group"
            >
              <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              Previous Question
            </button>
          ` : `<div></div>`}
          
          <div class="text-xs text-stone-500 font-serif italic">
            Empirical Momentum Index • ~1 min remaining
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const card = document.getElementById("question-card");
      if (card) {
        card.classList.remove("opacity-0", "translate-y-3");
      }
    }, 20);
  }

  selectOption(pillar, weight, optIndex) {
    this.answers[this.currentQuestionIndex] = { pillar, weight };
    this.scores[pillar] = (this.scores[pillar] || 0) + weight;

    const btn = document.getElementById(`opt-btn-${optIndex}`);
    if (btn) {
      btn.classList.add("ring-2", "ring-[#ff6b00]", "bg-[#ff6b00]/15", "border-[#ff6b00]", "scale-[1.01]");
    }

    setTimeout(() => {
      if (this.currentQuestionIndex < diagnosticData.questions.length - 1) {
        this.currentQuestionIndex++;
        this.renderQuestion();
      } else {
        this.renderLeadCapture();
      }
    }, 240);
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      const prevAns = this.answers[this.currentQuestionIndex - 1];
      if (prevAns) {
        this.scores[prevAns.pillar] -= prevAns.weight;
      }
      this.currentQuestionIndex--;
      this.renderQuestion();
    }
  }

  renderLeadCapture() {
    if (this.progressBar) this.progressBar.style.width = "90%";
    if (this.progressText) this.progressText.innerText = "Final Step: Generate Executive Dossier";

    this.container.innerHTML = `
      <div class="transition-all duration-300 transform opacity-0 translate-y-3 animate-spring-pop" id="lead-capture-card">
        <div class="text-center mb-8">
          <div class="inline-flex p-3 rounded-2xl bg-[#ff6b00]/15 border border-[#ff6b00]/40 text-[#fb923c] mb-4 shadow-xl shadow-orange-500/10 animate-bounce">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <h3 class="font-serif text-3xl sm:text-4xl font-normal text-[#fdfbf7] mb-2 tracking-tight">
            Your Diagnostic Dossier Is Ready
          </h3>
          <p class="text-sm sm:text-base text-stone-300 max-w-md mx-auto leading-relaxed">
            Where should Dr. Pat Baccili transmit your customized S.L.I.D.E. breakdown and the 4-Page Playbook PDF?
          </p>
        </div>

        <form id="lead-capture-form" onsubmit="window.assessmentInstance.submitLead(event)" class="space-y-4 max-w-md mx-auto">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">Full Name</label>
            <input 
              type="text" 
              id="lead-name" 
              required 
              placeholder="e.g. Eleanor Vance" 
              class="w-full px-4 py-3.5 rounded-xl bg-[#141722] border border-stone-700 text-[#fdfbf7] placeholder-stone-500 focus:outline-none focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/30 text-sm transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">Business / Work Email</label>
            <input 
              type="email" 
              id="lead-email" 
              required 
              placeholder="eleanor@company.com" 
              class="w-full px-4 py-3.5 rounded-xl bg-[#141722] border border-stone-700 text-[#fdfbf7] placeholder-stone-500 focus:outline-none focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/30 text-sm transition-all"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-1.5">Current Role / Title (Optional)</label>
            <input 
              type="text" 
              id="lead-role" 
              placeholder="e.g. Managing Director, Founder, VP" 
              class="w-full px-4 py-3.5 rounded-xl bg-[#141722] border border-stone-700 text-[#fdfbf7] placeholder-stone-500 focus:outline-none focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/30 text-sm transition-all"
            />
          </div>

          <div class="pt-2">
            <button 
              type="submit" 
              id="submit-lead-btn"
              class="w-full py-4 px-6 rounded-xl font-bold text-slate-950 btn-gold-primary transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base group"
            >
              <span>Reveal My S.L.I.D.E. Profile & Download PDF</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>

          <p class="text-xs text-center text-stone-500 pt-2 flex items-center justify-center gap-1.5 font-serif italic">
            <svg class="w-3.5 h-3.5 text-[#ff6b00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            Zero Spam • 100% Confidentiality • Immediate PDF Transmission
          </p>
        </form>
      </div>
    `;

    setTimeout(() => {
      const card = document.getElementById("lead-capture-card");
      if (card) card.classList.remove("opacity-0", "translate-y-3");
    }, 20);
  }

  submitLead(e) {
    e.preventDefault();
    const name = document.getElementById("lead-name").value.trim();
    const email = document.getElementById("lead-email").value.trim();
    const role = document.getElementById("lead-role").value.trim();

    if (!name || !email) return;

    this.userData = { name, email, role };

    const btn = document.getElementById("submit-lead-btn");
    if (btn) {
      btn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Synthesizing S.L.I.D.E. Matrix...
      `;
    }

    let primaryPillar = "S";
    let maxScore = -1;
    for (const [pillar, score] of Object.entries(this.scores)) {
      if (score > maxScore) {
        maxScore = score;
        primaryPillar = pillar;
      }
    }

    setTimeout(() => {
      this.renderResults(primaryPillar);
    }, 700);
  }

  renderResults(pillarKey) {
    if (this.progressBar) this.progressBar.style.width = "100%";
    if (this.progressText) this.progressText.innerText = "Assessment Dossier Synthesized";

    const profile = diagnosticData.resultsProfiles[pillarKey] || diagnosticData.resultsProfiles["S"];

    this.container.innerHTML = `
      <div class="transition-all duration-500 transform opacity-0 scale-95 animate-spring-pop" id="results-card">
        
        <!-- Results Header Card with Celebratory Glow -->
        <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1c1f2e] to-[#0f1118] border border-[#d4af37]/40 mb-8 shadow-2xl relative overflow-hidden">
          <div class="absolute -right-12 -top-12 w-56 h-56 bg-[#ff6b00]/15 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
          
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/15 text-[#fde047] border border-[#d4af37]/35 text-xs font-semibold">
              <span class="w-2 h-2 rounded-full bg-[#d4af37] animate-ping"></span>
              CONFIDENTIAL DIAGNOSIS FOR ${this.userData.name.toUpperCase()}
            </div>
            <div class="text-xs font-mono text-[#fde047] bg-[#d4af37]/15 px-3.5 py-1.5 rounded-lg border border-[#d4af37]/30">
              ${profile.scorePercent}
            </div>
          </div>

          <div class="flex items-center gap-5 mb-4">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ffedd5] via-[#ff6b00] to-[#9a3412] flex items-center justify-center font-serif font-black text-3xl text-white shadow-xl shadow-orange-600/30 shrink-0 transform hover:rotate-6 transition-transform">
              ${profile.letter}
            </div>
            <div>
              <span class="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-0.5 font-mono">Primary Bottleneck Identified</span>
              <h3 class="font-serif text-2xl sm:text-3xl font-normal text-white">
                ${profile.title}
              </h3>
            </div>
          </div>

          <blockquote class="font-serif italic text-base sm:text-lg text-stone-200 border-l-2 border-[#d4af37] pl-4 py-1.5 my-4 bg-white/[0.03] rounded-r-xl">
            “${profile.tagline}”
          </blockquote>

          <p class="text-sm sm:text-base text-stone-300 leading-relaxed">
            ${profile.description}
          </p>
        </div>

        <!-- 3-Step Immediate Antidote -->
        <div class="mb-8">
          <h4 class="font-serif text-xl sm:text-2xl font-normal text-[#fdfbf7] mb-4 flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg bg-[#d4af37]/20 text-[#fde047] flex items-center justify-center text-xs font-serif font-bold">✦</span>
            Dr. Pat Baccili's Immediate S.L.I.D.E. Antidote
          </h4>
          <div class="space-y-3">
            ${profile.antidote.map((step, idx) => `
              <div class="p-4 sm:p-5 rounded-2xl bg-[#141722] border border-stone-800 flex items-start gap-3.5 hover:border-[#d4af37]/30 transition-colors">
                <span class="w-6 h-6 rounded-full bg-[#d4af37]/20 text-[#fef08a] border border-[#d4af37]/30 text-xs font-serif font-bold flex items-center justify-center shrink-0 mt-0.5">
                  ${idx + 1}
                </span>
                <span class="text-sm sm:text-base text-stone-200 leading-relaxed font-normal">${step}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Delivery & Resource Unlock Notification -->
        <div class="p-6 rounded-2xl bg-[#141722] border border-stone-800 mb-8 flex flex-col md:flex-row items-center gap-6">
          <div class="w-24 shrink-0 rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-xl">
            <img src="assets/images/slide_playbook_mockup.jpg" alt="S.L.I.D.E. Playbook" class="w-full h-auto object-cover" />
          </div>
          <div class="flex-1 text-center md:text-left">
            <div class="inline-block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
              ✓ Playbook PDF Dispatched
            </div>
            <h5 class="font-serif text-lg text-white mb-1">
              The 4-Page S.L.I.D.E. Navigation Playbook
            </h5>
            <p class="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Sent to <strong class="text-stone-200">${this.userData.email}</strong>. Dr. Pat Baccili's 5-day human momentum sequence is now activated.
            </p>
          </div>
          <div class="shrink-0 w-full md:w-auto">
            <a 
              href="#framework" 
              class="w-full md:w-auto px-5 py-2.5 rounded-xl text-xs font-bold btn-gold-secondary transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>Explore All 5 Pillars</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </a>
          </div>
        </div>

        <!-- Executive Consultation Link -->
        <div class="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1c1d2b] to-[#12141d] border border-[#d4af37]/20">
          <h5 class="font-serif text-xl sm:text-2xl text-white mb-2">
            Need Executive Advisory with Dr. Pat Baccili?
          </h5>
          <p class="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto mb-5 leading-relaxed">
            For senior founders, Fortune 500 executives, and keynote speaking inquiries, connect directly with Dr. Pat's advisory office.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3.5">
            <a 
              href="https://drpatbaccili.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold btn-gold-primary flex items-center gap-2"
            >
              <span>Visit DrPatBaccili.com</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
            <button 
              type="button" 
              onclick="window.assessmentInstance.restartAssessment()"
              class="px-5 py-3 rounded-xl text-xs sm:text-sm font-medium btn-gold-secondary"
            >
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const card = document.getElementById("results-card");
      if (card) card.classList.remove("opacity-0", "scale-95");
    }, 20);
  }

  restartAssessment() {
    this.currentQuestionIndex = 0;
    this.answers = [];
    this.scores = { S: 0, L: 0, I: 0, D: 0, E: 0 };
    this.renderQuestion();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("assessment-container")) {
    window.assessmentInstance = new AssessmentEngine();
  }
});
