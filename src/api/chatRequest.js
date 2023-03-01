import axios from "axios";

const url = process.env.PORT;
console.log(url, ">>>>.url");

export const userChats = async (id) => {
  const chat = await axios.get(`http://localhost:8000/api/chat/${id}`);
  return chat;
};
