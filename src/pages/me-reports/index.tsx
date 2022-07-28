import React from "react";
import { MeReportsComp } from "components/me-reports/Index";
import { useReportesDelUser, useMeLatLng } from "hooks";
import { LoadingComp } from "components/loading/Index";
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
