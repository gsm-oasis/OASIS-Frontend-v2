import { getQuestion } from "../data/getUrl";
import { instance } from "../data/instance";

class MainQuestion {
  getDiaryComment(questionId: number) {
    try {
      return instance({
        method: "GET",
        url: getQuestion.comment() + `${questionId}`,
      });
    } catch (error) {
      return error;
    }
  }

  postMyComment(id: number, comment: string) {
    try {
      return instance({
        method: "POST",
        url: getQuestion.comment() + `${id}`,
        data: {
          answer: comment,
        },
      });
    } catch (error) {
      return error;
    }
  }

  getQuestionList() {
    try {
      return instance({
        method: "GET",
        url: getQuestion.getList(),
      });
    } catch (error) {
      return error;
    }
  }
}

export default new MainQuestion();
