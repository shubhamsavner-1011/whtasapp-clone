import axios from 'axios';

export const getMessages = async (id) => {
    const {data} =  await axios.get(`http://localhost:8000/api/message/${id}`)
    return data;
 }

 export const createMessage = async (text, chatId, senderId) => {
    const {data} =  await axios.post(`http://localhost:8000/api/message`,{text, chatId, senderId} )
    return data;
 }

