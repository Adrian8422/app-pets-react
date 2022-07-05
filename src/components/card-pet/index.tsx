import { getEmailForSent, useSentEmail, useSetEmail } from "hooks";
import React, { useState } from "react";
import css from "./cardPet.css";
import { ReportInfoComp } from "components/report-info";

////VER SI PUEDO USAR ESTA MISMA CARD PARA MOSTRAR MIS REPORTES REALIZADOS CUANDO YA TENGA EL LOGIIN Y TODO BIEN :D
type PropsCard = {
  pictureURL: string;
  name: string;
  location: string;
  emailUser: string;
};

function Card(props: PropsCard) {
  const [report, setReport] = useState(false);
  const [email, setEmail] = useState("");
  const hookGetReport = useSetEmail(email);
  const getEmailReal = getEmailForSent();
  const [dataDelForm, setDataDelForm] = useState({});
  const useEmail = useSentEmail(dataDelForm, getEmailReal);

  function getDataForm(data) {
    setDataDelForm(data);
  }

  const reportInfo = () => {
    setEmail(props.emailUser);
    if (report == true) {
      setReport(false);
    } else if (report == false) {
      setReport(true);
    }
  };
  console.log("email ya cocido", getEmailReal);
  console.log("email ya message", useEmail);
  return (
    <div>
      <div className={css.root}>
        <div className={css.containerImg}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={props.pictureURL}
            alt=""
          />
        </div>
        <div>
          <h2>{props.name}</h2>
          <h3>{props.location}</h3>
          <h3 onClick={reportInfo}>Reportar</h3>
        </div>
      </div>
      {report ? <ReportInfoComp getData={getDataForm} /> : null}
    </div>
  );
}
export { Card };
