import { Layout } from "components/layout/Index";
import { HomeUbication } from "pages/home-ubication/Index";
import { HomeOficial } from "pages/home-oficial/Index";
import { SignPage } from "pages/sign-up/Index";
import { SignInPage } from "pages/sign-in/Index";
import { MePage } from "pages/me/Index";
import React from "react";

import { Route, Routes } from "react-router-dom";
import { EditMePage } from "pages/edit-me/Index";
import { PageUpdatePassword } from "pages/update-password/Index";
import { MeReportsPage } from "pages/me-reports/Index";
import { CreateReportPage } from "pages/create-report/Index";
import { UpdateReportPage } from "pages/update-report/Index";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeUbication />} />
        <Route path="/pets-around" element={<HomeOficial />} />
        <Route path="/sign-up" element={<SignPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/me" element={<MePage />}></Route>
        <Route path="/edit-me" element={<EditMePage />}></Route>
        <Route path="/change-password" element={<PageUpdatePassword />}></Route>
        <Route path="/me-reports" element={<MeReportsPage />}></Route>
        <Route path="/create-report" element={<CreateReportPage />}></Route>
        <Route path="/update-report/:id" element={<UpdateReportPage />}></Route>
      </Route>
    </Routes>
  );
}
export { AppRouter };
