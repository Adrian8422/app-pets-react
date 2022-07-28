import React from "react";
import { UpdateReportComp } from "components/update-report/UpdateReport";
import css from "./updateReport.css";
function UpdateReportPage() {
  return (
    <div className={css.root}>
      <h1>Page update report</h1>
      <UpdateReportComp />
    </div>
  );
}
export { UpdateReportPage };
