import { Page } from "../../components/Page";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
  border: thick solid red;
`;
export const AccountView = (props) => {
  return (
    <Page
      metadata={{
        title: "Account",
        description: "Account page meta description",
      }}
    >
      <Wrapper>{props.children}</Wrapper>
      <p>This is Account view</p>
    </Page>
  );
};
