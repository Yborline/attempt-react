// import "./App.css";
import hooks from "./hooks/hookTodo";

import TodoForm from "./Todo/TodoForm/TodoForm";
import { useEffect } from "react";
import { Container } from "./App.styled";
import TodoList from "./Todo/TodoList/TodoList";

function App() {
  const [todos, setTodos] = hooks.useLocalStorage("todo", []);
  console.log(todos);

  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const formSubmitHandler = (data) => {
    console.log(todos);
    console.log(data);
    todos.find((todo) => todo.toLocaleLowerCase() === data.toLocaleLowerCase())
      ? alert("Такое имя уже занято")
      : setTodos([...todos, data], todos);
  };

  return (
    <Container>
      <header className="App-header">ddddd</header>
      <TodoForm valueForm={todos} onSubmit={formSubmitHandler} />
      <TodoList todos={todos} />
    </Container>
  );
}

export default App;
