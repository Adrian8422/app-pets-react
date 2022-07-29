import { CreateReport } from "components/create-report";
import React from "react";
import css from "./createReport.css";
function CreateReportPage() {
  return (
    <div className={css.root}>
      <div>
        <CreateReport />
      </div>
    </div>
  );
}
export { CreateReportPage };
