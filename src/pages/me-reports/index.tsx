import React from "react";
import { MeReportsComp } from "components/me-reports";
import { useReportesDelUser, useMeLatLng } from "hooks/atom";
import css from "./meReports.css";
function MeReportsPage() {
  return (
    <div className={css.root}>
      <MeReportsComp />
    </div>
  );
}
export { MeReportsPage };
