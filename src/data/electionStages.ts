import { ElectionStage } from '../types';

export const electionStages: ElectionStage[] = [
  {
    id: 'announcement',
    order: 1,
    phase: 'before',
    title: {
      en: '1. Election Announcement',
      kn: '1. ಚುನಾವಣಾ ಅಧಿಸೂಚನೆ (Announcement)'
    },
    shortDesc: {
      en: 'The election commission issues the formal notification, dates, and enforces the Model Code of Conduct.',
      kn: 'ಚುನಾವಣಾ ಆಯೋಗವು ಅಧಿಕೃತ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಪ್ರಕಟಿಸುತ್ತದೆ ಮತ್ತು ನೀತಿ ಸಂಹಿತೆಯನ್ನು ಜಾರಿಗೊಳಿಸುತ್ತದೆ.'
    },
    whatHappens: {
      en: 'The official election schedule is declared. Dates for nominations, polling, and counting are established. The Model Code of Conduct (MCC) comes into immediate effect to ensure a level playing field between ruling and opposition parties.',
      kn: 'ಅಧಿಕೃತ ಚುನಾವಣಾ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ. ನಾಮಪತ್ರ, ಮತದಾನ ಮತ್ತು ಎಣಿಕೆಯ ದಿನಾಂಕಗಳನ್ನು ನಿಗದಿಪಡಿಸಲಾಗುತ್ತದೆ. ಆಡಳಿತ ಮತ್ತು ವಿರೋಧ ಪಕ್ಷಗಳ ನಡುವೆ ಸಮಾನ ಅವಕಾಶವನ್ನು ಕಾಪಾಡಲು ಮಾದರಿ ನೀತಿ ಸಂಹಿತೆ ಜಾರಿಗೆ ಬರುತ್ತದೆ.'
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
      },
      {
        en: 'Public spaces and grounds must be shared equally among all political contenders.',
        kn: 'ಸಾರ್ವಜನಿಕ ಮೈದಾನಗಳು ಮತ್ತು ಸೌಲಭ್ಯಗಳನ್ನು ಎಲ್ಲಾ ಪಕ್ಷಗಳಿಗೂ ಸಮಾನವಾಗಿ ನೀಡಬೇಕು.'
      }
    ],
    terms: ['Model Code of Conduct', 'Electoral Roll', 'Returning Officer'],
    sources: [
      { title: 'Election Commission Guidelines on Notification & MCC' },
      { title: 'Representation of the People Act, Section 30' }
    ]
  },
  {
    id: 'nomination',
    order: 2,
    phase: 'before',
    title: {
      en: '2. Filing of Nomination',
      kn: '2. ನಾಮಪತ್ರ ಸಲ್ಲಿಕೆ (Nomination)'
    },
    shortDesc: {
      en: 'Candidates submit formal candidacy papers, affidavits disclosing assets/criminal records, and security deposits.',
      kn: 'ಅಭ್ಯರ್ಥಿಗಳು ತಮ್ಮ ನಾಮಪತ್ರ, ಆಸ್ತಿ ಮತ್ತು ಕ್ರಿಮಿನಲ್ ಹಿನ್ನೆಲೆಯ ಅಫಿಡವಿಟ್ ಮತ್ತು ಠೇವಣಿಯನ್ನು ಸಲ್ಲಿಸುತ್ತಾರೆ.'
    },
    whatHappens: {
      en: 'Individuals eligible to contest submit their nomination papers to the Returning Officer (RO) before the published deadline. Candidates submit sworn affidavits (Form 26 in India) disclosing their educational qualifications, assets, liabilities, and any pending criminal cases.',
      kn: 'ಅರ್ಹ ವ್ಯಕ್ತಿಗಳು ನಿಗದಿತ ಗಡುವಿನೊಳಗೆ ಚುನಾವಣಾಧಿಕಾರಿಗೆ (RO) ನಾಮಪತ್ರಗಳನ್ನು ಸಲ್ಲಿಸುತ್ತಾರೆ. ಅಭ್ಯರ್ಥಿಗಳು ತಮ್ಮ ವಿದ್ಯಾರ್ಹತೆ, ಆಸ್ತಿ-ಪಾಸ್ತಿ ಮತ್ತು ಅಪರಾಧ ಹಿನ್ನೆಲೆಯನ್ನು ಒಳಗೊಂಡ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಸಲ್ಲಿಸುವುದು ಕಡ್ಡಾಯವಾಗಿದೆ.'
    },
    whyItMatters: {
      en: 'Ensures radical transparency. Voters have a constitutional right to know the background and financial standing of candidates contesting for public office.',
      kn: 'ಪೂರ್ಣ ಪಾರದರ್ಶಕತೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ. ಸ್ಪರ್ಧಿಸುವ ಅಭ್ಯರ್ಥಿಯ ಹಿನ್ನೆಲೆ ಮತ್ತು ಆರ್ಥಿಕ ಸ್ಥಿತಿಯನ್ನು ತಿಳಿಯುವ ಹಕ್ಕು ಮತದಾರರಿಗಿದೆ.'
    },
    whoIsInvolved: {
      en: 'Contesting candidates, proposers (registered voters from that constituency), and Returning Officer.',
      kn: 'ಸ್ಪರ್ಧಿಸುವ ಅಭ್ಯರ್ಥಿಗಳು, ಸೂಚಕರು (ಆ ಕ್ಷೇತ್ರದ ನೋಂದಾಯಿತ ಮತದಾರರು) ಮತ್ತು ಚುನಾವಣಾಧಿಕಾರಿ.'
    },
    rules: [
      {
        en: 'Every candidate must pay a statutory security deposit (forfeited if they fail to secure 1/6th of total valid votes).',
        kn: 'ಪ್ರತಿಯೊಬ್ಬ ಅಭ್ಯರ್ಥಿಯು ಭದ್ರತಾ ಠೇವಣಿ ಪಾವತಿಸಬೇಕು (ಒಟ್ಟು ಮಾನ್ಯ ಮತಗಳಲ್ಲಿ 1/6 ಕ್ಕಿಂತ ಕಡಿಮೆ ಬಂದರೆ ಮುಟ್ಟುಗೋಲು).'
      },
      {
        en: 'Affidavits are made publicly accessible within 24 hours on official election portals for voter scrutiny.',
        kn: 'ಮತದಾರರ ಪರಿಶೀಲನೆಗಾಗಿ ಅಫಿಡವಿಟ್‌ಗಳನ್ನು 24 ಗಂಟೆಗಳ ಒಳಗೆ ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.'
      }
    ],
    terms: ['Returning Officer', 'Affidavit', 'Security Deposit', 'Proposer'],
    sources: [
      { title: 'Affidavit Transparency Framework (Supreme Court of India Ruling 2002)' }
    ]
  },
  {
    id: 'scrutiny',
    order: 3,
    phase: 'before',
    title: {
      en: '3. Scrutiny & Withdrawal',
      kn: '3. ಪರಿಶೀಲನೆ ಮತ್ತು ಹಿಂಪಡೆಯುವಿಕೆ (Scrutiny)'
    },
    shortDesc: {
      en: 'The Returning Officer inspects all submitted papers. Valid candidates are finalized after the withdrawal window.',
      kn: 'ಚುನಾವಣಾಧಿಕಾರಿಯು ಎಲ್ಲಾ ನಾಮಪತ್ರಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತಾರೆ ಮತ್ತು ಅಂತಿಮ ಪಟ್ಟಿಯನ್ನು ಸಿದ್ಧಪಡಿಸುತ್ತಾರೆ.'
    },
    whatHappens: {
      en: 'The Returning Officer examines each nomination paper in the presence of candidates, their agents, or authorized representatives. Objections are heard, and invalid papers (e.g. under-age, incomplete affidavits, lack of genuine proposers) are rejected. Valid candidates are given a formal window to withdraw candidacy if they choose.',
      kn: 'ಚುನಾವಣಾಧಿಕಾರಿಯು ಅಭ್ಯರ್ಥಿಗಳು ಅಥವಾ ಅವರ ಪ್ರತಿನಿಧಿಗಳ ಸಮ್ಮುಖದಲ್ಲಿ ನಾಮಪತ್ರಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತಾರೆ. ಅಪೂರ್ಣ ಅಥವಾ ಅನರ್ಹ ಪತ್ರಗಳನ್ನು ತಿರಸ್ಕರಿಸಲಾಗುತ್ತದೆ. ಮಾನ್ಯ ಅಭ್ಯರ್ಥಿಗಳಿಗೆ ತಮ್ಮ ಹೆಸರನ್ನು ಹಿಂಪಡೆಯಲು ಕಾಲಾವಕಾಶ ನೀಡಲಾಗುತ್ತದೆ.'
    },
    whyItMatters: {
      en: 'Guarantees that only legally qualified individuals appear on the ballot paper, preventing fraud and ballot crowding.',
      kn: 'ಕೇವಲ ಅರ್ಹ ವ್ಯಕ್ತಿಗಳು ಮಾತ್ರ ಮತಪತ್ರದಲ್ಲಿ ಇರುವುದನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ ಮತ್ತು ಗೊಂದಲಗಳನ್ನು ತಪ್ಪಿಸುತ್ತದೆ.'
    },
    whoIsInvolved: {
      en: 'Returning Officer, contesting candidates, election legal observers.',
      kn: 'ಚುನಾವಣಾಧಿಕಾರಿ, ಅಭ್ಯರ್ಥಿಗಳು ಮತ್ತು ಕಾನೂನು ವೀಕ್ಷಕರು.'
    },
    rules: [
      {
        en: 'Scrutiny cannot be adjourned unless proceedings are interrupted by riot or violence beyond control.',
        kn: 'ಗಲಭೆ ಅಥವಾ ಅನಿವಾರ್ಯ ಕಾರಣಗಳ ಹೊರತು ಪರಿಶೀಲನಾ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಮುಂದೂಡುವಂತಿಲ್ಲ.'
      },
      {
        en: 'Rejection reasons must be recorded in writing by the Returning Officer.',
        kn: 'ನಾಮಪತ್ರ ತಿರಸ್ಕರಿಸಲು ಕಾರಣವನ್ನು ಲಿಖಿತವಾಗಿ ದಾಖಲಿಸಬೇಕು.'
      }
    ],
    terms: ['Scrutiny', 'Withdrawal of Candidature', 'Symbol Allocation'],
    sources: [
      { title: 'Statutory Rules on Scrutiny (ECI Handbooks for Returning Officers)' }
    ]
  },
  {
    id: 'campaign',
    order: 4,
    phase: 'before',
    title: {
      en: '4. Campaign Period & Silence Window',
      kn: '4. ಪ್ರಚಾರ ಅವಧಿ ಮತ್ತು ಮೌನ ಅವಧಿ (Campaign)'
    },
    shortDesc: {
      en: 'Candidates present their manifestos and visions. All campaigning strictly ends 48 hours before polling closes.',
      kn: 'ಅಭ್ಯರ್ಥಿಗಳು ತಮ್ಮ ಪ್ರಣಾಳಿಕೆಯನ್ನು ಪ್ರಸ್ತುತಪಡಿಸುತ್ತಾರೆ. ಮತದಾನ ಮುಕ್ತಾಯಕ್ಕೆ 48 ಗಂಟೆಗಳ ಮುನ್ನ ಪ್ರಚಾರವು ಕೊನೆಗೊಳ್ಳುತ್ತದೆ.'
    },
    whatHappens: {
      en: 'Finalized candidates campaign through public rallies, door-to-door outreach, media, and digital platforms. Exactly 48 hours before the close of poll, the "Silence Period" begins: all public rallies, loudspeaker campaigning, and political advertisements must cease.',
      kn: 'ಅಭ್ಯರ್ಥಿಗಳು ಸಾರ್ವಜನಿಕ ಸಭೆಗಳು, ಮನೆ-ಮನೆ ಪ್ರಚಾರ ಮತ್ತು ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮಗಳ ಮೂಲಕ ಪ್ರಚಾರ ಮಾಡುತ್ತಾರೆ. ಮತದಾನ ಮುಕ್ತಾಯಗೊಳ್ಳುವ 48 ಗಂಟೆಗಳ ಮೊದಲು "ಮೌನ ಅವಧಿ" ಪ್ರಾರಂಭವಾಗುತ್ತದೆ, ಯಾವುದೇ ಪ್ರಚಾರಕ್ಕೆ ಅವಕಾಶವಿರುವುದಿಲ್ಲ.'
    },
    whyItMatters: {
      en: 'The 48-hour silence period provides voters with peace and mental clarity to reflect on choices without continuous persuasion or noise.',
      kn: '48 ಗಂಟೆಗಳ ಮೌನ ಅವಧಿಯು ಮತದಾರರಿಗೆ ಯಾವುದೇ ಪ್ರಭಾವವಿಲ್ಲದೆ ಶಾಂತವಾಗಿ ಯೋಚಿಸಿ ತೀರ್ಮಾನ ತೆಗೆದುಕೊಳ್ಳಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ.'
    },
    whoIsInvolved: {
      en: 'Voters, political parties, media, expenditure observers.',
      kn: 'ಮತದಾರರು, ರಾಜಕೀಯ ಪಕ್ಷಗಳು, ಮಾಧ್ಯಮಗಳು ಮತ್ತು ವೆಚ್ಚ ವೀಕ್ಷಕರು.'
    },
    rules: [
      {
        en: 'Strict limits on campaign expenditures per candidate are tracked by independent observers.',
        kn: 'ಪ್ರಚಾರದ ವೆಚ್ಚಕ್ಕೆ ನಿಗದಿತ ಮಿತಿ ಇರುತ್ತದೆ ಮತ್ತು ವೀಕ್ಷಕರು ಇದನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುತ್ತಾರೆ.'
      },
      {
        en: 'No appeals to voters on communal, religious, or caste grounds are legally permitted.',
        kn: 'ಧರ್ಮ, ಜಾತಿ ಅಥವಾ ಕೋಮು ಆಧಾರದ ಮೇಲೆ ಮತ ಕೇಳುವುದನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ.'
      }
    ],
    terms: ['Silence Period', 'Manifesto', 'Expenditure Observer'],
    sources: [
      { title: 'Section 126 of the Representation of the People Act, 1951' }
    ]
  },
  {
    id: 'polling',
    order: 5,
    phase: 'during',
    title: {
      en: '5. Polling Day: Casting the Vote',
      kn: '5. ಮತದಾನದ ದಿನ: ಮತ ಚಲಾವಣೆ (Polling Day)'
    },
    shortDesc: {
      en: 'Voters cast their confidential ballots at assigned polling stations following strict identity checks.',
      kn: 'ಮತದಾರರು ಗುರುತಿನ ಚೀಟಿ ಪರಿಶೀಲನೆಯ ನಂತರ ತಮ್ಮ ಮತಗಟ್ಟೆಯಲ್ಲಿ ರಹಸ್ಯವಾಗಿ ಮತ ಚಲಾಯಿಸುತ್ತಾರೆ.'
    },
    whatHappens: {
      en: 'Before voting begins, a mandatory Mock Poll is conducted in front of party polling agents to verify EVMs/ballots. At the booth: 1) First polling officer checks the voter list and ID card, 2) Second polling officer applies indelible ink on the left index finger and gets the signature, 3) Third polling officer activates the voting compartment. The voter presses their choice in complete privacy.',
      kn: 'ಮತದಾನ ಆರಂಭಕ್ಕೂ ಮುನ್ನ ಪಕ್ಷದ ಪ್ರತಿನಿಧಿಗಳ ಸಮ್ಮುಖದಲ್ಲಿ ಅಣಕು ಮತದಾನ (Mock Poll) ನಡೆಸಿ ಯಂತ್ರವನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ. ಮತಗಟ್ಟೆಯಲ್ಲಿ: 1) ಮತದಾರರ ಪಟ್ಟಿ ಮತ್ತು ಗುರುತು ಪರಿಶೀಲನೆ, 2) ಎಡತೋರು ಬೆರಳಿಗೆ ಅಳಿಸಲಾಗದ ಶಾಯಿ ಹಾಕುವುದು, 3) ಮತದಾನ ಕೊಠಡಿಯಲ್ಲಿ ರಹಸ್ಯವಾಗಿ ತಮ್ಮ ಆಯ್ಕೆಯ ಗುಂಡಿಯನ್ನು ಒತ್ತುವುದು.'
    },
    whyItMatters: {
      en: 'Heart of the democratic exercise. Universal adult suffrage guarantees every eligible citizen has exactly one equal vote.',
      kn: 'ಪ್ರಜಾಪ್ರಭುತ್ವದ ಮೂಲ ಅಡಿಪಾಯ. ಪ್ರತಿಯೊಬ್ಬ ನಾಗರಿಕನಿಗೂ ಸಮಾನವಾದ ಒಂದು ಮತದ ಹಕ್ಕಿದೆ.'
    },
    whoIsInvolved: {
      en: 'Presiding Officer, Polling Officers 1, 2 & 3, Polling Agents of candidates, and Voters.',
      kn: 'ಮತಗಟ್ಟೆ ಅಧಿಕಾರಿಗಳು, ಅಭ್ಯರ್ಥಿಗಳ ಪ್ರತಿನಿಧಿಗಳು ಮತ್ತು ಮತದಾರರು.'
    },
    rules: [
      {
        en: 'Photography, mobile phones, or carrying weapons inside the voting compartment is strictly prohibited.',
        kn: 'ಮತದಾನ ಕೊಠಡಿಯೊಳಗೆ ಮೊಬೈಲ್ ಫೋನ್, ಛಾಯಾಗ್ರಹಣ ಅಥವಾ ಶಸ್ತ್ರಾಸ್ತ್ರಗಳನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ.'
      },
      {
        en: 'Anyone in the queue at the official closing hour MUST be allowed to cast their vote.',
        kn: 'ಮತದಾನ ಮುಕ್ತಾಯದ ಸಮಯಕ್ಕೆ ಸರದಿಯಲ್ಲಿ ನಿಂತಿರುವ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಮತ ಚಲಾಯಿಸಲು ಅವಕಾಶ ನೀಡಲೇಬೇಕು.'
      },
      {
        en: 'VVPAT slip displays the chosen candidate symbol for 7 seconds to assure voter auditability.',
        kn: 'VVPAT ಸ್ಲಿಪ್ 7 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಗೋಚರಿಸಿ ಮತದಾರರಿಗೆ ತಮ್ಮ ಮತ ಸರಿಯಾಗಿ ಬಿದ್ದಿದೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ.'
      }
    ],
    terms: ['Indelible Ink', 'EVM & VVPAT', 'Presiding Officer', 'Secrecy of Vote'],
    sources: [
      { title: 'Handbook for Presiding Officers, ECI' }
    ]
  },
  {
    id: 'counting',
    order: 6,
    phase: 'after',
    title: {
      en: '6. Vote Counting & Verification',
      kn: '6. ಮತ ಎಣಿಕೆ ಮತ್ತು ಪರಿಶೀಲನೆ (Counting)'
    },
    shortDesc: {
      en: 'Seals of EVMs and postal ballots are verified in front of counting agents, followed by round-wise tabulation.',
      kn: 'ಮತಯಂತ್ರಗಳ ಸೀಲ್ ಪರಿಶೀಲಿಸಿ, ಪಕ್ಷದ ಪ್ರತಿನಿಧಿಗಳ ಸಮ್ಮುಖದಲ್ಲಿ ಸುತ್ತುಗಳ ಪ್ರಕಾರ ಮತಗಳನ್ನು ಎಣಿಸಲಾಗುತ್ತದೆ.'
    },
    whatHappens: {
      en: 'On counting day, the strongroom is opened in the presence of observers and candidate agents. Postal ballots are counted first. EVMs are brought out table by table. Unique seal numbers are matched. Results of each machine are announced round-by-round and entered into the public tabulation sheet. Mandatory VVPAT paper slip matching is done for randomly sampled booths.',
      kn: 'ಎಣಿಕೆಯ ದಿನದಂದು ಭದ್ರತಾ ಕೊಠಡಿಯನ್ನು ವೀಕ್ಷಕರ ಸಮ್ಮುಖದಲ್ಲಿ ತೆರೆಯಲಾಗುತ್ತದೆ. ಮೊದಲು ಅಂಚೆ ಮತಗಳನ್ನು ಎಣಿಸಲಾಗುತ್ತದೆ. ನಂತರ ಮತಯಂತ್ರಗಳ ಸೀಲ್ ಸಂಖ್ಯೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಸುತ್ತುಗಳ ಪ್ರಕಾರ ಎಣಿಕೆ ಮಾಡಿ ಸಾರ್ವಜನಿಕವಾಗಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.'
    },
    whyItMatters: {
      en: 'Establishes incontrovertible public trust and auditability in the final will of the electorate.',
      kn: 'ಮತದಾರರ ತೀರ್ಪಿನ ಮೇಲೆ ಸಂಪೂರ್ಣ ಸಾರ್ವಜನಿಕ ವಿಶ್ವಾಸ ಮತ್ತು ಪಾರದರ್ಶಕತೆಯನ್ನು ಇದು ಮೂಡಿಸುತ್ತದೆ.'
    },
    whoIsInvolved: {
      en: 'Returning Officer, Counting Supervisors, Counting Assistants, Micro-observers, Candidate Counting Agents.',
      kn: 'ಚುನಾವಣಾಧಿಕಾರಿ, ಎಣಿಕೆ ಮೇಲ್ವಿಚಾರಕರು, ಸೂಕ್ಷ್ಮ ವೀಕ್ಷಕರು ಮತ್ತು ಅಭ್ಯರ್ಥಿಗಳ ಎಣಿಕೆ ಪ್ರತಿನಿಧಿಗಳು.'
    },
    rules: [
      {
        en: 'If a machine seal is broken or numbers mismatch, that control unit is quarantined and VVPAT slips are audited.',
        kn: 'ಯಂತ್ರದ ಸೀಲ್ ವ್ಯತ್ಯಾಸ ಕಂಡುಬಂದರೆ, ಅದನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ VVPAT ಚೀಟಿಗಳನ್ನು ಎಣಿಸಲಾಗುತ್ತದೆ.'
      },
      {
        en: 'Round-wise results are signed by candidate agents and uploaded to the centralized election portal.',
        kn: 'ಪ್ರತಿ ಸುತ್ತಿನ ಫಲಿತಾಂಶಕ್ಕೆ ಏಜೆಂಟರ ಸಹಿ ಪಡೆದು ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ನಮೂದಿಸಲಾಗುತ್ತದೆ.'
      }
    ],
    terms: ['Strongroom', 'Control Unit', 'Counting Agent', 'Tabulation Sheet'],
    sources: [
      { title: 'Guidelines for Counting of Votes (ECI Counting Protocol)' }
    ]
  },
  {
    id: 'results',
    order: 7,
    phase: 'after',
    title: {
      en: '7. Declaration of Results',
      kn: '7. ಫಲಿತಾಂಶ ಘೋಷಣೆ (Declaration)'
    },
    shortDesc: {
      en: 'The Returning Officer formally declares the winner and awards the Certificate of Election.',
      kn: 'ಚುನಾವಣಾಧಿಕಾರಿಯು ವಿಜೇತರನ್ನು ಅಧಿಕೃತವಾಗಿ ಘೋಷಿಸುತ್ತಾರೆ ಮತ್ತು ಪ್ರಮಾಣಪತ್ರವನ್ನು ನೀಡುತ್ತಾರೆ.'
    },
    whatHappens: {
      en: 'After all rounds and mandatory audits are certified, the Returning Officer signs Form 21C (Declaration of Result). The winning candidate receives Form 22 (Certificate of Election). If the victory margin is razor-thin, candidates may apply for a re-count under prescribed statutory conditions.',
      kn: 'ಎಲ್ಲಾ ಸುತ್ತುಗಳು ಮತ್ತು ಲೆಕ್ಕ ಪರಿಶೋಧನೆಗಳು ಮುಗಿದ ನಂತರ, ಚುನಾವಣಾಧಿಕಾರಿಯು ಫಲಿತಾಂಶವನ್ನು ಅಧಿಕೃತವಾಗಿ ಘೋಷಿಸಿ, ವಿಜೇತ ಅಭ್ಯರ್ಥಿಗೆ ಪ್ರಮಾಣಪತ್ರವನ್ನು (Form 22) ನೀಡುತ್ತಾರೆ.'
    },
    whyItMatters: {
      en: 'Completes the constitutional transfer of sovereign power from the people to their democratically elected representatives.',
      kn: 'ಪ್ರಜಾಪ್ರಭುತ್ವದಲ್ಲಿ ಅಧಿಕಾರವನ್ನು ಸಂವಿಧಾನಾತ್ಮಕವಾಗಿ ಜನರಿಂದ ಚುನಾಯಿತ ಪ್ರತಿನಿಧಿಗಳಿಗೆ ಹಸ್ತಾಂತರಿಸುವ ಅಂತಿಮ ಘಟ್ಟ.'
    },
    whoIsInvolved: {
      en: 'Returning Officer, Observer, Winning Candidate, General Public.',
      kn: 'ಚುನಾವಣಾಧಿಕಾರಿ, ಚುನಾವಣಾ ವೀಕ್ಷಕರು, ವಿಜೇತ ಅಭ್ಯರ್ಥಿ ಮತ್ತು ಸಾರ್ವಜನಿಕರು.'
    },
    rules: [
      {
        en: 'Results can only be challenged post-declaration through a formal Election Petition in the High Court.',
        kn: 'ಫಲಿತಾಂಶ ಘೋಷಣೆಯಾದ ನಂತರ ಯಾವುದೇ ಆಕ್ಷೇಪಣೆಯನ್ನು ಹೈಕೋರ್ಟ್‌ನಲ್ಲಿ ಚುನಾವಣಾ ಅರ್ಜಿಯ ಮೂಲಕ ಮಾತ್ರ ಪ್ರಶ್ನಿಸಬಹುದು.'
      },
      {
        en: 'The list of newly elected members is submitted to the constitutional head (President/Governor) to form the legislature.',
        kn: 'ಶಾಸನಸಭೆ ರಚನೆಗೆ ಹೊಸದಾಗಿ ಆಯ್ಕೆಯಾದ ಸದಸ್ಯರ ಪಟ್ಟಿಯನ್ನು ರಾಜ್ಯಪಾಲರಿಗೆ/ರಾಷ್ಟ್ರಪತಿಗಳಿಗೆ ಸಲ್ಲಿಸಲಾಗುತ್ತದೆ.'
      }
    ],
    terms: ['Certificate of Election', 'Election Petition', 'Form 21C'],
    sources: [
      { title: 'Conduct of Elections Rules, 1961 (Rule 64 & 66)' }
    ]
  }
];
