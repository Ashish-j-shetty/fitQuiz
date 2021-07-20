import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useData } from "../../contexts/DataContext";
import { Option, Question } from "../../reducers/quiz.data.types";

export default function Quiz() {
  const { quizId } = useParams();

  const {
    state: { currentQuiz, questionNo, isClickable, score },
    dispatch,
  } = useData();

  const navigate = useNavigate();
  const currentQuestion = currentQuiz?.questions[questionNo] as Question;
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    dispatch({ type: "INITIALIZE_CURRENT_QUIZ", payload: { quizId } });
  }, [quizId, dispatch]);

  const clickHandler = async (option: Option) => {
    setSelectedOption(() => option.id);

    dispatch({
      type: "SELECTED_OPTION_ID",
      payload: { optionId: option.id, questionId: currentQuestion.id },
    });

    dispatch({
      type: "DISABLE_CLICK",
    });
    setTimeout(() => {
      dispatch({ type: "ENABLE_CLICK" });
    }, 1000);
  };

  return (
    currentQuiz &&
    currentQuestion && (
      <div className="min-h-screen w-full max-w-2xl px-4">
        <Header title={currentQuiz.name} />
        <div className="container">
          <div className="w-full flex my-8 justify-between text-xl font-semibold">
            <p>
              <span className="text-gray-400"> Question: </span>{" "}
              {questionNo + 1}/{currentQuiz?.questions.length}
            </p>
            <p>
              <span className="text-gray-400"> Score:</span>
              {score}
            </p>
          </div>
          <h3 className="font-bold my-4 text-lg">{currentQuestion.question}</h3>
          <div className="my-16">
            {currentQuestion.options.map((option) => {
              return (
                <button
                  onClick={() => clickHandler(option)}
                  className={`block w-full rounded-3xl text-lg font-semibold my-6 py-6 bg-green-800
                  
                      transition-colors duration-200 ease-in
                      ${!isClickable && option.isAnswer && "bg-green-600"}
                      ${
                        option.id === selectedOption &&
                        !option.isAnswer &&
                        !isClickable &&
                        "bg-red-600"
                      }
                      `}
                  disabled={!isClickable}
                >
                  {option.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
}
