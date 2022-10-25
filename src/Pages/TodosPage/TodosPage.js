import { useState, useMemo, useEffect, useRef, useHistory } from "react";
import { Container } from "./TodosPage.styled";
import TodoForm from "../../components/Todo/TodoForm/TodoForm";
import TodoList from "../../components/Todo/TodoList/TodoList";
import Filter from "../../components/Todo/Filter/Filter";
import Modal from "../../components/Modal/Modal";
import Clock from "../../components/Clock/Clock";
import { nanoid } from "nanoid";
import { ReactComponent as AddIcon } from "../../icons/add.svg";
import hooks from "../../hooks/hookTodo";
import { toastError, toastSucces } from "../../toast/toast";
import SortSelector from "../../components/SortSelector/SortSelector";
import {
  NavLink,
  Link,
  Outlet,
  useLocation,
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";
import OtherInfoTodos from "../../components/Todo/OtherInfoTodos/OtherInfoTodos";

export default function TodosPage() {
  const [todos, setTodos] = hooks.useLocalStorage("todos", []);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(navigate);
  console.log(location);

  // const sortOrder = location.search;
  const sortOrder =
    new URLSearchParams(location.search).get("sortBy") ?? "ascending";
  console.log(sortOrder);
  //   componentDidMount() {
  //     const todos = localStorage.getItem("todos");
  //     const parsedTodos = JSON.parse(todos);
  //     if (parsedTodos) {
  //       this.setState({ todos: parsedTodos });
  //     }
  //   }
  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state.todos !== prevState.todos) {
  //       localStorage.setItem("todos", JSON.stringify(this.state.todos));
  //     }
  //   }
  // .
  // .
  // .

  const sortOptions = [
    { value: "ascending", label: "По умолачнию" },
    { value: "descending", label: "По убыванию" },
  ];

  const onSortOrderChange = (order) => {
    console.log(order);
    navigate({ ...location, search: `sortBy=${order}` });
  };

  useEffect(() => {
    console.log(location.search);
    if (location.search !== "") {
      return;
    }
    navigate({ ...location, search: `sortBy=ascending` });
  }, [navigate, location]);

  useEffect(() => {
    setTodos((prevTodos) =>
      [...prevTodos].sort((a, b) => {
        const aDate = Date.parse(a.date + "T23:59");
        const bDate = Date.parse(b.date + "T23:59");
        return sortOrder === "ascending" ? aDate - bDate : bDate - aDate;
      })
    );
  }, [setTodos, sortOrder]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleCompleted = (todoId) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos((prevState) => todos.filter((todo) => todo.id !== todoId));
  };

  // this.state.todos.find(
  //   (todo) => todo.message.toLowerCase() === todoItem.message.toLowerCase()
  // )

  const formSubmitHandler = ({ message, date }) => {
    console.log(date);
    const todoItem = {
      message,
      date,
      // timeLeft: attempt(finalDate),
      id: nanoid(),
      completed: false,
    };

    const submit = () => {
      setTodos((prevState) => [todoItem, ...prevState]);
      toastSucces("Your note has been saved!");
      toggleModal();
    };

    todos.some(
      (todo) => todo.message.toLowerCase() === todoItem.message.toLowerCase()
    )
      ? toastError("This text already exists.")
      : submit();
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleTodos = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    const visible = todos.filter((todo) =>
      todo.message.toLowerCase().includes(normalizedFilter)
    );
    return visible;
  }, [filter, todos]);

  const totalTodoCaunt = useMemo(() => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  }, [todos]);

  return (
    <Container>
      {/* <Clock /> */}
      <header className="App-header">TOdOs</header>
      <button onClick={toggleModal}>
        <AddIcon width="40px" height="40px" fill="gray" />
      </button>
      {/* <p>количество todo {todos.length}</p> */}
      {/* <p>количество выполненых todo {totalTodoCaunt}</p> */}
      {showModal && (
        <Modal close={toggleModal}>
          <TodoForm
            valueForm={todos}
            onSubmit={formSubmitHandler}
            toggleModal={toggleModal}
          />
        </Modal>
      )}
      {/* <Routes>
        <Route path=":id" element={<UserProfile />} />
        <Route
          path="other"
          element={
            <OtherInfoTodos
              totalTodos={todos.length}
              totalComplateTodos={totalTodoCaunt}
            />
          }
        />
      </Routes> */}

      <NavLink to="other">Other</NavLink>
      {/* <NavLink></NavLink> */}
      <Outlet context={[todos.length, totalTodoCaunt]} />
      <Filter value={filter} onChange={changeFilter} />
      <SortSelector
        options={sortOptions}
        onChange={onSortOrderChange}
        value={sortOrder}
      />
      <TodoList
        todos={getVisibleTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
      />
    </Container>
  );
}

// class TodosPage extends Component {
//   state = {
//     todos: [],
//     filter: "",
//     showModal: false,
//   };

//   componentDidMount() {
//     const todos = localStorage.getItem("todos");
//     const parsedTodos = JSON.parse(todos);
//     if (parsedTodos) {
//       this.setState({ todos: parsedTodos });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.todos !== prevState.todos) {
//       localStorage.setItem("todos", JSON.stringify(this.state.todos));
//     }
//   }
//   // componentWillUnmount() {}

//   toggleModal = () => {
//     this.setState((state) => ({
//       showModal: !state.showModal,
//     }));
//   };

//   toggleCompleted = (todoId) => {
//     this.setState(({ todos }) => ({
//       todos: todos.map((todo) =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   deleteTodo = (todoId) => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.filter((todo) => todo.id !== todoId),
//     }));
//   };
//   formSubmitHandler = ({ message, date }) => {
//     console.log(this.state.todos);
//     const todoItem = {
//       message,
//       date,
//       id: nanoid(),
//       completed: false,
//     };

//     this.state.todos.find(
//       (todo) => todo.message.toLowerCase() === todoItem.message.toLowerCase()
//     )
//       ? alert("Такое имя уже занято")
//       : this.setState({
//           todos: [todoItem, ...this.state.todos],
//         });
//     this.toggleModal();
//   };

//   changeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleTodos = () => {
//     const { todos, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     const visible = todos.filter((todo) =>
//       todo.message.toLowerCase().includes(normalizedFilter)
//     );
//     return visible;
//   };

//   totalTodoCaunt = () => {
//     return this.state.todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0
//     );
//   };

//   render() {
//     const { todos, filter, showModal } = this.state;

//     return (
//       <Container>
//         <button onClick={this.toggleModal}>
//           <AddIcon width="40px" height="40px" fill="gray" />
//         </button>
//         <header className="App-header">TOdOs</header>
//         <p>количество todo {todos.length}</p>
//         <p>количество выполненых todo {this.totalTodoCaunt()}</p>
//         {showModal && (
//           <Modal close={this.toggleModal}>
//             <TodoForm
//               valueForm={todos}
//               onSubmit={this.formSubmitHandler}
//               toggleModal={this.toggleModal}
//             />
//           </Modal>
//         )}

//         <Filter value={filter} onChange={this.changeFilter} />
//         <TodoList
//           todos={this.getVisibleTodos()}
//           onDeleteTodo={this.deleteTodo}
//           onToggleCompleted={this.toggleCompleted}
//         />
//       </Container>
//     );
//   }
// }

// export default TodosPage;
