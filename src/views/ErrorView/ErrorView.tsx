import { Page } from "../../components/Page";
import { useErrorStore } from "../../stores/useErrorStore";
import styled from "styled-components";

const Wrapper = styled.div`
  border: thick solid red;
`;
export const ErrorView = (props) => {
  const error = useErrorStore((state) => state.error);
  return (
    <Page>
      <Wrapper>{props.children}</Wrapper>
      <p>This is Error view</p>
    </Page>
  );
};
