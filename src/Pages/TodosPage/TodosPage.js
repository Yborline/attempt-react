import { useState, useEffect } from 'react';
import {
  Container,
  ButtonAdd,
  DivButton,
  Div,
  Span,
} from './TodosPage.styled';
import TodoForm from 'components/Todo/TodoForm/TodoForm';
import TodoList from 'components/Todo/TodoList/TodoList';
import Filter from 'components/Todo/Filter/Filter';
import Modal from 'components/Modal/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as AddIcon } from '../../icons/add.svg';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import { todosOperations, todosSelectors } from 'redux/todos';
import OtherInfoTodos from 'components/Todo/OtherInfoTodos/OtherInfoTodos';

export default function TodosPage() {
  // const [todos, setTodos] = hooks.useLocalStorage("todos", []);
  const todos = useSelector(todosSelectors.getVisibleSortTodos);
  const loading = useSelector(todosSelectors.getLoading);

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(todosOperations.fetchTodos());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Div>
      <Container>
        <DivButton>
          <ButtonAdd onClick={toggleModal}>
            <Span>
              <AddIcon width="40px" height="40px" />
            </Span>
          </ButtonAdd>
          {showModal && (
            <Modal close={toggleModal}>
              <TodoForm onSave={toggleModal} toggleModal={toggleModal} />
            </Modal>
          )}
          <OtherInfoTodos />
        </DivButton>
        {/* <NavLink to="other">Other</NavLink> */}
        <div>
          <Outlet context={[todos]} />
          <Filter />
          {loading && <h2>Loading...</h2>}
        </div>
      </Container>
      <TodoList />
    </Div>
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
