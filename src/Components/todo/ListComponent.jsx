import { useEffect, useState } from "react";
import { deleteTodosApi, retriveTodos } from "./api/TodoApiService";
import { useNavigate } from "react-router-dom";

const ListComponent = () => {
    const today = new Date();
    const targetDate = new Date(
      today.getFullYear() + 12,
      today.getMonth(),
      today.getDay()
    );
    const navigate=useNavigate()
    const [todos,setTodos]=useState([]);
    const[message,setMessage]=useState(null);
    useEffect(()=>refreshTodos(),[])
    // const todos = [
      // { id: 1, description: 'learn me', done: false, targetDate: targetDate },
      // { id: 2, description: 'learn e', done: false, targetDate: targetDate },
      // { id: 3, description: 'learn r', done: false, targetDate: targetDate }
    // ];
    const refreshTodos=()=>{
    retriveTodos('in28minutes')
    .then((response)=>{
    console.log(response)
    setTodos(response.data)})

    .catch((error)=>console.log(error))
    }
    const deleteTodo=(id)=>{
      deleteTodosApi('in28minutes',id)
      .then(()=>{
        setMessage(`${id} deleted`)
        refreshTodos()
      })
      .catch((error)=>console.log(error))
    
    }
    const UpdateTodo=(id)=>{
      console.log('update clicked')
      navigate(`/todo/${id}`)
    }
    return (
      <div >
        <h1>Listing Todos</h1>
        {message && <>{message}</>}
        <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>description</th>
              <th>Is done?</th>
              <th>Target Date</th>
              <th>Update?</th>
              <th>Delete?</th>

            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td><button className="btn btn-warning" onClick={()=>UpdateTodo(todo.id)}>Update</button></td>
                <td><button className="btn btn-danger" onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  };

export default ListComponent;