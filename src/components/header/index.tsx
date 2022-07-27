import React from "react";
import { ButtonMenu } from "components/buttonMenu";
import { Window } from "components/window";

import css from "./header.css";
import { useNavigate } from "react-router-dom";
import { useSetWindowHeaderState } from "hooks";
function HeaderComp(props) {
  const [windowState, setWindowState]: any = useSetWindowHeaderState();
  const navigate = useNavigate();
  const handleToNavigate = () => {
    setWindowState(false);
    navigate("/");
  };
  return (
    <div>
      <header className={css.root}>
        <img
          onClick={handleToNavigate}
          style={{ width: "43px", filter: "drop-shadow(4px 3px 4px #000)" }}
          src="./src/assets/petShadow.png"
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
