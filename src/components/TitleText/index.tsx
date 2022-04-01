import React from "react";

import { Text } from "./titleText.styles";

const TitleText = ({
  fontSize = "28px",
  lineHeight = "36px",
  title = "",
  textPosition = "left",
  fontSizeMobileProps,
  ...rest
}: any): JSX.Element => (
  <Text
    textPosition={textPosition}
    fontSizeProps={fontSize}
    fontSizeMobileProps={fontSizeMobileProps}
    lineHeightProps={lineHeight}
    {...rest}>
    {title}
  </Text>
);

export default TitleText;
