import { chakra, Button as CkButton } from "@chakra-ui/react";

export const ScrollTopButton = chakra(CkButton, {
  baseStyle: () => ({
    width: "48px",
    height: "48px",
    border: "solid 1px #777777",
    background: "#ffff",
    borderRadius: "100%",
    position: "fixed",
    bottom: "20px",
    right: "96px",

    _hover: {
      background: "#FF963C",
    },
  }),
});
