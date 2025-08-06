import React, { act } from "react";

export function ReducerHook(state, action) {
  switch (action.type) {
    case "Add":
      const dublicate = state.find((item) => item.id === action.payload.id);
      if (dublicate) {
        return state;
      }
      return [...state, action.payload];
    case "Remove":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
