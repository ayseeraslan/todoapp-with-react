import React, { useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/Todolist";

function App() {
  const [inputText, setInputText]= React.useState("");
  const [todos, setTodos]=React.useState([]);
  const [status, setStatus]= React.useState("all");
  const [filteredTodos, setFilteredTodos]= React.useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo)=> todo.uncompleted === false));
        break;
        default:
          setFilteredTodos(todos);
          break;
    }
  };

  return (
    <div className="App">
      <header>
      <h1>To Do List</h1>
      </header>
      <Form 
      inputText = {inputText}
      todos={todos} 
      setTodos={setTodos}
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <TodoList
       filteredTodos={filteredTodos}
       todos={todos} 
       setTodos={setTodos}
       />
    </div>
  );
};


export default App;
