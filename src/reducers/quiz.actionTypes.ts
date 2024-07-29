import { Quiz } from "./quiz.data.types";

export type QUIZ_INITIAL_STATE = {
  quiz: Array<Quiz> | null;
  currentQuiz: Quiz | null;
  quizID: string;
  questionNo: number;
  score: number;
  timer: number;
  isClickable: boolean;
};

export type ACTION =
  | { type: "INITIALIZE_QUIZ"; payload: { quiz: Array<Quiz> } }
  | { type: "INITIALIZE_CURRENT_QUIZ"; payload: { quizId: string } }
  | {
      type: "SELECTED_OPTION_ID";
      payload: { optionId: string; questionId: string };
    }
  | { type: "RESET_QUIZ" }
  | { type: "INCREMENT_SCORE"; payload: { score: number } }
  | { type: "DECREMENT_SCORE"; payload: { score: number } }
  | { type: "RESET_SCORE" }
  | { type: "INCREMENT_QUESTION_NO" }
  | { type: "RESET_QUESTION_NUMBER" }
  | { type: "SET_QUIZ_ID"; payload: { quizId: string } }
  | { type: "ENABLE_CLICK" }
  | { type: "DISABLE_CLICK" };
