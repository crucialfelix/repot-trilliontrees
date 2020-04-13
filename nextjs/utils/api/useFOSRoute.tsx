import useSWR from "swr";

import { useAuth0 } from "../../components/auth/Auth0Provider";
import { useLocale } from "../../components/locale/LocaleProvider";
import { getApiRoute, Params } from "../routing";

/**
 *   const { data, error, loading, retry } = useData("routeName", {param: 1, param:2});
 *
 * requires including Route and fos_js_routes.json file
 */
export function useFOSRoute<DataType = any>(routeName: string, params: Params) {
  const { locale } = useLocale();
  const { isAuthenticated } = useAuth0();
  const url = getApiRoute(routeName, params, locale);
  return useSWR(url);
}
