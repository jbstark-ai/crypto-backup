import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Page } from "../../components/Page";
import { usePageContentStore } from "../../stores";

const Wrapper = styled.div`
  border: thick solid green;
`;
export const NotFoundView = (props) => {
  const content = usePageContentStore((state) => state.content);
  return (
    <>
      <Page>
        {props.children}
        <Wrapper>
          <h1>Oops</h1>
          <p>Looks like we couldn't find what you're looking for.</p>
          <Link to="/">Back to home</Link>
        </Wrapper>
      </Page>
    </>
  );
};
