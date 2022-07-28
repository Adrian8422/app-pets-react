import {
  useBurgerActive,
  useGetDataUser,
  useGetStatePage,
  useGetToken,
  useHeaderState,
  useSetPageState,
  useSetWindowHeaderState,
} from "hooks/atom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import css from "./window.css";
type PropsWindowHeader = {
  redirectOne: string;
  redirectTwo: string;
  redirectThree: string;
};
function Window(props: PropsWindowHeader) {
  const navigate = useNavigate();
  const [windowState, setWindowState]: any = useSetWindowHeaderState();
  const dataUser = useGetDataUser();
  const token = useGetToken();
  const currentDate = useBurgerActive();
  const [proximaPage, setProximaPage] = useSetPageState();

  const handleClick = (e) => {
    setProximaPage(e.target.id);
    if (token) {
      switch (e.target.id) {
        case "/me":
          navigate("/me");
          setWindowState(false);
          break;
        case "/me-reports":
          navigate("/me-reports");
          setWindowState(false);
          break;
        case "/create-report":
          navigate("/create-report");
          setWindowState(false);
          break;
      }
    } else {
      setWindowState(false);
      navigate("/sign-in");
    }
  };

  return (
    <div
      id={currentDate ? css.root : css.root}
      className={currentDate ? css.active : null}
    >
      <div onClick={handleClick} id="/me" className={css.link}>
        {props.redirectOne}
      </div>
      <div onClick={handleClick} id="/me-reports" className={css.link}>
        {props.redirectTwo}
      </div>
      <div onClick={handleClick} id="/create-report" className={css.link}>
        {props.redirectThree}
      </div>
      <h3>User {dataUser.name}</h3>
    </div>
  );
}
export { Window };
