import styled from "styled-components";
import { useOrderStore } from "../../stores";
import { Page } from "../../components/Page";

const Wrapper = styled.div`
  border: thick solid red;
`;
export const OrderConfirmationView = (props) => {
  const orders = useOrderStore((state) => state.orders);
  return (
    <Page>
      <Wrapper>{props.children}</Wrapper>
      <p>This is Order Confirmation view</p>
    </Page>
  );
};
