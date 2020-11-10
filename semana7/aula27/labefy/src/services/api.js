import axios from "axios";

const api = axios.create({
  headers: {
    Authorization: "anapatricia-monteiro-dumont",
  },
  baseURL: "https://us-central1-labenu-apis.cloudfunctions.net",
});

export default api;
