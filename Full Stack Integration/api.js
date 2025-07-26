
import axios from "axios";
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE });

export const sendMessage = async (message) => {
  const { data } = await api.post("/chat", { message });
  return data;
};

export const getHistory = async () => {
  const { data } = await api.get("/chat/history");
  return data;
};
