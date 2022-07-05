import React from "react";
import { Card } from "components/card-pet";
type PropsPetsArround = {
  results: [];
};

function PetsArround(props: PropsPetsArround) {
  return (
    <div>
      {props.results ? (
        props.results.map((card) => (
          <Card
            key={card["objectID"]}
            name={card["name"]}
            location={card["location"]}
            pictureURL={card["pictureURL"]}
            // reportar={"Reportar"}
            emailUser={card["emailUser"]}
          />
        ))
      ) : (
        <h3>No hay reportes</h3>
      )}
    </div>
  );
}
export { PetsArround };
