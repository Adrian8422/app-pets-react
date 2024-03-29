import { CreateAndUpdateReport } from "components/form-report";
import { useGetReport, useGetToken, useImgRecoilDropzone } from "hooks/atom";
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
        defaultValue={reporte["namePet"]}
      />
    </div>
  );
}
export { UpdateReportComp };
