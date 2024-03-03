import styled from "styled-components";
import { Page } from "../../components/Page";
import { usePageContentStore } from "../../stores";

const Wrapper = styled.div`
  border: thick solid green;
`;
export const HomeView = (props) => {
  const content = usePageContentStore((state) => state.content);
  return (
    <>
      <Page>
        {props.children}
        <Wrapper>This is Home view</Wrapper>
      </Page>
    </>
  );
};
