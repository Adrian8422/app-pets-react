import React from "react";
import css from "./inputText.css";
type PropsInput = {
  type: string;
  name: string;
  value?: any;
  placeholder?: string;
  defaultValue?: string;
};
function InputCompUI(props: PropsInput) {
  return (
    <input
      defaultValue={props.defaultValue}
      className={css.input}
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}
export { InputCompUI };
