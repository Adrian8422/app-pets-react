import React, { useEffect, useState } from "react";
import { Card } from "components/card-pet";
import {
  useReportesDelUser,
  useSeterReportUser,
  useSetReportsUser,
  useGetToken,
} from "hooks/atom";
import { getMeReports } from "lib/api";
import css from "./meReports.css";
function MeReportsComp() {
  const mePets = useReportesDelUser();

  const [reportes, setReportes] = useSetReportsUser();
  const token = useGetToken();
  useEffect(() => {
    if (token) {
      getMeReports(token).then((data) => {
        setReportes(data);
      });
    }
  }, [token]);

  return (
    <div className={css.root}>
      {mePets[0] ? (
        mePets.map((reporte) => (
          <Card
            key={reporte.id}
            pictureURL={reporte.pictureURL}
            location={reporte.location}
            name={reporte.namePet}
            children="deleted"
            id={reporte.id}
          />
        ))
      ) : (
        <h3>No hay reportes</h3>
      )}
    </div>
  );
}
export { MeReportsComp };
