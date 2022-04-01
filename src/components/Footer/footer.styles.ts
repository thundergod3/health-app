import { chakra, Box as CkBox } from "@chakra-ui/react";

export const FooterContainer = chakra(CkBox, {
  baseStyle: () => ({
    background: "background.primary",
    py: {
      base: 4,
      md: "56px",
    },
    px: {
      base: 4,
      md: 0,
    },
  }),
});

export const FooterNavListContainer = chakra(CkBox, {
  baseStyle: () => ({
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "960px",
    margin: "auto",
  }),
});
