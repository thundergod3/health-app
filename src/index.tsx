import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import history from "utils/history";
import theme from "themes";

import App from "./App";

ReactDOM.render(
  <>
    <Router history={history}>
      <ChakraProvider theme={theme}>
        <Switch>
          <App />
        </Switch>
      </ChakraProvider>
    </Router>
  </>,
  document.getElementById("root")
);
