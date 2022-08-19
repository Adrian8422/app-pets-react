import {
  getEmailForSent,
  useReportesDelUser,
  useSeterReportUser,
  useSetReportsUser,
  useGetToken,
  useSetEmail,
  useSetReport,
  useSetterReport,
} from "hooks/atom";
import React, { useEffect, useState } from "react";
import css from "./cardPet.css";
import { ReportInfoComp } from "components/report-info";
import { deletedReport, getMeOneReport, getMeReports } from "lib/api";
import { useNavigate } from "react-router-dom";

type PropsCard = {
  pictureURL: string;
  name: string;
  location: string;
  emailUser?: string;
  children: any;
  id?: string;
};

function Card(props: PropsCard) {
  const meReports = useReportesDelUser();
  const navigate = useNavigate();
  const [report, setReport] = useState(false);
  const [email, setEmail] = useState({});
  const hookGetReport = useSetEmail(email);
  const [reporte, setReportInRecoil] = useSetReport();

  const token = useGetToken();
  const [newAllReports, setNewAllReports] = useSetReportsUser();
  const reportInfo = () => {
    setEmail({ email: props.emailUser });
    if (location.pathname == "/pets-around") {
      if (report == true) {
        setReport(false);
      } else if (report == false) {
        setReport(true);
      }
    }
  };
  const handleDeleted = (e) => {
    const id = e.target.id;

    const deleted = deletedReport(id, token);
    if (deleted) {
      getMeReports(token).then((data) => {
        setTimeout(() => {
          setNewAllReports(data);

          if (setNewAllReports) {
            alert("reporte borrado :D");
            navigate("/me-reports");
          }
        }, 3000);
      });
    }
  };

  const updateClick = (e) => {
    const id = e.target.id;

    if (id) {
      meReports.find((reporte) => {
        if (reporte.id == id) {
          setReportInRecoil(reporte);
        }
      });
    }

    navigate("/update-report/" + e.target.id);
  };

  const pageReportInfo = location.pathname == "/pets-around";

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
          <div className={css.h3Ubication}>
            <img style={{ width: "27px" }} src="/src/assets/ubication.png" />
            <h3 style={{ fontSize: "15px" }}>{props.location}</h3>
          </div>
          {pageReportInfo ? (
            <h3 className={css.subtitleReport} onClick={reportInfo}>
              {props.children}
            </h3>
          ) : (
            <div className={css.containerEdits}>
              <button
                id={props.id}
                onClick={handleDeleted}
                style={{
                  color: "red",
                  fontSize: " 17px",
                  fontWeight: " 200",
                  filter: " drop-shadow(rgb(161, 13, 13) 4px 3px 3px)",
                  fontFamily: "Mochiy Pop One",
                  border: " transparent",
                  borderRadius: " 20px",
                  backgroundColor: " transparent",
                }}
              >
                Deleted
              </button>
              <img
                id={props.id}
                onClick={updateClick}
                style={{
                  width: "30px",
                  height: "30px",
                  filter: "drop-shadow(2px 6px 4px black)",
                }}
                src="./src/assets/pencil.png"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      {report ? <ReportInfoComp /> : null}
    </div>
  );
}
export { Card };
