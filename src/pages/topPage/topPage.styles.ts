import { chakra, Box as CkBox, Center as CkCenter } from "@chakra-ui/react";

import meal1Image from "assets/images/d01.jpg";
import hexagonIcon from "assets/icons/hexagon.svg";

export const TopPageContainer = chakra(CkBox, {
  baseStyle: () => ({
    height: "max-content",
    marginTop: {
      base: "60px",
      md: "64px",
    },
  }),
});

export const TopPageSectionTopContainer = chakra(CkBox, {
  baseStyle: () => ({
    width: "100%",
    display: "flex",
    flexDirection: {
      base: "column",
      md: "row",
    },
  }),
});

export const TopPageSectionTopImageContainer = chakra(CkCenter, {
  baseStyle: () => ({
    backgroundImage: `url(${meal1Image})`,
    backgroundSize: "cover",
    height: "312px",
    width: "100%",
    position: "relative",

    _after: {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "312px",
      background:
        "transparent linear-gradient(240deg, #FFCC21 0%, #FF963C 100%) 0% 0% no-repeat padding-box;",
      mixBlendMode: "soft-light",
    },
  }),
});

export const TopPageSectionBodyContainer = chakra(CkBox, {
  baseStyle: () => ({
    maxWidth: "960px",
    margin: "auto",
    display: "flex",
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

export const TopPageSectionTagListContainer = chakra(CkBox, {
  baseStyle: () => ({
    width: "100%",
    maxWidth: "750px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
});

export const TopPageSectionTagItem = chakra(CkCenter, {
  baseStyle: () => ({
    backgroundImage: `url(${hexagonIcon})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "116px",
    height: "136px",
    flexDirection: "column",
    margin: "auto",
    cursor: "pointer",
  }),
});

export const TopPageSectionDinnerItem = chakra(CkBox, {
  baseStyle: () => ({
    width: "100%",
    position: "relative",
    alignItems: "center",
    cursor: "pointer",
  }),
});

export const TopPageSectionDinnerItemFooter = chakra(CkBox, {
  baseStyle: () => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    background: "#FFCC21",
    width: "120px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px",
  }),
});
