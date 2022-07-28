import {
  useGetToken,
  useGetDataUser,
  useSetChangesDataUser,
  useSeterReportUser,
  useSetReportsUser,
} from "hooks";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { ButtonComp } from "ui/button/Index";
import css from "./meData.css";

function MeDataComp() {
  const [userActiveOrDesactive, setUserActiveOrDesactive] =
    useSetChangesDataUser();
  const [clearReports, setClearReports] = useSetReportsUser();
  const meDataUser = useGetDataUser();
  const navigate = useNavigate();

  const handleClick = (e) => {
    switch (e.target.id) {
      case "editarPerfil":
        navigate("/edit-me"), { replace: true };
        break;
      case "cambiarContraseña":
        navigate("/change-password"), { replace: true };
        break;
      case "cerrarSesion":
        localStorage.removeItem("data_user");
        setUserActiveOrDesactive({
          email: null,
          id: null,
          password: null,
          user_id: null,
          token: null,
        });
        setClearReports([]);

        alert("sesion cerrada con éxito");
        navigate("/sign-in"), { replace: true };
        break;
    }
  };

  return (
    <div>
      <div>
        <h2>Mis datos</h2>
        <h3>user:{meDataUser.name}</h3>
        <h3>{meDataUser.email}</h3>
        <div className={css.containerButton}>
          <button
            className={css.button}
            id="editarPerfil"
            onClick={handleClick}
          >
            Editar perfil
          </button>
          <button
            className={css.button}
            id="cambiarContraseña"
            onClick={handleClick}
          >
            Cambiar contraseña
          </button>
          <button
            className={css.button}
            id="cerrarSesion"
            onClick={handleClick}
          >
            Cerrar sesion
          </button>
        </div>
      </div>
    </div>
  );
}
export { MeDataComp };
