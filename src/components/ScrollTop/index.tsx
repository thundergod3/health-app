import React from "react";
import { BsChevronUp } from "react-icons/bs";
import { Icon as CkIcon } from "@chakra-ui/react";

import { ScrollTopButton } from "./scrollTop.styles";

import "./scrollTop.styles.scss";

const ScrollTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollTopButton className='scroll-top-button' onClick={handleScrollToTop}>
      <CkIcon as={BsChevronUp} width='18px' height='18px' color='#777777' />
    </ScrollTopButton>
  );
};

export default ScrollTop;
