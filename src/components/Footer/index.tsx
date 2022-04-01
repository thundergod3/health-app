import React, { Fragment } from "react";

import { footerNavLinkList } from "./constants";

import NormalText from "components/NormalText";

import { FooterContainer, FooterNavListContainer } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNavListContainer>
        {footerNavLinkList.map((record, index) => (
          <Fragment key={record.label}>
            <NormalText
              text={record.label}
              fontSizeProps='11px'
              color='white'
              marginRight={
                index === footerNavLinkList.length - 1
                  ? 0
                  : {
                      base: "24px",
                      md: "48px",
                    }
              }
            />
          </Fragment>
        ))}
      </FooterNavListContainer>
    </FooterContainer>
  );
};

export default Footer;
