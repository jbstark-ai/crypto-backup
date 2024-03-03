import { Page } from "../../components/Page";
import styled from "styled-components";

const Wrapper = styled.div`
  border: thick solid red;
`;

const SignIn = () => {
  return (
    <div>
      <p>*Sign In</p>
    </div>
  );
};
const SignUp = () => {
  return (
    <div>
      <p>*Sign Up</p>
    </div>
  );
};
const VerifyAccount = () => {
  return (
    <div>
      <p>*Verify Account</p>
    </div>
  );
};

type AuthModeEnum = "sign_in" | "sign_up" | "verify";

export const AuthView = ({ mode }: { mode: AuthModeEnum }) => {
  const renderAuthModeComponent = (mode: string) => {
    switch (mode) {
      case "sign_in":
        return <SignIn />;
      case "sign_up":
        return <SignUp />;
      case "verify":
        return <VerifyAccount />;
    }
  };
  return (
    <Page
      metadata={{
        title: `Auth | ${mode}`,
        description: "Auth something something",
      }}
    >
      <Wrapper>
        <p>This is Auth view</p>
        <div>{renderAuthModeComponent(mode)}</div>
      </Wrapper>
    </Page>
  );
};
