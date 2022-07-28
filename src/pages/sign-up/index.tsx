import React, { useState } from "react";
import { SignUpComp } from "components/sign-up/SignUp";
import { useGetDataUser } from "hooks";
import { Link } from "react-router-dom";
import css from "./signUp.css";
function SignPage() {
  const hayToken = useGetDataUser();
  console.log("pageuserData", hayToken);

  return (
    <div className={css.root}>
      <div>
        <h3>Ya estas registrado?</h3>
      </div>
      <div>
        <Link to="/sign-in"> Iniciar sesión</Link>
      </div>

      <div>
        <h2>Registrarme</h2>

        <SignUpComp />
      </div>
    </div>
  );
}
export { SignPage };
