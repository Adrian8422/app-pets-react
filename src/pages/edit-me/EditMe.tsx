import React from "react";
import { EditMeComp } from "components/edit-me";
import css from "./editMe.css";

function EditMePage() {
  return (
    <div className={css.root}>
      <h2>Editar perfil</h2>
      <EditMeComp />
    </div>
  );
}
export { EditMePage };
