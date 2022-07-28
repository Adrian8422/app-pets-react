import React from "react";
import { MeDataComp } from "components/me-data/MeData";
import css from "./me.css";
function MePage() {
  return (
    <div className={css.root}>
      <MeDataComp />
    </div>
  );
}

export { MePage };
