import React, { useState } from "react";
import { getEntriLogin } from "lib/api";
import { useGetDataUser, useGetStatePage, useSetInDataSignIn } from "hooks";

import css from "./signIn.css";
import { ButtonComp } from "ui/button";
import { InputCompUI } from "ui/input-text";
import { useNavigate } from "react-router-dom";
function SignInComp(props) {
  const navigate = useNavigate();
  const dataProximaPage = useGetStatePage();
  const datosAGuardar = useSetInDataSignIn();
  const datosEnSigninRecoil = useGetDataUser();

  const datosAndToken = useGetDataUser();
  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email && password) {
      ////realizo el fetch para que traiga los datosAndToken
      const dataDelUser = await getEntriLogin(email, password);

      ///seteo data en stateAtom si ya se realizo la funcion del fetch getEntriLogin

      if (dataDelUser) {
        const datosForSaveFromFetch = {
          name: dataDelUser.user.name,
          email: dataDelUser.user.email,
          token: dataDelUser.token,
        };

        datosAGuardar(datosForSaveFromFetch);
        alert("Iniciaste correctamente :D");
        navigate(dataProximaPage);
      }
    } else {
      alert("llena bien los datos");
    }
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <InputCompUI type="email" name="email" />
      <InputCompUI type="password" name="password" />
      <ButtonComp>Ingresar</ButtonComp>
    </form>
  );
}
export { SignInComp };
