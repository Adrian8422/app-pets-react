import { CreateAndUpdateReport } from "components/comp-form-report/Index";
import { useGetReport, useGetToken, useImgRecoilDropzone } from "hooks";
import { getMeOneReport } from "lib/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateReportComp() {
  const reporte = useGetReport();

  return (
    <div>
      Update report
      <CreateAndUpdateReport
        pictureCurrentReport={reporte["pictureURL"]}
        placeholder={reporte["namePet"]}
      />
    </div>
  );
}
export { UpdateReportComp };
