import { useGetToken } from "hooks/atom";
import { updatePassword } from "lib/api";
import css from "./changePass.css";
import React from "react";
import { ButtonComp } from "ui/button";
import { InputCompUI } from "ui/input-text";

function ChangePasswordComp() {
  const token = useGetToken();
  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordActual = e.target.currentPass.value;
    const repitaPassword = e.target.repeatPass.value;
    const newPassword = e.target.newPass.value;
    if (passwordActual == repitaPassword) {
      if (newPassword) {
        updatePassword(token, passwordActual, repitaPassword, newPassword);
        alert("cambios realizados con éxito");
      } else {
        alert("ocurrió un error");
      }
    } else {
      alert("no coinciden las contraseñas");
    }
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <InputCompUI
        name="currentPass"
        type="text"
        placeholder="password-actual"
      />
      <InputCompUI
        name="repeatPass"
        type="text"
        placeholder="repita-password"
      />
      <InputCompUI
        name="newPass"
        type="text"
        placeholder="ingrese password nueva"
      />
      <ButtonComp>Modificar</ButtonComp>
    </form>
  );
}

export { ChangePasswordComp };
