import {
  chakra,
  Flex as CkFlex,
  HStack as CkHStack,
  IconButton as CkIconButton,
} from "@chakra-ui/react";

import chakraShouldForwardProp from "utils/chakraShouldForwardProp";

export const NavbarContainer = chakraShouldForwardProp(
  CkFlex,
  ({ borderBottomWidth }: any) => ({
    py: {
      base: 4,
      md: 8,
    },
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
