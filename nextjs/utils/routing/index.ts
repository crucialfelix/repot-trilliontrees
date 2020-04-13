// Does not work on server because of missing global window.
// This is fixable though.
// This is the published package, but it doesn't compile
// import { Router } from "symfony-ts-router/src/router";
// My fix:
import { Router } from "../routing/router";

/**
 * These are exported from the Symfony backend
 */
import routes from "./fos_js_routes.json";

const router = new Router();
router.setRoutingData(routes as any);

const API_URL = process.env.API_URL;
const BASE_URL = process.env.BASE || "";

export interface Params {
  [key: string]: string | undefined;
}

export const getApiRoute = (
  routeName: string,
  params: Params,
  locale: string
) => {
  let _params =
    routeName === "api_login_check"
      ? params
      : { version: "v1.1", _locale: locale, ...params };
  let path = router.generate(routeName, _params);

  return `${API_URL}${BASE_URL}${path}`;
};
