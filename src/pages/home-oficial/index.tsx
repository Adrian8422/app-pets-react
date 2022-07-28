import React from "react";
import { useMeLatLng, useSetAlgolia } from "hooks";
import { PetsArround } from "components/pets-arround/Index";
import { Card } from "components/card-pet/Index";
import css from "./homeOficial.css";
function HomeOficial() {
  const results = useSetAlgolia();
  const data = useMeLatLng();

  return (
    <div className={css.root}>
      <h2 style={{ marginTop: "92px" }}>Reportes cercanos</h2>
      <PetsArround results={results} />
    </div>
  );
}

export { HomeOficial };
