// import "./App.css";
import hooks from "./hooks/hookTodo";
import { Component } from "react";

import { Routes, Route, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import { useEffect } from "react";
import { Toast } from "./toast/toast";
import { Container } from "./App.styled";
import TodosPage from "./Pages/TodosPage/TodosPage";
import PokemonPage from "./Pages/PokemonPage/PokemonPage";
import UseMenu from "./components/UseMenu/UseMenu";
import Images from "./components/Pokemon/PokemonForm/PokemonForm";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Clock from "./components/Clock/Clock";

class App extends Component {
  render() {
    // const { todos, filter, showModal } = this.state;

    return (
      <>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />}></Route>
            <Route path="user" element={<UseMenu />}></Route>
            <Route path="pokemon" element={<PokemonPage />}></Route>
            <Route path="todos" element={<TodosPage />}>
              {/* <Route path=":todosTime" element={<IdItem />}></Route> */}
            </Route>
            <Route path="clock" element={<Clock />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Route>
        </Routes>
        {/* <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
        <Toast />
      </>
    );
  }
}

export default App;

// useEffect(() => {
//   window.localStorage.setItem("todo", JSON.stringify(todos));
// }, [todos]);

// const formSubmitHandler = (data) => {

//   console.log(todos);
//   console.log(data);
//   todos.find((todo) => todo.toLocaleLowerCase() === data.toLocaleLowerCase())
//     ? alert("Такое имя уже занято")
//     : setTodos([...todos, data], todos);
// };

// return (
//   <Container>
//     <header className="App-header">ddddd</header>
//     <TodoForm valueForm={todos} onSubmit={formSubmitHandler} />
//     <TodoList todos={todos} />
//   </Container>
// );
