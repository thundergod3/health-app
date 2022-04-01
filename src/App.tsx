import React, { lazy } from "react";
import { Route } from "react-router";

import * as routes from "constants/routes";

import Header from "components/Header";
import Footer from "components/Footer";
import ScrollTop from "components/ScrollTop";

// Lazy Pages
const Homepage = lazy(() => import("./pages/homepage"));
const RecordPage = lazy(() => import("./pages/recordPage"));
const NewsPage = lazy(() => import("./pages/newsPage"));

const App = (): JSX.Element => {
  return (
    <React.Suspense fallback={<></>}>
      <Header />
      <Route exact path={routes.HOMEPAGE} component={Homepage} />
      <Route exact path={routes.RECORD_PAGE} component={RecordPage} />
      <Route exact path={routes.NEWS_PAGE} component={NewsPage} />
      <Footer />
      <ScrollTop />
    </React.Suspense>
  );
};

export default App;
