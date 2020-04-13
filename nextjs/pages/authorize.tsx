import { useEffect } from "react";
import { useAuth0 } from "../components/auth/Auth0Provider";
// import { useAuth0 } from "./Auth0Provider";

/**
 * Route handler for /authorize
 *
 * This redirects to auth0.com universal login
 *
 * They may sometimes redirect users to this page so that
 * we redirect them back to auth0.com. This is for security reasons
 * to verify that we control the domain.
 */
const Auth0Authorize = () => {
  const { loginWithRedirect } = useAuth0();

  const authorize = () => {
    console.log({ loginWithRedirect });
    if (loginWithRedirect) {
      loginWithRedirect({
        redirect_uri: `${window.location.origin}/auth0-callback`
      });
    } else {
      // setTimeout(authorize, 1000);
    }
  };

  // This is just like componentDidMount
  useEffect(authorize, []);

  return null;
};

export default Auth0Authorize;
