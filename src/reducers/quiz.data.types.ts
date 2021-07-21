export type Option = {
  id: string;
  text: string;
  isAnwer: boolean;
};

export type Question = {
  id: string;
  negativePoints: number;
  question: string;
  points: number;
  img: string;
  options: Array<Option>;
  selectedId?: string | null;
};

export type Quiz = {
  image: string;
  name: string;
  id: string;
  questions: Array<Question>;
  totalScore: number;
};
