import React from "react";
import ReactDOM from "react-dom";
import { Contador } from "./Contador";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { MuchosContadores } from "./MuchosContadores";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Redux Demo</h1>
      <Contador />
      <Contador />
      <Contador />
      <MuchosContadores />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
