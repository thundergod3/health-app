import {
  chakra,
  Box as CkBox,
  Flex as CkFlex,
  HStack as CkHStack,
  IconButton as CkIconButton,
} from "@chakra-ui/react";

import chakraShouldForwardProp from "utils/chakraShouldForwardProp";

export const NavbarContainer = chakraShouldForwardProp(
  CkFlex,
  ({ borderBottomWidth }: any) => ({
    aligItems: "center",
    height: "64px",
    width: "100%",
    maxWidth: "960px",
    margin: "auto",
    borderBottomWidth,
    px: {
      base: 4,
      md: 0,
    },
  })
);

export const HStack = chakra(CkHStack, {
  baseStyle: () => ({
    spacing: 3,
    display: {
      base: "none",
      md: "flex",
    },
  }),
});

export const IconButton = chakra(CkIconButton, {
  baseStyle: () => ({
    display: {
      base: "flex",
      md: "none",
    },
    size: "sm",
    ariaLabel: "Open menu",
    fontSize: "20px",
    variant: "ghost",
  }),
});

export const NavItem = chakra(CkBox, {
  baseStyle: () => ({
    padding: "22px 32px",
    color: "#FFFFFF",
    fontSize: "18px",
    width: "280px",
    cursor: "pointer",
    lineHeight: "26px",

    _hover: {
      background: "#FFCC21",
    },
  }),
});
