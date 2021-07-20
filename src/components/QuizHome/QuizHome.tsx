import { Link } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { Quiz } from "../../reducers/quiz.data.types";

type QUIZ_ITEM = { item: Quiz };

function QuizCard({ item }: QUIZ_ITEM) {
  return (
    <Link to={`/${item.id}`}>
      <div className="rounded-3xl h-full bg-green-800">
        <img className="w-full rounded-3xl" src={item.image} alt={item.name} />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
          <p className="text-gray-400">Take the quiz</p>
          <p className="text-grey-400">{item.questions.length} Questions</p>
        </div>
      </div>
    </Link>
  );
}

export default function QuizHome() {
  const {
    state: { quiz },
  } = useData();

  return (
    <section className="px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 container m-auto ">
      {quiz?.map((item) => (
        <QuizCard item={item} key={item.id} />
      ))}
    </section>
  );
}
