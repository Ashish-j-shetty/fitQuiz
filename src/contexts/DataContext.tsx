import { useContext, useReducer } from "react";
import { createContext } from "react";
import { quizInitalState, quizReducer } from "../reducers/quiz.reducer";
import { DATA_CONTEXT } from "./dataContext.types";

const DataContext = createContext<DATA_CONTEXT>({
  state: quizInitalState,
  dispatch: () => null,
});

export const useData = () => useContext(DataContext);

export const DataProvide: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, quizInitalState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
