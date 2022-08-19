import { setValueLatLng, useMeLatLng } from "hooks/atom";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import css from "./get-ubication.css";

function GetUbication() {
  const navigate = useNavigate();
  const [cords, setCoords] = useState({});

  const [latLng, setLatLng] = setValueLatLng();
  const location = useMeLatLng();

  const handleUbication = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function succesfull(position) {
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setLatLng({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      window.localStorage.setItem("coordenadasUser", JSON.stringify(latLng));
    }
    function error(err) {
      console.log("error en ubication");
    }
    navigator.geolocation.getCurrentPosition(succesfull, error, options);

    if (latLng["lat"] && latLng["lng"]) {
      if (latLng) {
        setTimeout(() => {
          navigate("/pets-around");
        }, 2000);
      }
    }
  };

  return (
    <div>
      <div className={css.containerPage}>
        <h1>Mascotas perdidas cerca tuyo</h1>
        <h2 className={css.h2}>
          Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
          conocer tu ubicación.
        </h2>
        <button className={css.button} onClick={handleUbication}>
          comenzar
        </button>
      </div>
    </div>
  );
}
export { GetUbication };
