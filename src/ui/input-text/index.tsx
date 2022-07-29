import React from "react";
import css from "./inputText.css";
type PropsInput = {
  type: string;
  name: string;
  value?: any;
  placeholder?: string;
};
function InputCompUI(props: PropsInput) {
  return (
    <input
      className={css.input}
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}
export { InputCompUI };
