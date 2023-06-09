import deafultAxios from "axios";

const axios = () =>
  deafultAxios.create({
    baseURL: "https://ecommerce-app-kj4x.onrender.com",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export default axios;
