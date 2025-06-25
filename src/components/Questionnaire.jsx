import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "What type of clinic is this?",
    options: ["Dental", "Veterinary", "General Practice"],
  },
  {
    id: 2,
    question: "What is the size of your facility?",
    options: ["Small", "Medium", "Large"],
  },
  {
    id: 3,
    question: "What kind of supplies do you need?",
    options: ["Office Supplies", "Cleaning Supplies", "Both"],
  },
];

export default function Questionnaire() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [questions[step].id]: answer });
    setStep(step + 1);
  };

  if (step >= questions.length) {
    return (
      <div>
        <h2>Recommended Supplies</h2>
        <p>Based on your answers:</p>
        <ul>
          {Object.entries(answers).map(([id, answer]) => (
            <li key={id}>
              <strong>Q{id}:</strong> {answer}
            </li>
          ))}
        </ul>
        <p>We’ll show product recommendations here in the future.</p>
      </div>
    );
  }

  const current = questions[step];

  return (
    <div>
      <h2>{current.question}</h2>
      {current.options.map((opt) => (
        <button
          key={opt}
          onClick={() => handleAnswer(opt)}
          style={{
            margin: '0.5rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
