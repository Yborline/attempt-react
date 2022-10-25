// import "./App.css";
import { Component } from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toast } from "./toast/toast";
import Navigation from "./components/Navigation/Navigation";
import { Container } from "./App.styled";

const OtherInfoTodos = lazy(() =>
  import("././components/Todo/OtherInfoTodos/OtherInfoTodos")
);

const HomeView = lazy(() =>
  import("./Pages/HomePage/HomePage" /* webpackChunkName: "home-view" */)
);
const PokemonView = lazy(() =>
  import(
    "./Pages/PokemonPage/PokemonPage" /* webpackChunkName: "pokemon-view" */
  )
);
const OtherView = lazy(() =>
  import("./Pages/OtherPage/OtherPage" /* webpackChunkName: "other-view" */)
);
const TodosView = lazy(() =>
  import("./Pages/TodosPage/TodosPage" /* webpackChunkName: "todos-view" */)
);

class App extends Component {
  render() {
    // const { todos, filter, showModal } = this.state;

    return (
      <>
        {/* <Navigation /> */}

        <Suspense fallback={<h1>Загружаем...</h1>}>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<HomeView />}></Route>
              <Route path="pokemon" element={<PokemonView />}></Route>
              <Route path="todos" element={<TodosView />}>
                <Route path="other" element={<OtherInfoTodos />}></Route>
                {/* <Route path=":todosTime" element={<IdItem />}></Route> */}
              </Route>
              <Route path="clock" element={<OtherView />}></Route>
              <Route path="*" element={<HomeView />}></Route>
            </Route>
          </Routes>
        </Suspense>
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
