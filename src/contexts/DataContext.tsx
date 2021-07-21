import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";

import { quizInitalState, quizReducer } from "../reducers/quiz.reducer";
import { getQuiz } from "../services/quiz";
import { DATA_CONTEXT } from "./dataContext.types";

const DataContext = createContext<DATA_CONTEXT>({
  state: quizInitalState,
  dispatch: () => null,
});

export const useData = () => useContext(DataContext);

export const DataProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, quizInitalState);

  const initializeQuiz = async () => {
    const quiz = await getQuiz();

    quiz && dispatch({ type: "INITIALIZE_QUIZ", payload: { quiz } });
  };

  useEffect(() => {
    initializeQuiz();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
