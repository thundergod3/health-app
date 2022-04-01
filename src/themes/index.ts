import { extendTheme } from "@chakra-ui/react";
import { PRIMARY_BACKGROUND } from "./globalStyles";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "white",
        fontFamily: "Montserrat, sans-serif",
      },
    },
  },
  colors: {
    text: {},
    background: {
      primary: PRIMARY_BACKGROUND,
    },
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
});

export default theme;
