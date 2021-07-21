import Header from "../../components/Header/Header";
import { useData } from "../../contexts/DataContext";

export default function Result() {
  const {
    state: { score, currentQuiz },
  } = useData();

  console.log(currentQuiz);

  return (
    <div>
      <Header title="Your Result" />
      <div className="container px-4 py-16">
        <p className="text-2xl font-bold text-center">
          Final Score:
          <span className="ml-4">
            {score}/{currentQuiz?.totalScore}
          </span>
        </p>

        {currentQuiz?.questions.map((item) => (
          <div className="my-16">
            <p className="font-bold my-4 text-lg">{item.question}</p>
            {item.options.map((option) => (
              <div>
                <p
                  className={`block w-full text-center font-semibold bg-gray-900 rounded-3xl text-lg my-6 py-6 transition-colors duration-200 ease-in ${
                    option.isAnwer && " bg-green-600 "
                  }${
                    option.id === item.selectedId &&
                    !option.isAnwer &&
                    " bg-red-600 "
                  }
                  `}
                >
                  {option.text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
