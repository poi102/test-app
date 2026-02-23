export default function QuestionLayout({
  title = "QUESTION",
  questionTitle = "あなたはどのタイプ？",
  questionSub = "次の中から選んでね！",
  options = ["朝型人間", "夜型人間", "いつでも眠いタイプ"],
  selectedIndex = null, // 0,1,2...
  onSelect = () => {},
  onConfirm = () => {},
  confirmDisabled = false,
}) {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-100 p-4">
      {/* outer card */}
      <div className="w-95 max-w-full overflow-hidden rounded-2xl border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
        {/* header stripe */}
        <div className="relative px-4 py-5 text-center">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#8fb5ea_0px,#8fb5ea_8px,#7aa6e6_8px,#7aa6e6_16px)]" />
          <div className="absolute inset-0 bg-white/20" />
          <h1 className="relative text-3xl font-extrabold tracking-[0.22em] text-white drop-shadow">
            {title}
          </h1>
        </div>

        {/* body */}
        <div className="bg-slate-100 px-5 py-6">
          {/* question panel */}
          <div className="relative rounded-2xl border-4 border-[#8fb5ea] bg-white px-5 py-6 shadow-sm">
            <span className="absolute -top-3 left-4 rounded-full bg-[#8fb5ea] px-3 py-1 text-xs font-bold text-white">
              問題
            </span>

            <div className="text-center">
              <div className="text-lg font-extrabold text-slate-800">
                {questionTitle}
              </div>
              <div className="mt-1 text-sm font-bold text-slate-700">
                {questionSub}
              </div>
            </div>
          </div>

          {/* options */}
          <div className="mt-6 space-y-3">
            {options.map((label, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSelect(idx)}
                  className={[
                    "group w-full rounded-full border-2 px-4 py-3 text-left font-extrabold transition",
                    "border-[#8fb5ea] bg-[#8fb5ea] text-white shadow-[0_6px_0_rgba(70,120,190,0.35)]",
                    "hover:brightness-[0.98] active:translate-y-px active:shadow-[0_4px_0_rgba(70,120,190,0.35)]",
                    isSelected ? "ring-4 ring-[#bcd3f7]" : "ring-0",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={[
                        "grid h-8 w-8 place-items-center rounded-full bg-white text-sm font-black",
                        "text-[#3e6fb5]",
                        isSelected ? "scale-105" : "",
                      ].join(" ")}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-base">{label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* footer stripe */}
        <div className="relative px-4 py-4">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#8fb5ea_0px,#8fb5ea_8px,#7aa6e6_8px,#7aa6e6_16px)]" />
          <div className="absolute inset-0 bg-white/20" />
          <button
            onClick={onConfirm}
            disabled={confirmDisabled}
            className="relative mx-auto block w-full rounded-full bg-transparent py-2 text-center text-sm font-extrabold text-white drop-shadow
                       disabled:opacity-50"
          >
            答えを確認する＞
          </button>
        </div>
      </div>
    </div>
  );
}