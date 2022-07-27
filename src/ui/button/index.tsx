import React from "react";
import css from "./button.css";
type PropsButton = {
  children: any;
  id?: any;
};

function ButtonComp(props: PropsButton) {
  const pageIn = location.pathname == "/pets-around";
  return pageIn ? (
    <button id={props.id} className={css.button2}>
      {props.children}
    </button>
  ) : (
    <button id={props.id} className={css.button}>
      {props.children}
    </button>
  );
}
export { ButtonComp };
