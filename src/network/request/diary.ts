import { getDiary } from "../data/getUrl";
import { instance } from "../data/instance";

class Diary {
  getDiaryContent(diaryId: number) {
    try {
      return instance({
        method: "GET",
        url: getDiary.diary() + `/${diaryId}`,
      });
    } catch (error) {
      return error;
    }
  }

  postCreateDiary(data: FormData) {
    try {
      return instance({
        method: "POST",
        url: getDiary.diary(),
        data,
      });
    } catch (error) {
      return error;
    }
  }

  getDiaryList() {
    try {
      return instance({
        method: "GET",
        url: getDiary.getList(),
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Diary();
