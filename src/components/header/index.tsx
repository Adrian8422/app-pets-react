import React from "react";
import { ButtonMenu } from "components/buttonMenu";
import { Window } from "components/window";

import css from "./header.css";
function HeaderComp(props) {
  return (
    <div>
      <header className={css.root}>
        <img
          src={
            "https://current-desafio-m-7.herokuapp.com/image%201%20(1).fbdbb43c.svg"
          }
        />
        <ButtonMenu />
      </header>
      <Window
        redirectOne="Mis Datos"
        redirectTwo="Mis mascotas reportadas"
        redirectThree="Reportar mascota"
      />
    </div>
  );
}

export { HeaderComp };
