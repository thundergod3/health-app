import React from "react";

import { Link } from "./navLink.styles";

const NavLink = ({ isActive, ...rest }: any) => (
  <Link
    aria-current={isActive ? "page" : undefined}
    _activeLink={{
      color: "#FF963C",
    }}
    {...rest}
  />
);

export default NavLink;
