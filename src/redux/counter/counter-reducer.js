import { combineReducers } from "redux";
import { increment, decrement } from "./counter-actions";
import { createReducer } from "@reduxjs/toolkit";

const valueReducer = createReducer(0, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, { payload }) => state - payload,
});

const stepReducer = (state = 15, action) => state;

export const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});
