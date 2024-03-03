import styled from "styled-components";
import { useSearchStore } from "../../stores";
import { Page } from "../../components/Page";

const Wrapper = styled.div`
  border: thick solid red;
`;
export const SearchResultsView = (props) => {
  const results = useSearchStore((state) => state.results);
  return (
    <Page>
      <Wrapper>{props.children}</Wrapper>
      <p>This is Search Results view</p>
    </Page>
  );
};
