import { useSelector } from 'react-redux';
import { getTodos } from 'redux/todos/todos-selectors';
import { useState } from 'react';
import {
  getTotalComplatedTodo,
  getLengthTodos,
} from 'redux/todos/todos-selectors';

const OtherInfoTodos = () => {
  const [showText, setShowText] = useState(false);
  const todoComplated = useSelector(getTotalComplatedTodo);
  const todoLength = useSelector(getLengthTodos);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <>
      <button onClick={handleClick}>Other</button>
      {showText && (
        <div>
          <p>Amount todo {todoLength}</p>
          <p>Number of completed {todoComplated}</p>
        </div>
      )}
    </>
  );
};

export default OtherInfoTodos;
