import React from "react";
import { MapboxComp } from "lib/mapbox";
import { DropzoneComp } from "lib/dropzone";
// import { useCallback } from "react";
// import { useState } from "react";
import {
  useSetReportsUser,
  useGetToken,
  useImgRecoilDropzone,
  useMapboxCoords,
} from "hooks/atom";
import { createReport, getMeReports, updateReportInDB } from "lib/api";
import { useNavigate, useParams } from "react-router-dom";
import css from "./createAndUpdateReport.css";
import { ButtonComp } from "ui/button";
import { InputCompUI } from "ui/input-text";

//// Componente apto para crear y para modificar reporte

function CreateAndUpdateReport(props) {
  const params = useParams();
  const navigate = useNavigate();
  const token = useGetToken();
  const coords = useMapboxCoords();
  const petsUser = getMeReports(token);
  const imgDropzone = useImgRecoilDropzone();
  const [newAllReports, setNewAllReports] = useSetReportsUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const namePet = e.target.nombre.value;
    const lat = coords.lng;
    const lng = coords.lat;
    const location = coords.location;
    const pictureURL = imgDropzone["imageZone"];
    if (!namePet && !lat && !lng && !location && !pictureURL) {
      alert("lléna todos los campos");
    }

    if (namePet && lat && lng && location && pictureURL) {
      await createReport(namePet, location, lat, lng, pictureURL, token);
      ///una ves que creo un nuevo reporte actualizo el atomo state para que tenga otra ves los reportes actuales con el mismo agregado

      if (createReport && petsUser) {
        await getMeReports(token).then((data) => {
          setNewAllReports(data);
        });
        setTimeout(() => {
          if (setNewAllReports) {
            alert("reporte creado con éxito");
          }
          navigate("/me-reports");
        }, 3000);
      }
    }
  };
  const inPage = location.pathname == "/create-report";

  /// Update report
  const updateReport = (e) => {
    e.preventDefault();

    const namePet = e.target.changeNombre.value;
    const idReport = params.id;
    const lat = coords.lat;
    const lng = coords.lng;
    const location = coords.location;
    const pictureURL = imgDropzone["imageZone"];

    if (!namePet && !lat && !lng && !location && !pictureURL) {
      alert("lléna todos los campos");
    }

    if (idReport && namePet && lat && lng && location && pictureURL) {
      updateReportInDB(
        {
          namePet: namePet,
          location: location,
          lat: lat,
          lng: lng,
          pictureURL: pictureURL,
        },
        token,
        idReport
      );

      if (updateReportInDB && petsUser) {
        getMeReports(token).then((data) => {
          setNewAllReports(data);
        });
        setTimeout(() => {
          if (setNewAllReports) {
            alert("reporte modificado con éxito");
          }
          navigate("/me-reports");
        }, 3000);
      }
    }
  };

  return inPage ? (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <InputCompUI
          name="nombre"
          type="text"
          placeholder="Nombre de su mascota"
        />
        <div>
          <DropzoneComp />
        </div>
        <MapboxComp />
        <ButtonComp>Reportar como perdido</ButtonComp>
      </form>
    </div>
  ) : (
    <div>
      <form className={css.form} onSubmit={updateReport}>
        <InputCompUI
          name="changeNombre"
          type="text"
          placeholder={props.placeholder}
        />
        <div>
          <DropzoneComp pictureURL={props.pictureCurrentReport} />
        </div>
        <MapboxComp />
        <ButtonComp>Modificar reporte</ButtonComp>
      </form>
    </div>
  );
}
export { CreateAndUpdateReport };
