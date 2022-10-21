import { useState } from "react";
import { Form, Label, Div } from "./TodoForm.styled";
import { toastError, toastSucces } from "../../../toast/toast";

function TodoForm({ valueForm = [], onSubmit, toggleModal }) {
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const state = { message, date };
    // valueForm.some((todo) => todo.message === message)
    message.trim() === "" ? toastError("Введите текст") : onSubmit(state);
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
