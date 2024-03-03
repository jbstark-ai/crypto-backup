import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: thick solid red;
`;
export const SideBar = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
