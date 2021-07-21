import { Quiz } from "./quiz.data.types";
import { QUIZ_INITIAL_STATE, ACTION } from "./quiz.actionTypes";
export const quizInitalState: QUIZ_INITIAL_STATE = {
  quiz: null,
  currentQuiz: null,
  quizID: "",
  questionNo: 0,
  score: 0,
  timer: 0,
  isClickable: true,
};

export const quizReducer = (
  state: QUIZ_INITIAL_STATE,
  action: ACTION
): QUIZ_INITIAL_STATE => {
  switch (action.type) {
    case "INITIALIZE_QUIZ":
      return {
        ...state,
        quiz: action.payload.quiz,
      };

    case "INITIALIZE_CURRENT_QUIZ":
      const { quizId } = action.payload;

      const userSelection: Quiz = state.quiz?.find(
        (item) => item.id === quizId
      ) as Quiz;

      return {
        ...state,
        currentQuiz: userSelection,
      };

    case "SELECTED_OPTION_ID":
      const { optionId, questionId } = action.payload;

      return {
        ...state,
        currentQuiz: {
          ...state.currentQuiz,
          questions: state.currentQuiz?.questions.map((item) => {
            return item.id === questionId
              ? {
                  ...item,
                  selectedId: optionId,
                }
              : item;
          }),
        } as Quiz,
      };

    case "DISABLE_CLICK":
      return {
        ...state,
        isClickable: false,
      };

    case "ENABLE_CLICK":
      return {
        ...state,
        isClickable: true,
      };

    case "INCREMENT_SCORE":
      console.log("increment", action.payload.score);
      return {
        ...state,
        score: state.score + action.payload.score,
      };

    case "DECREMENT_SCORE":
      console.log("decrement", action.payload.score);
      return {
        ...state,
        score: state.score - action.payload.score,
      };

    case "INCREMENT_QUESTION_NO":
      return {
        ...state,
        questionNo: state.questionNo + 1,
      };

    default:
      return state;
  }
};
