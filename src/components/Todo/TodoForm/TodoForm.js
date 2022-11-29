import { useState } from 'react';
import { Form, Label, Div } from './TodoForm.styled';
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
          <textarea
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
          <input
            value={date}
            type="date"
            name="date"
            onChange={handleChange}
            // id={nameId}
            required
          />
        </Label>

        <button type="submit">Save</button>
        <button type="button" onClick={toggleModal}>
          closed
        </button>
      </Form>
    </>
  );
}

export default TodoForm;
