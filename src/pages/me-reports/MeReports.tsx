import React from "react";
import { MeReportsComp } from "components/me-reports/MeReports";
import { useReportesDelUser, useMeLatLng } from "hooks/atom";
import { LoadingComp } from "components/loading";
import css from "./meReports.css";
function MeReportsPage() {
  LoadingComp;
  return (
    <div className={css.root}>
      <MeReportsComp />
    </div>
  );
}
export { MeReportsPage };
