import { useData } from "../../contexts/DataContext";

export default function QuizHome() {
  const {
    state: { quiz },
  } = useData();
  return <div></div>;
}
