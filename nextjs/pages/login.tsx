import React from "react";
// import Link from "next/link";
import Page from "../components/Page";
import { useAuth0 } from "../components/auth/Auth0Provider";

const LoginPage: React.FunctionComponent = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log({ isAuthenticated, user });

  return (
    <Page title="Login">
      <h1>Login</h1>
      <div>isAuthenticated: {isAuthenticated ? "yes" : "no"}</div>
      <div>user: {JSON.stringify(user, null, 2)}</div>
    </Page>
  );
};

export default LoginPage;
