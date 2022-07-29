import { getEmailForSent } from "hooks/atom";
import React from "react";
import { useSentEmail } from "lib/api";
// import css from "./reportInfo.css";
import css from "./infoReport.css";
import { InputCompUI } from "ui/input-text";
import { ButtonComp } from "ui/button";

type PropsReportInfo = {
  getData?: (params: { name; cellphone; watching }) => any;
};
function ReportInfoComp(props: PropsReportInfo) {
  const getEmailReal = getEmailForSent();
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.nombre.value;
    const cellphone = e.target.cellphone.value;
    const watching = e.target.watching.value;
    if (!name && !cellphone && !watching) {
      return alert("faltan datos");
    } else {
      useSentEmail(getEmailReal, name, watching, cellphone);
      alert("reporte enviado");
    }
  };
  return (
    <form onSubmit={handleSubmit} className={css.reportCard}>
      <h3>Ingresa datos del reporte</h3>
      <InputCompUI type="text" name="watching" placeholder="Donde lo viste" />
      <InputCompUI type="text" name="nombre" placeholder="Tu nombre" />
      <InputCompUI type="cellphone" name="cellphone" placeholder="Cellphone" />
      <ButtonComp>Enviar</ButtonComp>
    </form>
  );
}
export { ReportInfoComp };
