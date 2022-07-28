import React, { useEffect, useState } from "react";
import { Card } from "components/card-pet/Index";
import {
  useReportesDelUser,
  useSeterReportUser,
  useSetReportsUser,
  useGetToken,
} from "hooks";
import { getMeReports } from "lib/api";
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
    <div style={{ marginTop: "56px" }}>
      {mePets.map((reporte) => (
        <Card
          pictureURL={reporte.pictureURL}
          location={reporte.location}
          name={reporte.namePet}
          children="deleted"
          id={reporte.id}
        />
      ))}
    </div>
  );
}
export { MeReportsComp };
