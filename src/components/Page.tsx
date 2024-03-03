import { Helmet } from "react-helmet";
import { Footer } from "./Footer";
import { MainNav } from "./Nav/MainNav";

import styled from "styled-components";

const Wrapper = styled.div`
  border: thick solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
type PageProps = {
  metadata?: {
    title: string;
    description: string;
  };
  children: React.ReactNode;
};
export const Page = ({ metadata, children }: PageProps): JSX.Element => {
  return (
    <Wrapper>
      <Helmet>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
      </Helmet>
      <MainNav />
      {children}
      <Footer />
    </Wrapper>
  );
};
