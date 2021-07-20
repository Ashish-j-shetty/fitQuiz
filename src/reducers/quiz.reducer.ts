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

      console.log({ quizId });

      console.log({ userSelection });

      return {
        ...state,
        currentQuiz: userSelection,
      };

    default:
      return state;
  }
};
