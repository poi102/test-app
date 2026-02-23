export default function QuestionCard({
  question,
  index,
  total,
  selected,
  isAnswered,
  onSelect,
  onPrimaryAction,
  isCorrect,
  isLast,
}) {
  const primaryLabel = !isAnswered
    ? "答えを確認する＞"
    : isLast
    ? "結果を見る＞"
    : "次へ＞";

  const primaryDisabled = !isAnswered ? selected == null : false;

  return (
    <div className="w-full overflow-hidden rounded-3xl border-4 border-sky-200 bg-white shadow-xl">
      <div className="bg-linear-to-b from-sky-50 via-cyan-50 to-sky-100 py-8">
        <div className="mx-auto w-[calc(100%-50px)] max-w-275">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-sky-100 px-4 py-1 text-base font-extrabold text-sky-700">
              問題 {index + 1} / {total}
            </span>
          </div>

          <div className="rounded-2xl border-2 border-sky-200 bg-white px-6 py-6 text-center shadow-sm">
            <div className="text-2xl font-extrabold text-slate-800 leading-relaxed">
              {question.question}
            </div>
            <div className="mt-2 text-sm font-bold text-slate-500">次の中から選んでね！</div>
          </div>

          <div className="mt-6 space-y-4">
            {question.choices.map((choice, idx) => {
              const picked = selected === idx;
              const correct = isAnswered && idx === question.answerIndex;
              const wrong = isAnswered && picked && idx !== question.answerIndex;

              const base =
                "w-full rounded-full px-6 py-4 text-left text-xl font-semibold transition border-2 shadow-sm";

              let style = "bg-sky-100 border-sky-200 text-slate-800 hover:bg-sky-200";
              if (picked) style = "bg-sky-500 border-sky-600 text-white";
              if (correct) style = "bg-emerald-500 border-emerald-600 text-white";
              if (wrong) style = "bg-rose-500 border-rose-600 text-white";

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => onSelect(idx)}
                  className={`${base} ${style} disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          <div className="mt-6 min-h-17.5 rounded-2xl border border-sky-200 bg-white/80 p-4 text-center">
            {isAnswered ? (
              <>
                <div className="text-xl font-extrabold text-slate-800">
                  {isCorrect ? "✅ 正解！" : "❌ 不正解"}
                </div>
                <div className="mt-2 text-lg text-slate-600">{question.explanation}</div>
              </>
            ) : (
              <div className="text-lg font-bold text-slate-500">選択してください</div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-sky-200/80 py-4">
        <button
          onClick={onPrimaryAction}
          disabled={primaryDisabled}
          className="
            mx-auto block w-[calc(100%-50px)] max-w-275
            rounded-full bg-white py-3
            text-xl font-extrabold text-sky-700 shadow
            hover:bg-sky-50
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {primaryLabel}
        </button>
      </div>
    </div>
  );
}