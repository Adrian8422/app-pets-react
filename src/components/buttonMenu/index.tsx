import React, { useState } from "react";
import css from "./buttonMenu.css";
import { Link } from "react-router-dom";
import { useBurgerActive, useHeaderState } from "hooks";
type PropsButtonMenu = {};

function ButtonMenu(props) {
  const [click, setClick] = useState(false);
  const seteando = useHeaderState(click);
  const currentDate = useBurgerActive();

  const inactive = css.navMenu;
  const active = css.active;

  const handleClick = () => {
    if (click == false) {
      setClick(true);
    } else if (click == true) {
      setClick(false);
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        id={currentDate ? inactive : inactive}
        className={currentDate ? active : null}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
export { ButtonMenu };
