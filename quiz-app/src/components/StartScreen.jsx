export default function StartScreen({ total, onStart }) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border-4 border-sky-200 bg-white shadow-xl">
      {/* HEADER */}
      <div className="bg-linear-to-r from-sky-400 via-cyan-400 to-sky-500 px-6 py-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-[0.2em] text-white drop-shadow">
          QUIZ
        </h1>
      </div>

      {/* BODY */}
      <div className="bg-linear-to-b from-sky-50 via-cyan-50 to-sky-100 py-10">
        <div className="mx-auto w-[calc(100%-50px)] max-w-225">
          <div className="rounded-2xl border-2 border-sky-200 bg-white px-6 py-8 text-center shadow-sm">
            <div className="text-xl font-extrabold text-slate-800">
              クイズに挑戦しよう！
            </div>
            <div className="mt-2 text-sm font-bold text-slate-600">１０問</div>
            <div className="mt-4 text-xs font-bold text-slate-500">
              選択 →「答えを確認する」→ 次へ
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-sky-200/80 px-6 py-5">
        <button
          type="button"
          onClick={onStart}
          className="mx-auto block w-[calc(100%-50px)] max-w-225 rounded-full bg-white py-3 text-xl font-extrabold text-sky-700 shadow hover:bg-sky-50"
        >
          はじめる＞
        </button>
      </div>
    </div>
  );
}