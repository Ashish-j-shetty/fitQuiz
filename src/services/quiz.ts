import axios from "axios";
import { BASE_URL } from "../constants/urlConstants";
export const getQuiz = async () => {
  try {
    const {
      data: { success, quiz },
    } = await axios.get(`${BASE_URL}`);

    if (success) {
      return quiz;
    }
  } catch (error) {
    return error;
  }
};
