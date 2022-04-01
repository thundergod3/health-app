import React from "react";

import { Link } from "./navLink.styles";

const NavLink = ({ isActive, ...rest }: any) => (
  <Link
    aria-current={isActive ? "page" : undefined}
    _activeLink={{
      color: "text.fourth",
      borderBottom: "solid 1px",
      borderBottomColor: "background.fourth",
    }}
    {...rest}
  />
);

export default NavLink;
