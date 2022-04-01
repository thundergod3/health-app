import {
  chakra,
  Box as CkBox,
  Flex as CkFlex,
  Center as CkCenter,
} from "@chakra-ui/react";

export const ColumnPageContainer = chakra(CkBox, {
  baseStyle: () => ({
    minHeight: {
      base: "calc(100vh - 75.6px)",
      md: "calc(100vh - 64px)",
    },
    maxHeight: "100%",
    maxWidth: "960px",
    margin: "auto",
    display: "flex",
    marginTop: {
      base: "72.5px",
      md: "80px",
    },
    flexDirection: "column",
    py: {
      base: 4,
      md: 0,
    },
    px: {
      base: 4,
      md: 0,
    },
  }),
});

export const ColumnPageTagItem = chakra(CkCenter, {
  baseStyle: () => ({
    flexDirection: "column",
    background: "background.primary",
    padding: "22px 16px",
    cursor: "pointer",
  }),
});

export const ColumnPageItem = chakra(CkFlex, {
  baseStyle: () => ({
    flexDirection: "column",
    width: "100%",
    minHeight: "234px",
    cursor: "pointer",
  }),
});

export const ColumnPageItemTime = chakra(CkFlex, {
  baseStyle: () => ({
    alignItems: "center",
    width: "144px",
    height: "24px",
    background: "#FFCC21",
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: "3px 8px",
  }),
});
