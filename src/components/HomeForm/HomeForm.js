import { useState } from 'react';
import { LineWave } from 'react-loader-spinner';
import { useCreateTodoMutation } from 'redux/todoSlice';

export const HomeForm = () => {
  const [createTodo, { data, isLoading, isSucces }] =
    useCreateTodoMutation();
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.currentTarget.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // console.log(e.currentTarget.elements.text);

    // const findData = data.find(todo => todo.message === text);
    // console.log(findData);
    // if (findData) {
    //   return alert('Такое уже есть');
    // }

    try {
      await createTodo(text);
    } catch (error) {
      console.log(error);
    }
    setText('');
  };

  //   const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Create Todo
        <input
          value={text}
          type="text"
          name="text"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Create...' : 'Save'}
      </button>
    </form>
  );
};
