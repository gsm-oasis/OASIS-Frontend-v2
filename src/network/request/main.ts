import { getMain } from "../data/getUrl";
import { instance } from "../data/instance";

class Main {
  submitDate(startDay: string) {
    try {
      return instance({
        method: "POST",
        url: getMain.submitDate(),
        data: {
          startDay,
        },
      });
    } catch (error) {
      return error;
    }
  }

  postMain() {
    try {
      return instance({
        method: "GET",
        url: getMain.postMain(),
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Main();
