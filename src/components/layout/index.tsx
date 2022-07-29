import React from "react";
import { HeaderComp } from "components/header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <HeaderComp />
      <Outlet />
    </div>
  );
}

export { Layout };
