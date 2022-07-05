import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "routes";
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
  <RecoilRoot>
    <Suspense fallback="loading...">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>
);
