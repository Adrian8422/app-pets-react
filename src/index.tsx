import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "routes";
import { LoadingComp } from "components/loading";
const root = ReactDOM.createRoot(document.querySelector(".root"));
<LoadingComp />;
root.render(
  <RecoilRoot>
    <Suspense fallback={<LoadingComp />}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>
);


//////