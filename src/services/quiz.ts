import axios from "axios";
import { BASE_URL } from "../constants/urlConstants";
export const getQuiz = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);

    if (response.data.success) {
      console.log({ response });
    }
  } catch (error) {
    console.log(error);
  }
};
