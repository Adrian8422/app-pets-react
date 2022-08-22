import { useGetToken } from "hooks/atom";
import { updatePassword } from "lib/api";
import css from "./changePass.css";
import React from "react";
import { ButtonComp } from "ui/button";
import { InputCompUI } from "ui/input-text";
import { useNavigate } from "react-router-dom";

function ChangePasswordComp() {
  const navigate = useNavigate();
  const token = useGetToken();
  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordActual = e.target.currentPass.value;
    const repitaPassword = e.target.repeatPass.value;
    const newPassword = e.target.newPass.value;
    if (!passwordActual && !repitaPassword && !newPassword) {
      alert("completa los campos para ejecutar los cambios");
    }
    if (passwordActual && repitaPassword && newPassword) {
      if (passwordActual == repitaPassword) {
        if (newPassword) {
          updatePassword(token, passwordActual, repitaPassword, newPassword);
          window.localStorage.setItem("pass", JSON.stringify(newPassword));
          alert("cambios realizados con éxito");
        } else {
          alert("ocurrió un error");
        }
      } else {
        alert("no coinciden las contraseñas");
      }
      if (newPassword) {
        navigate("/me");
      }
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
