import { combineReducers } from "redux";
import { DECREMENT, INCREMENT } from "./counter-types";

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    // ...state,
    // counter: {
    //   ...state.counter,
    //   value: state.counter.value + payload,
    // },

    case DECREMENT:
      return state - payload;
    // ...state,
    // counter: {
    //   ...state.counter,
    //   value: state.counter.value - payload,
    // },

    default:
      return state;
    //   console.log(action);
  }
};

const stepReducer = (state = 15, action) => state;

export const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});
