import * as actions from "../../redux/counter/counter-actions";
import { useDispatch, useSelector } from "react-redux";
import { getValue, getStep } from "../../redux/counter/counter-selectors";

function Counter() {
  const value = useSelector(getValue);
  const step = useSelector(getStep);

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
