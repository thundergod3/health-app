import { Text as CkText, Flex as CkFlex } from "@chakra-ui/react";
import chakraShouldForwardProp from "utils/chakraShouldForwardProp";

export const Text = chakraShouldForwardProp(
  CkText,
  ({ bold, type, center, fontSizeProps, fontSizeMobileProps }: any) => ({
    fontFamily: "Inter, sans-serif",
    fontSize: {
      base: fontSizeMobileProps || fontSizeProps,
      md: fontSizeProps,
    },
    fontWeight: bold ? "bold" : "normal",
    color: type === "primary" ? "text.primary" : "text.secondary",
    textAlign: center ? "center" : "start",
    wordBreak: "break-word",
    whiteSpace: "normal",
  })
);

export const NormalTextContainer = chakraShouldForwardProp(
  CkFlex,
  ({ center }: any) => ({
    justifyContent: center ? "center" : "flex-start",
    alignItems: "center",
  })
);
