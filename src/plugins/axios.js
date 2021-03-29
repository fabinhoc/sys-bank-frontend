import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

// axios.interceptors.request.use(function (config) {
//   return config;
// });
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      this.$route.push("/login");
    }
  }
);

export default axios;
