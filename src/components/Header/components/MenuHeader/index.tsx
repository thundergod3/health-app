import React, { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

import { navLinkList } from "./constants";

import hamburgerIcon from "assets/icons/hamburger.svg";
import closeIcon from "assets/icons/close.svg";

import Icon from "components/Icon";

import { MenuHeaderContainer, MenuHeaderItem } from "./menuHeader.styles";

const MenuHeader = () => {
  const [open, setOpen] = useState(false);

  const menuHeaderRef: any = useRef();
  const menuHeaderButtonRef: any = useRef();

  const handleOutSideClick = (event: any) => {
    if (
      (menuHeaderButtonRef?.current &&
        menuHeaderButtonRef?.current?.contains(event.target)) ||
      (menuHeaderRef.current && menuHeaderRef?.current?.contains(event.target))
    )
      return;
    else {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box marginLeft='32px' position='relative'>
      <Box ref={menuHeaderButtonRef} onClick={() => setOpen(!open)}>
        <Icon icon={open ? closeIcon : hamburgerIcon} size={24} height={16} />
      </Box>

      {open && (
        <MenuHeaderContainer ref={menuHeaderRef}>
          {navLinkList.map((record) => (
            <MenuHeaderItem>{record.label}</MenuHeaderItem>
          ))}
        </MenuHeaderContainer>
      )}
    </Box>
  );
};

export default MenuHeader;
