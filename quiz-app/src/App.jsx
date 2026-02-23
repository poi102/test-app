import { useMemo, useState } from "react";
import { QUESTIONS } from "./questions";
import { shuffleArray } from "../shuffle";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import ResultScreen from "./components/ResultScreen";

export default function App() {
  const [phase, setPhase] = useState("start"); // start | quiz | result | review | reviewResult
  const [finalScore, setFinalScore] = useState(0);
  const [wrongList, setWrongList] = useState([]);
  const [seed, setSeed] = useState(0);

  // 復習用
  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [reviewScore, setReviewScore] = useState(0);
  const [reviewWrongs, setReviewWrongs] = useState([]);

const QUESTION_COUNT = Math.min(10, QUESTIONS.length);

const questions = useMemo(() => {
  return shuffleArray(QUESTIONS)
    .slice(0, QUESTION_COUNT)
    .map((q) => {
      const choices = shuffleArray(q.choices);
      const answerText = q.choices[q.answerIndex];

      return {
        ...q,
        choices,
        answerIndex: choices.indexOf(answerText),
      };
    });
}, [seed]);

  const start = () => setPhase("quiz");

  const finish = ({ score, wrongs }) => {
    setFinalScore(score);
    setWrongList(wrongs);
    setPhase("result");
  };

  // wrongsに choices/answerIndex が入っている前提（Quiz.jsxが保存）
  const startReview = () => {
    const qs = wrongList.map((w, i) => ({
      id: w.id ?? `review-${i}`,
      question: w.question,
      choices: w.choices,
      answerIndex: w.answerIndex,
      explanation: w.explanation,
    }));

    setReviewQuestions(qs);
    setReviewScore(0);
    setReviewWrongs([]);
    setPhase("review");
  };

  const finishReview = ({ score, wrongs }) => {
    setReviewScore(score);
    setReviewWrongs(wrongs);
    setPhase("reviewResult");
  };

  const restart = () => {
    setFinalScore(0);
    setWrongList([]);
    setReviewQuestions([]);
    setReviewScore(0);
    setReviewWrongs([]);
    setSeed((s) => s + 1);
    setPhase("start");
  };

  const restartReviewWithWrongs = () => {
    const qs = reviewWrongs.map((w, i) => ({
      id: w.id ?? `review2-${i}`,
      question: w.question,
      choices: w.choices,
      answerIndex: w.answerIndex,
      explanation: w.explanation,
    }));

    setReviewQuestions(qs);
    setReviewScore(0);
    setReviewWrongs([]);
    setPhase("review");
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-sky-200 via-cyan-200 to-blue-300 text-slate-800">
       <div className="min-h-screen w-full grid place-items-center px-6 py-10">
        {/* 画面サイズに応じて大きく（必要なら 1400px にしてOK） */}
        <div className="w-full max-w-300">

          {phase === "start" && <StartScreen total={QUESTIONS.length} onStart={start} />}

          {phase === "quiz" && <Quiz questions={questions} onFinish={finish} />}

          {phase === "result" && (
            <ResultScreen
              title="RESULT"
              badge="結果"
              score={finalScore}
              total={QUESTIONS.length}
              wrongs={wrongList}
              onRestart={restart}
              onReview={wrongList.length ? startReview : null}
              reviewLabel="間違えた問題だけ復習＞"
            />
          )}

          {phase === "review" && <Quiz questions={reviewQuestions} onFinish={finishReview} />}

          {phase === "reviewResult" && (
            <ResultScreen
              title="REVIEW"
              badge="復習結果"
              score={reviewScore}
              total={reviewQuestions.length}
              wrongs={reviewWrongs}
              onRestart={restart}
              onReview={reviewWrongs.length ? restartReviewWithWrongs : null}
              reviewLabel="復習でも間違えた問題だけもう一回＞"
            />
          )}
        </div>
      </div>
    </div>
  );
}