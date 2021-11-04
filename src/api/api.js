import axios from "axios";


const API = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://personal-project-780.uc.r.appspot.com/api",
});


export const fetchTodos = () => API.get('/todos');
export const createTodo = (newTodo) => API.post("/todos", newTodo);
export const updateTodo = (id, updatedTodo) => API.patch(`/todos/${id}`, updatedTodo);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);