import { useState, useMemo } from "react";
import { Container } from "./TodosPage.styled";
import TodoForm from "../../components/Todo/TodoForm/TodoForm";
import TodoList from "../../components/Todo/TodoList/TodoList";
import Filter from "../../components/Todo/Filter/Filter";
import Modal from "../../components/Modal/Modal";
import Clock from "../../components/Clock/Clock";
import { nanoid } from "nanoid";
import { ReactComponent as AddIcon } from "../../icons/add.svg";
import hooks from "../../hooks/hookTodo";

export default function TodosPage() {
  const [todos, setTodos] = hooks.useLocalStorage("todos", []);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  const formSubmitHandler = ({ message, date }) => {
    const todoItem = {
      message,
      date,
      id: nanoid(),
      completed: false,
    };

    todos.find(
      (todo) => todo.message.toLowerCase() === todoItem.message.toLowerCase()
    )
      ? alert("Такое имя уже занято")
      : setTodos((prevState) => [todoItem, ...prevState]);

    toggleModal();
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
      <Clock />
      <button onClick={toggleModal}>
        <AddIcon width="40px" height="40px" fill="gray" />
      </button>
      <header className="App-header">TOdOs</header>
      <p>количество todo {todos.length}</p>
      <p>количество выполненых todo {totalTodoCaunt}</p>
      {showModal && (
        <Modal close={toggleModal}>
          <TodoForm
            valueForm={todos}
            onSubmit={formSubmitHandler}
            toggleModal={toggleModal}
          />
        </Modal>
      )}

      <Filter value={filter} onChange={changeFilter} />
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
