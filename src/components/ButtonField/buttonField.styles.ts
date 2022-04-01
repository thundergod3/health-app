import { chakra, Button as CkButton } from "@chakra-ui/react";

export const Button = chakra(CkButton, {
  baseStyle: ({ variant }: any) => ({
    fontFamily: "'Maven Pro', sans-serif",
    fontSize: {
      base: "14 px",
      md: "18px",
    },
    height: {
      base: "48px",
      md: "56px",
    },
    color: "text.fourth",
    background: variant === "solid" ? "background.primary" : "transparent",
    border: variant === "solid" ? "none" : "solid 1px",
    borderColor: variant === "solid" ? "transparent" : "background.fourth",
    fontWeight: "normal",
    minWidth: "auto",
    px: {
      base: "13.5px",
      md: "24px",
    },
    py: {
      base: "0px",
      md: "18px",
    },
    _disabled: {
      _hover: {
        background: variant === "solid" ? "background.primary" : "transparent",
      },
    },
  }),
});
