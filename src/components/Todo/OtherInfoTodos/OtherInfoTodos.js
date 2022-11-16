// import { useOutletContext } from "react-router-dom";
import { useMemo } from "react";
import { connect } from "react-redux";
import { getVisibleTodos } from "../../../hooks/getVisibleTodos";
// import {
//   deleteTodo,
//   toggleCompleted,
// } from "../../../redux/todos/todos-actions";

const OtherInfoTodos = ({ todos, total }) => {
  // const [todos] = useOutletContext();

  // const totalTodoCaunt = useMemo(() => {
  //   return todos.reduce(
  //     (total, todo) => (todo.completed ? total + 1 : total),
  //     0
  //   );
  // }, [todos]);

  return (
    <>
      <p>Amount todo {total}</p>
      <p>Number of completed {todos}</p>
    </>
  );
};

const totalTodoCaunt = (todos) => {
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
};

const mapStateToProps = ({ todos: { items } }) => ({
  total: items.length,
  todos: totalTodoCaunt(items),
});

export default connect(mapStateToProps)(OtherInfoTodos);
