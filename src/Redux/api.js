
import axios from 'axios';



export const loadUsersAPI = async () => await axios.get('https://6485eb9ba795d24810b77ae5.mockapi.io/user');


export const CreateUserAPI = async (user) => await axios.post("https://6485eb9ba795d24810b77ae5.mockapi.io/user", user);

export const UpdateUserAPI = async (user, userInfo,) => axios.post(`https://6485eb9ba795d24810b77ae5.mockapi.io/user/${user}`, userInfo);

export const DeleteUserAPI = async (userid) => await axios.delete(`https://6485eb9ba795d24810b77ae5.mockapi.io/user/${userid}`);
