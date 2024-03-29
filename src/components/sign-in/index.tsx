import React, { useState } from "react";
import { getEntriLogin } from "lib/api";
import {
  useGetDataUser,
  useGetStatePage,
  useSetInDataSignIn,
  useSetterRealToken,
} from "hooks/atom";

import css from "./signIn.css";
import { ButtonComp } from "ui/button";
import { InputCompUI } from "ui/input-text";
import { useNavigate } from "react-router-dom";
function SignInComp(props) {
  const [token, setterToken] = useSetterRealToken();
  const navigate = useNavigate();
  const dataProximaPage = useGetStatePage();
  const datosAGuardar = useSetInDataSignIn();
  const datosEnSigninRecoil = useGetDataUser();
  const datosAndToken = useGetDataUser();
  const passString = window.localStorage.getItem("pass");
  const PassUserLocalSt = JSON.parse(passString);
  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email) {
      alert("falta ingresar su email");
    }
    if (!password) {
      alert("ingrese su contraseña correctamente");
    }
    if (!email && !password) {
      alert("llena todos los campos correctamente");
    }

    if (email && password == PassUserLocalSt) {
      ////realizo el fetch para que traiga los datosAndToken
      const dataDelUser = await getEntriLogin(email, password);

      ///seteo data en stateAtom si ya se realizo la funcion del fetch getEntriLogin

      if (dataDelUser) {
        if (dataDelUser.token) {
          const datosForSaveFromFetch = {
            name: dataDelUser.user.name,
            email: dataDelUser.user.email,
            token: dataDelUser.token,
          };

          setterToken(dataDelUser.token);

          datosAGuardar(datosForSaveFromFetch);
          alert("Iniciaste correctamente :D");
          navigate(dataProximaPage);
        } else {
          alert("usuario no registrado");
          navigate("/sign-up");
        }
      }
    } else if (email && password !== PassUserLocalSt) {
      alert("contraseña incorrecta, intenta nuevamente");
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
