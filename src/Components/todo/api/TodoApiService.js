import axios from 'axios';

const ApiClient= axios.create(
    {
        baseURL:'http://localhost:8080'
    }
);
export const retriveTodos=(username)=> ApiClient.get(`/users/${username}/todos`)
 
export const deleteTodosApi=(username,id)=> ApiClient.delete(`/users/${username}/todos/${id}`)

export const retrieveTodoApi=(username,id)=> ApiClient.get(`users/${username}/todos/${id}`)