import { Page } from "../../components/Page";
import styled from "styled-components";

const Wrapper = styled.div`
  border: thick solid red;
`;
export const ArticleView = (props) => {
  return (
    <>
      <Wrapper>{props.children}</Wrapper>
      <p>This is Article view</p>
    </>
  );
};
