import { useMemo, useState } from "react";
import QuestionCard from "./QuestionCard.jsx";

export default function Quiz({ questions, onFinish }) {
  const total = questions.length;

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const [score, setScore] = useState(0);
  const [wrongs, setWrongs] = useState([]);

  const current = questions[step];
  const isLast = step + 1 >= total;

  const isCorrect = useMemo(() => {
    if (!current || selected == null) return false;
    return selected === current.answerIndex;
  }, [current, selected]);

  const progressPercent = total > 0 ? Math.round(((step + 1) / total) * 100) : 0;
  const accuracyPercent = total > 0 ? Math.round((score / total) * 100) : 0;

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelected(idx);
  };

  const handleConfirm = () => {
    if (selected == null || isAnswered) return;

    setIsAnswered(true);

    if (selected === current.answerIndex) {
      setScore((s) => s + 1);
      return;
    }

    const pickedText = current.choices[selected];
    const answerText = current.choices[current.answerIndex];

    setWrongs((prev) => [
      ...prev,
      {
        id: current.id ?? `${step}`,
        question: current.question,
        picked: pickedText,
        answer: answerText,
        explanation: current.explanation,
        // 復習用に必要
        choices: current.choices,
        answerIndex: current.answerIndex,
      },
    ]);
  };

  const handleNext = () => {
    const next = step + 1;
    if (next >= total) {
      onFinish({ score, wrongs });
      return;
    }
    setStep(next);
    setSelected(null);
    setIsAnswered(false);
  };

  const handlePrimaryAction = () => {
    if (!isAnswered) handleConfirm();
    else handleNext();
  };

  return (
    <div className="mx-auto w-full max-w-300">
      {/* 2本バー */}
      <div className="mb-4 grid gap-3">
        {/* 進捗 */}
        <div>
          <div className="mb-1 flex items-center justify-between text-xs font-bold text-sky-900/70">
            <span>
              PROGRESS：<span className="text-sky-950">{step + 1}</span> / {total}
            </span>
            <span>{progressPercent}%</span>
          </div>

          <div className="h-3 w-full overflow-hidden rounded-full border border-sky-200 bg-sky-50">
            <div
              className="h-full rounded-full bg-sky-500/70 transition-[width] duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 正解率 */}
        <div>
          <div className="mb-1 flex items-center justify-between text-xs font-bold text-sky-900/70">
            <span>
              ACCURACY：<span className="text-sky-950">{score}</span> / {total}
            </span>
            <span>{accuracyPercent}%</span>
          </div>

          <div className="h-3 w-full overflow-hidden rounded-full border border-sky-200 bg-sky-50">
            <div
              className="h-full rounded-full bg-sky-600/70 transition-[width] duration-300"
              style={{ width: `${accuracyPercent}%` }}
            />
          </div>
        </div>
      </div>

      <QuestionCard
        question={current}
        index={step}
        total={total}
        selected={selected}
        isAnswered={isAnswered}
        onSelect={handleSelect}
        onPrimaryAction={handlePrimaryAction}
        isCorrect={isCorrect}
        isLast={isLast}
      />

      <div className="mt-3 text-center text-sm font-bold text-sky-900/70">
        Wrong：<span className="text-sky-950">{wrongs.length}</span>
      </div>
    </div>
  );
}