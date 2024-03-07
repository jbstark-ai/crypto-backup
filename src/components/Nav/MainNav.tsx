import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../themes/theme";
import { Box, Flex } from "@chakra-ui/react";

const NavLinksWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  flex: 1;
  width: 100%;
  justify-content: space-evenly;
  padding: 1rem 0;
`;
const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  /* border: thin solid red; */
`;

const NavCaption = styled.span`
  text-align: center;
  letter-spacing: 1rem;
  margin: 0;
  padding: 0;
  transform: translateY(-0.75rem);
  font-size: 1rem;
  font-family: "Genniro", Arial, Helvetica, sans-serif;

  @media screen and (max-width: 640px) {
    font-size: 0.6rem;
    transform: translateY(-0.4rem);
  }
`;
const NavLogoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: flex-start;
  padding-bottom: 0.5rem;
`;
const NavLogo = styled.span<{ font: string }>`
  font-size: 3rem;
  font-family: ${({ font }) => font + ", Arial, sans-serif"};
  color: ${Theme.default.colors.gsg};
  @media screen and (max-width: 640px) {
    font-size: 2.2rem;
  }
`;
export const MainNav = () => {
  const StyledS = styled.span`
    font-family: "Nos", Helvetica, sans-serif;
  `;
  const fonts = [
    // "MoonWalk",
    // "Nos",
    // "Naori",
    // "Quinn",
    // "Gunterz",
    // "Hago",
    // "NorthuraEx",
    // "Noir",
    // "Northura",
    // "Cred",
    // "Systemia",
    // "Francy",
    // "BiogemOne",
    // "BiogemTwo",
    // "BiogemThree",
    // "BefoilOne",
    // "BefoilTwo",
    // "Barle",
    // "AoolanOne",
    // "AoolanTwo",
    // "AoolanThree",
    "Kasumi",
    // "Notche",
    // "Genniro",
    // "Galiwar",
    // "Cenget",
    // "Jake",
    // "Madtune",
    // "Monage",
    // "Monos",
    // "Codevein",
    // "Walter",
    // "CBomb",
    // "Croser",
    // "IchijiOne",
    // "IchijiTwo",
    // "GraffOne",
    // "GraffTwo",
  ];

  const LogoDesktopWide = () => {
    const DesktopWideLogoWrapper = styled(NavLogoWrapper)`
      @media screen and (max-width: 768px) {
        display: none;
      }
    `;
    return (
      <DesktopWideLogoWrapper>
        <NavLogo font={fonts[0]}>
          Gem<StyledS>Sword</StyledS>
        </NavLogo>
        <NavCaption>Games</NavCaption>
      </DesktopWideLogoWrapper>
    );
  };
  const LogoMobileCompact = () => {
    const MobileCompactLogoWrapper = styled(NavLogoWrapper)`
      @media screen and (min-width: 768px) {
        display: none;
      }
    `;
    return (
      <MobileCompactLogoWrapper>
        <NavLogo font={fonts[0]}>
          G<StyledS>S</StyledS>G
        </NavLogo>
      </MobileCompactLogoWrapper>
    );
  };

  return (
    <NavWrapper>
      <LogoDesktopWide />
      <LogoMobileCompact />
    </NavWrapper>
  );
};
