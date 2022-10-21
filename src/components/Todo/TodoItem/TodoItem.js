import { DivItem, Button, DivOther } from "./TodoItem.styled";
import { ReactComponent as DeleteIcon } from "../../../icons/delete.svg";
import { Link, useMatch } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import hook from "../../../hooks/hookTimer";
import { Outlet } from "react-router-dom";

function TodoItem({
  id,
  text,
  completed,
  onToggleCompleted,
  onDeleteTodo,
  date,
}) {
  const [time, setTime] = useState(() => new Date());
  const [finalTime, setFinalTime] = hook.useFinaltimer(date, "");
  const [showTime, setShowTime] = useState(false);

  const togglebutton = () => {
    setShowTime(!showTime);
  };

  return (
    <DivItem>
      <DivOther>
        <p>{text}</p>
        <input
          type="checkbox"
          onChange={onToggleCompleted}
          checked={completed}
        ></input>
      </DivOther>
      <Button type="button" onClick={onDeleteTodo}>
        <DeleteIcon width="20px" height="20px" fill="red" />
      </Button>
      <button type="button" onClick={togglebutton}>
        {date}
      </button>
      {showTime && <p>{finalTime}</p>}
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
