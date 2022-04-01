import {
  chakra,
  Box as CkBox,
  Center as CkCenter,
  HStack as CkHStack,
} from "@chakra-ui/react";

export const HeaderContainer = chakra(CkBox, {
  baseStyle: () => ({
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    background: "background.primary",
    boxShadow: "0px 3px 6px #00000029",
  }),
});

export const Center = chakra(CkCenter, {
  baseStyle: () => ({
    marginEnd: "10",
    cursor: "pointer",
  }),
});

export const AuthButtonContainer = chakra(CkHStack, {
  baseStyle: () => ({
    minW: "240px",
    justifyContent: "flex-start",
  }),
});

export const NotificationContainer = chakra(CkBox, {
  baseStyle: () => ({
    background: "#EA6C00",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "12px",
    width: "16px",
    height: "16px",
    borderRadius: "100%",
    top: 0,
    right: "8px",
  }),
});
