import React, { useState } from "react";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const MainNav = () => {
  const NavWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
    background: lightgrey;
    padding: 1rem 0.5rem;
  `;
  const NavLogo = styled.span`
    font-size: 2rem;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  `;
  return (
    <div>
      <NavWrapper>{/* <NavLogo>Coinparty.xyz</NavLogo> */}</NavWrapper>
      <Box py={3} pl={3} display={"flex"} bg={"#333"} color="white" gap={5}>
        <div>
          <h2>⚡ Launch</h2>
        </div>
        <div>
          <h2>🤝 Back</h2>
        </div>
        <div>
          <h2>⚙️ Account</h2>
        </div>
      </Box>
    </div>
  );
};
