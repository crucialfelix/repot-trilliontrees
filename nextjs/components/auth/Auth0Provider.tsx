import createAuth0Client from "@auth0/auth0-spa-js";
import React, { useContext, useEffect, useState } from "react";
import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";

const DEFAULT_REDIRECT_CALLBACK = (args: any) => {
  // ${window.location.origin}
  console.log("default redirect callback", args);

  // const next = (args || {}).targetUrl || window.location.pathname;
  // window.history.pushState({}, document.title, next);
};

interface IAuth0Context {
  isAuthenticated: boolean;
  user: any;
  loading: boolean;
  popupOpen: boolean;
  loginWithPopup?: Function;
  handleRedirectCallback?: Function;
  getIdTokenClaims?: Function;
  loginWithRedirect?: Function;
  getTokenSilently?: Function;
  getTokenWithPopup?: Function;
  logout?: Function;
}

export const Auth0Context = React.createContext<IAuth0Context>({
  isAuthenticated: false,
  user: undefined,
  loading: true,
  popupOpen: false
});

interface Props extends Auth0ClientOptions {
  children: React.ReactNode;
  onRedirectCallback?: Function;
}

/**
 * Provides user authentication variables and functions to all children
 *
 * Usage:
 *
 *    const {
 *     isAuthenticated;
 *     user,
 *     loading,
 *     popupOpen,
 *     loginWithPopup,
 *     handleRedirectCallback,
 *     getIdTokenClaims,
 *     loginWithRedirect,
 *     getTokenSilently,
 *     getTokenWithPopup,
 *     logout
 *    } = useAuth0()
 */
export const useAuth0 = () => useContext(Auth0Context);

/**
 * Context provider that is wrapped around the entire application,
 * so any functional component in the app can get access to user and auth state.
 */
export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(undefined);
  const [auth0Client, setAuth0] = useState<Auth0Client>();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  // onMount
  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      console.log({ auth0FromHook });

      setAuth0(auth0FromHook);

      if (window.location.search.includes("code=")) {
        try {
          const { appState } = await auth0FromHook.handleRedirectCallback();
          onRedirectCallback(appState);
        } catch (error) {
          // sometimes there is Invalid state
          // I think just during development work when there is a lot of fast reloading
          console.error(error);
          onRedirectCallback({ targetUrl: "/" });
        }
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };
    initAuth0();
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client?.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client?.getUser();
    setUser(user);
    setIsAuthenticated(!!user);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    const user = await auth0Client?.getUser();
    setLoading(false);
    setIsAuthenticated(!!user);
    setUser(user);
    // does history push
    await auth0Client?.handleRedirectCallback();
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: auth0Client?.getIdTokenClaims,
        loginWithRedirect: (args: any) => {
          console.log({ auth0Client });

          auth0Client?.loginWithRedirect(args);
        },
        getTokenSilently: auth0Client?.getTokenSilently,
        getTokenWithPopup: auth0Client?.getTokenWithPopup,
        logout: auth0Client?.logout
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
