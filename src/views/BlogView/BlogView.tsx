import React from "react";
import { Page } from "../../components/Page";
import styled from "styled-components";

const Wrapper = styled.div`
  border: thick solid red;
`;
export const BlogView = (props) => {
  return (
    <Page>
      <Wrapper>{props.children}</Wrapper>
      <p>This is Blog view</p>
    </Page>
  );
};
