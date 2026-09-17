import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { quizQuestions } from '../../data/quizData';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { ProgressBar } from '../common/ProgressBar';
import { AwardIcon, CheckIcon, RefreshIcon, ChevronRightIcon } from '../common/Icons';

export const QuizView: React.FC = () => {
  const { language, t, recordQuizScore, setCurrentView } = useApp();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;
  const isAnswered = selectedAnswers[currentIndex] !== undefined;

  const handleSelectOption = (optIndex: number) => {
    if (isAnswered) return; // lock selection for immediate review
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: optIndex
    });
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calculate score and finish
      let score = 0;
      quizQuestions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correctIndex) {
          score++;
        }
      });
      recordQuizScore(score, totalQuestions);
      setIsFinished(true);
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
  };

  // Score calculations
  const calculateFinalScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const finalScore = calculateFinalScore();
  const percentage = Math.round((finalScore / totalQuestions) * 100);

  return (
    <div className="fade-in container" style={{ padding: '40px 0 64px', maxWidth: '800px' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <Badge variant="accent" icon={<AwardIcon size={14} />} style={{ marginBottom: '12px' }}>
          Certified Civic Knowledge
        </Badge>
        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '10px' }}>
          {t.quiz.title}
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
          {t.quiz.subtitle}
        </p>
      </div>

      {!isFinished ? (
        <Card style={{ padding: '36px' }}>
          {/* Progress Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
              {t.quiz.questionOf} {currentIndex + 1} of {totalQuestions}
            </span>
            <Badge variant="default">
              Topic: {currentQ.topicTag}
            </Badge>
          </div>

          <div style={{ marginBottom: '28px' }}>
            <ProgressBar value={((currentIndex + 1) / totalQuestions) * 100} height={6} />
          </div>

          {/* Question Text */}
          <h2 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.45, marginBottom: '24px' }}>
            {currentQ.question[language] || currentQ.question.en}
          </h2>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
            {currentQ.options[language]?.map((optionText, optIdx) => {
              const isSelected = selectedAnswers[currentIndex] === optIdx;
              const isCorrect = currentQ.correctIndex === optIdx;
              const showValidation = isAnswered;

              let borderColor = 'var(--border-subtle)';
              let bgColor = 'var(--bg-card)';
              let textColor = 'var(--text-primary)';

              if (showValidation) {
                if (isCorrect) {
                  borderColor = 'var(--success)';
                  bgColor = 'var(--success-subtle)';
                } else if (isSelected) {
                  borderColor = 'var(--danger)';
                  bgColor = 'var(--danger-subtle)';
                }
              } else if (isSelected) {
                borderColor = 'var(--accent-primary)';
                bgColor = 'var(--accent-subtle)';
              }

              return (
                <div
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px 18px',
                    borderRadius: 'var(--radius-md)',
                    border: `1.5px solid ${borderColor}`,
                    backgroundColor: bgColor,
                    cursor: isAnswered ? 'default' : 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: `1.5px solid ${borderColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: textColor,
                      flexShrink: 0
                    }}
                  >
                    {String.fromCharCode(65 + optIdx)}
                  </div>
                  <span style={{ fontSize: '14.5px', color: textColor, lineHeight: 1.5 }}>
                    {optionText}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Explanation Box on Answer */}
          {isAnswered && (
            <div
              style={{
                padding: '18px 20px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '28px',
                animation: 'fadeIn 200ms ease-out'
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-text)', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
                Civic Context & Explanation
              </span>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                {currentQ.explanation[language] || currentQ.explanation.en}
              </p>
            </div>
          )}

          {/* Next Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="primary"
              size="md"
              disabled={!isAnswered}
              onClick={handleNext}
              icon={<ChevronRightIcon size={16} color="#FFFFFF" />}
            >
              {currentIndex === totalQuestions - 1 ? t.quiz.seeResultsBtn : t.quiz.nextBtn}
            </Button>
          </div>
        </Card>
      ) : (
        /* Results View */
        <Card style={{ padding: '36px', textAlign: 'center' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: percentage >= 70 ? 'var(--success-subtle)' : 'var(--warm-subtle)',
              color: percentage >= 70 ? 'var(--success)' : 'var(--warm-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}
          >
            <AwardIcon size={36} />
          </div>

          <Badge variant="accent" style={{ marginBottom: '12px' }}>
            {t.quiz.certifiedBadge}
          </Badge>

          <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>
            {t.quiz.scoreTitle}: {finalScore} / {totalQuestions} ({percentage}%)
          </h2>

          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            {percentage === 100
              ? t.quiz.perfectScore
              : percentage >= 70
              ? t.quiz.goodScore
              : t.quiz.practiceScore}
          </p>

          {/* Detailed Question Review List */}
          <div style={{ textAlign: 'left', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' }}>
              {t.quiz.reviewLabel}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {quizQuestions.map((q, idx) => {
                const userChoice = selectedAnswers[idx];
                const isCorrect = userChoice === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    style={{
                      padding: '16px',
                      backgroundColor: 'var(--bg-secondary)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)' }}>
                        Question {idx + 1}
                      </span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: isCorrect ? 'var(--success)' : 'var(--danger)' }}>
                        {isCorrect ? '✓ Correct' : '✕ Incorrect'}
                      </span>
                    </div>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {q.question[language] || q.question.en}
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      <strong>Key Fact:</strong> {q.explanation[language] || q.explanation.en}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary" size="md" onClick={handleRetake} icon={<RefreshIcon size={16} />}>
              {t.quiz.retakeBtn}
            </Button>
            <Button variant="secondary" size="md" onClick={() => setCurrentView('journey')}>
              Explore Election Stages
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
