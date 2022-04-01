import React, { lazy } from "react";
import { Route } from "react-router";

import * as routes from "constants/routes";

import Header from "components/Header";
import Footer from "components/Footer";
import ScrollTop from "components/ScrollTop";

// Lazy Pages
const TopPage = lazy(() => import("./pages/topPage"));
const RecordPage = lazy(() => import("./pages/recordPage"));
const ColumnPage = lazy(() => import("./pages/columnPage"));

const App = (): JSX.Element => {
  return (
    <React.Suspense fallback={<></>}>
      <Header />
      <Route exact path={routes.TOP_PAGE} component={TopPage} />
      <Route exact path={routes.RECORD_PAGE} component={RecordPage} />
      <Route exact path={routes.COLUMN_PAGE} component={ColumnPage} />
      <Footer />
      <ScrollTop />
    </React.Suspense>
  );
};

export default App;
