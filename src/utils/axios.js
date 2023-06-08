import deafultAxios from "axios";

const axios = () =>
  deafultAxios.create({
    baseURL: "https://ecommerce-app-bgkr.onrender.com",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export default axios;
