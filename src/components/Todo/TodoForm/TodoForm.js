import { useState } from 'react';
import {
  Form,
  Label,
  Div,
  TextArea,
  Input,
  DivButton,
  ButtonClosed,
} from './TodoForm.styled';
import { toastError, toastSucces } from '../../../toast/toast';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/todos/todos-operations';

function TodoForm({ onSave, valueForm = [], onSubmit, toggleModal }) {
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const state = { message, date };
    // valueForm.some((todo) => todo.message === message)
    if (message.trim() === '') {
      toastError('Введите текст');
      reset();
    } else {
      dispatch(addTodo(state));
      onSave();
      reset();
    }
  };

  const handleChange = event => {
    const { value, name } = event.currentTarget;
    if (value.length > 366) {
      return setTimeout(
        toastError('Maximum number of characters 366'),
        10000,
      );
    }
    switch (name) {
      case 'message':
        setMessage(value);
        break;
      case 'date':
        setDate(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setMessage('');
    setDate('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Заметка
          <TextArea
            placeholder="Enter text"
            value={message}
            type="text"
            name="message"
            onChange={handleChange}
            // id={nameId}
            required
          />
        </Label>
        <Label>
          Execution date
          <Input
            value={date}
            type="date"
            name="date"
            onChange={handleChange}
            // id={nameId}
            required
          />
        </Label>
        <DivButton>
          <button type="submit">Save</button>
          <ButtonClosed type="button" onClick={toggleModal}>
            closed
          </ButtonClosed>
        </DivButton>
      </Form>
    </>
  );
}

export default TodoForm;
