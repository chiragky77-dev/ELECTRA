/**
 * ELECTRA — Election Awareness, Made Simple.
 * Standalone Production Application Script (Zero-Build Runtime)
 */

(function () {
  const { createElement: h, useState, useEffect, useContext, createContext } = React;

  /* =========================================================================
     1. TRANSLATIONS (ENGLISH & KANNADA)
     ========================================================================= */
  const translations = {
    en: {
      brand: "ELECTRA",
      tagline: "Election Awareness, Made Simple.",
      heroSub: "Understand how elections work, explore the voting process, and build your election knowledge through interactive learning.",
      heroCtaExplore: "Explore Elections",
      heroCtaExperience: "Experience Voting",
      simulationNotice: "EDUCATIONAL SIMULATION — This simulator does not cast or submit a real vote.",
      officialNotice: "ELECTRA is an independent educational platform. Official election rules are governed by the respective Election Authorities.",
      nav: {
        home: "Home",
        explore: "Explore",
        journey: "Election Journey",
        simulator: "Voting Simulator",
        glossary: "Knowledge Hub",
        quiz: "Civic Quiz",
        mythFact: "Myth or Fact",
        ai: "Ask ELECTRA AI",
        about: "About",
        progress: "Learning Progress",
        accessibility: "Accessibility",
        theme: "Theme",
        language: "Language"
      },
      paths: {
        understand: {
          title: "Understand",
          desc: "Learn core democratic principles and why every vote matters in governance."
        },
        explore: {
          title: "Explore",
          desc: "Walk through the 7 chronological stages from announcement to declaration."
        },
        experience: {
          title: "Experience",
          desc: "Step inside an interactive mock polling booth and test ballot mechanisms."
        },
        test: {
          title: "Test",
          desc: "Challenge your civic knowledge with our 6-question certified quiz."
        }
      },
      simulator: {
        badge: "EDUCATIONAL SIMULATION",
        banner: "This simulator does not cast or submit a real vote. No real credentials are requested or stored.",
        introTitle: "Experience the Voting Process",
        introDesc: "Demystify what happens inside the voting compartment. In this fictional simulation, you will review candidates, make your choice, inspect the confirmation slip, and observe how counting is conducted.",
        step1Title: "Learn Before You Vote",
        step1Points: [
          "Voting is confidential: The secrecy of your ballot is protected by law.",
          "Verify your eligibility: In real elections, you must be registered on the electoral roll.",
          "Review choices: Voters can choose any valid candidate or NOTA (None of the Above).",
          "Single submission: Once confirmed, a vote cannot be cast a second time."
        ],
        step2Title: "Demo City Council Election",
        step2Sub: "Select one candidate or choose NOTA. You will have a chance to review your selection before confirmation.",
        btnStart: "Start Demo Voting",
        btnReview: "Review Selection",
        btnBack: "Change Selection",
        btnConfirm: "Confirm Demo Vote",
        btnTryAgain: "Try Simulator Again",
        btnResetAll: "Reset All Demo Votes",
        reviewTitle: "Review Your Choice",
        reviewDesc: "Please verify your selection carefully. In an actual polling booth, once the vote is cast, it cannot be altered.",
        selectedCandidate: "Your Selected Candidate:",
        confirmSuccessTitle: "Demo Vote Recorded Successfully",
        confirmSuccessDesc: "Your fictional vote has been recorded into the mock tally buffer. In real elections equipped with VVPAT (Voter Verifiable Paper Audit Trail), a paper slip is visible for 7 seconds to confirm your selection before dropping into the sealed box.",
        countingTitle: "Simulated Vote Counting",
        countingDesc: "Observe how votes are securely aggregated from the demo polling machine.",
        resultsTitle: "Simulated Election Results",
        resultsSub: "Live tally calculated from verified simulation sessions in this demo container.",
        totalVotesCast: "Total Demo Votes Cast",
        leadingCandidate: "Plurality Leader",
        notaNote: "NOTA represents voter dissent and ensures your presence without selecting a candidate."
      },
      ai: {
        title: "Ask ELECTRA AI",
        subtitle: "Neutral, factual answers to your election and civic governance questions.",
        modeSimple: "Simple Language",
        modeDetailed: "Detailed Breakdown",
        placeholder: "Ask anything about elections, voting, stages, or counting...",
        btnAsk: "Ask Question",
        exampleQueriesLabel: "Common Questions:",
        shortAnswer: "Short Answer",
        howItWorks: "How It Works",
        relatedTopics: "Related Topics",
        sources: "Verified Sources",
        neutralityNotice: "ELECTRA AI provides strictly neutral educational information. It does not endorse candidates, parties, or advise on how to vote.",
        fallbackNotice: "Running on verified local civic-intelligence engine (zero external API dependency)."
      },
      quiz: {
        title: "Civic Knowledge Quiz",
        subtitle: "Test your understanding of election processes, voting rules, and democratic rights.",
        questionOf: "Question",
        nextBtn: "Next Question",
        seeResultsBtn: "View My Results",
        retakeBtn: "Retake Quiz",
        scoreTitle: "Your Civic Score",
        reviewLabel: "Review & Explanations",
        certifiedBadge: "Certified Civic Learner",
        perfectScore: "Outstanding! You have a thorough grasp of the election process.",
        goodScore: "Great job! A solid understanding of your civic rights and voting stages.",
        practiceScore: "Keep exploring! Review the stages and glossary to master election mechanics."
      },
      mythFact: {
        title: "Myth vs. Fact",
        subtitle: "Bust common election rumors and understand verified voting procedures.",
        badgeFact: "VERIFIED FACT",
        badgeMyth: "DEBUNKED MYTH",
        btnCheck: "Reveal Fact Check",
        filterAll: "All Topics",
        officialSource: "Source"
      },
      glossary: {
        title: "Knowledge Hub & Glossary",
        subtitle: "Clear definitions and practical context for crucial democratic and election terms.",
        searchPlaceholder: "Search terms (e.g. EVM, NOTA, Scrutiny, Polling Station)...",
        allCategories: "All Categories",
        categories: {
          basics: "Election Basics",
          voting: "Voting & Polling",
          process: "Election Process",
          counting: "Counting & Results",
          terminology: "Terminology",
          faqs: "Common Questions"
        },
        recentlyViewed: "Recently Viewed Terms",
        whyItMatters: "Why it matters to voters",
        related: "Related terms",
        noResults: "No terms found matching your query."
      },
      a11y: {
        title: "Accessibility & Display Controls",
        fontSize: "Text Size",
        fontSizeDesc: "Adjust typography scale for comfortable reading.",
        contrast: "High Contrast Mode",
        contrastDesc: "Enhance borders and background contrast for optimal visibility.",
        motion: "Reduced Motion",
        motionDesc: "Disable dynamic animations and transitions.",
        reset: "Reset to Default"
      }
    },
    kn: {
      brand: "ಎಲೆಕ್ಟ್ರಾ (ELECTRA)",
      tagline: "ಚುನಾವಣಾ ಜಾಗೃತಿ, ಸರಳ ಹಾಗೂ ಸ್ಪಷ್ಟ.",
      heroSub: "ಚುನಾವಣೆಗಳು ಹೇಗೆ ನಡೆಯುತ್ತವೆ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಮತದಾನ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಸಂವಾದಾತ್ಮಕ ಕಲಿಕೆಯ ಮೂಲಕ ನಿಮ್ಮ ಜ್ಞಾನವನ್ನು ವೃದ್ಧಿಸಿಕೊಳ್ಳಿ.",
      heroCtaExplore: "ಚುನಾವಣೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
      heroCtaExperience: "ಮತದಾನವನ್ನು ಅನುಭವಿಸಿ",
      simulationNotice: "ಶೈಕ್ಷಣಿಕ ಸಿಮ್ಯುಲೇಶನ್ — ಈ ಸಿಮ್ಯುಲೇಟರ್ ನಿಜವಾದ ಮತವನ್ನು ಚಲಾಯಿಸುವುದಿಲ್ಲ ಅಥವಾ ಸಲ್ಲಿಸುವುದಿಲ್ಲ.",
      officialNotice: "ಎಲೆಕ್ಟ್ರಾ ಒಂದು ಸ್ವತಂತ್ರ ಶೈಕ್ಷಣಿಕ ವೇದಿಕೆಯಾಗಿದೆ. ಅಧಿಕೃತ ಚುನಾವಣಾ ನಿಯಮಗಳನ್ನು ಆಯಾ ಚುನಾವಣಾ ಆಯೋಗಗಳು ನಿರ್ವಹಿಸುತ್ತವೆ.",
      nav: {
        home: "ಮುಖಪುಟ",
        explore: "ಅನ್ವೇಷಿಸಿ",
        journey: "ಚುನಾವಣಾ ಹಂತಗಳು",
        simulator: "ಮತದಾನ ಸಿಮ್ಯುಲೇಟರ್",
        glossary: "ಜ್ಞಾನ ಭಂಡಾರ",
        quiz: "ರಸಪ್ರಶ್ನೆ (ಕ್ವಿಜ್)",
        mythFact: "ಮಿಥ್ಯ vs ಸತ್ಯ",
        ai: "ಎಲೆಕ್ಟ್ರಾ ಎಐ ಕೇಳಿ",
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
        progress: "ಕಲಿಕೆಯ ಪ್ರಗತಿ",
        accessibility: "ಪ್ರವೇಶಿಸುವಿಕೆ",
        theme: "ಥೀಮ್",
        language: "ಭಾಷೆ"
      },
      paths: {
        understand: {
          title: "ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
          desc: "ಪ್ರಜಾಪ್ರಭುತ್ವದ ಮೂಲ ತತ್ವಗಳನ್ನು ಮತ್ತು ಆಡಳಿತದಲ್ಲಿ ಪ್ರತಿಯೊಂದು ಮತದ ಮೌಲ್ಯವನ್ನು ತಿಳಿಯಿರಿ."
        },
        explore: {
          title: "ಅನ್ವೇಷಿಸಿ",
          desc: "ಅಧಿಸೂಚನೆಯಿಂದ ಫಲಿತಾಂಶದವರೆಗೆ 7 ಪ್ರಮುಖ ಹಂತಗಳನ್ನು ಪರಿಶೀಲಿಸಿ."
        },
        experience: {
          title: "ಅನುಭವಿಸಿ",
          desc: "ಮಾದರಿ ಮತಗಟ್ಟೆಯನ್ನು ಪ್ರವೇಶಿಸಿ ಮತ್ತು ಬ್ಯಾಲೆಟ್ ಕಾರ್ಯವಿಧಾನಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ."
        },
        test: {
          title: "ಪರೀಕ್ಷಿಸಿಕೊಳ್ಳಿ",
          desc: "ನಮ್ಮ 6 ಪ್ರಶ್ನೆಗಳ ರಸಪ್ರಶ್ನೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಚುನಾವಣಾ ಜ್ಞಾನವನ್ನು ಪರೀಕ್ಷಿಸಿ."
        }
      },
      simulator: {
        badge: "ಶೈಕ್ಷಣಿಕ ಸಿಮ್ಯುಲೇಶನ್",
        banner: "ಈ ಸಿಮ್ಯುಲೇಟರ್ ನೈಜ ಮತವನ್ನು ಚಲಾಯಿಸುವುದಿಲ್ಲ. ಯಾವುದೇ ನೈಜ ವಿವರಗಳನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ.",
        introTitle: "ಮತದಾನ ಪ್ರಕ್ರಿಯೆಯ ಅನುಭವ",
        introDesc: "ಮತದಾನ ಕೊಠಡಿಯೊಳಗೆ ಏನಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ. ಈ ಕಾಲ್ಪನಿಕ ಸಿಮ್ಯುಲೇಶನ್‌ನಲ್ಲಿ ನೀವು ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ನಿಮ್ಮ ಆಯ್ಕೆ ಮಾಡಿ, ಮತ ಎಣಿಕೆಯ ವಿಧಾನವನ್ನು ವೀಕ್ಷಿಸಬಹುದು.",
        step1Title: "ಮತದಾನ ಮಾಡುವ ಮೊದಲು ತಿಳಿಯಿರಿ",
        step1Points: [
          "ಮತದಾನ ರಹಸ್ಯವಾಗಿದೆ: ನಿಮ್ಮ ಮತದ ಗೌಪ್ಯತೆಯನ್ನು ಕಾನೂನು ರಕ್ಷಿಸುತ್ತದೆ.",
          "ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ: ನೈಜ ಚುನಾವಣೆಯಲ್ಲಿ ನೀವು ಮತದಾರರ ಪಟ್ಟಿಯಲ್ಲಿ ನೋಂದಾಯಿಸಿರಬೇಕು.",
          "ಆಯ್ಕೆಯನ್ನು ಪರಿಶೀಲಿಸಿ: ಯಾವುದೇ ಅಭ್ಯರ್ಥಿ ಅಥವಾ ನೋಟಾ (NOTA) ವನ್ನು ಆರಿಸಬಹುದು.",
          "ಒಂದೇ ಸಲ್ಲಿಕೆ: ಒಮ್ಮೆ ಖಚಿತಪಡಿಸಿದ ನಂತರ ಎರಡನೇ ಬಾರಿ ಮತ ಚಲಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ."
        ],
        step2Title: "ಮಾದರಿ ನಗರ ಸಭೆ ಚುನಾವಣೆ",
        step2Sub: "ಒಬ್ಬ ಅಭ್ಯರ್ಥಿಯನ್ನು ಅಥವಾ ನೋಟಾ ಆಯ್ಕೆಮಾಡಿ. ಖಚಿತಪಡಿಸುವ ಮೊದಲು ನಿಮ್ಮ ಆಯ್ಕೆಯನ್ನು ಬದಲಾಯಿಸಬಹುದು.",
        btnStart: "ಮಾದರಿ ಮತದಾನ ಪ್ರಾರಂಭಿಸಿ",
        btnReview: "ಆಯ್ಕೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
        btnBack: "ಆಯ್ಕೆ ಬದಲಾಯಿಸಿ",
        btnConfirm: "ಮಾದರಿ ಮತ ಖಚಿತಪಡಿಸಿ",
        btnTryAgain: "ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ",
        btnResetAll: "ಎಲ್ಲಾ ಮಾದರಿ ಮತ ಮರುಹೊಂದಿಸಿ",
        reviewTitle: "ನಿಮ್ಮ ಆಯ್ಕೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
        reviewDesc: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆಯ್ಕೆಯನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಪರಿಶೀಲಿಸಿ. ನೈಜ ಮತಗಟ್ಟೆಯಲ್ಲಿ ಒಮ್ಮೆ ಚಲಾಯಿಸಿದ ಮತವನ್ನು ಬದಲಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.",
        selectedCandidate: "ನೀವು ಆಯ್ಕೆ ಮಾಡಿದ ಅಭ್ಯರ್ಥಿ:",
        confirmSuccessTitle: "ಮಾದರಿ ಮತ ದಾಖಲಾಗಿದೆ",
        confirmSuccessDesc: "ನಿಮ್ಮ ಕಾಲ್ಪನಿಕ ಮತ ಯಶಸ್ವಿಯಾಗಿ ದಾಖಲಾಗಿದೆ. VVPAT ಹೊಂದಿರುವ ನೈಜ ಚುನಾವಣೆಯಲ್ಲಿ, ನಿಮ್ಮ ಆಯ್ಕೆಯನ್ನು ದೃಢೀಕರಿಸಲು ಕಾಗದದ ಚೀಟಿಯು 7 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಗೋಚರಿಸುತ್ತದೆ.",
        countingTitle: "ಮಾದರಿ ಮತ ಎಣಿಕೆ",
        countingDesc: "ಮಾದರಿ ಮತಯಂತ್ರದಿಂದ ಮತಗಳು ಹೇಗೆ ಸುರಕ್ಷಿತವಾಗಿ ಒಟ್ಟುಗೂಡುತ್ತವೆ ಎಂಬುದನ್ನು ಗಮನಿಸಿ.",
        resultsTitle: "ಮಾದರಿ ಚುನಾವಣಾ ಫಲಿತಾಂಶಗಳು",
        resultsSub: "ಈ ಡೆಮೊದಲ್ಲಿ ದಾಖಲಾದ ಒಟ್ಟು ಮಾದರಿ ಮತಗಳ ಫಲಿತಾಂಶ.",
        totalVotesCast: "ಒಟ್ಟು ಚಲಾಯಿಸಿದ ಮಾದರಿ ಮತಗಳು",
        leadingCandidate: "ಮುನ್ನಡೆ ಸಾಧಿಸಿದವರು",
        notaNote: "ನೋಟಾ (NOTA) ಅತೃಪ್ತಿಯನ್ನು ವ್ಯಕ್ತಪಡಿಸುವ ಹಕ್ಕು ಮತ್ತು ಮತದಾನದಲ್ಲಿ ನಿಮ್ಮ ಉಪಸ್ಥಿತಿಯನ್ನು ದೃಢೀಕರಿಸುತ್ತದೆ."
      },
      ai: {
        title: "ಎಲೆಕ್ಟ್ರಾ ಎಐ ಕೇಳಿ (Ask ELECTRA AI)",
        subtitle: "ಚುನಾವಣೆ ಮತ್ತು ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ನಿಯಮಗಳ ಬಗ್ಗೆ ತಟಸ್ಥ ಹಾಗೂ ಅಧಿಕೃತ ಮಾಹಿತಿ.",
        modeSimple: "ಸರಳ ವಿವರಣೆ",
        modeDetailed: "ಸಮಗ್ರ ವಿವರಣೆ",
        placeholder: "ಚುನಾವಣೆ, ಮತದಾನ ಅಥವಾ ಎಣಿಕೆಯ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆ ಕೇಳಿ...",
        btnAsk: "ಪ್ರಶ್ನೆ ಕೇಳಿ",
        exampleQueriesLabel: "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು:",
        shortAnswer: "ಸಂಕ್ಷಿಪ್ತ ಉತ್ತರ",
        howItWorks: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
        relatedTopics: "ಸಂಬಂಧಿತ ವಿಷಯಗಳು",
        sources: "ಪರಿಶೀಲಿತ ಮೂಲಗಳು",
        neutralityNotice: "ಎಲೆಕ್ಟ್ರಾ ಎಐ ಕೇವಲ ತಟಸ್ಥ ಶೈಕ್ಷಣಿಕ ಮಾಹಿತಿಯನ್ನು ನೀಡುತ್ತದೆ. ಯಾವುದೇ ಪಕ್ಷ ಅಥವಾ ಅಭ್ಯರ್ಥಿಯನ್ನು ಬೆಂಬಲಿಸುವುದಿಲ್ಲ.",
        fallbackNotice: "ಸ್ಥಳೀಯ ಪರಿಶೀಲಿತ ಜ್ಞಾನ ಎಂಜಿನ್‌ನಲ್ಲಿ ಚಲಿಸುತ್ತಿದೆ (ಯಾವುದೇ ಬಾಹ್ಯ API ಅಗತ್ಯವಿಲ್ಲ)."
      },
      quiz: {
        title: "ನಾಗರಿಕ ಜ್ಞಾನ ರಸಪ್ರಶ್ನೆ",
        subtitle: "ಚುನಾವಣಾ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ನಿಮ್ಮ ಹಕ್ಕುಗಳ ಬಗ್ಗೆ ನಿಮ್ಮ ಜ್ಞಾನವನ್ನು ಪರೀಕ್ಷಿಸಿ.",
        questionOf: "ಪ್ರಶ್ನೆ",
        nextBtn: "ಮುಂದಿನ ಪ್ರಶ್ನೆ",
        seeResultsBtn: "ಫಲಿತಾಂಶಗಳನ್ನು ನೋಡಿ",
        retakeBtn: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
        scoreTitle: "ನಿಮ್ಮ ಅಂಕಗಳು",
        reviewLabel: "ವಿವರಣೆ ಮತ್ತು ಪರಿಶೀಲನೆ",
        certifiedBadge: "ಪ್ರಮಾಣೀಕೃತ ಜಾಗೃತ ಮತದಾರ",
        perfectScore: "ಅದ್ಭುತ! ನೀವು ಚುನಾವಣಾ ಪ್ರಕ್ರಿಯೆಯ ಬಗ್ಗೆ ಸಂಪೂರ್ಣ ಜ್ಞಾನ ಹೊಂದಿದ್ದೀರಿ.",
        goodScore: "ಉತ್ತಮ ಪ್ರಯತ್ನ! ನಿಮ್ಮ ನಾಗರಿಕ ಹಕ್ಕುಗಳ ಬಗ್ಗೆ ಉತ್ತಮ ತಿಳುವಳಿಕೆ ಇದೆ.",
        practiceScore: "ಮುಂದುವರಿಸಿ! ಇನ್ನಷ್ಟು ಕಲಿಯಲು ಹಂತಗಳು ಮತ್ತು ಶಬ್ದಕೋಶವನ್ನು ಅನ್ವೇಷಿಸಿ."
      },
      mythFact: {
        title: "ಮಿಥ್ಯ vs ಸತ್ಯ (Myth or Fact)",
        subtitle: "ಚುನಾವಣೆಯ ಬಗ್ಗೆ ಹರಡುವ ಸುಳ್ಳು ಸುದ್ದಿಗಳನ್ನು ಸರಿಪಡಿಸಿ ಮತ್ತು ಅಧಿಕೃತ ನಿಯಮಗಳನ್ನು ತಿಳಿಯಿರಿ.",
        badgeFact: "ದೃಢೀಕೃತ ಸತ್ಯ",
        badgeMyth: "ಸುಳ್ಳು ಕಲ್ಪನೆ (ಮಿಥ್ಯ)",
        btnCheck: "ಸತ್ಯವನ್ನು ತಿಳಿಯಿರಿ",
        filterAll: "ಎಲ್ಲಾ ವಿಷಯಗಳು",
        officialSource: "ಮೂಲ"
      },
      glossary: {
        title: "ಜ್ಞಾನ ಭಂಡಾರ ಮತ್ತು ಶಬ್ದಕೋಶ",
        subtitle: "ಚುನಾವಣಾ ಪ್ರಕ್ರಿಯೆಯ ಪ್ರಮುಖ ಪದಗಳ ಸ್ಪಷ್ಟ ಮತ್ತು ಸುಲಭ ವಿವರಣೆ.",
        searchPlaceholder: "ಪದಗಳನ್ನು ಹುಡುಕಿ (ಉದಾ: EVM, NOTA, ಮತಗಟ್ಟೆ, ನಾಮಪತ್ರ)...",
        allCategories: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
        categories: {
          basics: "ಮೂಲಭೂತ ವಿಷಯಗಳು",
          voting: "ಮತದಾನ ಮತ್ತು ಮತಗಟ್ಟೆ",
          process: "ಚುನಾವಣಾ ಪ್ರಕ್ರಿಯೆ",
          counting: "ಎಣಿಕೆ ಮತ್ತು ಫಲಿತಾಂಶ",
          terminology: "ಪಾರಿಭಾಷಿಕ ಪದಗಳು",
          faqs: "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು"
        },
        recentlyViewed: "ಇತ್ತೀಚೆಗೆ ನೋಡಿದ ಪದಗಳು",
        whyItMatters: "ಮತದಾರರಿಗೆ ಇದು ಏಕೆ ಮುಖ್ಯ",
        related: "ಸಂಬಂಧಿತ ಪದಗಳು",
        noResults: "ಯಾವುದೇ ಫಲಿತಾಂಶ ಕಂಡುಬಂದಿಲ್ಲ."
      },
      a11y: {
        title: "ಪ್ರವೇಶಿಸುವಿಕೆ ನಿಯಂತ್ರಣಗಳು",
        fontSize: "ಪಠ್ಯದ ಗಾತ್ರ",
        fontSizeDesc: "ಓದಲು ಅನುಕೂಲಕರವಾಗಿ ಪಠ್ಯದ ಗಾತ್ರವನ್ನು ಹೊಂದಿಸಿ.",
        contrast: "ಹೆಚ್ಚಿನ ಕಾಂಟ್ರಾಸ್ಟ್ ಮೋಡ್",
        contrastDesc: "ಉತ್ತಮ ಗೋಚರತೆಗಾಗಿ ಗಡಿಗಳು ಮತ್ತು ಹಿನ್ನೆಲೆಯನ್ನು ವರ್ಧಿಸಿ.",
        motion: "ಕಡಿಮೆ ಚಲನೆ (Reduced Motion)",
        motionDesc: "ಆನಿಮೇಷನ್‌ಗಳನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ.",
        reset: "ಮರುಹೊಂದಿಸಿ"
      }
    }
  };

  /* =========================================================================
     2. DATASETS (STAGES, GLOSSARY, QUIZ, MYTHS, AI)
     ========================================================================= */
  const electionStages = [
    {
      id: 'announcement',
      order: 1,
      phase: 'before',
      title: { en: '1. Election Announcement', kn: '1. ಚುನಾವಣಾ ಅಧಿಸೂಚನೆ (Announcement)' },
      shortDesc: {
        en: 'The election commission issues the formal notification, dates, and enforces the Model Code of Conduct.',
        kn: 'ಚುನಾವಣಾ ಆಯೋಗವು ಅಧಿಕೃತ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಪ್ರಕಟಿಸುತ್ತದೆ ಮತ್ತು ನೀತಿ ಸಂಹಿತೆಯನ್ನು ಜಾರಿಗೊಳಿಸುತ್ತದೆ.'
      },
      whatHappens: {
        en: 'The official election schedule is declared. Dates for nominations, polling, and counting are established. The Model Code of Conduct (MCC) comes into immediate effect to ensure a level playing field between ruling and opposition parties.',
        kn: 'ಅಧಿಕೃತ ಚುನಾವಣಾ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ. ನಾಮಪತ್ರ, ಮತದಾನ ಮತ್ತು ಎಣಿಕೆಯ ದಿನಾಂಕಗಳನ್ನು ನಿಗದಿಪಡಿಸಲಾಗುತ್ತದೆ. ಮಾದರಿ ನೀತಿ ಸಂಹಿತೆ ಜಾರಿಗೆ ಬರುತ್ತದೆ.'
      },
      whyItMatters: {
        en: 'Prevents misuse of official government machinery or arbitrary policy decisions designed to unfairly influence voters right before an election.',
        kn: 'ಚುನಾವಣೆಯ ಮುನ್ನ ಮತದಾರರನ್ನು ಪ್ರಭಾವಿಸಲು ಸರ್ಕಾರಿ ಯಂತ್ರ ಅಥವಾ ನೀತಿಗಳ ದುರುಪಯೋಗವನ್ನು ಇದು ತಡೆಯುತ್ತದೆ.'
      },
      whoIsInvolved: {
        en: 'Election Commission / Electoral Authority, political parties, government officials, and citizens.',
        kn: 'ಚುನಾವಣಾ ಆಯೋಗ, ರಾಜಕೀಯ ಪಕ್ಷಗಳು, ಸರ್ಕಾರಿ ಅಧಿಕಾರಿಗಳು ಮತ್ತು ನಾಗರಿಕರು.'
      },
      rules: [
        {
          en: 'Model Code of Conduct prohibits the announcement of new financial grants or projects by the incumbent government.',
          kn: 'ಹಾಲಿ ಸರ್ಕಾರವು ಹೊಸ ಆರ್ಥಿಕ ಯೋಜನೆಗಳು ಅಥವಾ ಅನುದಾನಗಳನ್ನು ಘೋಷಿಸುವುದನ್ನು ನೀತಿ ಸಂಹಿತೆ ನಿಷೇಧಿಸುತ್ತದೆ.'
        },
        {
          en: 'Ministers cannot combine official visits with election campaigning.',
          kn: 'ಸಚಿವರು ಅಧಿಕೃತ ಪ್ರವಾಸಗಳನ್ನು ಚುನಾವಣಾ ಪ್ರಚಾರದೊಂದಿಗೆ ಸಂಯೋಜಿಸುವಂತಿಲ್ಲ.'
        }
      ],
      terms: ['Model Code of Conduct', 'Electoral Roll', 'Returning Officer'],
      sources: [{ title: 'Representation of the People Act, Section 30' }]
    },
    {
      id: 'nomination',
      order: 2,
      phase: 'before',
      title: { en: '2. Filing of Nomination', kn: '2. ನಾಮಪತ್ರ ಸಲ್ಲಿಕೆ (Nomination)' },
      shortDesc: {
        en: 'Candidates submit formal candidacy papers, affidavits disclosing assets/criminal records, and security deposits.',
        kn: 'ಅಭ್ಯರ್ಥಿಗಳು ತಮ್ಮ ನಾಮಪತ್ರ, ಆಸ್ತಿ ಮತ್ತು ಕ್ರಿಮಿನಲ್ ಹಿನ್ನೆಲೆಯ ಅಫಿಡವಿಟ್ ಮತ್ತು ಠೇವಣಿಯನ್ನು ಸಲ್ಲಿಸುತ್ತಾರೆ.'
      },
      whatHappens: {
        en: 'Individuals eligible to contest submit their nomination papers to the Returning Officer (RO) before the published deadline. Candidates submit sworn affidavits (Form 26) disclosing educational qualifications, assets, liabilities, and any pending criminal cases.',
        kn: 'ಅರ್ಹ ವ್ಯಕ್ತಿಗಳು ನಿಗದಿತ ಗಡುವಿನೊಳಗೆ ಚುನಾವಣಾಧಿಕಾರಿಗೆ (RO) ನಾಮಪತ್ರಗಳನ್ನು ಸಲ್ಲಿಸುತ್ತಾರೆ. ಆಸ್ತಿ-ಪಾಸ್ತಿ ಮತ್ತು ಅಪರಾಧ ಹಿನ್ನೆಲೆಯ ಅಫಿಡವಿಟ್ ಸಲ್ಲಿಸುವುದು ಕಡ್ಡಾಯ.'
      },
      whyItMatters: {
        en: 'Ensures radical transparency. Voters have a constitutional right to know the background and financial standing of candidates contesting for public office.',
        kn: 'ಪೂರ್ಣ ಪಾರದರ್ಶಕತೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ. ಸ್ಪರ್ಧಿಸುವ ಅಭ್ಯರ್ಥಿಯ ಹಿನ್ನೆಲೆ ತಿಳಿಯುವ ಹಕ್ಕು ಮತದಾರರಿಗಿದೆ.'
      },
      whoIsInvolved: {
        en: 'Contesting candidates, proposers (registered voters), and Returning Officer.',
        kn: 'ಸ್ಪರ್ಧಿಸುವ ಅಭ್ಯರ್ಥಿಗಳು, ಸೂಚಕರು ಮತ್ತು ಚುನಾವಣಾಧಿಕಾರಿ.'
      },
      rules: [
        {
          en: 'Candidates must pay a statutory security deposit (forfeited if they fail to secure 1/6th of total valid votes).',
          kn: 'ಅಭ್ಯರ್ಥಿಯು ಭದ್ರತಾ ಠೇವಣಿ ಪಾವತಿಸಬೇಕು (1/6 ಕ್ಕಿಂತ ಕಡಿಮೆ ಮತ ಬಂದರೆ ಮುಟ್ಟುಗೋಲು).'
        }
      ],
      terms: ['Returning Officer', 'Affidavit', 'Security Deposit'],
      sources: [{ title: 'Affidavit Transparency Framework (Supreme Court Ruling)' }]
    },
    {
      id: 'scrutiny',
      order: 3,
      phase: 'before',
      title: { en: '3. Scrutiny & Withdrawal', kn: '3. ಪರಿಶೀಲನೆ ಮತ್ತು ಹಿಂಪಡೆಯುವಿಕೆ (Scrutiny)' },
      shortDesc: {
        en: 'The Returning Officer inspects all submitted papers. Valid candidates are finalized after the withdrawal window.',
        kn: 'ಚುನಾವಣಾಧಿಕಾರಿಯು ಎಲ್ಲಾ ನಾಮಪತ್ರಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತಾರೆ ಮತ್ತು ಅಂತಿಮ ಪಟ್ಟಿಯನ್ನು ಸಿದ್ಧಪಡಿಸುತ್ತಾರೆ.'
      },
      whatHappens: {
        en: 'The Returning Officer examines each nomination paper in the presence of candidates and their authorized agents. Invalid papers (e.g. under-age, incomplete affidavits, lack of genuine proposers) are rejected. Valid candidates are given a formal window to withdraw candidacy.',
        kn: 'ಚುನಾವಣಾಧಿಕಾರಿಯು ಅಭ್ಯರ್ಥಿಗಳ ಸಮ್ಮುಖದಲ್ಲಿ ನಾಮಪತ್ರಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತಾರೆ. ಅಪೂರ್ಣ ಅಥವಾ ಅನರ್ಹ ಪತ್ರಗಳನ್ನು ತಿರಸ್ಕರಿಸಲಾಗುತ್ತದೆ.'
      },
      whyItMatters: {
        en: 'Guarantees that only legally qualified individuals appear on the ballot paper, preventing fraud and ballot crowding.',
        kn: 'ಕೇವಲ ಅರ್ಹ ವ್ಯಕ್ತಿಗಳು ಮಾತ್ರ ಮತಪತ್ರದಲ್ಲಿ ಇರುವುದನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.'
      },
      whoIsInvolved: {
        en: 'Returning Officer, contesting candidates, election legal observers.',
        kn: 'ಚುನಾವಣಾಧಿಕಾರಿ, ಅಭ್ಯರ್ಥಿಗಳು ಮತ್ತು ಕಾನೂನು ವೀಕ್ಷಕರು.'
      },
      rules: [
        {
          en: 'Rejection reasons must be recorded in writing by the Returning Officer.',
          kn: 'ನಾಮಪತ್ರ ತಿರಸ್ಕರಿಸಲು ಕಾರಣವನ್ನು ಲಿಖಿತವಾಗಿ ದಾಖಲಿಸಬೇಕು.'
        }
      ],
      terms: ['Scrutiny', 'Withdrawal of Candidature'],
      sources: [{ title: 'Statutory Rules on Scrutiny (ECI Handbooks)' }]
    },
    {
      id: 'campaign',
      order: 4,
      phase: 'before',
      title: { en: '4. Campaign Period & Silence Window', kn: '4. ಪ್ರಚಾರ ಅವಧಿ ಮತ್ತು ಮೌನ ಅವಧಿ (Campaign)' },
      shortDesc: {
        en: 'Candidates present manifestos and visions. All campaigning strictly ends 48 hours before polling closes.',
        kn: 'ಅಭ್ಯರ್ಥಿಗಳು ಪ್ರಣಾಳಿಕೆಯನ್ನು ಪ್ರಸ್ತುತಪಡಿಸುತ್ತಾರೆ. ಮತದಾನ ಮುಕ್ತಾಯಕ್ಕೆ 48 ಗಂಟೆಗಳ ಮುನ್ನ ಪ್ರಚಾರವು ಕೊನೆಗೊಳ್ಳುತ್ತದೆ.'
      },
      whatHappens: {
        en: 'Candidates campaign through public rallies, door-to-door outreach, and digital platforms. Exactly 48 hours before the close of poll, the "Silence Period" begins: all public rallies, loudspeaker campaigning, and political advertisements must cease.',
        kn: 'ಅಭ್ಯರ್ಥಿಗಳು ಸಾರ್ವಜನಿಕ ಸಭೆಗಳ ಮೂಲಕ ಪ್ರಚಾರ ಮಾಡುತ್ತಾರೆ. ಮತದಾನ ಮುಕ್ತಾಯಕ್ಕೆ 48 ಗಂಟೆಗಳ ಮೊದಲು "ಮೌನ ಅವಧಿ" ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.'
      },
      whyItMatters: {
        en: 'The 48-hour silence period provides voters with peace and mental clarity to reflect on choices without continuous persuasion.',
        kn: 'ಮೌನ ಅವಧಿಯು ಮತದಾರರಿಗೆ ಯಾವುದೇ ಪ್ರಭಾವವಿಲ್ಲದೆ ಶಾಂತವಾಗಿ ಯೋಚಿಸಿ ತೀರ್ಮಾನಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ.'
      },
      whoIsInvolved: {
        en: 'Voters, political parties, media, expenditure observers.',
        kn: 'ಮತದಾರರು, ರಾಜಕೀಯ ಪಕ್ಷಗಳು, ಮಾಧ್ಯಮಗಳು ಮತ್ತು ವೆಚ್ಚ ವೀಕ್ಷಕರು.'
      },
      rules: [
        {
          en: 'No appeals to voters on communal, religious, or caste grounds are permitted.',
          kn: 'ಧರ್ಮ ಅಥವಾ ಜಾತಿ ಆಧಾರದ ಮೇಲೆ ಮತ ಕೇಳುವುದನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ.'
        }
      ],
      terms: ['Silence Period', 'Manifesto'],
      sources: [{ title: 'Section 126 of Representation of the People Act' }]
    },
    {
      id: 'polling',
      order: 5,
      phase: 'during',
      title: { en: '5. Polling Day: Casting the Vote', kn: '5. ಮತದಾನದ ದಿನ: ಮತ ಚಲಾವಣೆ (Polling Day)' },
      shortDesc: {
        en: 'Voters cast their confidential ballots at assigned polling stations following strict identity checks.',
        kn: 'ಮತದಾರರು ಗುರುತಿನ ಚೀಟಿ ಪರಿಶೀಲನೆಯ ನಂತರ ತಮ್ಮ ಮತಗಟ್ಟೆಯಲ್ಲಿ ರಹಸ್ಯವಾಗಿ ಮತ ಚಲಾಯಿಸುತ್ತಾರೆ.'
      },
      whatHappens: {
        en: 'Before voting begins, a mandatory Mock Poll is conducted in front of party agents. At the booth: 1) First polling officer checks the voter list and ID card, 2) Second polling officer applies indelible ink on the left index finger, 3) Third polling officer activates the EVM. The voter presses their choice in complete privacy.',
        kn: 'ಮತದಾನ ಆರಂಭಕ್ಕೂ ಮುನ್ನ ಅಣಕು ಮತದಾನ ನಡೆಸಿ ಯಂತ್ರವನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ. ಮತಗಟ್ಟೆಯಲ್ಲಿ ಗುರುತು ಪರಿಶೀಲಿಸಿ, ಎಡತೋರು ಬೆರಳಿಗೆ ಶಾಯಿ ಹಾಕಿ, ರಹಸ್ಯವಾಗಿ ಮತ ಚಲಾಯಿಸಲು ಅವಕಾಶ ನೀಡಲಾಗುತ್ತದೆ.'
      },
      whyItMatters: {
        en: 'Heart of the democratic exercise. Universal adult suffrage guarantees every eligible citizen has exactly one equal vote.',
        kn: 'ಪ್ರಜಾಪ್ರಭುತ್ವದ ಮೂಲ ಅಡಿಪಾಯ. ಪ್ರತಿಯೊಬ್ಬ ನಾಗರಿಕನಿಗೂ ಸಮಾನವಾದ ಒಂದು ಮತದ ಹಕ್ಕಿದೆ.'
      },
      whoIsInvolved: {
        en: 'Presiding Officer, Polling Officers, Candidate Agents, and Electors.',
        kn: 'ಮತಗಟ್ಟೆ ಅಧಿಕಾರಿಗಳು, ಅಭ್ಯರ್ಥಿಗಳ ಪ್ರತಿನಿಧಿಗಳು ಮತ್ತು ಮತದಾರರು.'
      },
      rules: [
        {
          en: 'Photography or mobile phones inside the voting compartment are strictly prohibited.',
          kn: 'ಮತದಾನ ಕೊಠಡಿಯೊಳಗೆ ಮೊಬೈಲ್ ಅಥವಾ ಛಾಯಾಗ್ರಹಣವನ್ನು ನಿಷೇಧಿಸಲಾಗಿದೆ.'
        },
        {
          en: 'Anyone in the queue at the official closing hour MUST be allowed to vote.',
          kn: 'ಸಮಯ ಮುಗಿದಾಗ ಸರದಿಯಲ್ಲಿ ನಿಂತಿರುವ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಮತ ಚಲಾಯಿಸಲು ಅವಕಾಶ ನೀಡಲೇಬೇಕು.'
        },
        {
          en: 'VVPAT slip displays candidate symbol for 7 seconds to verify vote recording.',
          kn: 'VVPAT ಸ್ಲಿಪ್ 7 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಗೋಚರಿಸಿ ಮತ ಸರಿಯಾಗಿ ಬಿದ್ದಿದೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ.'
        }
      ],
      terms: ['Indelible Ink', 'EVM & VVPAT', 'Presiding Officer'],
      sources: [{ title: 'Handbook for Presiding Officers, ECI' }]
    },
    {
      id: 'counting',
      order: 6,
      phase: 'after',
      title: { en: '6. Vote Counting & Verification', kn: '6. ಮತ ಎಣಿಕೆ ಮತ್ತು ಪರಿಶೀಲನೆ (Counting)' },
      shortDesc: {
        en: 'Seals of EVMs and postal ballots are verified in front of counting agents, followed by round-wise tabulation.',
        kn: 'ಮತಯಂತ್ರಗಳ ಸೀಲ್ ಪರಿಶೀಲಿಸಿ, ಸುತ್ತುಗಳ ಪ್ರಕಾರ ಮತಗಳನ್ನು ಎಣಿಸಲಾಗುತ್ತದೆ.'
      },
      whatHappens: {
        en: 'On counting day, the strongroom is opened in the presence of observers. Postal ballots are counted first. EVMs are brought out table by table. Unique seal numbers are matched. Results are announced round-by-round and entered into the public tabulation sheet with mandatory sample VVPAT slip matching.',
        kn: 'ಭದ್ರತಾ ಕೊಠಡಿಯನ್ನು ವೀಕ್ಷಕರ ಸಮ್ಮುಖದಲ್ಲಿ ತೆರೆದು, ಅಂಚೆ ಮತಗಳು ಮತ್ತು ಇವಿಎಂ ಮತಗಳನ್ನು ಸುತ್ತುಗಳ ಪ್ರಕಾರ ಎಣಿಕೆ ಮಾಡಿ ಸಾರ್ವಜನಿಕವಾಗಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.'
      },
      whyItMatters: {
        en: 'Establishes incontrovertible public trust and auditability in the final will of the electorate.',
        kn: 'ಮತದಾರರ ತೀರ್ಪಿನ ಮೇಲೆ ಸಂಪೂರ್ಣ ಸಾರ್ವಜನಿಕ ವಿಶ್ವಾಸ ಮತ್ತು ಪಾರದರ್ಶಕತೆಯನ್ನು ಮೂಡಿಸುತ್ತದೆ.'
      },
      whoIsInvolved: {
        en: 'Returning Officer, Counting Supervisors, Micro-observers, Candidate Counting Agents.',
        kn: 'ಚುನಾವಣಾಧಿಕಾರಿ, ಎಣಿಕೆ ಮೇಲ್ವಿಚಾರಕರು ಮತ್ತು ಅಭ್ಯರ್ಥಿಗಳ ಪ್ರತಿನಿಧಿಗಳು.'
      },
      rules: [
        {
          en: 'Round-wise results are signed by candidate agents and uploaded to the official portal.',
          kn: 'ಪ್ರತಿ ಸುತ್ತಿನ ಫಲಿತಾಂಶಕ್ಕೆ ಏಜೆಂಟರ ಸಹಿ ಪಡೆದು ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.'
        }
      ],
      terms: ['Strongroom', 'Control Unit', 'Tabulation Sheet'],
      sources: [{ title: 'Guidelines for Counting of Votes (ECI Protocol)' }]
    },
    {
      id: 'results',
      order: 7,
      phase: 'after',
      title: { en: '7. Declaration of Results', kn: '7. ಫಲಿತಾಂಶ ಘೋಷಣೆ (Declaration)' },
      shortDesc: {
        en: 'The Returning Officer formally declares the winner and awards the Certificate of Election.',
        kn: 'ಚುನಾವಣಾಧಿಕಾರಿಯು ವಿಜೇತರನ್ನು ಅಧಿಕೃತವಾಗಿ ಘೋಷಿಸುತ್ತಾರೆ ಮತ್ತು ಪ್ರಮಾಣಪತ್ರವನ್ನು ನೀಡುತ್ತಾರೆ.'
      },
      whatHappens: {
        en: 'After all rounds and audits are certified, the Returning Officer signs the Declaration of Result. The winning candidate receives Form 22 (Certificate of Election). If victory margins are extremely close, candidates may apply for a re-count under prescribed statutory conditions.',
        kn: 'ಎಲ್ಲಾ ಸುತ್ತುಗಳು ಮುಗಿದ ನಂತರ, ಚುನಾವಣಾಧಿಕಾರಿಯು ಫಲಿತಾಂಶ ಘೋಷಿಸಿ ವಿಜೇತ ಅಭ್ಯರ್ಥಿಗೆ ಪ್ರಮಾಣಪತ್ರವನ್ನು ನೀಡುತ್ತಾರೆ.'
      },
      whyItMatters: {
        en: 'Completes the constitutional transfer of sovereign power from the people to their democratically elected representatives.',
        kn: 'ಪ್ರಜಾಪ್ರಭುತ್ವದಲ್ಲಿ ಅಧಿಕಾರವನ್ನು ಸಂವಿಧಾನಾತ್ಮಕವಾಗಿ ಜನರಿಂದ ಚುನಾಯಿತ ಪ್ರತಿನಿಧಿಗಳಿಗೆ ಹಸ್ತಾಂತರಿಸುವ ಅಂತಿಮ ಘಟ್ಟ.'
      },
      whoIsInvolved: {
        en: 'Returning Officer, Observer, Winning Candidate, General Public.',
        kn: 'ಚುನಾವಣಾಧಿಕಾರಿ, ವಿಜೇತ ಅಭ್ಯರ್ಥಿ ಮತ್ತು ಸಾರ್ವಜನಿಕರು.'
      },
      rules: [
        {
          en: 'Results can only be challenged post-declaration through a formal Election Petition in the High Court.',
          kn: 'ಫಲಿತಾಂಶವನ್ನು ಹೈಕೋರ್ಟ್‌ನಲ್ಲಿ ಚುನಾವಣಾ ಅರ್ಜಿಯ ಮೂಲಕ ಮಾತ್ರ ಪ್ರಶ್ನಿಸಬಹುದು.'
        }
      ],
      terms: ['Certificate of Election', 'Election Petition'],
      sources: [{ title: 'Conduct of Elections Rules, Rule 64 & 66' }]
    }
  ];

  const glossaryTerms = [
    {
      id: 'election',
      term: { en: 'Election', kn: 'ಚುನಾವಣೆ (Election)' },
      category: 'basics',
      definition: {
        en: 'A formal decision-making process by which a population chooses individuals to hold public office.',
        kn: 'ಪ್ರಜೆಗಳು ತಮ್ಮ ಪ್ರತಿನಿಧಿಗಳನ್ನು ಅಧಿಕಾರಕ್ಕೆ ಆರಿಸುವ ಸಾಂವಿಧಾನಿಕ ನಿರ್ಧಾರ ಪ್ರಕ್ರಿಯೆ.'
      },
      whyItMatters: {
        en: 'It is the bedrock of democracy, allowing citizens to hold leaders accountable peacefully.',
        kn: 'ನಾಯಕರಿಗೆ ಜವಾಬ್ದಾರಿ ತರಲು ಮತ್ತು ನೀತಿಗಳನ್ನು ನಿರ್ಧರಿಸಲು ನಾಗರಿಕರಿಗೆ ಇರುವ ಮೂಲಭೂತ ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಅಸ್ತ್ರ.'
      },
      relatedTerms: ['Voter', 'Ballot', 'Electoral Roll']
    },
    {
      id: 'voter',
      term: { en: 'Voter / Elector', kn: 'ಮತದಾರ (Voter)' },
      category: 'basics',
      definition: {
        en: 'A citizen who meets statutory age and residency criteria and is enrolled on the official electoral roll.',
        kn: 'ಕಾನೂನುಬದ್ಧ ವಯಸ್ಸು ತಲುಪಿ ಮತದಾರರ ಪಟ್ಟಿಯಲ್ಲಿ ಹೆಸರಿರುವ ಯಾವುದೇ ಪ್ರಜೆ.'
      },
      whyItMatters: {
        en: 'Every voter possesses an equal constitutional voice regardless of wealth or social background.',
        kn: 'ಶ್ರೀಮಂತ-ಬಡವ ಭೇದವಿಲ್ಲದೆ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಸಮಾನವಾದ ಒಂದು ಮತದ ಹಕ್ಕಿದೆ.'
      },
      relatedTerms: ['Electoral Roll', 'EPIC Card', 'Polling Station']
    },
    {
      id: 'electoral-roll',
      term: { en: 'Electoral Roll', kn: 'ಮತದಾರರ ಪಟ್ಟಿ (Electoral Roll)' },
      category: 'basics',
      definition: {
        en: 'The official list of all citizens registered and eligible to vote in a specific constituency.',
        kn: 'ಒಂದು ನಿರ್ದಿಷ್ಟ ಕ್ಷೇತ್ರದಲ್ಲಿ ಮತದಾನ ಮಾಡಲು ಅರ್ಹತೆ ಹೊಂದಿರುವ ನಾಗರಿಕರ ಅಧಿಕೃತ ಪಟ್ಟಿ.'
      },
      whyItMatters: {
        en: 'Having a voter ID card alone is not enough; your name must be present in the electoral roll to vote.',
        kn: 'ಕೇವಲ ಗುರುತಿನ ಚೀಟಿ ಇದ್ದರೆ ಸಾಲದು; ಮತ ಚಲಾಯಿಸಲು ನಿಮ್ಮ ಹೆಸರು ಈ ಪಟ್ಟಿಯಲ್ಲಿ ಇರುವುದು ಕಡ್ಡಾಯ.'
      },
      relatedTerms: ['Voter', 'Form 6']
    },
    {
      id: 'evm',
      term: { en: 'Electronic Voting Machine (EVM)', kn: 'ಇವಿಎಂ (EVM)' },
      category: 'voting',
      definition: {
        en: 'A standalone electronic device consisting of a Ballot Unit and a Control Unit used to record votes without internet or network connections.',
        kn: 'ಯಾವುದೇ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವಿಲ್ಲದೆ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಸ್ವತಂತ್ರ ವಿದ್ಯುನ್ಮಾನ ಮತಯಂತ್ರ.'
      },
      whyItMatters: {
        en: 'Eliminates invalid paper ballots, prevents booth capturing, and accelerates tamper-evident counting.',
        kn: 'ತಿರಸ್ಕೃತ ಮತಗಳನ್ನು ತಡೆಯುತ್ತದೆ ಮತ್ತು ತ್ವರಿತ, ನಿಖರ ಎಣಿಕೆಗೆ ನೆರವಾಗುತ್ತದೆ.'
      },
      relatedTerms: ['VVPAT', 'Control Unit']
    },
    {
      id: 'vvpat',
      term: { en: 'VVPAT (Voter Verifiable Paper Audit Trail)', kn: 'ವಿವಿಪ್ಯಾಟ್ (VVPAT)' },
      category: 'voting',
      definition: {
        en: 'An independent verification printer attached to the EVM that generates a paper slip visible for 7 seconds before dropping into a sealed box.',
        kn: 'ಇವಿಎಂಗೆ ಜೋಡಿಸಲಾದ ಮುದ್ರಕವಾಗಿದ್ದು, ನೀವು ಮತ ಹಾಕಿದ ಅಭ್ಯರ್ಥಿಯ ಚಿಹ್ನೆ 7 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಕಾಣಿಸಿ ಸುರಕ್ಷಿತ ಪೆಟ್ಟಿಗೆಗೆ ಬೀಳುತ್ತದೆ.'
      },
      whyItMatters: {
        en: 'Enables physical paper audits to independently confirm that the electronic vote was stored exactly as cast.',
        kn: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಮತವು ಸರಿಯಾಗಿ ದಾಖಲಾಗಿದೆಯೇ ಎಂಬುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಕಾಗದದ ಪುರಾವೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.'
      },
      relatedTerms: ['EVM', 'Control Unit']
    },
    {
      id: 'nota',
      term: { en: 'NOTA (None of the Above)', kn: 'ನೋಟಾ (NOTA)' },
      category: 'voting',
      definition: {
        en: 'A ballot option allowing a voter to exercise their franchise while rejecting all contesting candidates.',
        kn: 'ಸ್ಪರ್ಧಿಸುತ್ತಿರುವ ಎಲ್ಲಾ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ತಿರಸ್ಕರಿಸಲು ಮತದಾರರಿಗೆ ನೀಡಲಾದ ಒಂದು ಪ್ರಮುಖ ಆಯ್ಕೆ.'
      },
      whyItMatters: {
        en: 'Protects the right to express dissatisfaction with candidate choices without forfeiting ballot secrecy.',
        kn: 'ಯಾವ ಅಭ್ಯರ್ಥಿಯೂ ಸರಿ ಇಲ್ಲ ಎಂದಾಗ ಮತದಾನದಿಂದ ಹಿಂದೆ ಸರಿಯದೆ ನಿಮ್ಮ ಅಸಮಾಧಾನವನ್ನು ರಹಸ್ಯವಾಗಿ ದಾಖಲಿಸಬಹುದು.'
      },
      relatedTerms: ['Ballot', 'Secrecy of Vote']
    },
    {
      id: 'polling-station',
      term: { en: 'Polling Station / Booth', kn: 'ಮತಗಟ್ಟೆ (Polling Station)' },
      category: 'voting',
      definition: {
        en: 'The designated physical building where registered electors cast their confidential votes.',
        kn: 'ನೋಂದಾಯಿತ ಮತದಾರರು ಮತ ಚಲಾಯಿಸಲು ನಿಗದಿಪಡಿಸಿದ ಅಧಿಕೃತ ಕೊಠಡಿ ಅಥವಾ ಕಟ್ಟಡ.'
      },
      whyItMatters: {
        en: 'Rules mandate that polling stations should ideally be within 2 km walking distance for every voter.',
        kn: 'ಮತದಾರರಿಗೆ ಅನುಕೂಲವಾಗುವಂತೆ ಸಾಮಾನ್ಯವಾಗಿ 2 ಕಿ.ಮೀ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಮತಗಟ್ಟೆಯನ್ನು ಸ್ಥಾಪಿಸಲಾಗುತ್ತದೆ.'
      },
      relatedTerms: ['Presiding Officer', 'Queue']
    },
    {
      id: 'nomination',
      term: { en: 'Nomination', kn: 'ನಾಮಪತ್ರ (Nomination)' },
      category: 'process',
      definition: {
        en: 'The formal submission of papers by a citizen seeking to contest an election for a public office.',
        kn: 'ಚುನಾವಣೆಯಲ್ಲಿ ಸ್ಪರ್ಧಿಸಲು ಇಚ್ಛಿಸುವ ವ್ಯಕ್ತಿಯು ಸಲ್ಲಿಸುವ ಅಧಿಕೃತ ಅರ್ಜಿ ಮತ್ತು ದಾಖಲೆಗಳು.'
      },
      whyItMatters: {
        en: 'Ensures that candidates meet all constitutional criteria such as age and solvency before entering the ballot.',
        kn: 'ಅಭ್ಯರ್ಥಿಯು ವಯಸ್ಸು ಮುಂತಾದ ಸಾಂವಿಧಾನಿಕ ಅರ್ಹತೆಗಳನ್ನು ಹೊಂದಿದ್ದಾರೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ.'
      },
      relatedTerms: ['Affidavit', 'Scrutiny']
    },
    {
      id: 'scrutiny',
      term: { en: 'Scrutiny', kn: 'ಪರಿಶೀಲನೆ (Scrutiny)' },
      category: 'process',
      definition: {
        en: 'The legal examination of all nomination papers by the Returning Officer to decide validity.',
        kn: 'ಸಲ್ಲಿಸಲಾದ ನಾಮಪತ್ರಗಳು ಸರಿಯಾಗಿವೆಯೇ ಎಂದು ಚುನಾವಣಾಧಿಕಾರಿಯು ನಡೆಸುವ ಕಾನೂನುಬದ್ಧ ಪರಿಶೀಲನೆ.'
      },
      whyItMatters: {
        en: 'Filters out bogus or unqualified candidates transparently in front of opposing candidates.',
        kn: 'ಅನರ್ಹ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ತಡೆದು, ನೈಜ ಅಭ್ಯರ್ಥಿಗಳಿಗೆ ಮಾತ್ರ ಸ್ಪರ್ಧಿಸಲು ಅವಕಾಶ ಕಲ್ಪಿಸುತ್ತದೆ.'
      },
      relatedTerms: ['Nomination', 'Returning Officer']
    },
    {
      id: 'silence-period',
      term: { en: 'Silence Period', kn: 'ಮೌನ ಅವಧಿ (Silence Period)' },
      category: 'process',
      definition: {
        en: 'The 48-hour quiet window leading up to the conclusion of polling when all campaigning must halt.',
        kn: 'ಮತದಾನ ಮುಕ್ತಾಯಕ್ಕೆ 48 ಗಂಟೆಗಳ ಮೊದಲು ಎಲ್ಲಾ ರೀತಿಯ ಪ್ರಚಾರವನ್ನು ನಿಲ್ಲಿಸುವ ಅವಧಿ.'
      },
      whyItMatters: {
        en: 'Protects voters from eleventh-hour pressure, allowing reasoned reflection before voting.',
        kn: 'ಯಾವುದೇ ಅಂತಿಮ ಕ್ಷಣದ ಒತ್ತಡವಿಲ್ಲದೆ ಮತದಾರರು ಪ್ರಶಾಂತವಾಗಿ ನಿರ್ಧರಿಸಲು ನೆರವಾಗುತ್ತದೆ.'
      },
      relatedTerms: ['Campaign', 'Polling']
    },
    {
      id: 'counting',
      term: { en: 'Vote Counting', kn: 'ಮತ ಎಣಿಕೆ (Vote Counting)' },
      category: 'counting',
      definition: {
        en: 'The systematic tallying of all cast votes from EVM control units and postal ballots under supervision.',
        kn: 'ಚುನಾವಣಾ ವೀಕ್ಷಕರು ಮತ್ತು ಏಜೆಂಟರ ಸಮ್ಮುಖದಲ್ಲಿ ಯಂತ್ರಗಳು ಮತ್ತು ಅಂಚೆ ಮತಗಳ ಅಧಿಕೃತ ಲೆಕ್ಕಾಚಾರ.'
      },
      whyItMatters: {
        en: 'Translates individual ballots into final parliamentary or council representation.',
        kn: 'ಪ್ರತಿಯೊಂದು ಮತವನ್ನೂ ಪಾರದರ್ಶಕವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಅಂತಿಮ ಜನಾದೇಶವನ್ನು ರೂಪಿಸುತ್ತದೆ.'
      },
      relatedTerms: ['Strongroom', 'Control Unit']
    },
    {
      id: 'result',
      term: { en: 'Declaration of Result', kn: 'ಫಲಿತಾಂಶ ಘೋಷಣೆ (Result)' },
      category: 'counting',
      definition: {
        en: 'The formal announcement by the Returning Officer of the candidate who secured the highest number of valid votes.',
        kn: 'ಅತಿ ಹೆಚ್ಚು ಮಾನ್ಯ ಮತಗಳನ್ನು ಪಡೆದ ಅಭ್ಯರ್ಥಿಯನ್ನು ವಿಜೇತರೆಂದು ಚುನಾವಣಾಧಿಕಾರಿಯು ಮಾಡುವ ಅಧಿಕೃತ ಘೋಷಣೆ.'
      },
      whyItMatters: {
        en: 'Legally authorizes the winner to take their oath and assume legislative duties.',
        kn: 'ವಿಜೇತ ಅಭ್ಯರ್ಥಿಯು ಪ್ರಮಾಣವಚನ ಸ್ವೀಕರಿಸಿ ಕರ್ತವ್ಯಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಕಾನೂನುಬದ್ಧ ಅಧಿಕಾರ ನೀಡುತ್ತದೆ.'
      },
      relatedTerms: ['Certificate of Election']
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      topicTag: 'Polling Rules',
      question: {
        en: 'If you are already standing in the queue when the official polling hours end (e.g. at 6:00 PM), are you still allowed to vote?',
        kn: 'ಅಧಿಕೃತ ಮತದಾನದ ಸಮಯ ಮುಗಿದಾಗ (ಉದಾ: ಸಂಜೆ 6:00) ನೀವು ಈಗಾಗಲೇ ಸರದಿಯಲ್ಲಿ ನಿಂತಿದ್ದರೆ, ನೀವು ಮತ ಚಲಾಯಿಸಲು ಅನುಮತಿ ಇದೆಯೇ?'
      },
      options: {
        en: [
          'Yes, anyone inside the queue before the closing hour must be permitted to vote.',
          'No, the polling booth closes strictly and machines shut off immediately.',
          'Only senior citizens in the queue are allowed to vote.',
          'It is left entirely to the discretion of the security personnel.'
        ],
        kn: [
          'ಹೌದು, ಮುಕ್ತಾಯದ ಸಮಯಕ್ಕೆ ಸರದಿಯಲ್ಲಿ ನಿಂತಿರುವ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಮತ ಚಲಾಯಿಸಲು ಅವಕಾಶ ನೀಡಲೇಬೇಕು.',
          'ಇಲ್ಲ, ನಿಗದಿತ ಸಮಯ ಮುಗಿದ ತಕ್ಷಣ ಮತಯಂತ್ರಗಳನ್ನು ಸ್ಥಗಿತಗೊಳಿಸಲಾಗುತ್ತದೆ.',
          'ಸರದಿಯಲ್ಲಿರುವ ಕೇವಲ ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಮಾತ್ರ ಅವಕಾಶವಿರುತ್ತದೆ.',
          'ಇದು ಸಂಪೂರ್ಣವಾಗಿ ಭದ್ರತಾ ಸಿಬ್ಬಂದಿಯ ತೀರ್ಮಾನಕ್ಕೆ ಬಿಟ್ಟದ್ದು.'
        ]
      },
      correctIndex: 0,
      explanation: {
        en: 'Under election rules, the Presiding Officer distributes numbered slips from the back of the queue at closing time. Every voter who was in line before the deadline has a legal right to cast their vote.',
        kn: 'ಚುನಾವಣಾ ನಿಯಮಗಳ ಪ್ರಕಾರ, ನಿಗದಿತ ಸಮಯಕ್ಕೆ ಸರದಿಯ ಕೊನೆಯಿಂದ ಸಂಖ್ಯೆಯುಳ್ಳ ಚೀಟಿಗಳನ್ನು ನೀಡಲಾಗುತ್ತದೆ. ಸರದಿಯಲ್ಲಿ ನಿಂತಿರುವ ಎಲ್ಲರಿಗೂ ಮತದಾನ ಮಾಡಲು ಹಕ್ಕಿದೆ.'
      }
    },
    {
      id: 'q2',
      topicTag: 'EVM & VVPAT',
      question: {
        en: 'How long is the VVPAT paper audit slip visible through the transparent window after you press a button on the EVM?',
        kn: 'ಇವಿಎಂನಲ್ಲಿ ಗುಂಡಿ ಒತ್ತಿದ ನಂತರ VVPAT ನ ಕಾಗದದ ಸ್ಲಿಪ್ ಎಷ್ಟು ಸೆಕೆಂಡುಗಳ ಕಾಲ ಕಿಟಕಿಯಲ್ಲಿ ಗೋಚರಿಸುತ್ತದೆ?'
      },
      options: {
        en: ['2 seconds', '7 seconds', '30 seconds', 'Until the next voter arrives'],
        kn: ['2 ಸೆಕೆಂಡುಗಳು', '7 ಸೆಕೆಂಡುಗಳು', '30 ಸೆಕೆಂಡುಗಳು', 'ಮುಂದಿನ ಮತದಾರರು ಬರುವವರೆಗೆ']
      },
      correctIndex: 1,
      explanation: {
        en: 'The VVPAT slip is illuminated and remains visible for exactly 7 seconds so the voter can verify that their vote was recorded for the chosen candidate and symbol before it drops into the sealed compartment.',
        kn: 'ಮತದಾರರು ತಮ್ಮ ಆಯ್ಕೆಯ ಚಿಹ್ನೆ ಮತ್ತು ಅಭ್ಯರ್ಥಿಗೆ ಮತ ದಾಖಲಾಗಿದೆಯೇ ಎಂದು ದೃಢಪಡಿಸಿಕೊಳ್ಳಲು VVPAT ಸ್ಲಿಪ್ ನಿಖರವಾಗಿ 7 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಗೋಚರಿಸುತ್ತದೆ.'
      }
    },
    {
      id: 'q3',
      topicTag: 'Voter Registration',
      question: {
        en: 'What is the most critical requirement for being eligible to vote on election day?',
        kn: 'ಮತದಾನದ ದಿನ ಮತ ಚಲಾಯಿಸಲು ಅತ್ಯಂತ ಪ್ರಮುಖ ಮತ್ತು ಕಡ್ಡಾಯ ಅವಶ್ಯಕತೆ ಏನು?'
      },
      options: {
        en: [
          'Having a physical Voter ID (EPIC) card only.',
          'Your name must be officially enrolled on the Electoral Roll of that polling station.',
          'Having an income tax registration certificate.',
          'A formal recommendation letter from local council representatives.'
        ],
        kn: [
          'ಕೇವಲ ಮತದಾರರ ಗುರುತಿನ ಚೀಟಿ (EPIC) ಹೊಂದಿರುವುದು ಮಾತ್ರ.',
          'ಆ ಮತಗಟ್ಟೆಯ ಮತದಾರರ ಪಟ್ಟಿಯಲ್ಲಿ ನಿಮ್ಮ ಹೆಸರು ಅಧಿಕೃತವಾಗಿ ನಮೂದಾಗಿರಬೇಕು.',
          'ಆದಾಯ ತೆರಿಗೆ ಪ್ರಮಾಣಪತ್ರ ಹೊಂದಿರುವುದು.',
          'ಸ್ಥಳೀಯ ಜನಪ್ರತಿನಿಧಿಗಳ ಶಿಫಾರಸು ಪತ್ರವಿರುವುದು.'
        ]
      },
      correctIndex: 1,
      explanation: {
        en: 'Presence of your name in the Electoral Roll is the supreme legal requirement. If your name is on the list, you can vote using alternate government photo IDs (Passport, Driving License, Aadhaar, PAN) even without the physical voter card.',
        kn: 'ಮತದಾರರ ಪಟ್ಟಿಯಲ್ಲಿ ಹೆಸರು ಇರುವುದು ಅತ್ಯಂತ ಮುಖ್ಯ. ಹೆಸರು ಪಟ್ಟಿಯಲ್ಲಿದ್ದರೆ, ವೋಟರ್ ಐಡಿ ಇಲ್ಲದಿದ್ದರೂ ಆಧಾರ್, ಪಾಸ್‌ಪೋರ್ಟ್ ಅಥವಾ ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್ ತೋರಿಸಿ ಮತ ಚಲಾಯಿಸಬಹುದು.'
      }
    },
    {
      id: 'q4',
      topicTag: 'Campaign Rules',
      question: {
        en: 'When does the mandatory "Silence Period" (stopping of all election campaign rallies and loudspeakers) begin?',
        kn: 'ಚುನಾವಣಾ ಪ್ರಚಾರ, ಸಭೆಗಳು ಮತ್ತು ಧ್ವನಿವರ್ಧಕಗಳನ್ನು ನಿಲ್ಲಿಸುವ "ಮೌನ ಅವಧಿ" ಯಾವಾಗ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ?'
      },
      options: {
        en: [
          '12 hours before voting starts.',
          '24 hours before voting starts.',
          '48 hours before the conclusion of the polling hour.',
          'Only on the midnight preceding counting day.'
        ],
        kn: [
          'ಮತದಾನ ಆರಂಭವಾಗುವ 12 ಗಂಟೆಗಳ ಮೊದಲು.',
          'ಮತದಾನ ಆರಂಭವಾಗುವ 24 ಗಂಟೆಗಳ ಮೊದಲು.',
          'ಮತದಾನ ಮುಕ್ತಾಯದ ಸಮಯಕ್ಕೆ 48 ಗಂಟೆಗಳ ಮೊದಲು.',
          'ಎಣಿಕೆಯ ದಿನದ ಹಿಂದಿನ ಮಧ್ಯರಾತ್ರಿ ಮಾತ್ರ.'
        ]
      },
      correctIndex: 2,
      explanation: {
        en: 'Section 126 of the Representation of the People Act mandates that all public campaigning must conclude 48 hours prior to the close of polling.',
        kn: 'ಕಾನೂನಿನ ಪ್ರಕಾರ, ಮತದಾನ ಮುಕ್ತಾಯಗೊಳ್ಳುವ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ 48 ಗಂಟೆಗಳ ಮೊದಲು ಎಲ್ಲಾ ಬಹಿರಂಗ ಪ್ರಚಾರವನ್ನು ಕಡ್ಡಾಯವಾಗಿ ನಿಲ್ಲಿಸಬೇಕು.'
      }
    },
    {
      id: 'q5',
      topicTag: 'NOTA Rights',
      question: {
        en: 'What is the primary civic purpose of the NOTA (None of the Above) option?',
        kn: 'ನೋಟಾ (NOTA) ಆಯ್ಕೆಯ ಪ್ರಮುಖ ನಾಗರಿಕ ಉದ್ದೇಶವೇನು?'
      },
      options: {
        en: [
          'It automatically cancels the election if chosen by more than 10 people.',
          'It allows voters to participate and reject all candidates while preserving secrecy of the ballot.',
          'It gives the voter a cash refund on municipal taxes.',
          'It transfers the vote to the independent candidate with the least votes.'
        ],
        kn: [
          '10 ಕ್ಕಿಂತ ಹೆಚ್ಚು ಜನರು ಇದನ್ನು ಆರಿಸಿದರೆ ಚುನಾವಣೆಯನ್ನು ರದ್ದುಗೊಳಿಸುತ್ತದೆ.',
          'ಗೌಪ್ಯತೆಯನ್ನು ಕಾಪಾಡಿಕೊಂಡು ಎಲ್ಲಾ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ತಿರಸ್ಕರಿಸಲು ಮತದಾರರಿಗೆ ಸಾಂವಿಧಾನಿಕ ಹಕ್ಕು ನೀಡುತ್ತದೆ.',
          'ತೆರಿಗೆಯಲ್ಲಿ ರಿಯಾಯಿತಿ ನೀಡುತ್ತದೆ.',
          'ಕಡಿಮೆ ಮತ ಪಡೆದ ಸ್ವತಂತ್ರ ಅಭ್ಯರ್ಥಿಗೆ ಮತವನ್ನು ವರ್ಗಾಯಿಸುತ್ತದೆ.'
        ]
      },
      correctIndex: 1,
      explanation: {
        en: 'NOTA empowers citizens to exercise their democratic franchise to express dissatisfaction with all contesting candidates without giving up secrecy or abstaining.',
        kn: 'ಯಾವ ಅಭ್ಯರ್ಥಿಯೂ ಸರಿ ಇಲ್ಲ ಎಂದಾಗ ಮತದಾನದಿಂದ ದೂರ ಉಳಿಯದೆ, ತನ್ನ ಅಸಮ್ಮತಿಯನ್ನು ರಹಸ್ಯವಾಗಿ ದಾಖಲಿಸಲು ನೋಟಾ ಅವಕಾಶ ನೀಡುತ್ತದೆ.'
      }
    },
    {
      id: 'q6',
      topicTag: 'Ballot Secrecy',
      question: {
        en: 'Why is taking a photo or selfie of your marked ballot or EVM strictly illegal?',
        kn: 'ಮತದಾನ ಮಾಡುವಾಗ ಇವಿಎಂ ಅಥವಾ ಮತಪತ್ರದ ಫೋಟೋ ಅಥವಾ ಸೆಲ್ಫಿ ತೆಗೆಯುವುದು ಏಕೆ ಕಾನೂನುಬಾಹಿರ?'
      },
      options: {
        en: [
          'Because cameras damage the electronic screen.',
          'To prevent vote buying, intimidation, and protect the inviolable constitutional secrecy of the vote.',
          'Because voting booths have copyright restrictions.',
          'To save smartphone battery for emergency calls.'
        ],
        kn: [
          'ಕ್ಯಾಮೆರಾ ಬೆಳಕು ಯಂತ್ರದ ಪರದೆಯನ್ನು ಹಾಳುಮಾಡುತ್ತದೆ.',
          'ಮತ ಖರೀದಿ, ಬೆದರಿಕೆಗಳನ್ನು ತಡೆಯಲು ಮತ್ತು ಮತದಾನದ ಸಾಂವಿಧಾನಿಕ ಗೌಪ್ಯತೆಯನ್ನು ರಕ್ಷಿಸಲು.',
          'ಮತಗಟ್ಟೆಗಳಿಗೆ ಹಕ್ಕುಸ್ವಾಮ್ಯ ನಿರ್ಬಂಧಗಳಿವೆ.',
          'ಮೊಬೈಲ್ ಬ್ಯಾಟರಿ ಉಳಿಸಲು.'
        ]
      },
      correctIndex: 1,
      explanation: {
        en: 'If voters could show proof of how they voted, criminal entities could coerce or buy votes. Secrecy protects you because nobody can ever prove who you voted for.',
        kn: 'ಮತ ಹಾಕಿದ ಪುರಾವೆಯನ್ನು ತೋರಿಸಲು ಸಾಧ್ಯವಾದರೆ, ಆಮಿಷ ಅಥವಾ ಬೆದರಿಕೆಯ ಮೂಲಕ ಮತ ಕದಿಯುವ ಅಪಾಯವಿರುತ್ತದೆ. ಗೌಪ್ಯತೆಯು ಮತದಾರರನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ರಕ್ಷಿಸುತ್ತದೆ.'
      }
    }
  ];

  const mythFactData = [
    {
      id: 'mf1',
      category: 'Voter ID',
      statement: {
        en: 'If I lost or forgot my physical Voter ID (EPIC) card, I cannot vote on election day.',
        kn: 'ನನ್ನ ವೋಟರ್ ಐಡಿ (EPIC) ಕಾರ್ಡ್ ಕಳೆದುಹೋಗಿದ್ದರೆ ನಾನು ಮತ ಚಲಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.'
      },
      isFact: false,
      verdict: { en: 'DEBUNKED MYTH', kn: 'ಸುಳ್ಳು ಕಲ್ಪನೆ (ಮಿಥ್ಯ)' },
      explanation: {
        en: 'If your name is registered on the official Electoral Roll of your polling station, you can vote using any approved government identity proof such as Aadhaar Card, Passport, Driving License, or PAN Card.',
        kn: 'ಮತದಾರರ ಪಟ್ಟಿಯಲ್ಲಿ ನಿಮ್ಮ ಹೆಸರು ಇದ್ದರೆ ಸಾಕು; ವೋಟರ್ ಐಡಿ ಇಲ್ಲದಿದ್ದರೂ ಆಧಾರ್ ಕಾರ್ಡ್, ಪಾಸ್‌ಪೋರ್ಟ್ ಅಥವಾ ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್ ತೋರಿಸಿ ಮತ ಚಲಾಯಿಸಬಹುದು.'
      },
      source: 'Election Commission of India Order on Alternative Identity Documents'
    },
    {
      id: 'mf2',
      category: 'Voting Machines',
      statement: {
        en: 'EVMs can be hacked wirelessly via Bluetooth, Wi-Fi, or cellular networks.',
        kn: 'ಇವಿಎಂಗಳನ್ನು ಬ್ಲೂಟೂತ್, ವೈ-ಫೈ ಅಥವಾ ಮೊಬೈಲ್ ನೆಟ್‌ವರ್ಕ್ ಮೂಲಕ ಹ್ಯಾಕ್ ಮಾಡಬಹುದು.'
      },
      isFact: false,
      verdict: { en: 'DEBUNKED MYTH', kn: 'ಸುಳ್ಳು ಕಲ್ಪನೆ (ಮಿಥ್ಯ)' },
      explanation: {
        en: 'EVMs are completely standalone computing devices. They contain no internet chips, no radio frequency modules, no Bluetooth, and no wireless receivers. Code is permanently burnt onto One-Time Programmable microcontrollers at the foundry.',
        kn: 'ಇವಿಎಂಗಳು ಸಂಪೂರ್ಣವಾಗಿ ನೆಟ್‌ವರ್ಕ್ ರಹಿತ ಸ್ವತಂತ್ರ ಯಂತ್ರಗಳಾಗಿವೆ. ಅವುಗಳಲ್ಲಿ ಯಾವುದೇ ಇಂಟರ್ನೆಟ್, ಬ್ಲೂಟೂತ್ ಅಥವಾ ರಿಸೀವರ್ ಇರುವುದಿಲ್ಲ.'
      },
      source: 'Technical Expert Committee (TEC) on Electronic Voting Machines'
    },
    {
      id: 'mf3',
      category: 'NOTA',
      statement: {
        en: 'In parliamentary elections, if NOTA receives more votes than any candidate, the election is automatically voided and re-conducted.',
        kn: 'ಲೋಕಸಭೆ ಅಥವಾ ವಿಧಾನ ಸಭೆ ಚುನಾವಣೆಯಲ್ಲಿ ನೋಟಾಗೆ ಅತಿ ಹೆಚ್ಚು ಮತ ಬಂದರೆ, ಆ ಚುನಾವಣೆಯನ್ನು ರದ್ದುಗೊಳಿಸಿ ಮರುಚುನಾವಣೆ ನಡೆಸಲಾಗುತ್ತದೆ.'
      },
      isFact: false,
      verdict: { en: 'DEBUNKED MYTH', kn: 'ಸುಳ್ಳು ಕಲ್ಪನೆ (ಮಿಥ್ಯ)' },
      explanation: {
        en: 'Under the first-past-the-post system in general assembly/parliamentary elections, the candidate securing the highest number of valid candidate votes is declared winner, regardless of the NOTA total. However, NOTA serves as official public data on voter dissatisfaction.',
        kn: 'ಸಾಮಾನ್ಯ ಚುನಾವಣೆಗಳಲ್ಲಿ ನೋಟಾ ಅತಿ ಹೆಚ್ಚು ಮತ ಪಡೆದರೂ, ಸ್ಪರ್ಧಿಸಿದ ಅಭ್ಯರ್ಥಿಗಳಲ್ಲಿ ಯಾರು ಹೆಚ್ಚು ಮತ ಪಡೆದಿರುತ್ತಾರೋ ಅವರೇ ವಿಜೇತರಾಗುತ್ತಾರೆ.'
      },
      source: 'Supreme Court of India (PUCL vs. Union of India, 2013)'
    },
    {
      id: 'mf4',
      category: 'Polling Procedures',
      statement: {
        en: 'If you are already standing inside the queue when official voting hours close, you are legally entitled to vote.',
        kn: 'ಮತದಾನದ ಮುಕ್ತಾಯದ ಸಮಯಕ್ಕೆ ನೀವು ಈಗಾಗಲೇ ಸರದಿಯಲ್ಲಿ ನಿಂತಿದ್ದರೆ, ಮತ ಚಲಾಯಿಸಲು ನಿಮಗೆ ಕಾನೂನುಬದ್ಧ ಹಕ್ಕಿದೆ.'
      },
      isFact: true,
      verdict: { en: 'VERIFIED FACT', kn: 'ದೃಢೀಕೃತ ಸತ್ಯ' },
      explanation: {
        en: 'At the exact closing time (e.g. 6:00 PM), the Presiding Officer signs slips and distributes them to every person in line starting from the last person forward. Polling continues until the last slip holder casts their vote.',
        kn: 'ಮುಕ್ತಾಯದ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಸರದಿಯಲ್ಲಿರುವ ಕೊನೆಯ ವ್ಯಕ್ತಿಯಿಂದ ಪ್ರಾರಂಭಿಸಿ ಅಧಿಕಾರಿಗಳು ಚೀಟಿ ನೀಡುತ್ತಾರೆ ಮತ್ತು ಎಲ್ಲರಿಗೂ ಮತದಾನಕ್ಕೆ ಅವಕಾಶ ನೀಡಲಾಗುತ್ತದೆ.'
      },
      source: 'Statutory Presiding Officer Handbook, Rule 43'
    },
    {
      id: 'mf5',
      category: 'Eligibility',
      statement: {
        en: 'Any citizen who turns 18 years old can walk directly into a polling booth on election day and register on the spot.',
        kn: '18 ವರ್ಷ ತುಂಬಿದ ಯಾವುದೇ ನಾಗರಿಕನು ಮತದಾನದ ದಿನ ನೇರವಾಗಿ ಮತಗಟ್ಟೆಗೆ ಹೋಗಿ ತಕ್ಷಣ ನೋಂದಾಯಿಸಿಕೊಳ್ಳಬಹುದು.'
      },
      isFact: false,
      verdict: { en: 'DEBUNKED MYTH', kn: 'ಸುಳ್ಳು ಕಲ್ಪನೆ (ಮಿಥ್ಯ)' },
      explanation: {
        en: 'Electoral registration must be completed in advance (via Form 6 or online voter portals). The voter roll is finalized ahead of the nomination deadline. On-the-spot registration on polling day is not permitted.',
        kn: 'ಮತದಾರರ ಪಟ್ಟಿಗೆ ಮುಂಚಿತವಾಗಿಯೇ (Form 6 ಮೂಲಕ) ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು. ಮತದಾನದ ದಿನ ಸ್ಥಳದಲ್ಲೇ ನೋಂದಣಿ ಮಾಡಲು ಅವಕಾಶವಿಲ್ಲ.'
      },
      source: 'Registration of Electors Rules, 1960'
    }
  ];

  const aiKnowledgeBase = {
    'who should i vote for': {
      shortAnswer: {
        en: 'ELECTRA is an independent, non-partisan educational platform and never recommends specific candidates or political parties.',
        kn: 'ಎಲೆಕ್ಟ್ರಾ ಒಂದು ಸ್ವತಂತ್ರ, ತಟಸ್ಥ ಶೈಕ್ಷಣಿಕ ವೇದಿಕೆಯಾಗಿದ್ದು ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಅಭ್ಯರ್ಥಿ ಅಥವಾ ರಾಜಕೀಯ ಪಕ್ಷವನ್ನು ಶಿಫಾರಸು ಮಾಡುವುದಿಲ್ಲ.'
      },
      howItWorks: {
        en: 'To make an informed decision: 1) Read each candidate’s sworn affidavit for qualifications and assets, 2) Compare their public manifestos and past public integrity, and 3) Vote according to your conscience on polling day.',
        kn: 'ಉತ್ತಮ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಲು: 1) ಅಭ್ಯರ್ಥಿಯ ಅಫಿಡವಿಟ್ ಪರಿಶೀಲಿಸಿ, 2) ಅವರ ಪ್ರಣಾಳಿಕೆಯನ್ನು ಗಮನಿಸಿ, 3) ನಿಮ್ಮ ಸ್ವಂತ ವಿವೇಚನೆಯಿಂದ ಮತದಾನ ಮಾಡಿ.'
      },
      relatedTopics: ['Affidavit', 'Nomination', 'Manifesto', 'Secrecy of Vote'],
      sources: ['Constitution of India — Universal Adult Suffrage', 'Electoral Transparency Framework']
    },
    'what happens during polling': {
      shortAnswer: {
        en: 'Polling is the scheduled day when registered electors visit their assigned booth to cast their confidential ballot.',
        kn: 'ಮತದಾನದ ದಿನದಂದು ನೋಂದಾಯಿತ ಮತದಾರರು ತಮ್ಮ ನಿಗದಿತ ಮತಗಟ್ಟೆಗೆ ಭೇಟಿ ನೀಡಿ ರಹಸ್ಯವಾಗಿ ಮತ ಚಲಾಯಿಸುತ್ತಾರೆ.'
      },
      howItWorks: {
        en: '1) The First Polling Officer checks your photo ID against the Electoral Roll. 2) The Second Polling Officer marks your left index finger with indelible ink. 3) The Third Polling Officer authorizes the EVM. 4) Inside the private compartment, you press your choice and the VVPAT slip confirms your vote for 7 seconds.',
        kn: '1) ಮತಗಟ್ಟೆಯಲ್ಲಿ ಗುರುತಿನ ಚೀಟಿ ಪರಿಶೀಲನೆ. 2) ಎಡತೋರು ಬೆರಳಿಗೆ ಅಳಿಸಲಾಗದ ಶಾಯಿ ಹಾಕುವುದು. 3) ಇವಿಎಂ ಸಕ್ರಿಯಗೊಳಿಸುವುದು. 4) ರಹಸ್ಯವಾಗಿ ಆಯ್ಕೆಯ ಗುಂಡಿ ಒತ್ತುವುದು ಮತ್ತು VVPAT ಸ್ಲಿಪ್ 7 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಗೋಚರಿಸುವುದು.'
      },
      relatedTopics: ['EVM & VVPAT', 'Indelible Ink', 'Secrecy of Vote'],
      sources: ['Handbook for Polling Officers, ECI']
    },
    'what is nomination': {
      shortAnswer: {
        en: 'Nomination is the formal legal procedure where a citizen submits official paperwork to contest an election for public office.',
        kn: 'ಚುನಾವಣೆಯಲ್ಲಿ ಸ್ಪರ್ಧಿಸಲು ಇಚ್ಛಿಸುವ ಪ್ರಜೆಯು ಸಲ್ಲಿಸುವ ಅಧಿಕೃತ ಕಾನೂನುಬದ್ಧ ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆ.'
      },
      howItWorks: {
        en: 'Candidates file prescribed forms before the Returning Officer, accompanied by proposers from that constituency. They must pay a statutory security deposit and submit Form 26 sworn affidavits detailing criminal background, education, and financial assets.',
        kn: 'ಅಭ್ಯರ್ಥಿಗಳು ಆ ಕ್ಷೇತ್ರದ ಮತದಾರರ ಬೆಂಬಲದೊಂದಿಗೆ ಚುನಾವಣಾಧಿಕಾರಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸುತ್ತಾರೆ. ಭದ್ರತಾ ಠೇವಣಿ ಮತ್ತು ಆಸ್ತಿ, ಅಪರಾಧ ಹಿನ್ನೆಲೆಯ ಅಫಿಡವಿಟ್ ಸಲ್ಲಿಸುವುದು ಕಡ್ಡಾಯ.'
      },
      relatedTopics: ['Affidavit', 'Scrutiny', 'Security Deposit'],
      sources: ['Representation of the People Act, 1951, Section 33']
    },
    'how does vote counting work': {
      shortAnswer: {
        en: 'Vote counting is the transparent, round-wise tallying of all polled electronic votes and postal ballots in the presence of candidate agents.',
        kn: 'ಮತ ಎಣಿಕೆಯು ಅಭ್ಯರ್ಥಿಗಳ ಪ್ರತಿನಿಧಿಗಳ ಸಮ್ಮುಖದಲ್ಲಿ ಸುತ್ತುಗಳ ಪ್ರಕಾರ ನಡೆಯುವ ಪಾರದರ್ಶಕ ಲೆಕ್ಕಾಚಾರವಾಗಿದೆ.'
      },
      howItWorks: {
        en: 'The strongroom is opened under camera monitoring. Postal ballots are tallied first. EVM Control Units have their seals verified. Pressing the "RESULT" button on each machine displays votes per candidate, which are signed by candidate agents and verified with sample VVPAT paper audits.',
        kn: 'ಭದ್ರತಾ ಕೊಠಡಿ ತೆರೆದು ಮೊದಲು ಅಂಚೆ ಮತಗಳು, ನಂತರ ಇವಿಎಂ ಯಂತ್ರಗಳ ಸೀಲ್ ಪರಿಶೀಲಿಸಿ "RESULT" ಗುಂಡಿ ಒತ್ತುವ ಮೂಲಕ ಅಭ್ಯರ್ಥಿಗಳ ಮತಗಳನ್ನು ಸುತ್ತುಗಳ ಪ್ರಕಾರ ದಾಖಲಿಸಲಾಗುತ್ತದೆ.'
      },
      relatedTopics: ['Strongroom', 'Control Unit', 'VVPAT'],
      sources: ['ECI Counting Guidelines & Audit Protocols']
    },
    'what does nota mean': {
      shortAnswer: {
        en: 'NOTA stands for "None of the Above". It allows you to participate in voting without choosing any candidate on the ballot.',
        kn: 'ನೋಟಾ ಎಂದರೆ "None of the Above" (ಮೇಲಿನ ಯಾರೂ ಅಲ್ಲ). ಯಾವುದೇ ಅಭ್ಯರ್ಥಿಗೂ ಮತ ಹಾಕಲು ಇಷ್ಟವಿಲ್ಲದಿದ್ದಾಗ ಇದನ್ನು ಆಯ್ಕೆ ಮಾಡಬಹುದು.'
      },
      howItWorks: {
        en: 'Introduced following a landmark 2013 Supreme Court ruling, NOTA appears as the final entry on the ballot unit. It guarantees that electors who reject all candidates can cast their ballot secretly without losing their franchise.',
        kn: 'ಯಾವ ಅಭ್ಯರ್ಥಿಯೂ ಸರಿ ಇಲ್ಲ ಎಂದಾಗ ಮತದಾರರು ರಹಸ್ಯವಾಗಿ ತಮ್ಮ ಅಸಮ್ಮತಿಯನ್ನು ಚಲಾಯಿಸಲು ಇದು ನೆರವಾಗುತ್ತದೆ.'
      },
      relatedTopics: ['Ballot', 'Secrecy of Vote', 'EVM'],
      sources: ['Supreme Court of India (Writ Petition 161 of 2004)']
    },
    'explain elections in simple language': {
      shortAnswer: {
        en: 'An election is how a community peacefully picks leaders to manage laws, taxes, roads, schools, and civic services.',
        kn: 'ಚುನಾವಣೆ ಎಂದರೆ ಜನರು ಒಟ್ಟಾಗಿ ತಮ್ಮ ಕಾನೂನು, ಶಾಲೆ, ರಸ್ತೆ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳನ್ನು ನಿರ್ವಹಿಸಲು ನಾಯಕರನ್ನು ಶಾಂತಿಯುತವಾಗಿ ಆಯ್ಕೆ ಮಾಡುವ ವಿಧಾನ.'
      },
      howItWorks: {
        en: 'Instead of one ruler making all decisions without asking, citizens over 18 vote for candidates who represent their ideas. Whoever receives the highest support represents that area in council or parliament.',
        kn: '18 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಎಲ್ಲಾ ಪ್ರಜೆಗಳು ತಮಗೆ ಸರಿ ಎನಿಸುವ ಪ್ರತಿನಿಧಿಗೆ ಮತ ಹಾಕುತ್ತಾರೆ. ಹೆಚ್ಚು ಬೆಂಬಲ ಪಡೆದವರು ಜನಪ್ರತಿನಿಧಿಯಾಗುತ್ತಾರೆ.'
      },
      relatedTopics: ['Voter', 'Election Journey', 'Ballot'],
      sources: ['Civic Education Standards — Democratic Foundations']
    }
  };

  function findAIAnswer(query, mode) {
    const normalized = (query || '').toLowerCase().trim();
    if (normalized.includes('who should i vote') || normalized.includes('which party') || normalized.includes('best party')) {
      return aiKnowledgeBase['who should i vote for'];
    }
    for (const [key, response] of Object.entries(aiKnowledgeBase)) {
      if (normalized.includes(key)) {
        return response;
      }
    }
    if (normalized.includes('poll') || normalized.includes('booth') || normalized.includes('voting day')) {
      return aiKnowledgeBase['what happens during polling'];
    }
    if (normalized.includes('nominat') || normalized.includes('affidavit') || normalized.includes('form 26')) {
      return aiKnowledgeBase['what is nomination'];
    }
    if (normalized.includes('count') || normalized.includes('tally') || normalized.includes('strongroom')) {
      return aiKnowledgeBase['how does vote counting work'];
    }
    if (normalized.includes('nota') || normalized.includes('none of')) {
      return aiKnowledgeBase['what does nota mean'];
    }

    return {
      shortAnswer: {
        en: 'Elections are the constitutional foundation of democracy, ensuring government by the consent of the governed.',
        kn: 'ಚುನಾವಣೆಗಳು ಪ್ರಜಾಪ್ರಭುತ್ವದ ಸಾಂವಿಧಾನಿಕ ಅಡಿಪಾಯವಾಗಿದ್ದು, ಜನರ ಸಮ್ಮತಿಯೊಂದಿಗೆ ಸರ್ಕಾರವನ್ನು ಆಯ್ಕೆ ಮಾಡುವ ಮಾರ್ಗವಾಗಿದೆ.'
      },
      howItWorks: {
        en: mode === 'simple'
          ? 'Elections allow citizens to cast confidential ballots for representatives who best understand their community needs.'
          : 'The election cycle proceeds systematically through announcement, candidate nomination, legal scrutiny, campaigns, confidential polling, and audited vote counting.',
        kn: mode === 'simple'
          ? 'ಚುನಾವಣೆಗಳು ಪ್ರಜೆಗಳಿಗೆ ತಮ್ಮ ಪ್ರತಿನಿಧಿಗಳಿಗೆ ರಹಸ್ಯ ಮತದಾನ ಮಾಡಲು ಅನುಮತಿ ನೀಡುತ್ತವೆ.'
          : 'ಚುನಾವಣಾ ಪ್ರಕ್ರಿಯೆಯು ಅಧಿಸೂಚನೆ, ನಾಮಪತ್ರ ಸಲ್ಲಿಕೆ, ಪರಿಶೀಲನೆ, ಪ್ರಚಾರ, ರಹಸ್ಯ ಮತದಾನ ಮತ್ತು ಪರಿಶೀಲಿತ ಎಣಿಕೆಯ ಮೂಲಕ ವ್ಯವಸ್ಥಿತವಾಗಿ ಸಾಗುತ್ತದೆ.'
      },
      relatedTopics: ['Election Journey', 'EVM & VVPAT', 'Electoral Roll', 'NOTA'],
      sources: ['ELECTRA Civic Knowledge Engine', 'Representation of the People Act']
    };
  }

  /* =========================================================================
     3. APP CONTEXT
     ========================================================================= */
  const AppContext = createContext();

  function AppProvider({ children }) {
    const [language, setLanguageState] = useState(() => localStorage.getItem('electra_lang') || 'en');
    const [theme, setThemeState] = useState(() => localStorage.getItem('electra_theme') || 'light');
    const [highContrast, setHighContrastState] = useState(() => localStorage.getItem('electra_high_contrast') === 'true');
    const [reducedMotion, setReducedMotionState] = useState(() => localStorage.getItem('electra_reduced_motion') === 'true');
    const [fontScale, setFontScaleState] = useState(() => parseFloat(localStorage.getItem('electra_font_scale') || '1'));
    const [currentView, setCurrentView] = useState('home');
    const [isA11yModalOpen, setA11yModalOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [progress, setProgress] = useState(() => {
      try {
        const saved = localStorage.getItem('electra_progress');
        return saved ? JSON.parse(saved) : { visitedStages: [], viewedGlossaryTerms: [], quizzesCompleted: [], simulatorCompleted: false, mythsChecked: [] };
      } catch (e) {
        return { visitedStages: [], viewedGlossaryTerms: [], quizzesCompleted: [], simulatorCompleted: false, mythsChecked: [] };
      }
    });

    const setLanguage = (lang) => {
      setLanguageState(lang);
      localStorage.setItem('electra_lang', lang);
      document.documentElement.lang = lang;
    };

    const setTheme = (t) => {
      setThemeState(t);
      localStorage.setItem('electra_theme', t);
    };

    useEffect(() => {
      const root = document.documentElement;
      root.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
      const root = document.documentElement;
      root.setAttribute('data-high-contrast', highContrast ? 'true' : 'false');
      root.setAttribute('data-reduced-motion', reducedMotion ? 'true' : 'false');
      root.style.setProperty('--font-scale', fontScale.toString());
    }, [highContrast, reducedMotion, fontScale]);

    const setHighContrast = (val) => {
      setHighContrastState(val);
      localStorage.setItem('electra_high_contrast', val ? 'true' : 'false');
    };

    const setReducedMotion = (val) => {
      setReducedMotionState(val);
      localStorage.setItem('electra_reduced_motion', val ? 'true' : 'false');
    };

    const setFontScale = (val) => {
      setFontScaleState(val);
      localStorage.setItem('electra_font_scale', val.toString());
    };

    const saveProgress = (updated) => {
      setProgress(updated);
      localStorage.setItem('electra_progress', JSON.stringify(updated));
    };

    const markStageVisited = (stageId) => {
      if (!progress.visitedStages.includes(stageId)) {
        saveProgress({ ...progress, visitedStages: [...progress.visitedStages, stageId] });
      }
    };

    const markGlossaryViewed = (termId) => {
      if (!progress.viewedGlossaryTerms.includes(termId)) {
        saveProgress({ ...progress, viewedGlossaryTerms: [...progress.viewedGlossaryTerms, termId] });
      }
    };

    const recordQuizScore = (score, total) => {
      saveProgress({
        ...progress,
        quizzesCompleted: [...progress.quizzesCompleted, { score, total, timestamp: Date.now() }]
      });
    };

    const markSimulatorCompleted = () => {
      saveProgress({ ...progress, simulatorCompleted: true });
    };

    const markMythChecked = (mythId) => {
      if (!progress.mythsChecked.includes(mythId)) {
        saveProgress({ ...progress, mythsChecked: [...progress.mythsChecked, mythId] });
      }
    };

    const resetProgress = () => {
      const resetState = { visitedStages: [], viewedGlossaryTerms: [], quizzesCompleted: [], simulatorCompleted: false, mythsChecked: [] };
      saveProgress(resetState);
    };

    const t = translations[language] || translations.en;

    return h(AppContext.Provider, {
      value: {
        language,
        setLanguage,
        theme,
        setTheme,
        highContrast,
        setHighContrast,
        reducedMotion,
        setReducedMotion,
        fontScale,
        setFontScale,
        currentView,
        setCurrentView,
        progress,
        markStageVisited,
        markGlossaryViewed,
        recordQuizScore,
        markSimulatorCompleted,
        markMythChecked,
        resetProgress,
        isA11yModalOpen,
        setA11yModalOpen,
        isMobileMenuOpen,
        setMobileMenuOpen,
        t
      }
    }, children);
  }

  function useApp() {
    return useContext(AppContext);
  }

  /* =========================================================================
     4. SVG ICONS & COMMON COMPONENTS
     ========================================================================= */
  function IconVoteBox({ size = 20, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'm9 12 2 2 4-4' }),
      h('rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' })
    );
  }
  function IconCheck({ size = 18, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('polyline', { points: '20 6 9 17 4 12' })
    );
  }
  function IconChevronRight({ size = 18, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('polyline', { points: '9 18 15 12 9 6' })
    );
  }
  function IconChevronLeft({ size = 18, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('polyline', { points: '15 18 9 12 15 6' })
    );
  }
  function IconSun({ size = 17, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('circle', { cx: '12', cy: '12', r: '5' }),
      h('line', { x1: '12', y1: '1', x2: '12', y2: '3' }),
      h('line', { x1: '12', y1: '21', x2: '12', y2: '23' }),
      h('line', { x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' }),
      h('line', { x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' }),
      h('line', { x1: '1', y1: '12', x2: '3', y2: '12' }),
      h('line', { x1: '21', y1: '12', x2: '23', y2: '12' }),
      h('line', { x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' }),
      h('line', { x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' })
    );
  }
  function IconMoon({ size = 17, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' })
    );
  }
  function IconSearch({ size = 18, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('circle', { cx: '11', cy: '11', r: '8' }),
      h('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' })
    );
  }
  function IconSparkles({ size = 16, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'm12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z' })
    );
  }
  function IconShield({ size = 18, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }),
      h('line', { x1: '12', y1: '8', x2: '12', y2: '12' }),
      h('line', { x1: '12', y1: '16', x2: '12.01', y2: '16' })
    );
  }
  function IconAward({ size = 20, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('circle', { cx: '12', cy: '8', r: '7' }),
      h('polyline', { points: '8.21 13.89 7 23 12 20 17 23 15.79 13.88' })
    );
  }
  function IconBook({ size = 18, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' }),
      h('path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' })
    );
  }
  function IconGlobe({ size = 15, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('circle', { cx: '12', cy: '12', r: '10' }),
      h('line', { x1: '2', y1: '12', x2: '22', y2: '12' }),
      h('path', { d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' })
    );
  }
  function IconSettings({ size = 17, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('circle', { cx: '12', cy: '12', r: '3' }),
      h('path', { d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' })
    );
  }
  function IconMenu({ size = 20, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('line', { x1: '3', y1: '12', x2: '21', y2: '12' }),
      h('line', { x1: '3', y1: '6', x2: '21', y2: '6' }),
      h('line', { x1: '3', y1: '18', x2: '21', y2: '18' })
    );
  }
  function IconClose({ size = 18, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
      h('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
    );
  }
  function IconRefresh({ size = 16, color = 'currentColor' }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('polyline', { points: '23 4 23 10 17 10' }),
      h('polyline', { points: '1 20 1 14 7 14' }),
      h('path', { d: 'M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15' })
    );
  }

  // Reusable components
  function Button({ variant = 'primary', size = 'md', children, icon, className = '', disabled, onClick, style = {} }) {
    const sizePadding = size === 'sm' ? '6px 12px' : size === 'lg' ? '13px 24px' : '10px 18px';
    const sizeFont = size === 'sm' ? '13px' : size === 'lg' ? '16px' : '14px';

    return h('button', {
      className: `btn btn-${variant} ${className}`,
      style: { padding: sizePadding, fontSize: sizeFont, ...style },
      disabled,
      onClick
    },
      icon && h('span', { style: { display: 'inline-flex' } }, icon),
      children
    );
  }

  function Card({ children, interactive = false, className = '', onClick, style = {} }) {
    return h('div', {
      className: `electra-card ${interactive ? 'interactive' : ''} ${className}`,
      onClick,
      style: { cursor: interactive || onClick ? 'pointer' : 'default', ...style }
    }, children);
  }

  function Badge({ variant = 'default', children, icon, style = {} }) {
    return h('span', {
      className: `electra-badge ${variant}`,
      style: { display: 'inline-flex', alignItems: 'center', gap: '6px', ...style }
    },
      icon && h('span', { style: { display: 'inline-flex' } }, icon),
      children
    );
  }

  function ProgressBar({ value, height = 8, color = 'var(--accent-primary)' }) {
    const clamped = Math.min(100, Math.max(0, value));
    return h('div', {
      style: { width: '100%', height: `${height}px`, backgroundColor: 'var(--bg-muted)', borderRadius: '999px', overflow: 'hidden' }
    },
      h('div', {
        style: { width: `${clamped}%`, height: '100%', backgroundColor: color, borderRadius: '999px', transition: 'width 400ms cubic-bezier(0.16, 1, 0.3, 1)' }
      })
    );
  }

  function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return h('div', {
      style: {
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      },
      onClick: onClose
    },
      h('div', {
        style: {
          width: '100%',
          maxWidth: '480px',
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden'
        },
        onClick: (e) => e.stopPropagation()
      },
        h('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '18px 24px',
            borderBottom: '1px solid var(--border-subtle)'
          }
        },
          h('h3', { style: { fontSize: '18px', fontWeight: 600 } }, title),
          h('button', { onClick: onClose, style: { padding: '6px', color: 'var(--text-secondary)' } }, h(IconClose, { size: 18 }))
        ),
        h('div', { style: { padding: '24px' } }, children)
      )
    );
  }

  /* =========================================================================
     5. HEADER & FOOTER & ACCESSIBILITY MODAL
     ========================================================================= */
  function Header() {
    const { currentView, setCurrentView, language, setLanguage, theme, setTheme, setA11yModalOpen, isMobileMenuOpen, setMobileMenuOpen, t } = useApp();

    const navItems = [
      { view: 'home', label: t.nav.home },
      { view: 'explore', label: t.nav.explore },
      { view: 'journey', label: t.nav.journey },
      { view: 'simulator', label: t.nav.simulator },
      { view: 'glossary', label: t.nav.glossary },
      { view: 'quiz', label: t.nav.quiz },
      { view: 'mythfact', label: t.nav.mythFact },
      { view: 'ai', label: t.nav.ai },
      { view: 'about', label: t.nav.about }
    ];

    const handleNav = (v) => {
      setCurrentView(v);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return h('div', null,
      h('div', { className: 'disclaimer-banner' },
        h('span', { style: { fontWeight: 600, color: 'var(--warm-accent)', textTransform: 'uppercase', letterSpacing: '0.04em' } }, 'Educational Platform:'),
        h('span', null, t.simulationNotice)
      ),
      h('header', { className: 'electra-header' },
        h('div', { className: 'container', style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' } },
          // Brand
          h('div', {
            onClick: () => handleNav('home'),
            style: { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }
          },
            h('div', {
              style: {
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'var(--accent-primary)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(37,99,235,0.3)'
              }
            }, h(IconVoteBox, { size: 20, color: '#FFFFFF' })),
            h('div', null,
              h('span', { style: { fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', display: 'block', lineHeight: 1.1 } }, t.brand),
              h('span', { style: { fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' } }, 'Civic Intelligence')
            )
          ),
          // Desktop Nav
          h('nav', { className: 'desktop-nav', style: { display: 'none', gap: '4px', alignItems: 'center' } },
            navItems.map((item) => {
              const isActive = currentView === item.view;
              return h('button', {
                key: item.view,
                onClick: () => handleNav(item.view),
                style: {
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '13.5px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--accent-text)' : 'var(--text-secondary)',
                  backgroundColor: isActive ? 'var(--accent-subtle)' : 'transparent',
                  transition: 'all var(--transition-fast)'
                }
              }, item.label);
            })
          ),
          // Controls
          h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
            h('button', {
              onClick: () => setLanguage(language === 'en' ? 'kn' : 'en'),
              title: 'Toggle Language',
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 10px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                fontSize: '12px',
                fontWeight: 600
              }
            }, h(IconGlobe, { size: 14 }), h('span', null, language === 'en' ? 'ಕನ್ನಡ' : 'EN')),
            h('button', {
              onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
              title: 'Toggle Theme',
              style: {
                padding: '8px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }, theme === 'dark' ? h(IconSun, { size: 17 }) : h(IconMoon, { size: 17 })),
            h('button', {
              onClick: () => setA11yModalOpen(true),
              title: 'Accessibility Controls',
              style: {
                padding: '8px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }, h(IconSettings, { size: 17 })),
            h('button', {
              onClick: () => setMobileMenuOpen(!isMobileMenuOpen),
              className: 'mobile-menu-btn',
              style: {
                padding: '8px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }, isMobileMenuOpen ? h(IconClose, { size: 18 }) : h(IconMenu, { size: 18 }))
          )
        ),
        isMobileMenuOpen && h('div', {
          style: {
            padding: '16px 20px 24px',
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }
        },
          navItems.map((item) => {
            const isActive = currentView === item.view;
            return h('button', {
              key: item.view,
              onClick: () => handleNav(item.view),
              style: {
                padding: '12px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '15px',
                fontWeight: isActive ? 600 : 500,
                textAlign: 'left',
                color: isActive ? 'var(--accent-text)' : 'var(--text-primary)',
                backgroundColor: isActive ? 'var(--accent-subtle)' : 'transparent'
              }
            }, item.label);
          })
        )
      )
    );
  }

  function AccessibilityModal() {
    const { isA11yModalOpen, setA11yModalOpen, fontScale, setFontScale, highContrast, setHighContrast, reducedMotion, setReducedMotion, t } = useApp();

    return h(Modal, {
      isOpen: isA11yModalOpen,
      onClose: () => setA11yModalOpen(false),
      title: t.a11y.title
    },
      h('div', { style: { display: 'flex', flexDirection: 'column', gap: '22px' } },
        h('div', null,
          h('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '6px' } },
            h('span', { style: { fontWeight: 600, fontSize: '15px' } }, t.a11y.fontSize),
            h('span', { style: { fontSize: '13px', color: 'var(--text-muted)' } }, `${Math.round(fontScale * 100)}%`)
          ),
          h('p', { style: { fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px' } }, t.a11y.fontSizeDesc),
          h('div', { style: { display: 'flex', gap: '8px' } },
            h(Button, { variant: fontScale === 0.9 ? 'primary' : 'outline', size: 'sm', onClick: () => setFontScale(0.9) }, 'Compact 90%'),
            h(Button, { variant: fontScale === 1.0 ? 'primary' : 'outline', size: 'sm', onClick: () => setFontScale(1.0) }, 'Default 100%'),
            h(Button, { variant: fontScale === 1.15 ? 'primary' : 'outline', size: 'sm', onClick: () => setFontScale(1.15) }, 'Large 115%')
          )
        ),
        h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' } },
          h('div', null,
            h('span', { style: { fontWeight: 600, fontSize: '15px' } }, t.a11y.contrast),
            h('p', { style: { fontSize: '13px', color: 'var(--text-secondary)' } }, t.a11y.contrastDesc)
          ),
          h('input', {
            type: 'checkbox',
            checked: highContrast,
            onChange: (e) => setHighContrast(e.target.checked),
            style: { width: '18px', height: '18px', cursor: 'pointer' }
          })
        ),
        h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' } },
          h('div', null,
            h('span', { style: { fontWeight: 600, fontSize: '15px' } }, t.a11y.motion),
            h('p', { style: { fontSize: '13px', color: 'var(--text-secondary)' } }, t.a11y.motionDesc)
          ),
          h('input', {
            type: 'checkbox',
            checked: reducedMotion,
            onChange: (e) => setReducedMotion(e.target.checked),
            style: { width: '18px', height: '18px', cursor: 'pointer' }
          })
        ),
        h('div', { style: { paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end', gap: '8px' } },
          h(Button, {
            variant: 'ghost',
            size: 'sm',
            onClick: () => { setFontScale(1.0); setHighContrast(false); setReducedMotion(false); }
          }, t.a11y.reset),
          h(Button, { variant: 'primary', size: 'sm', onClick: () => setA11yModalOpen(false) }, 'Done')
        )
      )
    );
  }

  function Footer() {
    const { t, setCurrentView, progress, resetProgress } = useApp();

    return h('footer', {
      style: {
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '56px 0 36px',
        marginTop: '80px',
        color: 'var(--text-secondary)'
      }
    },
      h('div', { className: 'container' },
        h('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }
        },
          // Col 1
          h('div', null,
            h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', color: 'var(--text-primary)' } },
              h(IconVoteBox, { size: 22, color: 'var(--accent-primary)' }),
              h('span', { style: { fontSize: '18px', fontWeight: 700 } }, t.brand)
            ),
            h('p', { style: { fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' } }, t.heroSub),
            h('div', {
              style: {
                fontSize: '12px',
                padding: '10px 14px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--warm-accent)',
                lineHeight: 1.5
              }
            }, h('strong', null, 'Educational Simulation: '), 'No real votes are cast, and no real credentials or biometrics are ever requested.')
          ),
          // Col 2: Nav
          h('div', null,
            h('h4', { style: { fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' } }, 'Quick Navigation'),
            h('ul', { style: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' } },
              h('li', null, h('button', { onClick: () => { setCurrentView('journey'); window.scrollTo({ top: 0, behavior: 'smooth' }); }, style: { color: 'var(--text-secondary)' } }, t.nav.journey)),
              h('li', null, h('button', { onClick: () => { setCurrentView('simulator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }, style: { color: 'var(--text-secondary)' } }, t.nav.simulator)),
              h('li', null, h('button', { onClick: () => { setCurrentView('glossary'); window.scrollTo({ top: 0, behavior: 'smooth' }); }, style: { color: 'var(--text-secondary)' } }, t.nav.glossary)),
              h('li', null, h('button', { onClick: () => { setCurrentView('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }); }, style: { color: 'var(--text-secondary)' } }, t.nav.quiz)),
              h('li', null, h('button', { onClick: () => { setCurrentView('mythfact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }, style: { color: 'var(--text-secondary)' } }, t.nav.mythFact)),
              h('li', null, h('button', { onClick: () => { setCurrentView('ai'); window.scrollTo({ top: 0, behavior: 'smooth' }); }, style: { color: 'var(--text-secondary)' } }, t.nav.ai))
            )
          ),
          // Col 3: Tracker
          h('div', null,
            h('h4', { style: { fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' } }, 'Your Learning Tracker'),
            h('div', {
              style: {
                backgroundColor: 'var(--bg-card)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                fontSize: '13px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }
            },
              h('div', { style: { display: 'flex', justifyContent: 'space-between' } },
                h('span', null, 'Stages Explored:'),
                h('strong', null, `${progress.visitedStages.length} / 7`)
              ),
              h('div', { style: { display: 'flex', justifyContent: 'space-between' } },
                h('span', null, 'Glossary Terms Read:'),
                h('strong', null, progress.viewedGlossaryTerms.length)
              ),
              h('div', { style: { display: 'flex', justifyContent: 'space-between' } },
                h('span', null, 'Simulator Completed:'),
                h('strong', { style: { color: progress.simulatorCompleted ? 'var(--success)' : 'var(--text-muted)' } }, progress.simulatorCompleted ? 'Yes' : 'Not yet')
              ),
              h('button', {
                onClick: resetProgress,
                style: {
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '6px 10px',
                  backgroundColor: 'var(--bg-muted)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '12px',
                  color: 'var(--text-secondary)'
                }
              }, h(IconRefresh, { size: 14 }), h('span', null, 'Reset Learning Progress'))
            )
          )
        ),
        h('div', {
          style: {
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '24px',
            fontSize: '12px',
            lineHeight: 1.6,
            color: 'var(--text-muted)'
          }
        },
          h('p', { style: { marginBottom: '6px' } }, t.officialNotice),
          h('p', null, 'ELECTRA is built for election awareness and civic education. Candidate names in simulators are fictional.')
        )
      )
    );
  }

  /* =========================================================================
     6. VIEWS
     ========================================================================= */

  // VIEW 1: HOME
  function HomeView() {
    const { t, setCurrentView } = useApp();

    const paths = [
      { id: 'understand', title: t.paths.understand.title, desc: t.paths.understand.desc, icon: h(IconBook, { size: 20, color: 'var(--accent-primary)' }), action: () => setCurrentView('explore'), label: 'Start with Basics' },
      { id: 'explore', title: t.paths.explore.title, desc: t.paths.explore.desc, icon: h(IconChevronRight, { size: 20, color: 'var(--accent-primary)' }), action: () => setCurrentView('journey'), label: 'Walk the 7 Stages' },
      { id: 'experience', title: t.paths.experience.title, desc: t.paths.experience.desc, icon: h(IconVoteBox, { size: 20, color: 'var(--warm-accent)' }), action: () => setCurrentView('simulator'), label: 'Demo Polling Booth' },
      { id: 'test', title: t.paths.test.title, desc: t.paths.test.desc, icon: h(IconAward, { size: 20, color: 'var(--success)' }), action: () => setCurrentView('quiz'), label: 'Take Civic Quiz' }
    ];

    const curriculum = [
      { title: '1. What Is An Election?', desc: 'The constitutional mechanism whereby eligible citizens choose representatives to make laws and govern.', view: 'explore' },
      { title: '2. How Elections Work', desc: 'A synchronized national exercise regulated by strict legal codes, neutral officers, and public audit trails.', view: 'journey' },
      { title: '3. Before Polling', desc: 'Electoral roll preparation, formal nomination papers, sworn affidavits, and campaign rules.', view: 'journey' },
      { title: '4. During Polling', desc: 'Mock polls, voter ID verification, indelible ink application, and secret ballot casting inside compartments.', view: 'journey' },
      { title: '5. After Polling', desc: 'Double-locking of EVMs, 24/7 CCTV strongroom security, round-wise vote counting, and declaration.', view: 'journey' },
      { title: '6. Counting & Results', desc: 'Transparent tabulation in the presence of candidate agents, postal vote audits, and VVPAT matching.', view: 'journey' },
      { title: '7. Election Terminology', desc: 'Clear definitions for crucial terms like Electoral Roll, EVM, VVPAT, NOTA, and Scrutiny.', view: 'glossary' },
      { title: '8. Common Questions', desc: 'Fact-checked answers to common misconceptions regarding voter ID requirements and ballot secrecy.', view: 'mythfact' }
    ];

    return h('div', { className: 'fade-in' },
      // Hero
      h('section', { style: { padding: '64px 0 48px', textAlign: 'center' } },
        h('div', { className: 'container', style: { maxWidth: '840px' } },
          h(Badge, { variant: 'simulation', style: { marginBottom: '20px' } }, t.simulator.badge),
          h('h1', { style: { fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '16px' } }, t.brand),
          h('p', { style: { fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '16px' } }, `“${t.tagline}”`),
          h('p', { style: { fontSize: '17px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '36px', maxWidth: '680px', margin: '0 auto 36px' } }, t.heroSub),
          h('div', { style: { display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' } },
            h(Button, { size: 'lg', variant: 'primary', onClick: () => setCurrentView('journey'), icon: h(IconChevronRight, { size: 18, color: '#FFF' }) }, t.heroCtaExplore),
            h(Button, { size: 'lg', variant: 'secondary', onClick: () => setCurrentView('simulator'), icon: h(IconVoteBox, { size: 18, color: 'var(--accent-primary)' }) }, t.heroCtaExperience)
          )
        )
      ),
      // 4 Pillars
      h('section', { style: { padding: '24px 0 48px' } },
        h('div', { className: 'container' },
          h('div', { className: 'grid-4' },
            paths.map((p) => h(Card, { key: p.id, interactive: true, onClick: p.action, style: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '190px' } },
              h('div', null,
                h('div', { style: { width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' } }, p.icon),
                h('h3', { style: { fontSize: '18px', fontWeight: 600, marginBottom: '8px' } }, p.title),
                h('p', { style: { fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 } }, p.desc)
              ),
              h('div', { style: { display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: 600, color: 'var(--accent-primary)', marginTop: '16px' } },
                h('span', null, p.label),
                h(IconChevronRight, { size: 13 })
              )
            ))
          )
        )
      ),
      // Metric Strip
      h('section', { style: { padding: '16px 0 48px' } },
        h('div', { className: 'container' },
          h('div', {
            style: {
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              textAlign: 'center'
            }
          },
            h('div', null, h('span', { style: { fontSize: '28px', fontWeight: 800, color: 'var(--accent-primary)', display: 'block' } }, '7 Stages'), h('span', { style: { fontSize: '13px', color: 'var(--text-secondary)' } }, 'Chronological Journey')),
            h('div', null, h('span', { style: { fontSize: '28px', fontWeight: 800, color: 'var(--success)', display: 'block' } }, '100% Secret'), h('span', { style: { fontSize: '13px', color: 'var(--text-secondary)' } }, 'Ballot Confidentiality')),
            h('div', null, h('span', { style: { fontSize: '28px', fontWeight: 800, color: 'var(--warm-accent)', display: 'block' } }, '7 Seconds'), h('span', { style: { fontSize: '13px', color: 'var(--text-secondary)' } }, 'VVPAT Paper Audit Slip')),
            h('div', null, h('span', { style: { fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', display: 'block' } }, 'Non-Partisan'), h('span', { style: { fontSize: '13px', color: 'var(--text-secondary)' } }, 'Zero Political Bias'))
          )
        )
      ),
      // 8 Modules
      h('section', { style: { padding: '16px 0 64px' } },
        h('div', { className: 'container' },
          h('div', { style: { marginBottom: '28px' } },
            h('h2', { style: { fontSize: '24px', fontWeight: 700, marginBottom: '6px' } }, 'Election Awareness Curriculum'),
            h('p', { style: { fontSize: '14px', color: 'var(--text-secondary)' } }, 'Explore the critical components of the democratic voting lifecycle.')
          ),
          h('div', { className: 'grid-2' },
            curriculum.map((c, i) => h(Card, { key: i, interactive: true, onClick: () => setCurrentView(c.view), style: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' } },
              h('div', null,
                h('h3', { style: { fontSize: '16px', fontWeight: 600, marginBottom: '8px' } }, c.title),
                h('p', { style: { fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55 } }, c.desc)
              ),
              h('div', { style: { display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 600, color: 'var(--accent-primary)', marginTop: '16px' } },
                h('span', null, 'Explore topic'),
                h(IconChevronRight, { size: 12 })
              )
            ))
          )
        )
      ),
      // AI Callout
      h('section', { style: { padding: '0 0 56px' } },
        h('div', { className: 'container' },
          h('div', {
            style: {
              backgroundColor: 'var(--accent-subtle)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap'
            }
          },
            h('div', { style: { maxWidth: '600px' } },
              h(Badge, { variant: 'accent', icon: h(IconSparkles, { size: 14 }), style: { marginBottom: '12px' } }, 'AI Civic Assistant'),
              h('h3', { style: { fontSize: '20px', fontWeight: 700, marginBottom: '8px' } }, 'Have questions about voting or election rules?'),
              h('p', { style: { fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 } }, 'Ask ELECTRA AI for instant, non-partisan, fact-checked explanations in simple or detailed terms.')
            ),
            h(Button, { variant: 'primary', size: 'md', onClick: () => setCurrentView('ai'), icon: h(IconSparkles, { size: 16 }) }, 'Open Ask ELECTRA AI')
          )
        )
      )
    );
  }

  // VIEW 2: ELECTION JOURNEY
  function ElectionJourneyView() {
    const { language, t, markStageVisited, progress, setCurrentView } = useApp();
    const [selectedStageId, setSelectedStageId] = useState('announcement');
    const [phaseFilter, setPhaseFilter] = useState('all');

    const filtered = electionStages.filter((s) => phaseFilter === 'all' || s.phase === phaseFilter);
    const selected = electionStages.find((s) => s.id === selectedStageId) || electionStages[0];

    const handleSelect = (id) => {
      setSelectedStageId(id);
      markStageVisited(id);
    };

    return h('div', { className: 'fade-in container', style: { padding: '40px 0 60px' } },
      h('div', { style: { maxWidth: '800px', marginBottom: '32px' } },
        h(Badge, { variant: 'accent', style: { marginBottom: '12px' } }, '7 Chronological Stages'),
        h('h1', { style: { fontSize: '32px', fontWeight: 800, marginBottom: '12px' } }, t.nav.journey),
        h('p', { style: { fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 } },
          'Walk through the complete lifecycle of a democratic election. Note that specific deadlines and procedures may differ across jurisdictions; the steps below reflect standard universal democratic safeguards.'
        )
      ),
      // Tabs
      h('div', { style: { display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' } },
        [
          { id: 'all', label: 'All 7 Stages' },
          { id: 'before', label: 'Before Polling (Stages 1–4)' },
          { id: 'during', label: 'During Polling (Stage 5)' },
          { id: 'after', label: 'After Polling (Stages 6–7)' }
        ].map((tab) => {
          const isActive = phaseFilter === tab.id;
          return h('button', {
            key: tab.id,
            onClick: () => setPhaseFilter(tab.id),
            style: {
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
              color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
              border: `1px solid ${isActive ? 'transparent' : 'var(--border-subtle)'}`,
              transition: 'all var(--transition-fast)'
            }
          }, tab.label);
        })
      ),
      // 2-Col Layout
      h('div', { className: 'grid-2', style: { alignItems: 'start' } },
        // Left Column (List)
        h('div', { style: { display: 'flex', flexDirection: 'column', gap: '10px' } },
          filtered.map((stage) => {
            const isSelected = stage.id === selectedStageId;
            const isVisited = progress.visitedStages.includes(stage.id);

            return h('div', {
              key: stage.id,
              onClick: () => handleSelect(stage.id),
              style: {
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                border: `1.5px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                boxShadow: isSelected ? 'var(--shadow-md)' : 'none'
              }
            },
              h('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '6px' } },
                h('span', { style: { fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-primary)', letterSpacing: '0.04em' } }, `Stage ${stage.order}`),
                isVisited && h('span', { style: { fontSize: '11px', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 600 } }, h(IconCheck, { size: 12, color: 'var(--success)' }), 'Explored')
              ),
              h('h4', { style: { fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' } }, stage.title[language] || stage.title.en),
              h('p', { style: { fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.4 } }, stage.shortDesc[language] || stage.shortDesc.en)
            );
          })
        ),
        // Right Column (Details)
        h(Card, { style: { padding: '32px' } },
          h('div', { style: { borderBottom: '1px solid var(--border-subtle)', paddingBottom: '18px', marginBottom: '22px' } },
            h(Badge, { variant: 'accent', style: { marginBottom: '8px' } }, `Phase: ${selected.phase.toUpperCase()} POLLING`),
            h('h2', { style: { fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)' } }, selected.title[language] || selected.title.en)
          ),
          h('div', { style: { display: 'flex', flexDirection: 'column', gap: '22px' } },
            h('div', null,
              h('h4', { style: { fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em', marginBottom: '6px' } }, 'What Happens in this Stage'),
              h('p', { style: { fontSize: '14.5px', lineHeight: 1.65 } }, selected.whatHappens[language] || selected.whatHappens.en)
            ),
            h('div', { style: { backgroundColor: 'var(--bg-secondary)', padding: '16px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' } },
              h('h4', { style: { fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-text)', letterSpacing: '0.04em', marginBottom: '6px' } }, 'Why It Matters to Citizens'),
              h('p', { style: { fontSize: '13.5px', lineHeight: 1.6, color: 'var(--text-secondary)' } }, selected.whyItMatters[language] || selected.whyItMatters.en)
            ),
            h('div', null,
              h('h4', { style: { fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em', marginBottom: '6px' } }, 'Key Participants Involved'),
              h('p', { style: { fontSize: '14px', color: 'var(--text-secondary)' } }, selected.whoIsInvolved[language] || selected.whoIsInvolved.en)
            ),
            h('div', null,
              h('h4', { style: { fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em', marginBottom: '8px' } }, 'Statutory Rules & Integrity Safeguards'),
              h('ul', { style: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' } },
                selected.rules.map((r, i) => h('li', { key: i, style: { display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' } },
                  h('span', { style: { color: 'var(--accent-primary)', flexShrink: 0 } }, '✓'),
                  h('span', null, r[language] || r.en)
                ))
              )
            ),
            h('div', null,
              h('h4', { style: { fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em', marginBottom: '6px' } }, 'Associated Terminology'),
              h('div', { style: { display: 'flex', gap: '6px', flexWrap: 'wrap' } },
                selected.terms.map((tItem, idx) => h('span', {
                  key: idx,
                  onClick: () => setCurrentView('glossary'),
                  style: { padding: '4px 8px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-muted)', fontSize: '12px', cursor: 'pointer' }
                }, `${tItem} ↗`))
              )
            ),
            h('div', { style: { borderTop: '1px solid var(--border-subtle)', paddingTop: '14px', fontSize: '12px', color: 'var(--text-muted)' } },
              h('strong', null, 'Statutory Sources: '),
              selected.sources.map((s, idx) => h('span', { key: idx }, s.title))
            )
          )
        )
      )
    );
  }

  // VIEW 3: VOTING SIMULATOR
  function VotingSimulatorView() {
    const { t, markSimulatorCompleted } = useApp();

    const candidates = [
      { id: 'alpha', name: 'Candidate Alpha', title: 'Civic Renewal & Green Spaces', focus: 'Urban reforestation, solar parks, pedestrian streets, and waste management reform.', symbol: '🌳 Tree Symbol', badgeColor: 'var(--success)', keyPledge: 'Zero-emission public buses and park revitalization.' },
      { id: 'beta', name: 'Candidate Beta', title: 'Transit & Youth Opportunities', focus: 'Expanding public metro routes, vocational scholarships, and subsidized youth sports.', symbol: '⚡ Electric Flash Symbol', badgeColor: 'var(--accent-primary)', keyPledge: 'Night bus connectivity and free digital libraries.' },
      { id: 'gamma', name: 'Candidate Gamma', title: 'Smart Utilities & Small Business', focus: 'Water supply modernization, micro-business tax relief, and broadband accessibility.', symbol: '💡 Lamp Symbol', badgeColor: 'var(--warm-accent)', keyPledge: '24/7 potable water monitoring and streamlined licensing.' },
      { id: 'nota', name: 'NOTA / None of the Above', title: 'Constitutional Voter Dissent', focus: 'Express dissatisfaction with all contesting candidates while maintaining official turnout.', symbol: '❌ NOTA Symbol', badgeColor: 'var(--text-muted)', keyPledge: 'Formal recorded rejection of candidate choices under ballot secrecy.' }
    ];

    const [step, setStep] = useState('intro'); // intro, learn, ballot, review, recorded, counting, results
    const [selectedCandidateId, setSelectedCandidateId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasVotedThisSession, setHasVotedThisSession] = useState(false);

    const [demoTallies, setDemoTallies] = useState(() => {
      try {
        const saved = localStorage.getItem('electra_demo_tallies');
        return saved ? JSON.parse(saved) : { alpha: 34, beta: 41, gamma: 28, nota: 12 };
      } catch (e) {
        return { alpha: 34, beta: 41, gamma: 28, nota: 12 };
      }
    });

    const saveTallies = (updated) => {
      setDemoTallies(updated);
      localStorage.setItem('electra_demo_tallies', JSON.stringify(updated));
    };

    const selectedCand = candidates.find((c) => c.id === selectedCandidateId);

    // Vote Confirmation with double-click and duplicate vote protection
    const handleConfirmVote = () => {
      if (!selectedCandidateId || hasVotedThisSession || isSubmitting) return;

      setIsSubmitting(true);
      const currentCount = demoTallies[selectedCandidateId] || 0;
      const updated = { ...demoTallies, [selectedCandidateId]: currentCount + 1 };
      saveTallies(updated);
      setHasVotedThisSession(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setStep('recorded');
      }, 400);
    };

    const handleProceedToCounting = () => {
      setStep('counting');
      setTimeout(() => {
        setStep('results');
        markSimulatorCompleted();
        if (window.confetti) {
          try { window.confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } }); } catch (e) {}
        }
      }, 2000);
    };

    const handleRestart = () => {
      setSelectedCandidateId(null);
      setHasVotedThisSession(false);
      setStep('ballot');
    };

    const handleResetAllDemoVotes = () => {
      const baseline = { alpha: 34, beta: 41, gamma: 28, nota: 12 };
      saveTallies(baseline);
      handleRestart();
    };

    const totalVotes = Object.values(demoTallies).reduce((sum, n) => sum + n, 0);
    const getPercentage = (count) => (totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100));

    let leaderId = 'alpha';
    let maxCount = -1;
    Object.entries(demoTallies).forEach(([cid, count]) => {
      if (count > maxCount) {
        maxCount = count;
        leaderId = cid;
      }
    });
    const leadingCandidate = candidates.find((c) => c.id === leaderId);

    return h('div', { className: 'fade-in container', style: { padding: '36px 0 64px', maxWidth: '860px' } },
      // Notice Banner
      h('div', {
        style: {
          backgroundColor: 'var(--warm-subtle)',
          border: '1px solid rgba(217, 119, 6, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '16px 20px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }
      },
        h('div', { style: { color: 'var(--warm-accent)', flexShrink: 0 } }, h(IconShield, { size: 24 })),
        h('div', null,
          h('strong', { style: { fontSize: '13px', color: 'var(--warm-accent)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block' } }, t.simulator.badge),
          h('span', { style: { fontSize: '13px', color: 'var(--text-primary)' } }, t.simulator.banner)
        )
      ),
      // Stepper Label
      h('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '24px' } },
        h('span', { style: { fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' } },
          `Flow: ${step === 'intro' ? 'Step 1/7 (Intro)' : step === 'learn' ? 'Step 2/7 (Learn)' : step === 'ballot' ? 'Step 3/7 (Ballot)' : step === 'review' ? 'Step 4/7 (Review)' : step === 'recorded' ? 'Step 5/7 (VVPAT)' : step === 'counting' ? 'Step 6/7 (Counting)' : 'Step 7/7 (Results)'}`
        ),
        h('span', { style: { fontSize: '12px', fontWeight: 600, color: 'var(--accent-primary)' } }, 'Scenario: Demo City Council')
      ),

      // STEP 1: INTRO
      step === 'intro' && h(Card, { style: { padding: '36px', textAlign: 'center' } },
        h('div', {
          style: {
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            backgroundColor: 'var(--accent-subtle)',
            color: 'var(--accent-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px'
          }
        }, h(IconVoteBox, { size: 32 })),
        h('h2', { style: { fontSize: '26px', fontWeight: 700, marginBottom: '12px' } }, t.simulator.introTitle),
        h('p', { style: { fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '640px', margin: '0 auto 32px' } }, t.simulator.introDesc),
        h(Button, { variant: 'primary', size: 'lg', onClick: () => setStep('learn'), icon: h(IconChevronRight, { size: 18, color: '#FFF' }) }, t.simulator.btnStart)
      ),

      // STEP 2: LEARN
      step === 'learn' && h(Card, { style: { padding: '36px' } },
        h('h2', { style: { fontSize: '24px', fontWeight: 700, marginBottom: '8px' } }, t.simulator.step1Title),
        h('p', { style: { fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' } }, 'Before entering any voting booth, understand these inviolable democratic principles:'),
        h('div', { style: { display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' } },
          t.simulator.step1Points.map((pt, i) => h('div', {
            key: i,
            style: { display: 'flex', gap: '12px', padding: '14px 16px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }
          },
            h('div', { style: { color: 'var(--success)', marginTop: '2px', flexShrink: 0 } }, h(IconCheck, { size: 18 })),
            h('span', { style: { fontSize: '14px', lineHeight: 1.5 } }, pt)
          ))
        ),
        h('div', { style: { display: 'flex', justifyContent: 'space-between' } },
          h(Button, { variant: 'ghost', size: 'md', onClick: () => setStep('intro'), icon: h(IconChevronLeft, { size: 16 }) }, 'Back'),
          h(Button, { variant: 'primary', size: 'md', onClick: () => setStep('ballot'), icon: h(IconChevronRight, { size: 16, color: '#FFF' }) }, 'Proceed to Demo Ballot')
        )
      ),

      // STEP 3: BALLOT
      step === 'ballot' && h(Card, { style: { padding: '32px' } },
        h('div', { style: { marginBottom: '24px' } },
          h('h2', { style: { fontSize: '22px', fontWeight: 700, marginBottom: '6px' } }, t.simulator.step2Title),
          h('p', { style: { fontSize: '14px', color: 'var(--text-secondary)' } }, t.simulator.step2Sub)
        ),
        h('div', { style: { display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' } },
          candidates.map((cand) => {
            const isSelected = selectedCandidateId === cand.id;
            return h('div', {
              key: cand.id,
              onClick: () => setSelectedCandidateId(cand.id),
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 20px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                border: `2px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }
            },
              h('div', { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
                h('div', {
                  style: {
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    border: `2px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isSelected ? 'var(--accent-primary)' : 'transparent',
                    flexShrink: 0
                  }
                }, isSelected && h('div', { style: { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFF' } })),
                h('div', null,
                  h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' } },
                    h('span', { style: { fontWeight: 700, fontSize: '16px' } }, cand.name),
                    h('span', { style: { fontSize: '12px', fontWeight: 600, color: cand.badgeColor } }, cand.symbol)
                  ),
                  h('span', { style: { fontSize: '13px', color: 'var(--text-secondary)', display: 'block', marginBottom: '2px' } }, cand.title),
                  h('span', { style: { fontSize: '12px', color: 'var(--text-muted)' } }, `Focus: ${cand.keyPledge}`)
                )
              ),
              h('button', {
                style: {
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  backgroundColor: isSelected ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)'
                }
              }, isSelected ? 'Selected' : 'Select')
            );
          })
        ),
        h('div', { style: { display: 'flex', justifyContent: 'space-between' } },
          h(Button, { variant: 'ghost', size: 'md', onClick: () => setStep('learn'), icon: h(IconChevronLeft, { size: 16 }) }, 'Back'),
          h(Button, {
            variant: 'primary',
            size: 'md',
            disabled: !selectedCandidateId,
            onClick: () => setStep('review'),
            icon: h(IconChevronRight, { size: 16, color: '#FFF' })
          }, t.simulator.btnReview)
        )
      ),

      // STEP 4: REVIEW
      step === 'review' && selectedCand && h(Card, { style: { padding: '36px' } },
        h('h2', { style: { fontSize: '24px', fontWeight: 700, marginBottom: '8px' } }, t.simulator.reviewTitle),
        h('p', { style: { fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' } }, t.simulator.reviewDesc),
        h('div', {
          style: {
            padding: '24px',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '32px'
          }
        },
          h('span', { style: { fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' } }, t.simulator.selectedCandidate),
          h('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' } },
            h('span', { style: { fontSize: '20px', fontWeight: 700 } }, selectedCand.name),
            h('span', { style: { fontSize: '14px', fontWeight: 600, color: selectedCand.badgeColor } }, `(${selectedCand.symbol})`)
          ),
          h('p', { style: { fontSize: '14px', color: 'var(--text-secondary)' } }, selectedCand.focus)
        ),
        h('div', { style: { display: 'flex', justifyContent: 'space-between' } },
          h(Button, { variant: 'secondary', size: 'md', onClick: () => setStep('ballot'), icon: h(IconChevronLeft, { size: 16 }) }, t.simulator.btnBack),
          h(Button, {
            variant: 'primary',
            size: 'md',
            onClick: handleConfirmVote,
            disabled: isSubmitting || hasVotedThisSession,
            icon: h(IconVoteBox, { size: 16, color: '#FFF' })
          }, isSubmitting ? 'Recording...' : t.simulator.btnConfirm)
        )
      ),

      // STEP 5: RECORDED (VVPAT)
      step === 'recorded' && selectedCand && h(Card, { style: { padding: '36px', textAlign: 'center' } },
        h('div', {
          style: {
            width: '260px',
            margin: '0 auto 24px',
            backgroundColor: '#FFFDF0',
            color: '#111827',
            border: '2px dashed #D1D5DB',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            fontFamily: 'monospace'
          }
        },
          h('span', { style: { fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6B7280', display: 'block', marginBottom: '4px' } }, 'VVPAT PAPER AUDIT SLIP'),
          h('span', { style: { fontSize: '10px', color: '#9CA3AF', display: 'block', marginBottom: '12px' } }, 'Visible for 7 seconds'),
          h('div', { style: { fontSize: '16px', fontWeight: 700, marginBottom: '4px' } }, selectedCand.name),
          h('div', { style: { fontSize: '13px', color: '#4B5563', marginBottom: '10px' } }, selectedCand.symbol),
          h('div', { style: { fontSize: '10px', borderTop: '1px solid #E5E7EB', paddingTop: '6px', color: '#9CA3AF' } }, 'DEMO VOTE VERIFIED • SECURE')
        ),
        h('h2', { style: { fontSize: '24px', fontWeight: 700, color: 'var(--success)', marginBottom: '8px' } }, t.simulator.confirmSuccessTitle),
        h('p', { style: { fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 28px' } }, t.simulator.confirmSuccessDesc),
        h(Button, { variant: 'primary', size: 'md', onClick: handleProceedToCounting, icon: h(IconChevronRight, { size: 16, color: '#FFF' }) }, 'Simulate Counting & Results')
      ),

      // STEP 6: COUNTING
      step === 'counting' && h(Card, { style: { padding: '48px 36px', textAlign: 'center' } },
        h('div', { style: { width: '48px', height: '48px', margin: '0 auto 20px', color: 'var(--accent-primary)' } }, h(IconRefresh, { size: 48 })),
        h('h2', { style: { fontSize: '22px', fontWeight: 700, marginBottom: '8px' } }, t.simulator.countingTitle),
        h('p', { style: { fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 24px' } }, t.simulator.countingDesc),
        h('div', { style: { maxWidth: '380px', margin: '0 auto' } }, h(ProgressBar, { value: 80, height: 10 }))
      ),

      // STEP 7: RESULTS
      step === 'results' && h(Card, { style: { padding: '32px' } },
        h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' } },
          h('div', null,
            h(Badge, { variant: 'simulation', style: { marginBottom: '8px' } }, 'Mock Tabulation'),
            h('h2', { style: { fontSize: '24px', fontWeight: 700 } }, t.simulator.resultsTitle),
            h('p', { style: { fontSize: '14px', color: 'var(--text-secondary)' } }, t.simulator.resultsSub)
          ),
          h('div', { style: { textAlign: 'right' } },
            h('span', { style: { fontSize: '12px', color: 'var(--text-muted)', display: 'block' } }, t.simulator.totalVotesCast),
            h('span', { style: { fontSize: '24px', fontWeight: 800 } }, totalVotes)
          )
        ),
        // Leader
        leadingCandidate && h('div', {
          style: {
            padding: '16px 20px',
            backgroundColor: 'var(--accent-subtle)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }
        },
          h('div', null,
            h('span', { style: { fontSize: '12px', fontWeight: 600, color: 'var(--accent-text)', textTransform: 'uppercase', letterSpacing: '0.04em' } }, t.simulator.leadingCandidate),
            h('div', { style: { fontSize: '18px', fontWeight: 700 } }, `${leadingCandidate.name} (${leadingCandidate.symbol})`)
          ),
          h(Badge, { variant: 'accent' }, `${getPercentage(demoTallies[leadingCandidate.id] || 0)}% of Tally`)
        ),
        // Bars
        h('div', { style: { display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' } },
          candidates.map((cand) => {
            const count = demoTallies[cand.id] || 0;
            const pct = getPercentage(count);
            const isUserChoice = selectedCandidateId === cand.id;

            return h('div', { key: cand.id },
              h('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '6px' } },
                h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                  h('span', { style: { fontWeight: 600, fontSize: '14.5px' } }, cand.name),
                  isUserChoice && h('span', { style: { fontSize: '11px', fontWeight: 600, color: 'var(--accent-primary)', backgroundColor: 'var(--accent-subtle)', padding: '2px 8px', borderRadius: '999px' } }, 'Your Demo Vote')
                ),
                h('span', { style: { fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)' } }, `${count} votes (${pct}%)`)
              ),
              h(ProgressBar, { value: pct, height: 10, color: cand.badgeColor })
            );
          })
        ),
        h('div', { style: { padding: '14px 18px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '32px' } },
          h('strong', null, 'Civic Principle: '), t.simulator.notaNote
        ),
        h('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } },
          h(Button, { variant: 'primary', size: 'md', onClick: handleRestart, icon: h(IconRefresh, { size: 16 }) }, t.simulator.btnTryAgain),
          h(Button, { variant: 'outline', size: 'md', onClick: handleResetAllDemoVotes }, t.simulator.btnResetAll)
        )
      )
    );
  }

  // VIEW 4: KNOWLEDGE HUB & GLOSSARY
  function KnowledgeHubView() {
    const { language, t, progress, markGlossaryViewed } = useApp();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLetter, setSelectedLetter] = useState('all');

    const categories = [
      { id: 'all', label: t.glossary.allCategories },
      { id: 'basics', label: t.glossary.categories.basics },
      { id: 'voting', label: t.glossary.categories.voting },
      { id: 'process', label: t.glossary.categories.process },
      { id: 'counting', label: t.glossary.categories.counting }
    ];

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const filtered = glossaryTerms.filter((item) => {
      const termText = (item.term[language] || item.term.en).toLowerCase();
      const defText = (item.definition[language] || item.definition.en).toLowerCase();
      const q = searchQuery.toLowerCase().trim();

      const matchesSearch = !q || termText.includes(q) || defText.includes(q);
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesLetter = selectedLetter === 'all' || item.term.en.toUpperCase().startsWith(selectedLetter);

      return matchesSearch && matchesCategory && matchesLetter;
    });

    const recentlyViewed = glossaryTerms.filter((item) => progress.viewedGlossaryTerms.includes(item.id));

    return h('div', { className: 'fade-in container', style: { padding: '40px 0 64px' } },
      h('div', { style: { maxWidth: '800px', marginBottom: '32px' } },
        h(Badge, { variant: 'accent', style: { marginBottom: '12px' } }, 'Civic Reference Library'),
        h('h1', { style: { fontSize: '32px', fontWeight: 800, marginBottom: '12px' } }, t.glossary.title),
        h('p', { style: { fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 } }, t.glossary.subtitle)
      ),
      // Search Box
      h('div', { style: { position: 'relative', marginBottom: '24px' } },
        h('div', { style: { position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' } }, h(IconSearch, { size: 18 })),
        h('input', {
          type: 'text',
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          placeholder: t.glossary.searchPlaceholder,
          style: {
            width: '100%',
            padding: '14px 16px 14px 46px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-primary)',
            fontSize: '15px',
            outline: 'none'
          }
        })
      ),
      // Category Pills
      h('div', { style: { display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' } },
        categories.map((c) => {
          const isActive = selectedCategory === c.id;
          return h('button', {
            key: c.id,
            onClick: () => setSelectedCategory(c.id),
            style: {
              padding: '8px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
              color: isActive ? '#FFF' : 'var(--text-secondary)',
              border: `1px solid ${isActive ? 'transparent' : 'var(--border-subtle)'}`
            }
          }, c.label);
        })
      ),
      // Alphabet Bar
      h('div', { style: { display: 'flex', gap: '4px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '6px' } },
        h('button', {
          onClick: () => setSelectedLetter('all'),
          style: {
            padding: '4px 8px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '12px',
            fontWeight: 600,
            backgroundColor: selectedLetter === 'all' ? 'var(--accent-primary)' : 'var(--bg-card)',
            color: selectedLetter === 'all' ? '#FFF' : 'var(--text-secondary)',
            border: '1px solid var(--border-subtle)'
          }
        }, 'ALL'),
        alphabet.map((letter) => h('button', {
          key: letter,
          onClick: () => setSelectedLetter(letter),
          style: {
            minWidth: '28px',
            height: '28px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '12px',
            fontWeight: 600,
            backgroundColor: selectedLetter === letter ? 'var(--accent-primary)' : 'var(--bg-card)',
            color: selectedLetter === letter ? '#FFF' : 'var(--text-secondary)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, letter))
      ),
      // Recently viewed
      recentlyViewed.length > 0 && h('div', { style: { marginBottom: '32px' } },
        h('span', { style: { fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' } }, `${t.glossary.recentlyViewed} (${recentlyViewed.length})`),
        h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
          recentlyViewed.map((term) => h('span', {
            key: term.id,
            style: { padding: '4px 10px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--accent-subtle)', color: 'var(--accent-text)', fontSize: '12px', fontWeight: 500 }
          }, term.term[language] || term.term.en))
        )
      ),
      // Grid
      filtered.length === 0
        ? h('div', { style: { textAlign: 'center', padding: '56px 20px', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' } },
          h('p', { style: { fontSize: '15px', color: 'var(--text-secondary)' } }, t.glossary.noResults)
        )
        : h('div', { className: 'grid-2' },
          filtered.map((item) => {
            const hasRead = progress.viewedGlossaryTerms.includes(item.id);
            return h(Card, {
              key: item.id,
              interactive: true,
              onClick: () => markGlossaryViewed(item.id),
              style: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }
            },
              h('div', null,
                h('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } },
                  h('h3', { style: { fontSize: '17px', fontWeight: 700 } }, item.term[language] || item.term.en),
                  hasRead && h('span', { style: { fontSize: '11px', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 600 } }, h(IconCheck, { size: 12, color: 'var(--success)' }), 'Read')
                ),
                h('p', { style: { fontSize: '14px', lineHeight: 1.6, marginBottom: '14px' } }, item.definition[language] || item.definition.en),
                h('div', { style: { backgroundColor: 'var(--bg-secondary)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: 1.5 } },
                  h('strong', { style: { color: 'var(--accent-text)' } }, `${t.glossary.whyItMatters}: `),
                  item.whyItMatters[language] || item.whyItMatters.en
                )
              ),
              item.relatedTerms && h('div', { style: { borderTop: '1px solid var(--border-subtle)', paddingTop: '10px', fontSize: '11.5px', color: 'var(--text-muted)' } },
                h('span', null, `${t.glossary.related}: `),
                item.relatedTerms.join(', ')
              )
            );
          })
        )
    );
  }

  // VIEW 5: ASK ELECTRA AI
  function AskElectraView() {
    const { language, t, setCurrentView } = useApp();
    const [mode, setMode] = useState('simple');
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [activeResponse, setActiveResponse] = useState(null);

    const sampleQueries = [
      'What happens during polling?',
      'What is nomination?',
      'How does vote counting work?',
      'What does NOTA mean?',
      'Explain elections in simple language.',
      'Who should I vote for?'
    ];

    const handleAsk = (qToAsk) => {
      const q = qToAsk || query;
      if (!q.trim()) return;

      setIsLoading(true);
      setTimeout(() => {
        const res = findAIAnswer(q, mode);
        setActiveResponse(res);
        setIsLoading(false);
      }, 350);
    };

    return h('div', { className: 'fade-in container', style: { padding: '40px 0 64px', maxWidth: '840px' } },
      h('div', { style: { marginBottom: '28px' } },
        h(Badge, { variant: 'accent', icon: h(IconSparkles, { size: 14 }), style: { marginBottom: '12px' } }, 'Civic Intelligence'),
        h('h1', { style: { fontSize: '32px', fontWeight: 800, marginBottom: '10px' } }, t.ai.title),
        h('p', { style: { fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 } }, t.ai.subtitle)
      ),
      // Mode switch & engine badge
      h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' } },
        h('div', { style: { display: 'flex', gap: '6px', backgroundColor: 'var(--bg-card)', padding: '4px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' } },
          h('button', {
            onClick: () => setMode('simple'),
            style: {
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: mode === 'simple' ? 'var(--accent-primary)' : 'transparent',
              color: mode === 'simple' ? '#FFF' : 'var(--text-secondary)'
            }
          }, t.ai.modeSimple),
          h('button', {
            onClick: () => setMode('detailed'),
            style: {
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: mode === 'detailed' ? 'var(--accent-primary)' : 'transparent',
              color: mode === 'detailed' ? '#FFF' : 'var(--text-secondary)'
            }
          }, t.ai.modeDetailed)
        ),
        h('span', { style: { fontSize: '12px', color: 'var(--text-muted)' } }, t.ai.fallbackNotice)
      ),
      // Input
      h('div', { style: { display: 'flex', gap: '10px', marginBottom: '20px' } },
        h('input', {
          type: 'text',
          value: query,
          onChange: (e) => setQuery(e.target.value),
          onKeyDown: (e) => e.key === 'Enter' && handleAsk(),
          placeholder: t.ai.placeholder,
          style: {
            flex: 1,
            padding: '14px 18px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-primary)',
            fontSize: '15px',
            outline: 'none'
          }
        }),
        h(Button, {
          variant: 'primary',
          size: 'md',
          onClick: () => handleAsk(),
          disabled: !query.trim() || isLoading,
          icon: h(IconSparkles, { size: 16, color: '#FFF' })
        }, isLoading ? 'Thinking...' : t.ai.btnAsk)
      ),
      // Quick Queries
      h('div', { style: { marginBottom: '32px' } },
        h('span', { style: { fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' } }, t.ai.exampleQueriesLabel),
        h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '8px' } },
          sampleQueries.map((q, i) => h('button', {
            key: i,
            onClick: () => { setQuery(q); handleAsk(q); },
            style: {
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              fontSize: '12.5px',
              color: 'var(--text-primary)'
            }
          }, q))
        )
      ),
      // Response Card
      activeResponse && h(Card, { style: { padding: '32px' } },
        h('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 14px',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '24px',
            fontSize: '12px',
            color: 'var(--text-secondary)'
          }
        },
          h(IconShield, { size: 16, color: 'var(--accent-primary)' }),
          h('span', null, t.ai.neutralityNotice)
        ),
        h('div', { style: { marginBottom: '20px' } },
          h('span', { style: { fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-primary)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' } }, t.ai.shortAnswer),
          h('p', { style: { fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5 } }, activeResponse.shortAnswer[language] || activeResponse.shortAnswer.en)
        ),
        h('div', { style: { marginBottom: '22px', backgroundColor: 'var(--bg-secondary)', padding: '18px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' } },
          h('span', { style: { fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' } }, `${t.ai.howItWorks} (${mode.toUpperCase()})`),
          h('p', { style: { fontSize: '14.5px', lineHeight: 1.65 } }, activeResponse.howItWorks[language] || activeResponse.howItWorks.en)
        ),
        h('div', { style: { marginBottom: '18px' } },
          h('span', { style: { fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' } }, t.ai.relatedTopics),
          h('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
            activeResponse.relatedTopics.map((topic, i) => h('button', {
              key: i,
              onClick: () => setCurrentView('glossary'),
              style: { padding: '4px 10px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-muted)', fontSize: '12px', color: 'var(--text-primary)' }
            }, `${topic} ↗`))
          )
        ),
        h('div', { style: { borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', fontSize: '12px', color: 'var(--text-muted)' } },
          h('strong', null, `${t.ai.sources}: `),
          activeResponse.sources.join(' • ')
        )
      )
    );
  }

  // VIEW 6: QUIZ
  function QuizView() {
    const { language, t, recordQuizScore, setCurrentView } = useApp();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    const currentQ = quizQuestions[currentIndex];
    const totalQuestions = quizQuestions.length;
    const isAnswered = selectedAnswers[currentIndex] !== undefined;

    const handleSelect = (optIdx) => {
      if (isAnswered) return;
      setSelectedAnswers({ ...selectedAnswers, [currentIndex]: optIdx });
    };

    const handleNext = () => {
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        let score = 0;
        quizQuestions.forEach((q, idx) => {
          if (selectedAnswers[idx] === q.correctIndex) score++;
        });
        recordQuizScore(score, totalQuestions);
        setIsFinished(true);
        if (window.confetti && score >= 4) {
          try { window.confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } }); } catch (e) {}
        }
      }
    };

    const handleRetake = () => {
      setSelectedAnswers({});
      setCurrentIndex(0);
      setIsFinished(false);
    };

    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) score++;
    });
    const percentage = Math.round((score / totalQuestions) * 100);

    return h('div', { className: 'fade-in container', style: { padding: '40px 0 64px', maxWidth: '800px' } },
      h('div', { style: { marginBottom: '28px' } },
        h(Badge, { variant: 'accent', icon: h(IconAward, { size: 14 }), style: { marginBottom: '12px' } }, 'Certified Civic Knowledge'),
        h('h1', { style: { fontSize: '32px', fontWeight: 800, marginBottom: '10px' } }, t.quiz.title),
        h('p', { style: { fontSize: '15px', color: 'var(--text-secondary)' } }, t.quiz.subtitle)
      ),
      !isFinished
        ? h(Card, { style: { padding: '36px' } },
          h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' } },
            h('span', { style: { fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' } }, `${t.quiz.questionOf} ${currentIndex + 1} of ${totalQuestions}`),
            h(Badge, { variant: 'default' }, `Topic: ${currentQ.topicTag}`)
          ),
          h('div', { style: { marginBottom: '28px' } }, h(ProgressBar, { value: ((currentIndex + 1) / totalQuestions) * 100, height: 6 })),
          h('h2', { style: { fontSize: '19px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.45, marginBottom: '24px' } }, currentQ.question[language] || currentQ.question.en),
          h('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' } },
            (currentQ.options[language] || currentQ.options.en).map((optText, optIdx) => {
              const isSelected = selectedAnswers[currentIndex] === optIdx;
              const isCorrect = currentQ.correctIndex === optIdx;
              const showValidation = isAnswered;

              let borderColor = 'var(--border-subtle)';
              let bgColor = 'var(--bg-card)';
              if (showValidation) {
                if (isCorrect) { borderColor = 'var(--success)'; bgColor = 'var(--success-subtle)'; }
                else if (isSelected) { borderColor = 'var(--danger)'; bgColor = 'var(--danger-subtle)'; }
              } else if (isSelected) {
                borderColor = 'var(--accent-primary)'; bgColor = 'var(--accent-subtle)';
              }

              return h('div', {
                key: optIdx,
                onClick: () => handleSelect(optIdx),
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 18px',
                  borderRadius: 'var(--radius-md)',
                  border: `1.5px solid ${borderColor}`,
                  backgroundColor: bgColor,
                  cursor: isAnswered ? 'default' : 'pointer',
                  transition: 'all var(--transition-fast)'
                }
              },
                h('div', {
                  style: {
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: `1.5px solid ${borderColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700
                  }
                }, String.fromCharCode(65 + optIdx)),
                h('span', { style: { fontSize: '14.5px', lineHeight: 1.5 } }, optText)
              );
            })
          ),
          isAnswered && h('div', {
            style: {
              padding: '18px 20px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '28px'
            }
          },
            h('span', { style: { fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-text)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' } }, 'Civic Context & Explanation'),
            h('p', { style: { fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)' } }, currentQ.explanation[language] || currentQ.explanation.en)
          ),
          h('div', { style: { display: 'flex', justifyContent: 'flex-end' } },
            h(Button, {
              variant: 'primary',
              size: 'md',
              disabled: !isAnswered,
              onClick: handleNext,
              icon: h(IconChevronRight, { size: 16, color: '#FFF' })
            }, currentIndex === totalQuestions - 1 ? t.quiz.seeResultsBtn : t.quiz.nextBtn)
          )
        )
        : h(Card, { style: { padding: '36px', textAlign: 'center' } },
          h('div', {
            style: {
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: percentage >= 70 ? 'var(--success-subtle)' : 'var(--warm-subtle)',
              color: percentage >= 70 ? 'var(--success)' : 'var(--warm-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }
          }, h(IconAward, { size: 36 })),
          h(Badge, { variant: 'accent', style: { marginBottom: '12px' } }, t.quiz.certifiedBadge),
          h('h2', { style: { fontSize: '28px', fontWeight: 800, marginBottom: '8px' } }, `${t.quiz.scoreTitle}: ${score} / ${totalQuestions} (${percentage}%)`),
          h('p', { style: { fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.6 } },
            percentage === 100 ? t.quiz.perfectScore : percentage >= 70 ? t.quiz.goodScore : t.quiz.practiceScore
          ),
          h('div', { style: { textAlign: 'left', marginBottom: '32px' } },
            h('h3', { style: { fontSize: '16px', fontWeight: 700, marginBottom: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' } }, t.quiz.reviewLabel),
            h('div', { style: { display: 'flex', flexDirection: 'column', gap: '14px' } },
              quizQuestions.map((q, idx) => {
                const userChoice = selectedAnswers[idx];
                const isCorrect = userChoice === q.correctIndex;
                return h('div', {
                  key: q.id,
                  style: { padding: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }
                },
                  h('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '4px' } },
                    h('span', { style: { fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)' } }, `Question ${idx + 1}`),
                    h('span', { style: { fontSize: '12px', fontWeight: 600, color: isCorrect ? 'var(--success)' : 'var(--danger)' } }, isCorrect ? '✓ Correct' : '✕ Incorrect')
                  ),
                  h('p', { style: { fontSize: '14px', fontWeight: 600, marginBottom: '6px' } }, q.question[language] || q.question.en),
                  h('p', { style: { fontSize: '13px', color: 'var(--text-secondary)' } }, h('strong', null, 'Key Fact: '), q.explanation[language] || q.explanation.en)
                );
              })
            )
          ),
          h('div', { style: { display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' } },
            h(Button, { variant: 'primary', size: 'md', onClick: handleRetake, icon: h(IconRefresh, { size: 16 }) }, t.quiz.retakeBtn),
            h(Button, { variant: 'secondary', size: 'md', onClick: () => setCurrentView('journey') }, 'Explore Election Stages')
          )
        )
    );
  }

  // VIEW 7: MYTH OR FACT
  function MythFactView() {
    const { language, t, progress, markMythChecked } = useApp();
    const [revealedIds, setRevealedIds] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['all', 'Voter ID', 'Voting Machines', 'NOTA', 'Polling Procedures', 'Eligibility'];

    const filtered = mythFactData.filter((m) => selectedCategory === 'all' || m.category === selectedCategory);

    const toggleReveal = (id) => {
      if (!revealedIds.includes(id)) {
        setRevealedIds([...revealedIds, id]);
        markMythChecked(id);
      } else {
        setRevealedIds(revealedIds.filter((i) => i !== id));
      }
    };

    return h('div', { className: 'fade-in container', style: { padding: '40px 0 64px' } },
      h('div', { style: { maxWidth: '800px', marginBottom: '28px' } },
        h(Badge, { variant: 'accent', style: { marginBottom: '12px' } }, 'Anti-Misinformation Engine'),
        h('h1', { style: { fontSize: '32px', fontWeight: 800, marginBottom: '10px' } }, t.mythFact.title),
        h('p', { style: { fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 } }, t.mythFact.subtitle)
      ),
      // Category Pills
      h('div', { style: { display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' } },
        categories.map((c) => {
          const isActive = selectedCategory === c;
          return h('button', {
            key: c,
            onClick: () => setSelectedCategory(c),
            style: {
              padding: '8px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
              color: isActive ? '#FFF' : 'var(--text-secondary)',
              border: `1px solid ${isActive ? 'transparent' : 'var(--border-subtle)'}`
            }
          }, c === 'all' ? t.mythFact.filterAll : c);
        })
      ),
      // Cards
      h('div', { className: 'grid-2' },
        filtered.map((item) => {
          const isRevealed = revealedIds.includes(item.id);
          const hasChecked = progress.mythsChecked.includes(item.id);

          return h(Card, {
            key: item.id,
            style: { padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }
          },
            h('div', null,
              h('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '12px' } },
                h('span', { style: { fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em' } }, item.category),
                hasChecked && h('span', { style: { fontSize: '11px', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '3px', fontWeight: 600 } }, h(IconCheck, { size: 12, color: 'var(--success)' }), 'Explored')
              ),
              h('h3', { style: { fontSize: '16.5px', fontWeight: 600, lineHeight: 1.5, marginBottom: '20px' } }, `“${item.statement[language] || item.statement.en}”`),
              isRevealed
                ? h('div', null,
                  h('div', { style: { marginBottom: '12px' } }, h(Badge, { variant: item.isFact ? 'success' : 'warning' }, item.verdict[language] || item.verdict.en)),
                  h('p', { style: { fontSize: '14px', lineHeight: 1.6, marginBottom: '14px' } }, item.explanation[language] || item.explanation.en),
                  h('div', { style: { fontSize: '12px', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' } },
                    h('strong', null, `${t.mythFact.officialSource}: `), item.source
                  )
                )
                : h('div', { style: { padding: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', textAlign: 'center', marginBottom: '16px' } },
                  h('span', { style: { fontSize: '13px', color: 'var(--text-secondary)' } }, 'Click below to verify whether this claim is true or a common election myth.')
                )
            ),
            h('div', { style: { marginTop: '18px' } },
              h(Button, {
                variant: isRevealed ? 'outline' : 'primary',
                size: 'sm',
                onClick: () => toggleReveal(item.id)
              }, isRevealed ? 'Hide Verification' : t.mythFact.btnCheck)
            )
          );
        })
      )
    );
  }

  // VIEW 8: ABOUT
  function AboutView() {
    const { t } = useApp();

    return h('div', { className: 'fade-in container', style: { padding: '40px 0 64px', maxWidth: '840px' } },
      h('div', { style: { marginBottom: '32px' } },
        h(Badge, { variant: 'accent', style: { marginBottom: '12px' } }, 'Platform Mission'),
        h('h1', { style: { fontSize: '32px', fontWeight: 800, marginBottom: '10px' } }, `About ${t.brand}`),
        h('p', { style: { fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 } },
          `“${t.tagline}” — Building informed, confident, and active democratic participants through transparent technology.`
        )
      ),
      h('div', { style: { display: 'flex', flexDirection: 'column', gap: '24px' } },
        h(Card, { style: { padding: '32px' } },
          h('h2', { style: { fontSize: '20px', fontWeight: 700, marginBottom: '12px' } }, 'Our Civic Educational Purpose'),
          h('p', { style: { fontSize: '15px', lineHeight: 1.65, marginBottom: '16px' } },
            'ELECTRA was created to dismantle the mystery surrounding modern elections. While voting is a cornerstone constitutional right, many citizens—especially first-time voters—face anxiety or confusion regarding registration checks, voting booth protocols, EVM & VVPAT mechanisms, and tallying integrity.'
          ),
          h('p', { style: { fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65 } },
            'By providing an interactive, chronological walkthrough from election notification to counting day, ELECTRA empowers every citizen with verifiable knowledge.'
          )
        ),
        h(Card, { style: { padding: '32px', borderLeft: '4px solid var(--warm-accent)' } },
          h('div', { style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' } },
            h(IconShield, { size: 22, color: 'var(--warm-accent)' }),
            h('h3', { style: { fontSize: '18px', fontWeight: 700 } }, 'Non-Partisan & Fictional Simulation Declaration')
          ),
          h('ul', { style: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.55 } },
            h('li', { style: { display: 'flex', gap: '8px' } }, h('span', { style: { color: 'var(--warm-accent)', fontWeight: 700 } }, '•'), h('span', null, h('strong', null, 'Zero Endorsement: '), 'ELECTRA does not recommend, support, or oppose any political party or candidate.')),
            h('li', { style: { display: 'flex', gap: '8px' } }, h('span', { style: { color: 'var(--warm-accent)', fontWeight: 700 } }, '•'), h('span', null, h('strong', null, 'Fictional Ballot Simulator: '), 'All candidates, symbols, and scenarios in the Voting Simulator are entirely fictional and designed solely for educational demonstration.')),
            h('li', { style: { display: 'flex', gap: '8px' } }, h('span', { style: { color: 'var(--warm-accent)', fontWeight: 700 } }, '•'), h('span', null, h('strong', null, 'Absolute Privacy: '), 'ELECTRA never asks for, captures, or stores personal voter IDs, biometrics, or credentials.'))
          )
        ),
        h(Card, { style: { padding: '32px' } },
          h('h3', { style: { fontSize: '18px', fontWeight: 700, marginBottom: '14px' } }, 'Statutory Sources & References'),
          h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', fontSize: '13.5px', color: 'var(--text-secondary)' } },
            h('div', { style: { padding: '14px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' } },
              h('strong', null, 'The Representation of the People Act'),
              h('p', { style: { fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' } }, 'Legal provisions governing notification, nominations, scrutiny, and polling rules.')
            ),
            h('div', { style: { padding: '14px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' } },
              h('strong', null, 'Conduct of Elections Rules, 1961'),
              h('p', { style: { fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' } }, 'Procedures for voting compartments, indelible ink, EVMs, VVPAT audits, and counting.')
            ),
            h('div', { style: { padding: '14px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' } },
              h('strong', null, 'Election Commission Manuals'),
              h('p', { style: { fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' } }, 'Official operational handbooks for Returning Officers, Presiding Officers, and Polling Agents.')
            )
          )
        )
      )
    );
  }

  /* =========================================================================
     7. ROOT APP COMPONENT & MOUNT
     ========================================================================= */
  function AppContent() {
    const { currentView } = useApp();

    return h('div', { style: { display: 'flex', flexDirection: 'column', minHeight: '100vh' } },
      h(Header),
      h('main', { style: { flex: 1 } },
        (currentView === 'home' || currentView === 'explore') && h(HomeView),
        currentView === 'journey' && h(ElectionJourneyView),
        currentView === 'simulator' && h(VotingSimulatorView),
        currentView === 'glossary' && h(KnowledgeHubView),
        currentView === 'quiz' && h(QuizView),
        currentView === 'mythfact' && h(MythFactView),
        currentView === 'ai' && h(AskElectraView),
        currentView === 'about' && h(AboutView)
      ),
      h(Footer),
      h(AccessibilityModal)
    );
  }

  function RootApp() {
    return h(AppProvider, null, h(AppContent));
  }

  // Mount to #root
  const rootEl = document.getElementById('root');
  if (rootEl && window.ReactDOM && window.ReactDOM.createRoot) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(h(RootApp));
  }
})();
