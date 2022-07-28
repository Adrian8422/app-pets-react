import { SignInComp } from "components/sign-in/SignIn";
import React from "react";
import { Link } from "react-router-dom";
import css from "./signIn.css";
function SignInPage() {
  return (
    <div className={css.root}>
      <div>
        <h3>Aún no estas registrado?</h3>
      </div>
      <div>
        <Link to="/sign-up">Registrarme</Link>
      </div>

      <div>
        <h2>Inicia sesion</h2>

        <SignInComp />
      </div>
    </div>
  );
}
export { SignInPage };
