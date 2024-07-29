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

  const updateScore = (option: Option, questionNo: number) => {
    console.log(option);
    console.log(currentQuestion);
    option.isAnwer
      ? dispatch({
          type: "INCREMENT_SCORE",
          payload: { score: currentQuestion?.points },
        })
      : dispatch({
          type: "DECREMENT_SCORE",
          payload: { score: currentQuestion?.negativePoints },
        });

    questionNo + 1 === currentQuiz?.questions.length
      ? navigate("/result", { replace: true })
      : dispatch({
          type: "INCREMENT_QUESTION_NO",
        });
  };

  const clickHandler = async (option: Option, questionNo: number) => {
    setSelectedOption(() => option.id);

    dispatch({
      type: "SELECTED_OPTION_ID",
      payload: { optionId: option.id, questionId: currentQuestion.id },
    });

    dispatch({
      type: "DISABLE_CLICK",
    });
    setTimeout(() => {
      updateScore(option, questionNo);
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
          <img
            className="w-full rounded-3xl"
            src={currentQuestion.img}
            alt={currentQuestion.question}
          />
          <div className="my-16">
            {currentQuestion.options.map((option) => {
              return (
                <button
                  disabled={!isClickable}
                  onClick={() => {
                    clickHandler(option, questionNo);
                  }}
                  className={`block w-full rounded-3xl text-lg font-semibold my-6  py-6  bg-gray-900 transition-colors duration-200 ease-in
                  ${!isClickable && option.isAnwer && "bg-green-600 "}
                      ${
                        option.id === selectedOption &&
                        !option.isAnwer &&
                        !isClickable &&
                        "bg-red-600"
                      }
                      
                      `}
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
