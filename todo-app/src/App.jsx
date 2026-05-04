import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos';

function App() {
  const [todoText,setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  function clickHandler(){
    if (todoText===''){
      return;
    }
    else{
      setTodos([...todos,todoText]);
      setTodoText("");
      console.log(todos);
    }
  }

  function deleteTodo(indexToDelete) {
  const updatedTodos = todos.filter(
    (_, index) => index !== indexToDelete
  );
  setTodos(updatedTodos);
}

  return (
    <>
      <div className="container">
        <h1>TODO LIST</h1>
        <hr />

        <div className="todo-area">
          <input type="text" value={todoText} onChange={(e)=>setTodoText(e.target.value)} />
          <button onClick={clickHandler}>ADD</button>
          {/* <div className="new-todo">
            {
              todos.map((todo)=>{
                return <p>{todo}</p>
              })
            }
          </div> */}

        </div>
        <Todos todos={todos} onDelete={deleteTodo}></Todos>


      </div>
    </>
  )
}

export default App
