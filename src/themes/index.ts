import { extendTheme } from "@chakra-ui/react";
import { PRIMARY_BACKGROUND } from "./globalStyles";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "white",
        fontFamily: "Inter, sans-serif",
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
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

export default theme;
