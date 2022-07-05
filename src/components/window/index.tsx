import { useBurgerActive, useHeaderState } from "hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./window.css";
type PropsWindowHeader = {
  redirectOne: string;
  redirectTwo: string;
  redirectThree: string;
};
function Window(props: PropsWindowHeader) {
  const currentDate = useBurgerActive();
  return (
    <div
      id={currentDate ? css.root : css.root}
      className={currentDate ? css.active : null}
    >
      <Link className={css.link} to={"/page2"}>
        {props.redirectOne}
      </Link>
      <Link className={css.link} to={"/"}>
        {" "}
        {props.redirectTwo}
      </Link>
      <Link className={css.link} to={"/"}>
        {props.redirectThree}
      </Link>
      <h3>Data del user connected</h3>
    </div>
  );
}
export { Window };
