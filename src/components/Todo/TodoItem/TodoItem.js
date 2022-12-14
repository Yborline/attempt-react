import {
  LiItem,
  Button,
  DivOther,
  PDate,
  DivDate,
  DivDellDate,
  ButtonDate,
  PText,
  Checkbox,
} from './TodoItem.styled';
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';
import { Link, useMatch } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import hook from '../../../hooks/hookTimer';
import { Outlet } from 'react-router-dom';

function TodoItem({
  id,
  text,
  completed,
  onToggleCompleted,
  onDeleteTodo,
  date,
}) {
  const [time, setTime] = useState(() => new Date());
  const [finalTime, setFinalTime] = hook.useFinaltimer(date, '');
  const [showTime, setShowTime] = useState(false);

  const togglebutton = () => {
    setShowTime(!showTime);
  };

  return (
    <LiItem>
      <DivOther>
        <PText>{text}</PText>
        <Checkbox
          type="checkbox"
          onChange={onToggleCompleted}
          checked={completed}
        ></Checkbox>
      </DivOther>
      <DivDellDate>
        <Button type="button" onClick={onDeleteTodo}>
          <DeleteIcon width="20px" height="20px" fill="red" />
        </Button>
        <DivDate>
          <ButtonDate
            date={finalTime}
            type="button"
            onClick={togglebutton}
          >
            {date}
          </ButtonDate>
          {/* {showTime && <p>{finalTime}</p>} */}
          {showTime &&
            (finalTime === false ? (
              <p>время закончилось</p>
            ) : (
              <PDate>{finalTime}</PDate>
            ))}
        </DivDate>
      </DivDellDate>
    </LiItem>
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
