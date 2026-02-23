export const QUESTIONS = [
  {
    id: "q1",
    question: "Reactで状態を管理するフックは？",
    choices: ["useFetch", "useState", "useComponent", "useEffect"],
    answerIndex: 1,
    explanation: "useState はコンポーネントの状態を管理するためのフックです。",
  },

  {
    id: "q2",
    question: "Reactで副作用を扱うフックは？",
    choices: ["useState", "useEffect", "useMemo", "useRef"],
    answerIndex: 1,
    explanation: "useEffect は副作用を扱います。",
  },

  {
    id: "q3",
    question: "Viteの開発サーバ起動コマンドは？",
    choices: ["npm start", "npm run dev", "vite start", "npm run serve"],
    answerIndex: 1,
    explanation: "Viteは npm run dev で起動します。",
  },

  {
    id: "q4",
    question: "Tailwindは何のフレームワーク？",
    choices: ["JavaScript", "CSS", "Python", "React"],
    answerIndex: 1,
    explanation: "TailwindはCSSフレームワークです。",
  },

  {
    id: "q5",
    question: "HTMLのリンクタグは？",
    choices: ["<div>", "<a>", "<link>", "<p>"],
    answerIndex: 1,
    explanation: "<a>タグはリンクを作成します。",
  },

  {
    id: "q6",
    question: "CSSで文字色を変更するプロパティは？",
    choices: ["font-color", "text-color", "color", "font-style"],
    answerIndex: 2,
    explanation: "colorプロパティで文字色を変更します。",
  },

  {
    id: "q7",
    question: "JavaScriptで変数宣言に使うキーワードは？",
    choices: ["var", "let", "const", "すべて"],
    answerIndex: 3,
    explanation: "var, let, const すべて変数宣言に使えます。",
  },

  {
    id: "q8",
    question: "配列の長さを取得するプロパティは？",
    choices: ["size", "length", "count", "index"],
    answerIndex: 1,
    explanation: "lengthで配列の要素数を取得できます。",
  },

  {
    id: "q9",
    question: "Reactコンポーネントは何を返す？",
    choices: ["HTML", "JSX", "CSS", "JSON"],
    answerIndex: 1,
    explanation: "ReactコンポーネントはJSXを返します。",
  },

  {
    id: "q10",
    question: "Tailwindで背景色を指定するクラスは？",
    choices: ["color-blue", "bg-blue-500", "background-blue", "bgcolor"],
    answerIndex: 1,
    explanation: "bg-blue-500のように指定します。",
  },

  {
    id: "q11",
    question: "JSXは何の拡張？",
    choices: ["JavaScript", "HTML", "CSS", "XML"],
    answerIndex: 0,
    explanation: "JSXはJavaScriptの拡張構文です。",
  },

  {
    id: "q12",
    question: "関数を定義するキーワードは？",
    choices: ["function", "func", "define", "method"],
    answerIndex: 0,
    explanation: "functionで関数を定義します。",
  },

  {
    id: "q13",
    question: "Reactでリスト表示時に必要な属性は？",
    choices: ["id", "key", "name", "index"],
    answerIndex: 1,
    explanation: "key属性が必要です。",
  },

  {
    id: "q14",
    question: "CSSで中央寄せするプロパティは？",
    choices: ["align", "center", "text-align", "position"],
    answerIndex: 2,
    explanation: "text-align: center;",
  },

  {
    id: "q15",
    question: "JavaScriptでコメントを書く方法は？",
    choices: ["//", "<!-- -->", "#", "**"],
    answerIndex: 0,
    explanation: "// コメント",
  },

  {
    id: "q16",
    question: "Reactの親から子に渡すデータは？",
    choices: ["state", "props", "data", "param"],
    answerIndex: 1,
    explanation: "propsで渡します。",
  },

  {
    id: "q17",
    question: "Tailwindで余白を指定するクラスは？",
    choices: ["space", "padding", "p-4", "margin"],
    answerIndex: 2,
    explanation: "p-4のように指定します。",
  },

  {
    id: "q18",
    question: "配列の最初の要素のindexは？",
    choices: ["0", "1", "-1", "null"],
    answerIndex: 0,
    explanation: "0から始まります。",
  },

  {
    id: "q19",
    question: "JSで文字列を結合する演算子は？",
    choices: ["+", "-", "*", "/"],
    answerIndex: 0,
    explanation: "+で結合します。",
  },

  {
    id: "q20",
    question: "ReactでDOM参照するフックは？",
    choices: ["useState", "useRef", "useDOM", "useNode"],
    answerIndex: 1,
    explanation: "useRefを使います。",
  },

  {
    id: "q21",
    question: "HTMLで画像を表示するタグは？",
    choices: ["<img>", "<image>", "<pic>", "<src>"],
    answerIndex: 0,
    explanation: "<img>タグです。",
  },

  {
    id: "q22",
    question: "CSSで要素を非表示にするプロパティは？",
    choices: ["visibility", "display", "hide", "opacity"],
    answerIndex: 1,
    explanation: "display: none;",
  },

  {
    id: "q23",
    question: "JSで条件分岐は？",
    choices: ["if", "for", "switch", "両方"],
    answerIndex: 3,
    explanation: "ifとswitchがあります。",
  },

  {
    id: "q24",
    question: "Reactは何のライブラリ？",
    choices: ["サーバー", "UI", "OS", "DB"],
    answerIndex: 1,
    explanation: "UIライブラリです。",
  },

  {
    id: "q25",
    question: "JSで配列追加は？",
    choices: ["add()", "push()", "insert()", "append()"],
    answerIndex: 1,
    explanation: "push()を使います。",
  },

  {
    id: "q26",
    question: "Tailwindでflexは？",
    choices: ["display-flex", "flex", "flexbox", "d-flex"],
    answerIndex: 1,
    explanation: "flexクラスです。",
  },

  {
    id: "q27",
    question: "JSで真偽値は？",
    choices: ["true/false", "yes/no", "on/off", "1/0"],
    answerIndex: 0,
    explanation: "trueとfalseです。",
  },

  {
    id: "q28",
    question: "Reactファイル拡張子は？",
    choices: [".js", ".jsx", ".react", ".tsx"],
    answerIndex: 1,
    explanation: ".jsxです。",
  },

  {
    id: "q29",
    question: "CSSで太字は？",
    choices: ["bold", "font-weight", "font-bold", "text-bold"],
    answerIndex: 1,
    explanation: "font-weight: bold;",
  },

  {
    id: "q30",
    question: "JSでログ出力は？",
    choices: ["print()", "log()", "console.log()", "write()"],
    answerIndex: 2,
    explanation: "console.log()です。",
  },
];