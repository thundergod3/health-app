import {
  chakra,
  Flex as CkFlex,
  CloseButton as CkCloseButton,
} from "@chakra-ui/react";

export const Flex = chakra(CkFlex, {
  baseStyle: () => ({
    direction: "column",
    w: "100%",
    bg: "white",
    h: "100vh",
    overflow: "auto",
    pos: "absolute",
    top: 0,
    left: 0,
    zIndex: 20,
  }),
});

export const CloseButton = chakra(CkCloseButton, {
  baseStyle: () => ({
    pos: "absolute",
    top: 4,
    right: 4,
  }),
});
