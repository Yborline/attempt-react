import * as actions from "../../redux/counter/counter-actions";
import { connect } from "react-redux";

function Counter({ value, onIncrement, onDecrement, step }) {
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => onDecrement(step)}>уменьшить на {step} </button>
      <button onClick={() => onIncrement(step)}>увеличить на {step} </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (value) => dispatch(actions.increment(value)),
    onDecrement: (value) => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
