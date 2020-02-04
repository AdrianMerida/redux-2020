import { createStore } from "redux";

const initState = {
  vueltas: 10
};

const rootReducer = (state = initState, action) => {
  console.log("ACTION", action);
  console.log(state);
  if (action.type == "SUMA_VUELTAS") {
    let newVueltas = state.vueltas + action.value;
    if (newVueltas < 0) {
      newVueltas = 0;
    }
    return {
      ...state,
      vueltas: newVueltas
    };
  }
  return state;
};

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
