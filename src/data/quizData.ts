import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
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
      kn: 'ಚುನಾವಣಾ ನಿಯಮಗಳ ಪ್ರಕಾರ, ನಿಗದಿತ ಸಮಯಕ್ಕೆ ಸರದಿಯ ಕೊನೆಯಿಂದ ಸಂಖ್ಯೆಯುಳ್ಳ ಚೀಟಿಗಳನ್ನು ನೀಡಲಾಗುತ್ತದೆ. ಸರದಿಯಲ್ಲಿ ನಿಂತಿರುವ ಎಲ್ಲರಿಗೂ ಮತದಾನ ಮಾಡಲು ಕಾನೂನುಬದ್ಧ ಹಕ್ಕಿದೆ.'
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
        '10 ಕ್ಕಿಂತ ಹೆಚ್ಚು ಜನರು ಇದನ್ನು ಆರಿಸಿದರೆ ಚುನಾವಣೆಯನ್ನು ತಾನಾಗಿಯೇ ರದ್ದುಗೊಳಿಸುತ್ತದೆ.',
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
      en: 'If voters could show proof of how they voted, criminal entities or corrupt networks could coerce or buy votes. Secrecy protects you because nobody can ever prove who you voted for.',
      kn: 'ಮತ ಹಾಕಿದ ಪುರಾವೆಯನ್ನು ತೋರಿಸಲು ಸಾಧ್ಯವಾದರೆ, ಆಮಿಷ ಅಥವಾ ಬೆದರಿಕೆಯ ಮೂಲಕ ಮತ ಕದಿಯುವ ಅಪಾಯವಿರುತ್ತದೆ. ಗೌಪ್ಯತೆಯು ಮತದಾರರನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ರಕ್ಷಿಸುತ್ತದೆ.'
    }
  }
];
