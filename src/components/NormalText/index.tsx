import { Box } from "@chakra-ui/react";
import React from "react";

import { NormalTextContainer, Text } from "./normalText.styles";

const NormalText = ({
  type,
  text,
  bold,
  icon,
  center,
  fontSizeProps = "14px",
  fontSizeMobileProps,
  normalTextContainerStyle = {},
  ...rest
}: any) => (
  <NormalTextContainer center={center} {...normalTextContainerStyle}>
    {icon && (
      <>
        {icon}
        <Box mr='10px' />
      </>
    )}
    <Text
      fontSizeProps={fontSizeProps}
      fontSizeMobileProps={fontSizeMobileProps}
      bold={bold}
      type={type}
      center={center}
      {...rest}>
      {text}
    </Text>
  </NormalTextContainer>
);

export default NormalText;
