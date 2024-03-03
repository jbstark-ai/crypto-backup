import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  border: thin solid blue;
`;
export const MainNav = (props) => {
  return (
    <Wrapper>
      <div>Menu</div>
      <div>Logo</div>
      <div>Account</div>
    </Wrapper>
    // {props.children}
  );
};
