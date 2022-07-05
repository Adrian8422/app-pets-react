import React from "react";
import { useMeLatLng, useSetAlgolia } from "hooks";
import { PetsArround } from "components/pets-arround";
import { Card } from "components/card-pet";
function HomeOficial() {
  const results = useSetAlgolia();
  const data = useMeLatLng();

  return (
    <div>
      <PetsArround results={results} />
      <h3>{data["lat"]}</h3>
      <h3>HomeOficial</h3>
    </div>
  );
}

export { HomeOficial };
