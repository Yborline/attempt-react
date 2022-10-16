import { DivItem, Button, DivOther } from "./TodoItem.styled";
import { ReactComponent as DeleteIcon } from "../../../icons/delete.svg";
import { Link, useMatch } from "react-router-dom";

function TodoItem({
  dateNow,
  id,
  text,
  completed,
  onToggleCompleted,
  onDeleteTodo,
  date,
}) {
  const match = useMatch("/todos");

  console.log(match);

  return (
    <DivItem>
      <DivOther>
        <Link to={`${match.pathnameBase}/${id}`}>
          <p>{text}</p>
          <input
            type="checkbox"
            onChange={onToggleCompleted}
            checked={completed}
          ></input>
        </Link>
      </DivOther>
      <Button type="button" onClick={onDeleteTodo}>
        <DeleteIcon width="20px" height="20px" fill="red" />
      </Button>
      <p>{dateNow}</p>
      <p>{date}</p>
    </DivItem>
  );
}

export default TodoItem;

// function TodoItem({ id, todo, onToggleCompleted, onDeleteTodo }) {
//   return (
//     <DivItem>
//       <DivOther>
//         <p>{todo.message}</p>

//         <input
//           type="checkbox"
//           onChange={() => onToggleCompleted(id)}
//           checked={todo.completed}
//         ></input>
//       </DivOther>
//       <Button type="button" onClick={() => onDeleteTodo(id)}>
//         Delete
//       </Button>
//     </DivItem>
//   );
// }
