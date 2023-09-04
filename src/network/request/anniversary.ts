import { getAnniversary } from "../data/getUrl";
import { instance } from "../data/instance";

class Anniversary {
  getAnniversaryList() {
    try {
      return instance({
        method: "GET",
        url: getAnniversary.getAnniversary(),
      });
    } catch (error) {
      return error;
    }
  }

  addAnniversary(anniversaryName: string, anniversaryDate: string) {
    try {
      return instance({
        method: "POST",
        url: getAnniversary.getAnniversary(),
        data: {
          anniversaryName: anniversaryName,
          anniversaryDate: anniversaryDate,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Anniversary();
