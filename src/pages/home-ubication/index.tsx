import React from "react";
import { Link } from "react-router-dom";
import { GetUbication } from "components/get-ubication";
// import { useMeLatLng } from "hooks";
import { useNavigate } from "react-router-dom";
import css from "./home.css";
function HomeUbication() {
  return (
    <div className={css.containerPage}>
      <GetUbication />
    </div>
  );
}

export { HomeUbication };
