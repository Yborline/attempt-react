import { counterActions, counterSelector } from 'redux/counter';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const value = useSelector(counterSelector.getValue);
  const step = useSelector(counterSelector.getStep);

  const dispatch = useDispatch();
  const increment = () => dispatch(counterActions.increment(step));
  const decrement = () => dispatch(counterActions.decrement(step));

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={decrement}>уменьшить на {step} </button>
      <button onClick={increment}>увеличить на {step} </button>
    </div>
  );
}

export default Counter;
