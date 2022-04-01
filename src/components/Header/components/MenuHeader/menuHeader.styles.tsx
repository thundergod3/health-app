import { chakra, Box as CkBox } from "@chakra-ui/react";

export const MenuHeaderContainer = chakra(CkBox, {
  baseStyle: () => ({
    position: "absolute",
    top: "30px",
    display: "flex",
    flexDirection: "column",
    background: "#777777",
    right: "0px",
  }),
});

export const MenuHeaderItem = chakra(CkBox, {
  baseStyle: () => ({
    padding: "22px 32px",
    border: "solid 1px #707070",
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
