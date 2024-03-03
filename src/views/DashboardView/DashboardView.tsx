import { Page } from "../../components/Page";
import styled from "styled-components";

const Wrapper = styled.div`
  border: thick solid red;
`;
export const DashboardView = (props) => {
  return (
    <Page>
      <Wrapper>{props.children}</Wrapper>
      <p>This is Dashboard view</p>
    </Page>
  );
};
