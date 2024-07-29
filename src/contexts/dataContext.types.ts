import { QUIZ_INITIAL_STATE } from "../reducers/quiz.actionTypes";

export type DATA_CONTEXT = {
  state: QUIZ_INITIAL_STATE;
  dispatch: React.Dispatch<any>;
};
