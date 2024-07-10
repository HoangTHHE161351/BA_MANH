import axios from "axios";
import Cookies from "js-cookie";
import { ApiConstants } from "src/const";

const instanceAPIMain = axios.create({
  //baseURL: process.env.MAIN_API_URL,
  baseURL: "http://localhost:8080",
  timeout: ApiConstants.TIMEOUT,
  responseType: "json",
  headers: ApiConstants.HEADER_DEFAULT,
});

instanceAPIMain.interceptors.request.use(
  (requestConfig) => {
    try {
      const accessToken = Cookies.get(ApiConstants.ACCESS_TOKEN);
      if (Cookies && accessToken) {
        requestConfig.headers["authorization"] = "Bearer " + accessToken;
      }
      return requestConfig;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// instanceAPIMain.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response) {
//       const { status } = error.response;
//       if (status === 401 || status === 500) {
//         // Clear the token and redirect to login page
//         Cookies.remove(ApiConstants.ACCESS_TOKEN);
//         window.location.href = "/login";
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default instanceAPIMain;
