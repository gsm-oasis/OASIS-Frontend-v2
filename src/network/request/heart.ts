import { getHeart } from "../data/getUrl";
import { instance } from "../data/instance";

class Heart {
  getHeartLevel() {
    try {
      return instance({
        method: "GET",
        url: getHeart.getHeart(),
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Heart();
