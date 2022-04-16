import axios from "axios";

export default axios.create({
  baseURL: "https://tutorials-api-cw.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
