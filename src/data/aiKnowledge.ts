export interface AIResponse {
  shortAnswer: { en: string; kn: string };
  howItWorks: { en: string; kn: string };
  relatedTopics: string[];
  sources: string[];
}

export const aiKnowledgeBase: Record<string, AIResponse> = {
  'who should i vote for': {
    shortAnswer: {
      en: 'ELECTRA is an independent, non-partisan educational platform and never recommends specific candidates or political parties.',
      kn: 'ಎಲೆಕ್ಟ್ರಾ ಒಂದು ಸ್ವತಂತ್ರ, ತಟಸ್ಥ ಶೈಕ್ಷಣಿಕ ವೇದಿಕೆಯಾಗಿದ್ದು ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಅಭ್ಯರ್ಥಿ ಅಥವಾ ರಾಜಕೀಯ ಪಕ್ಷವನ್ನು ಶಿಫಾರಸು ಮಾಡುವುದಿಲ್ಲ.'
    },
    howItWorks: {
      en: 'To make an informed, confident decision: 1) Read each candidate’s official sworn affidavit for track record, education, and assets, 2) Compare their public manifestos and policy proposals for your constituency, 3) Assess their past community integrity, and 4) Vote according to your conscience on polling day.',
      kn: 'ಉತ್ತಮ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಲು: 1) ಅಭ್ಯರ್ಥಿಯ ವಿದ್ಯಾರ್ಹತೆ ಮತ್ತು ಹಿನ್ನೆಲೆಯ ಅಫಿಡವಿಟ್ ಪರಿಶೀಲಿಸಿ, 2) ಅವರ ಪ್ರಣಾಳಿಕೆಯಲ್ಲಿನ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳನ್ನು ಗಮನಿಸಿ, 3) ನಿಮ್ಮ ಸ್ವಂತ ವಿವೇಚನೆಯಿಂದ ಮತದಾನ ಮಾಡಿ.'
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
      en: '1) You enter the booth and present your approved photo ID to the First Polling Officer who matches it with the Electoral Roll. 2) The Second Polling Officer marks your left index finger with indelible ink and records your signature in the register. 3) The Third Polling Officer authorizes the EVM ballot unit. 4) Inside the private voting compartment, you press the button next to your chosen candidate or NOTA. 5) A beep sounds and the VVPAT slip verifies your vote for 7 seconds.',
      kn: '1) ಮತಗಟ್ಟೆ ಪ್ರವೇಶಿಸಿ ಗುರುತಿನ ಚೀಟಿ ತೋರಿಸಿದಾಗ ಅಧಿಕಾರಿ ಪಟ್ಟಿಯಲ್ಲಿ ಪರಿಶೀಲಿಸುತ್ತಾರೆ. 2) ಎರಡನೇ ಅಧಿಕಾರಿಯು ಎಡತೋರು ಬೆರಳಿಗೆ ಅಳಿಸಲಾಗದ ಶಾಯಿ ಹಾಕಿ ಸಹಿ ಪಡೆಯುತ್ತಾರೆ. 3) ಮೂರನೇ ಅಧಿಕಾರಿಯು ಇವಿಎಂ ಸಕ್ರಿಯಗೊಳಿಸುತ್ತಾರೆ. 4) ಮತದಾನ ಕೊಠಡಿಯಲ್ಲಿ ರಹಸ್ಯವಾಗಿ ನಿಮ್ಮ ಆಯ್ಕೆಯ ಗುಂಡಿ ಒತ್ತುತ್ತೀರಿ. 5) ಬೀಪ್ ಶಬ್ದ ಬರುತ್ತದೆ ಮತ್ತು VVPAT ಸ್ಲಿಪ್ 7 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಗೋಚರಿಸುತ್ತದೆ.'
    },
    relatedTopics: ['EVM & VVPAT', 'Indelible Ink', 'Secrecy of Vote', 'Presiding Officer'],
    sources: ['Hand Book for Polling Officers, ECI', 'Conduct of Elections Rules']
  },
  'what is nomination': {
    shortAnswer: {
      en: 'Nomination is the formal legal procedure where a citizen submits official paperwork to contest an election for public office.',
      kn: 'ಚುನಾವಣೆಯಲ್ಲಿ ಸ್ಪರ್ಧಿಸಲು ಇಚ್ಛಿಸುವ ಪ್ರಜೆಯು ಸಲ್ಲಿಸುವ ಅಧಿಕೃತ ಕಾನೂನುಬದ್ಧ ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆ.'
    },
    howItWorks: {
      en: 'Candidates file prescribed forms before the Returning Officer, accompanied by proposers who are registered electors from that constituency. They must deposit a statutory security deposit and submit Form 26 sworn affidavits detailing criminal background, education, and financial assets.',
      kn: 'ಅಭ್ಯರ್ಥಿಗಳು ಆ ಕ್ಷೇತ್ರದ ಮತದಾರರ ಬೆಂಬಲದೊಂದಿಗೆ ಚುನಾವಣಾಧಿಕಾರಿಗೆ ನಿಗದಿತ ನಮೂನೆಯಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸುತ್ತಾರೆ. ಭದ್ರತಾ ಠೇವಣಿ ಮತ್ತು ಆಸ್ತಿ, ಅಪರಾಧ ಹಿನ್ನೆಲೆಯ ಅಫಿಡವಿಟ್ ಸಲ್ಲಿಸುವುದು ಕಡ್ಡಾಯ.'
    },
    relatedTopics: ['Affidavit', 'Scrutiny', 'Security Deposit', 'Returning Officer'],
    sources: ['Representation of the People Act, 1951, Section 33']
  },
  'how does vote counting work': {
    shortAnswer: {
      en: 'Vote counting is the transparent, round-wise tallying of all polled electronic votes and postal ballots in the presence of candidate agents.',
      kn: 'ಮತ ಎಣಿಕೆಯು ಅಭ್ಯರ್ಥಿಗಳ ಪ್ರತಿನಿಧಿಗಳ ಸಮ್ಮುಖದಲ್ಲಿ ಸುತ್ತುಗಳ ಪ್ರಕಾರ ನಡೆಯುವ ಪಾರದರ್ಶಕ ಲೆಕ್ಕಾಚಾರವಾಗಿದೆ.'
    },
    howItWorks: {
      en: 'On counting morning, the strongroom is opened under camera monitoring. Postal ballots are tallied first. Then, tables receive EVM Control Units where seals are verified against Form 17C. Pressing the "RESULT" button on each machine displays votes per candidate. Tabulation sheets are signed by agents, and random VVPAT paper audits are matched before declaring the result.',
      kn: 'ಎಣಿಕೆಯ ದಿನ ಸಿಸಿಟಿವಿ ಕಣ್ಗಾವಲಿನಲ್ಲಿ ಭದ್ರತಾ ಕೊಠಡಿ ತೆರೆಯಲಾಗುತ್ತದೆ. ಮೊದಲು ಅಂಚೆ ಮತಗಳನ್ನು ಎಣಿಸಲಾಗುತ್ತದೆ. ನಂತರ ಇವಿಎಂ ಯಂತ್ರಗಳ ಸೀಲ್ ಪರಿಶೀಲಿಸಿ "RESULT" ಗುಂಡಿ ಒತ್ತುವ ಮೂಲಕ ಅಭ್ಯರ್ಥಿಗಳ ಮತಗಳನ್ನು ಸುತ್ತುಗಳ ಪ್ರಕಾರ ದಾಖಲಿಸಲಾಗುತ್ತದೆ.'
    },
    relatedTopics: ['Strongroom', 'Control Unit', 'VVPAT', 'Declaration of Result'],
    sources: ['ECI Counting Guidelines & Audit Protocols']
  },
  'what does nota mean': {
    shortAnswer: {
      en: 'NOTA stands for "None of the Above". It allows you to participate in voting without choosing any candidate on the ballot.',
      kn: 'ನೋಟಾ ಎಂದರೆ "None of the Above" (ಮೇಲಿನ ಯಾರೂ ಅಲ್ಲ). ಯಾವುದೇ ಅಭ್ಯರ್ಥಿಗೂ ಮತ ಹಾಕಲು ಇಷ್ಟವಿಲ್ಲದಿದ್ದಾಗ ಇದನ್ನು ಆಯ್ಕೆ ಮಾಡಬಹುದು.'
    },
    howItWorks: {
      en: 'Introduced following a landmark 2013 Supreme Court ruling, NOTA appears as the final entry on the ballot unit. It guarantees that electors who reject all candidates can cast their ballot secretly without having to fill out a public register of refusal (which violated secrecy).',
      kn: '2013 ರ ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ತೀರ್ಪಿನ ಪ್ರಕಾರ ಮತಪತ್ರದ ಕೊನೆಯಲ್ಲಿ ನೋಟಾ ಇರುತ್ತದೆ. ಯಾವ ಅಭ್ಯರ್ಥಿಯೂ ಸರಿ ಇಲ್ಲ ಎಂದಾಗ ಮತದಾರರು ರಹಸ್ಯವಾಗಿ ತಮ್ಮ ಅಸಮ್ಮತಿಯನ್ನು ಚಲಾಯಿಸಲು ಇದು ನೆರವಾಗುತ್ತದೆ.'
    },
    relatedTopics: ['Ballot', 'Secrecy of Vote', 'EVM'],
    sources: ['Supreme Court of India (Writ Petition (Civil) No. 161 of 2004)']
  },
  'explain elections in simple language': {
    shortAnswer: {
      en: 'An election is how a community or country peacefully picks leaders to manage laws, taxes, roads, schools, and civic services.',
      kn: 'ಚುನಾವಣೆ ಎಂದರೆ ಜನರು ಒಟ್ಟಾಗಿ ತಮ್ಮ ಕಾನೂನು, ಶಾಲೆ, ರಸ್ತೆ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳನ್ನು ನಿರ್ವಹಿಸಲು ನಾಯಕರನ್ನು ಶಾಂತಿಯುತವಾಗಿ ಆಯ್ಕೆ ಮಾಡುವ ವಿಧಾನ.'
    },
    howItWorks: {
      en: 'Instead of one ruler making all decisions without asking, citizens over 18 vote for candidates who represent their ideas. Whoever receives the highest support represents that area in parliament or city council. If they do not perform well, citizens can vote for someone else in the next election.',
      kn: 'ಒಬ್ಬರೇ ಸರ್ವಾಧಿಕಾರಿಯಂತೆ ನಿರ್ಧರಿಸುವ ಬದಲು, 18 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಎಲ್ಲಾ ಪ್ರಜೆಗಳು ತಮಗೆ ಸರಿ ಎನಿಸುವ ಪ್ರತಿನಿಧಿಗೆ ಮತ ಹಾಕುತ್ತಾರೆ. ಜನರಿಗೆ ಉತ್ತಮ ಆಡಳಿತ ನೀಡದಿದ್ದರೆ ಮುಂದಿನ ಚುನಾವಣೆಯಲ್ಲಿ ಬೇರೆಯವರನ್ನು ಆಯ್ಕೆ ಮಾಡುವ ಅಧಿಕಾರ ಜನರಿಗಿರುತ್ತದೆ.'
    },
    relatedTopics: ['Voter', 'Election Journey', 'Ballot'],
    sources: ['Civic Education Standards — Democratic Foundations']
  }
};

export function findAIAnswer(query: string, mode: 'simple' | 'detailed'): AIResponse {
  const normalized = query.toLowerCase().trim();

  // Check for neutral redirect on candidate / party preference
  if (normalized.includes('who should i vote') || normalized.includes('which party') || normalized.includes('which candidate') || normalized.includes('best party')) {
    return aiKnowledgeBase['who should i vote for'];
  }

  // Keyword matching
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

  // General fallback
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
        ? 'ಚುನಾವಣೆಗಳು ಪ್ರಜೆಗಳಿಗೆ ತಮ್ಮ ಸಮುದಾಯದ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸುವ ಪ್ರತಿನಿಧಿಗಳಿಗೆ ರಹಸ್ಯ ಮತದಾನ ಮಾಡಲು ಅನುಮತಿ ನೀಡುತ್ತವೆ.'
        : 'ಚುನಾವಣಾ ಪ್ರಕ್ರಿಯೆಯು ಅಧಿಸೂಚನೆ, ನಾಮಪತ್ರ ಸಲ್ಲಿಕೆ, ಪರಿಶೀಲನೆ, ಪ್ರಚಾರ, ರಹಸ್ಯ ಮತದಾನ ಮತ್ತು ಪರಿಶೀಲಿತ ಎಣಿಕೆಯ ಮೂಲಕ ವ್ಯವಸ್ಥಿತವಾಗಿ ಸಾಗುತ್ತದೆ.'
    },
    relatedTopics: ['Election Journey', 'EVM & VVPAT', 'Electoral Roll', 'NOTA'],
    sources: ['ELECTRA Civic Knowledge Engine', 'Representation of the People Act']
  };
}
