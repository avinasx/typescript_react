import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/inputField';
import {Todo} from './models/todo';
import TodoList from "./components/todoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  }
  console.log(todos);
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
        <span className="heading">TASKIFY</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
       
        <TodoList setTodos={setTodos} todos={todos}/>
      {/*</header>*/}
    </div>
  );
}

export default App;
