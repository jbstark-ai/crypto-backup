import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: thick solid red;
`;
export const Footer = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
