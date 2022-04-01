import React, { Fragment } from "react";

const Icon = (props: any) => {
  const {
    style,
    icon,
    size,
    alt,
    width,
    height,
    onClick,
    usingCursor = true,
  } = props;
  const defaultSize = 32;
  const iconSize = size ? size : defaultSize;

  return (
    <Fragment>
      <img
        src={icon}
        alt={alt}
        width={width || iconSize}
        height={height || iconSize}
        onClick={onClick}
        style={{ cursor: usingCursor ? "pointer" : "initial", ...style }}
      />
    </Fragment>
  );
};

export default Icon;
