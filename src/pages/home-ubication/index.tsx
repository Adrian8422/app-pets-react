import React from "react";
import { Link } from "react-router-dom";
import { GetUbication } from "components/get-ubication";
import { useMeLatLng } from "hooks";
import { useNavigate } from "react-router-dom";
function HomeUbication() {
  const data = useMeLatLng();
  console.log(data);
  return (
    <div>
      <GetUbication />
      <Link to={"/pets-around"}>Redirect</Link>
    </div>
  );
}

export { HomeUbication };
