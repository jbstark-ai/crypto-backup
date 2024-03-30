import { Helmet } from "react-helmet";
// import { Footer } from "./Footer";
import { MainNav } from "./Nav/MainNav";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px solid red;
  padding-top: 4rem;
  max-width: 1140px;
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
    <>
      <Helmet>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
      </Helmet>
      <MainNav />
      <Wrapper>{children}</Wrapper>
    </>
  );
};
