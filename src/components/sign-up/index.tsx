import React, { useState } from "react";
import { setDataSignUp } from "lib/api";
import { getDataSignUp, useSetDataSignUp } from "hooks/atom";
import { useNavigate } from "react-router-dom";
import { ButtonComp } from "ui/button";
import css from "./signUp.css";
import { InputCompUI } from "ui/input-text";

function SignUpComp(props) {
  const navigate = useNavigate();
  const datoGuardadoEnRecoil = getDataSignUp();
  const saveSignUp = useSetDataSignUp();
  function handleSubmit(e) {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!nombre) {
      alert("falta completar el campo nombre");
    }
    if (!email) {
      alert("falta completar el campo email");
    }
    if (!password) {
      alert("escriba alguna contraseña para poder registrarse");
    }
    if (!nombre && !email && !password) {
      alert("llena todos los campos correctamente");
    }

    if (nombre && email && password) {
      const fetch = setDataSignUp({ nombre, email, password });
      if (fetch) {
        saveSignUp({ nombre, email, password });
        window.localStorage.setItem("pass", JSON.stringify(password));

        alert("usuario creado correctamente");
        navigate("/sign-in"), { replace: true };
      }
    }
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <InputCompUI type="text" placeholder="Ingrese su nombre" name="nombre" />
      <InputCompUI type="email" placeholder="Ingrese su email" name="email" />
      <InputCompUI
        type="password"
        placeholder="Ingrese su contraseña"
        name="password"
      />
      <ButtonComp>Registrarme</ButtonComp>
    </form>
  );
}
export { SignUpComp };
