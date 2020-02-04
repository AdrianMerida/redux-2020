import React from "react";
import { connect } from "react-redux";
import { sumaVueltas } from "../redux/actions";

const Component = ({ vueltas, dispatch }) => {
  return (
    <div style={{ border: "1px solid red", padding: 10, margin: 10 }}>
      <p>
        Has dado <b>{vueltas}</b> vueltas
      </p>
      <button onClick={() => dispatch(sumaVueltas())}>
        Date una vuelta Alberto
      </button>
      <button onClick={() => dispatch(sumaVueltas(5))}>
        Date 5 vueltas Alberto
      </button>
      <button onClick={() => dispatch(sumaVueltas(-1))}>Quita 1 vuelta</button>
    </div>
  );
};

//export const Contador = Component;
export const Contador = connect(state => state)(Component);
