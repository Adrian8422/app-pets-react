import React from "react";
// import css from "./reportInfo.css";
import css from "./infoReport.css";
type PropsReportInfo = {
  getData: (params: { name; cellphone; watching }) => any;
};
function ReportInfoComp(props: PropsReportInfo) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.nombre.value;
    const cellphone = e.target.cellphone.value;
    const watching = e.target.watching.value;
    props.getData({ name, cellphone, watching });
    console.log("name", name);
    console.log("cellphone", cellphone);
    console.log("watch", watching);
  };
  return (
    <form onSubmit={handleSubmit} className={css.reportCard}>
      <h3>Ingresa datos del reporte</h3>
      <input type="text" name="watching" placeholder="Donde lo viste" />
      <input type="text" name="nombre" placeholder="Tu nombre" />
      <input type="cellphone" name="cellphone" placeholder="Cellphone" />
      <button>Enviar</button>
    </form>
  );
}
export { ReportInfoComp };
