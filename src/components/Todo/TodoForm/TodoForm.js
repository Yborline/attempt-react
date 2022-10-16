import { useState } from "react";
import { Form, Label, Div } from "./TodoForm.styled";
import { ToastContainer } from "react-toastify";

function TodoForm({ valueForm = [], onSubmit, toggleModal }) {
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const dateNow = new Date();
    const state = { message, date, dateNow };
    valueForm.some((todo) => todo.message === message)
      ? alert("Такой номер уже есть ")
      : onSubmit(state);
    reset();
  };

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    switch (name) {
      case "message":
        setMessage(value);
        break;
      case "date":
        setDate(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setMessage("");
    setDate("");
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
