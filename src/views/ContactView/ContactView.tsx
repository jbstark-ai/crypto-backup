import { Page } from "../../components/Page";
import styled from "styled-components";

const Wrapper = styled.div`
  border: thick solid red;
`;
export const ContactView = (props) => {
  return (
    <Page>
      <Wrapper>{props.children}</Wrapper>
      <p>This is Contact view</p>
    </Page>
  );
};
