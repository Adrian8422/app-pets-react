import React from "react";
import { useGetAlgoliaReports, useMeLatLng, useSetAlgolia } from "hooks/atom";
import { PetsArround } from "components/pets-arround";
import { Card } from "components/card-pet";
import css from "./homeOficial.css";
function HomeOficial() {
  return (
    <div className={css.root}>
      <h2 style={{ marginTop: "92px" }}>Reportes cercanos</h2>
      <PetsArround />
    </div>
  );
}

export { HomeOficial };
