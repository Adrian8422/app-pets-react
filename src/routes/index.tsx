import { Layout } from "components/layout";
import { HomeUbication } from "pages/home-ubication";
import { HomeOficial } from "pages/home-oficial";
import React from "react";

import { Route, Routes } from "react-router-dom";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeUbication />} />
        <Route path="/pets-around" element={<HomeOficial />} />
      </Route>
    </Routes>
  );
}
export { AppRouter };
