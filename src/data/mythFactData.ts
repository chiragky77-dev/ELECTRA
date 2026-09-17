import { MythFactItem } from '../types';

export const mythFactData: MythFactItem[] = [
  {
    id: 'mf1',
    category: 'Voter ID',
    statement: {
      en: 'If I lost or forgot my physical Voter ID (EPIC) card, I cannot vote on election day.',
      kn: 'ನನ್ನ ವೋಟರ್ ಐಡಿ (EPIC) ಕಾರ್ಡ್ ಕಳೆದುಹೋಗಿದ್ದರೆ ಅಥವಾ ಮರೆತಿದ್ದರೆ ನಾನು ಮತ ಚಲಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.'
    },
    isFact: false,
    verdict: {
      en: 'DEBUNKED MYTH',
      kn: 'ಸುಳ್ಳು ಕಲ್ಪನೆ (ಮಿಥ್ಯ)'
    },
    explanation: {
      en: 'If your name is registered on the official Electoral Roll of your polling station, you can vote using any of the 12+ approved government identity proofs such as Aadhaar Card, Passport, Driving License, PAN Card, or Bank Passbook with photograph.',
      kn: 'ಮತದಾರರ ಪಟ್ಟಿಯಲ್ಲಿ ನಿಮ್ಮ ಹೆಸರು ಇದ್ದರೆ ಸಾಕು; ವೋಟರ್ ಐಡಿ ಇಲ್ಲದಿದ್ದರೂ ಆಧಾರ್ ಕಾರ್ಡ್, ಪಾಸ್‌ಪೋರ್ಟ್, ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್ ಅಥವಾ ಪ್ಯಾನ್ ಕಾರ್ಡ್ ತೋರಿಸಿ ಮತ ಚಲಾಯಿಸಬಹುದು.'
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
    verdict: {
      en: 'DEBUNKED MYTH',
      kn: 'ಸುಳ್ಳು ಕಲ್ಪನೆ (ಮಿಥ್ಯ)'
    },
    explanation: {
      en: 'EVMs are completely standalone computing devices. They contain no internet chips, no radio frequency modules, no Bluetooth, and no wireless receivers. Code is burnt permanently on One-Time Programmable (OTP) microcontrollers at the foundry.',
      kn: 'ಇವಿಎಂಗಳು ಸಂಪೂರ್ಣವಾಗಿ ನೆಟ್‌ವರ್ಕ್ ರಹಿತ ಸ್ವತಂತ್ರ ಯಂತ್ರಗಳಾಗಿವೆ. ಅವುಗಳಲ್ಲಿ ಯಾವುದೇ ಇಂಟರ್ನೆಟ್, ಬ್ಲೂಟೂತ್ ಅಥವಾ ರೇಡಿಯೋ ತರಂಗಗಳ ರಿಸೀವರ್ ಇರುವುದಿಲ್ಲ.'
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
    verdict: {
      en: 'DEBUNKED MYTH',
      kn: 'ಸುಳ್ಳು ಕಲ್ಪನೆ (ಮಿಥ್ಯ)'
    },
    explanation: {
      en: 'Under the first-past-the-post system in general assembly/parliamentary elections, the candidate securing the highest number of valid candidate votes is declared winner, regardless of the NOTA total. However, NOTA serves as official, permanent data on voter dissatisfaction.',
      kn: 'ಸಾಮಾನ್ಯ ಚುನಾವಣೆಗಳಲ್ಲಿ ನೋಟಾ ಅತಿ ಹೆಚ್ಚು ಮತ ಪಡೆದರೂ, ಸ್ಪರ್ಧಿಸಿದ ಅಭ್ಯರ್ಥಿಗಳಲ್ಲಿ ಯಾರು ಹೆಚ್ಚು ಮತ ಪಡೆದಿರುತ್ತಾರೋ ಅವರೇ ವಿಜೇತರಾಗುತ್ತಾರೆ. ಆದರೂ ನೋಟಾ ಅಸಮಾಧಾನದ ಅಧಿಕೃತ ದಾಖಲೆಯಾಗಿರುತ್ತದೆ.'
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
    verdict: {
      en: 'VERIFIED FACT',
      kn: 'ದೃಢೀಕೃತ ಸತ್ಯ'
    },
    explanation: {
      en: 'At the exact closing time (e.g. 6:00 PM), the Presiding Officer signs slips and distributes them to every person in line starting from the last person forward. Polling continues until the last slip holder casts their vote.',
      kn: 'ಮುಕ್ತಾಯದ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಸರದಿಯಲ್ಲಿರುವ ಕೊನೆಯ ವ್ಯಕ್ತಿಯಿಂದ ಪ್ರಾರಂಭಿಸಿ ಅಧಿಕಾರಿಗಳು ಚೀಟಿ ನೀಡುತ್ತಾರೆ. ಆ ಸರದಿಯಲ್ಲಿರುವ ಪ್ರತಿಯೊಬ್ಬರೂ ಮತ ಚಲಾಯಿಸುವವರೆಗೆ ಮತಗಟ್ಟೆ ತೆರೆದಿರುತ್ತದೆ.'
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
    verdict: {
      en: 'DEBUNKED MYTH',
      kn: 'ಸುಳ್ಳು ಕಲ್ಪನೆ (ಮಿಥ್ಯ)'
    },
    explanation: {
      en: 'Electoral registration must be completed in advance (via Form 6 or online voter portals). The voter roll is finalized ahead of the nomination deadline so candidate agents and booths have verified lists. On-the-spot registration on polling day is not permitted.',
      kn: 'ಮತದಾರರ ಪಟ್ಟಿಗೆ ಮುಂಚಿತವಾಗಿಯೇ (Form 6 ಮೂಲಕ) ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು. ಮತದಾನದ ದಿನ ಸ್ಥಳದಲ್ಲೇ ನೋಂದಣಿ ಮಾಡಲು ಅವಕಾಶವಿಲ್ಲ.'
    },
    source: 'Registration of Electors Rules, 1960'
  }
];
