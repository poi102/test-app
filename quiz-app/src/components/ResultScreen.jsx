export default function ResultScreen({
  title = "RESULT",
  badge = "結果",
  score,
  total,
  wrongs,
  onRestart,
  onReview,
  reviewLabel = "間違えた問題だけ復習＞",
}) {
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <div className="w-full overflow-hidden rounded-3xl border-4 border-sky-200 bg-white shadow-xl">
      {/* HEADER */}
      <div className="bg-linear-to-r from-sky-400 via-cyan-400 to-sky-500 px-6 py-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-[0.2em] text-white drop-shadow">
          {title}
        </h1>
      </div>

      {/* BODY */}
      <div className="bg-linear-to-b from-sky-50 via-cyan-50 to-sky-100 py-10">
        <div className="mx-auto w-[calc(100%-50px)] max-w-250">
          <div className="relative rounded-2xl border-2 border-sky-200 bg-white px-6 py-8 text-center shadow-sm">
            <span className="absolute -top-3 left-4 rounded-full bg-sky-400 px-3 py-1 text-xs font-bold text-white">
              {badge}
            </span>

            <div className="text-xl font-extrabold text-slate-800">おつかれさま！</div>

            <div className="mt-3 text-sm font-bold text-slate-700">
              スコア：<span className="text-slate-900">{score}</span> / {total}
            </div>

            <div className="mt-1 text-sm font-bold text-slate-700">
              正答率：<span className="text-slate-900">{percent}%</span>
            </div>

            <div className="mt-5">
              <div className="h-3 w-full overflow-hidden rounded-full border border-sky-200 bg-sky-50">
                <div
                  className="h-full rounded-full bg-sky-500/70 transition-[width] duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <div className="mt-2 text-xs font-bold text-slate-500">
                {percent >= 80 ? "すごい！" : percent >= 50 ? "いい感じ！" : "次はもっといける！"}
              </div>
            </div>
          </div>

          {/* 間違えた問題一覧 */}
          <div className="mt-6">
            <div className="mb-3 text-sm font-extrabold text-slate-800">
              間違えた問題（{wrongs?.length ?? 0}）
            </div>

            {(!wrongs || wrongs.length === 0) ? (
              <div className="rounded-2xl border border-sky-200 bg-white p-4 text-sm font-bold text-slate-700">
                全問正解！🎉
              </div>
            ) : (
              <div className="space-y-3">
                {wrongs.map((w, i) => (
                  <div key={w.id ?? i} className="rounded-2xl border border-sky-200 bg-white p-4">
                    <div className="text-sm font-extrabold text-slate-800">
                      {i + 1}. {w.question}
                    </div>

                    <div className="mt-3 grid gap-1 text-sm">
                      <div className="font-bold text-rose-600">
                        あなたの回答：<span className="text-slate-800">{w.picked}</span>
                      </div>
                      <div className="font-bold text-emerald-600">
                        正解：<span className="text-slate-800">{w.answer}</span>
                      </div>
                    </div>

                    {w.explanation && (
                      <div className="mt-3 rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm text-slate-700">
                        {w.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-sky-200/80 px-6 py-5">
        <div className="mx-auto grid w-[calc(100%-50px)] max-w-250 gap-2">
          {onReview && (
            <button
              type="button"
              onClick={onReview}
              className="w-full rounded-full bg-white py-3 text-lg font-extrabold text-sky-700 shadow hover:bg-sky-50"
            >
              {reviewLabel}
            </button>
          )}

          <button
            type="button"
            onClick={onRestart}
            className="w-full rounded-full bg-white py-3 text-lg font-extrabold text-slate-700 shadow hover:bg-sky-50"
          >
            最初からやり直す＞
          </button>
        </div>
      </div>
    </div>
  );
}