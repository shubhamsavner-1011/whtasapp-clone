import axios from 'axios';



export const users = async () => {
   const {data} =  await axios.get(`http://localhost:8000/api/users`)
   return data;
}

export const getUser = async (id) => {
   const {data} =  await axios.get(`http://localhost:8000/api/users/${id}`)
   return data;
}

export const userLogin = async (user) => {
   const userData = await axios.post(`http://localhost:8000/api/users/login`,user)
    return userData.data

}

export const userRegister = async (user) => {
   const userData = await axios.post(`http://localhost:8000/api/users/register`,user)
   return userData
}

export const userLogout = async () => {
   const userData = await axios.get(`http://localhost:8000/api/users/logout`)
    return userData
}