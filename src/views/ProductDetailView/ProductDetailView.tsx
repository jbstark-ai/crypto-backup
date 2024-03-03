import styled from "styled-components";
import { useProductDetailStore } from "../../stores";
import { Page } from "../../components/Page";

const Wrapper = styled.div`
  border: thick solid red;
`;
export const ProductDetailView = (props) => {
  const product = useProductDetailStore((state) => state.product);
  return (
    <Page>
      <Wrapper>{props.children}</Wrapper>
      <p>This is Product Detail view</p>
    </Page>
  );
};
