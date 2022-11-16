import * as actions from "../../redux/counter/counter-actions";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const step = useSelector((state) => state.counter.step);

  const dispatch = useDispatch();
  const increment = () => dispatch(actions.increment(step));
  const decrement = () => dispatch(actions.decrement(step));

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={decrement}>уменьшить на {step} </button>
      <button onClick={increment}>увеличить на {step} </button>
    </div>
  );
}

export default Counter;
