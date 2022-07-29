import { ChangePasswordComp } from "components/change-password";
import React from "react";
import css from "./updatePass.css";
function PageUpdatePassword() {
  return (
    <div className={css.root}>
      <h2>Cambiar contraseña</h2>
      <ChangePasswordComp />
    </div>
  );
}
export { PageUpdatePassword };
