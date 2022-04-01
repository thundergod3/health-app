import React, { isValidElement } from "react";
import {
  Flex,
  Stack,
  useColorModeValue,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";

import { navLinkList } from "../MenuHeader/constants";
import history from "utils/history";

import hamburgerIcon from "assets/icons/hamburger.svg";

import MobileNavContent from "../MobileNavContent";
import Divider from "components/Divider";
import Icon from "components/Icon";
import MenuHeader from "../MenuHeader";

import { NavbarContainer, HStack } from "./navbar.styles";

const Template = (props: { children?: any; mobileNav?: any }) => {
  const { mobileNav } = props;

  const [checkMobileView] = useMediaQuery("(max-width: 48em)");

  const children: any = React.Children.toArray(props.children).filter(
    isValidElement
  );

  const handleNavigate = (path: string) => {
    if (path) history.push(path);

    mobileNav?.onClose();
  };

  return (
    <NavbarContainer borderBottomWidth={useColorModeValue("none", "1px")}>
      {
        children.find((child: { type: any }) => child.type === Brand)?.props
          .children
      }
      <HStack
        style={{
          marginLeft: "auto",
        }}>
        {
          children.find((child: { type: any }) => child.type === Links)?.props
            .children
        }
      </HStack>
      <HStack>
        <MenuHeader />
      </HStack>
      <Icon
        icon={hamburgerIcon}
        size={24}
        height={16}
        onClick={mobileNav.onOpen}
        style={{
          marginLeft: "auto",
          display: checkMobileView ? "block" : "none",
        }}
      />
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose}>
        <Stack width='100%' spacing={5}>
          <Flex>
            {
              children.find((child: { type: any }) => child.type === Brand)
                ?.props.children
            }
          </Flex>
          <Stack>
            {
              children.find((child: { type: any }) => child.type === Links)
                ?.props.children
            }
          </Stack>
          <Divider />
          <Stack>
            {navLinkList.map((record) => (
              <Box
                key={record.label}
                onClick={() => handleNavigate(record.path)}>
                {record.label}
              </Box>
            ))}
          </Stack>
        </Stack>
      </MobileNavContent>
    </NavbarContainer>
  );
};

const Brand: any = () => null;

const Links: any = () => null;

const Navbar = Object.assign(Template, {
  Brand,
  Links,
});

export default Navbar;
