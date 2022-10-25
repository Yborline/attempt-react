import { useOutletContext } from "react-router-dom";

export default function OtherInfoTodos() {
  const [todos, totalTodoCaunt] = useOutletContext();
  return (
    <>
      <p>Amount todo {todos}</p>
      <p>Number of completed {totalTodoCaunt}</p>
    </>
  );
}
