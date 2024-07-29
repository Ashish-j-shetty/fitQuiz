import Header from "../../components/Header/Header";
import QuizHome from "../../components/QuizHome/QuizHome";

export const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Header title="FitQuiz" />
      <QuizHome />
    </div>
  );
};
