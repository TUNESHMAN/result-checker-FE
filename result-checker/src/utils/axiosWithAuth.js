import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: `http://localhost:7000`,
    headers: {
      Authorization: localStorage.getItem(`token`),
    },
  });
};
