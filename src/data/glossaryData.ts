import { GlossaryTerm } from '../types';

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'election',
    term: { en: 'Election', kn: 'ಚುನಾವಣೆ (Election)' },
    category: 'basics',
    definition: {
      en: 'A formal decision-making process by which a population chooses an individual or multiple individuals to hold public office.',
      kn: 'ಪ್ರಜೆಗಳು ತಮ್ಮ ಪ್ರತಿನಿಧಿಗಳನ್ನು ಅಧಿಕಾರಕ್ಕೆ ಆರಿಸುವ ಸಾಂವಿಧಾನಿಕ ನಿರ್ಧಾರ ಪ್ರಕ್ರಿಯೆ.'
    },
    whyItMatters: {
      en: 'It is the bedrock of democracy, allowing citizens to hold leaders accountable and shape public policies peacefully.',
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
      en: 'Every voter possesses an equal constitutional voice regardless of wealth, gender, or social background.',
      kn: 'ಶ್ರೀಮಂತ-ಬಡವ, ಲಿಂಗ ಭೇದವಿಲ್ಲದೆ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಸಮಾನವಾದ ಒಂದು ಮತದ ಹಕ್ಕಿದೆ.'
    },
    relatedTerms: ['Electoral Roll', 'EPIC Card', 'Polling Station']
  },
  {
    id: 'electoral-roll',
    term: { en: 'Electoral Roll', kn: 'ಮತದಾರರ ಪಟ್ಟಿ (Electoral Roll)' },
    category: 'basics',
    definition: {
      en: 'The official list of all citizens registered and eligible to vote in a specific constituency or polling area.',
      kn: 'ಒಂದು ನಿರ್ದಿಷ್ಟ ಕ್ಷೇತ್ರದಲ್ಲಿ ಮತದಾನ ಮಾಡಲು ಅರ್ಹತೆ ಹೊಂದಿರುವ ನಾಗರಿಕರ ಅಧಿಕೃತ ಪಟ್ಟಿ.'
    },
    whyItMatters: {
      en: 'Having a voter ID card alone is not enough; your name must be present in the electoral roll to cast a vote.',
      kn: 'ಕೇವಲ ಗುರುತಿನ ಚೀಟಿ ಇದ್ದರೆ ಸಾಲದು; ಮತ ಚಲಾಯಿಸಲು ನಿಮ್ಮ ಹೆಸರು ಈ ಪಟ್ಟಿಯಲ್ಲಿ ಇರುವುದು ಕಡ್ಡಾಯ.'
    },
    relatedTerms: ['Voter', 'Form 6', 'EPIC Card']
  },
  {
    id: 'evm',
    term: { en: 'Electronic Voting Machine (EVM)', kn: 'ಇವಿಎಂ (EVM)' },
    category: 'voting',
    definition: {
      en: 'A standalone electronic device consisting of a Ballot Unit and a Control Unit used to cast and record votes without internet or network connections.',
      kn: 'ಯಾವುದೇ ಇಂಟರ್ನೆಟ್ ಅಥವಾ ನೆಟ್‌ವರ್ಕ್ ಸಂಪರ್ಕವಿಲ್ಲದೆ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಮತ್ತು ಮತಗಳನ್ನು ದಾಖಲಿಸುವ ಸ್ವತಂತ್ರ ವಿದ್ಯುನ್ಮಾನ ಯಂತ್ರ.'
    },
    whyItMatters: {
      en: 'Eliminates invalid paper ballots, prevents booth capturing, and accelerates tamper-evident counting.',
      kn: 'ತಿರಸ್ಕೃತ ಮತಗಳನ್ನು ತಡೆಯುತ್ತದೆ, ಮತಗಟ್ಟೆ ಕಬಳಿಕೆಯನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ ಮತ್ತು ತ್ವರಿತ, ನಿಖರ ಎಣಿಕೆಗೆ ನೆರವಾಗುತ್ತದೆ.'
    },
    relatedTerms: ['VVPAT', 'Ballot Unit', 'Control Unit']
  },
  {
    id: 'vvpat',
    term: { en: 'VVPAT (Voter Verifiable Paper Audit Trail)', kn: 'ವಿವಿಪ್ಯಾಟ್ (VVPAT)' },
    category: 'voting',
    definition: {
      en: 'An independent verification printer attached to the EVM that generates a paper slip visible for 7 seconds showing candidate name and symbol before sealing it into a drop box.',
      kn: 'ಇವಿಎಂಗೆ ಜೋಡಿಸಲಾದ ಮುದ್ರಕವಾಗಿದ್ದು, ನೀವು ಮತ ಹಾಕಿದ ಅಭ್ಯರ್ಥಿಯ ಹೆಸರು ಮತ್ತು ಚಿಹ್ನೆ 7 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಕಾಣಿಸಿ ನಂತರ ಸುರಕ್ಷಿತ ಪೆಟ್ಟಿಗೆಗೆ ಬೀಳುತ್ತದೆ.'
    },
    whyItMatters: {
      en: 'Enables physical paper audits to independently confirm that the electronic vote was stored exactly as cast.',
      kn: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಮತವು ಸರಿಯಾಗಿ ದಾಖಲಾಗಿದೆಯೇ ಎಂಬುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಕಾಗದದ ಪುರಾವೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.'
    },
    relatedTerms: ['EVM', 'Control Unit', 'Polling Station']
  },
  {
    id: 'nota',
    term: { en: 'NOTA (None of the Above)', kn: 'ನೋಟಾ (NOTA)' },
    category: 'voting',
    definition: {
      en: 'A ballot option allowing a voter to exercise their franchise while rejecting all contesting candidates in that election.',
      kn: 'ಸ್ಪರ್ಧಿಸುತ್ತಿರುವ ಎಲ್ಲಾ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ತಿರಸ್ಕರಿಸಲು ಮತದಾರರಿಗೆ ನೀಡಲಾದ ಒಂದು ಪ್ರಮುಖ ಆಯ್ಕೆ.'
    },
    whyItMatters: {
      en: 'Protects the right to express dissatisfaction with candidate choices without forfeiting your turn or disclosing your identity.',
      kn: 'ಯಾವ ಅಭ್ಯರ್ಥಿಯೂ ಸರಿ ಇಲ್ಲ ಎಂದಾಗ ಮತದಾನದಿಂದ ಹಿಂದೆ ಸರಿಯದೆ ನಿಮ್ಮ ಅಸಮಾಧಾನವನ್ನು ರಹಸ್ಯವಾಗಿ ದಾಖಲಿಸಬಹುದು.'
    },
    relatedTerms: ['Ballot', 'Election', 'Secrecy of Vote']
  },
  {
    id: 'polling-station',
    term: { en: 'Polling Station / Booth', kn: 'ಮತಗಟ್ಟೆ (Polling Station)' },
    category: 'voting',
    definition: {
      en: 'The designated physical building (usually a school or community center) where registered electors cast their votes.',
      kn: 'ನೋಂದಾಯಿತ ಮತದಾರರು ಮತ ಚಲಾಯಿಸಲು ನಿಗದಿಪಡಿಸಿದ ಅಧಿಕೃತ ಕೊಠಡಿ ಅಥವಾ ಕಟ್ಟಡ.'
    },
    whyItMatters: {
      en: 'Election rules mandate that polling stations should ideally be within 2 km walking distance for every voter.',
      kn: 'ಮತದಾರರಿಗೆ ಅನುಕೂಲವಾಗುವಂತೆ ಸಾಮಾನ್ಯವಾಗಿ 2 ಕಿ.ಮೀ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಮತಗಟ್ಟೆಯನ್ನು ಸ್ಥಾಪಿಸಲಾಗುತ್ತದೆ.'
    },
    relatedTerms: ['Presiding Officer', 'Polling Agent', 'Queue']
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
      en: 'Ensures that candidates meet all constitutional criteria such as citizenship, age, and solvency before entering the ballot.',
      kn: 'ಅಭ್ಯರ್ಥಿಯು ವಯಸ್ಸು, ಪೌರತ್ವ ಮುಂತಾದ ಸಾಂವಿಧಾನಿಕ ಅರ್ಹತೆಗಳನ್ನು ಹೊಂದಿದ್ದಾರೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ.'
    },
    relatedTerms: ['Affidavit', 'Scrutiny', 'Security Deposit']
  },
  {
    id: 'scrutiny',
    term: { en: 'Scrutiny', kn: 'ಪರಿಶೀಲನೆ (Scrutiny)' },
    category: 'process',
    definition: {
      en: 'The legal examination of all nomination papers by the Returning Officer to decide their validity or rejection.',
      kn: 'ಸಲ್ಲಿಸಲಾದ ನಾಮಪತ್ರಗಳು ಸರಿಯಾಗಿವೆಯೇ ಎಂದು ಚುನಾವಣಾಧಿಕಾರಿಯು ನಡೆಸುವ ಕಾನೂನುಬದ್ಧ ಪರಿಶೀಲನೆ.'
    },
    whyItMatters: {
      en: 'Filters out bogus or unqualified candidates transparently in front of opposing candidates and the media.',
      kn: 'ಅನರ್ಹ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ತಡೆದು, ನೈಜ ಅಭ್ಯರ್ಥಿಗಳಿಗೆ ಮಾತ್ರ ಸ್ಪರ್ಧಿಸಲು ಅವಕಾಶ ಕಲ್ಪಿಸುತ್ತದೆ.'
    },
    relatedTerms: ['Nomination', 'Returning Officer']
  },
  {
    id: 'campaign',
    term: { en: 'Campaign Period', kn: 'ಪ್ರಚಾರ ಅವಧಿ (Campaign)' },
    category: 'process',
    definition: {
      en: 'The regulated timeframe during which candidates and political parties present policies, manifestos, and rallies to persuade voters.',
      kn: 'ಅಭ್ಯರ್ಥಿಗಳು ಮತ್ತು ಪಕ್ಷಗಳು ತಮ್ಮ ಪ್ರಣಾಳಿಕೆ ಮತ್ತು ಯೋಜನೆಗಳನ್ನು ಮತದಾರರಿಗೆ ಪ್ರಸ್ತುತಪಡಿಸುವ ನಿರ್ದಿಷ್ಟ ಅವಧಿ.'
    },
    whyItMatters: {
      en: 'Provides voters with the information and debate needed to assess who can best represent their collective interests.',
      kn: 'ಯಾವ ಅಭ್ಯರ್ಥಿ ಉತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಬಹುದು ಎಂಬುದನ್ನು ಅರಿಯಲು ಮತದಾರರಿಗೆ ಮಾಹಿತಿ ನೀಡುತ್ತದೆ.'
    },
    relatedTerms: ['Model Code of Conduct', 'Silence Period', 'Manifesto']
  },
  {
    id: 'silence-period',
    term: { en: 'Silence Period', kn: 'ಮೌನ ಅವಧಿ (Silence Period)' },
    category: 'process',
    definition: {
      en: 'The 48-hour quiet window leading up to the conclusion of polling when all campaigning, rallies, and media advertisements must halt.',
      kn: 'ಮತದಾನ ಮುಕ್ತಾಯಕ್ಕೆ 48 ಗಂಟೆಗಳ ಮೊದಲು ಎಲ್ಲಾ ರೀತಿಯ ಪ್ರಚಾರ, ಭಾಷಣ ಮತ್ತು ಜಾಹೀರಾತುಗಳನ್ನು ನಿಲ್ಲಿಸುವ ಅವಧಿ.'
    },
    whyItMatters: {
      en: 'Protects voters from eleventh-hour pressure, hate speech, and inducements, allowing reasoned reflection before voting.',
      kn: 'ಯಾವುದೇ ಅಂತಿಮ ಕ್ಷಣದ ಒತ್ತಡ ಅಥವಾ ಆಮಿಷಗಳಿಲ್ಲದೆ ಮತದಾರರು ಪ್ರಶಾಂತವಾಗಿ ನಿರ್ಧರಿಸಲು ನೆರವಾಗುತ್ತದೆ.'
    },
    relatedTerms: ['Campaign', 'Polling']
  },
  {
    id: 'counting',
    term: { en: 'Vote Counting', kn: 'ಮತ ಎಣಿಕೆ (Vote Counting)' },
    category: 'counting',
    definition: {
      en: 'The systematic tallying of all cast votes from EVM control units and postal ballots under the supervision of counting agents and observers.',
      kn: 'ಚುನಾವಣಾ ವೀಕ್ಷಕರು ಮತ್ತು ಏಜೆಂಟರ ಸಮ್ಮುಖದಲ್ಲಿ ಯಂತ್ರಗಳು ಮತ್ತು ಅಂಚೆ ಮತಗಳ ಅಧಿಕೃತ ಲೆಕ್ಕಾಚಾರ.'
    },
    whyItMatters: {
      en: 'Translates individual ballots into final parliamentary or council representation through verified, transparent tallies.',
      kn: 'ಪ್ರತಿಯೊಂದು ಮತವನ್ನೂ ಪಾರದರ್ಶಕವಾಗಿ ಲೆಕ್ಕಹಾಕಿ ಅಂತಿಮ ಜನಾದೇಶವನ್ನು ರೂಪಿಸುತ್ತದೆ.'
    },
    relatedTerms: ['Strongroom', 'Control Unit', 'Result']
  },
  {
    id: 'strongroom',
    term: { en: 'Strongroom', kn: 'ಭದ್ರತಾ ಕೊಠಡಿ (Strongroom)' },
    category: 'counting',
    definition: {
      en: 'A fortified, double-locked, CCTV-monitored facility guarded 24/7 by armed security where polled EVMs are sealed until counting day.',
      kn: 'ಮತದಾನ ಮುಗಿದ ನಂತರ ಇವಿಎಂಗಳನ್ನು ಎಣಿಕೆಯ ದಿನದವರೆಗೆ ಸಿಸಿಟಿವಿ ಮತ್ತು ಸಶಸ್ತ್ರ ಪಡೆಗಳ ಕಾವಲಿನಲ್ಲಿಡಲಾಗುವ ಸುರಕ್ಷಿತ ಕೊಠಡಿ.'
    },
    whyItMatters: {
      en: 'Prevents any unauthorized physical access or tampering of polled machines between polling day and counting day.',
      kn: 'ಮತದಾನ ಮತ್ತು ಎಣಿಕೆಯ ನಡುವಿನ ಅವಧಿಯಲ್ಲಿ ಯಂತ್ರಗಳ ಸುರಕ್ಷತೆ ಮತ್ತು ಪಾವಿತ್ರ್ಯತೆಯನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ.'
    },
    relatedTerms: ['EVM', 'Counting', 'Returning Officer']
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
      en: 'Legally authorizes the winner to take their oath and assume legislative duties on behalf of their constituents.',
      kn: 'ವಿಜೇತ ಅಭ್ಯರ್ಥಿಯು ಪ್ರಮಾಣವಚನ ಸ್ವೀಕರಿಸಿ ಶಾಸಕಾಂಗ ಕರ್ತವ್ಯಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಕಾನೂನುಬದ್ಧ ಅಧಿಕಾರ ನೀಡುತ್ತದೆ.'
    },
    relatedTerms: ['Certificate of Election', 'Counting']
  }
];
