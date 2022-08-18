import { CreateAndUpdateReport } from "components/form-report";
import React from "react";
import css from "./createReport.css";

function CreateReport() {
  return (
    <div className={css.root}>
      <h2 style={{ marginBottom: "11px" }}>Crear reporte</h2>
      <CreateAndUpdateReport />
    </div>
  );
}
export { CreateReport };
