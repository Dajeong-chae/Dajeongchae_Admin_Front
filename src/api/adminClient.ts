import axios from "axios";

const adminClient = axios.create({
  baseURL: "/admin", //"https://sweetspeech-api.onrender.com/admin"
  headers: {
    "Content-Type": "application/json",
  },
});

export default adminClient;
