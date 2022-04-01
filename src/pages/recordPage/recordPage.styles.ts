import {
  chakra,
  Box as CkBox,
  Flex as CkFlex,
  Center as CkCenter,
  Button as CKButton,
} from "@chakra-ui/react";
import chakraShouldForwardProp from "utils/chakraShouldForwardProp";

export const RecordPageContainer = chakra(CkBox, {
  baseStyle: () => ({
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

export const RecordPageRecommendItem = chakraShouldForwardProp(
  CkCenter,
  ({ image }: any) => ({
    background: "#2E2E2E",
    width: "100%",
    height: "288px",
    border: "24px solid #FFCC21",
    position: "relative",
    flexDirection: "column",
    cursor: "pointer",

    _after: {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "240px",
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      mixBlendMode: "luminosity",
      opacity: 0.25,
      zIndex: 1,
    },
  })
);

export const RecordPageRecommendSubTitleContainer = chakra(CkCenter, {
  baseStyle: () => ({
    background: "#FF963C",
    width: "160px",
    height: "24px",
    zIndex: 10,
  }),
});

export const RecordPageBodyContainer = chakra(CkBox, {
  baseStyle: () => ({
    background: "background.primary",
    padding: "16px 24px",
    marginBottom: "56px",
  }),
});

export const RecordPageExerciseContainer = chakra(CkBox, {
  baseStyle: () => ({
    background: "background.primary",
    padding: "16px 24px",
    marginBottom: "56px",
  }),
});

export const RecordPageExerciseList = chakra(CkBox, {
  baseStyle: () => ({
    height: "198px",
    overflowY: "auto",
    paddingRight: "32px",
  }),
});

export const RecordPageExerciseItem = chakra(CkFlex, {
  baseStyle: () => ({
    marginBottom: "5px",
    borderBottom: "solid 1px #777777",
    position: "relative",
    flexDirection: "column",

    _last: {
      marginBottom: 0,
    },

    _before: {
      position: "absolute",
      content: "''",
      width: "6px",
      height: "6px",
      background: "#fff",
      borderRadius: "100%",
      top: "10px",
      left: 0,
    },
  }),
});

export const RecordPageDiaryItem = chakra(CkFlex, {
  baseStyle: () => ({
    flexDirection: "column",
    border: "2px solid #777777",
    padding: "16px",
    cursor: "pointer",
    minHeight: "231px",
  }),
});

export const RecordPageGraphButton = chakra(CKButton, {
  baseStyle: () => ({
    width: "56px",
    height: "24px",
    fontSize: "15px",
    color: "#FFCC21",
    background: "#fff",
    borderRadius: "12px",
    padding: "0 !important",
    marginRight: "16px",

    _hover: {
      color: "#FFCC21",
      background: "#fff",
    },
  }),
});

export const RecordPageGraphActiveButton = chakra(CKButton, {
  baseStyle: () => ({
    width: "56px",
    height: "24px",
    fontSize: "15px",
    color: "#fff",
    background: "#FFCC21",
    borderRadius: "12px",
    padding: "0 !important",
    marginRight: "16px",

    _hover: {
      color: "#fff",
      background: "#FFCC21",
    },
  }),
});
