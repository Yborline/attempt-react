import { useSelector } from 'react-redux';
import { getTodos } from 'redux/todos/todos-selectors';
import { useState } from 'react';
import {
  getTotalComplatedTodo,
  getLengthTodos,
} from 'redux/todos/todos-selectors';
import { Div, ButtonOther, P } from './OtherInfoTodos.styled';

const OtherInfoTodos = () => {
  const [showText, setShowText] = useState(false);
  const todoComplated = useSelector(getTotalComplatedTodo);
  const todoLength = useSelector(getLengthTodos);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <Div>
      <ButtonOther onClick={handleClick}>Other</ButtonOther>
      {showText && (
        <div>
          <P>Amount todo {todoLength}</P>
          <p>Number of completed {todoComplated}</p>
        </div>
      )}
    </Div>
  );
};

export default OtherInfoTodos;
