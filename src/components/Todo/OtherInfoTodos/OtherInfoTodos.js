import { useOutletContext } from "react-router-dom";
import { useMemo } from "react";

export default function OtherInfoTodos() {
  const [todos] = useOutletContext();
  const totalTodoCaunt = useMemo(() => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  }, [todos]);

  return (
    <>
      <p>Amount todo {todos.length}</p>
      <p>Number of completed {totalTodoCaunt}</p>
    </>
  );
}
