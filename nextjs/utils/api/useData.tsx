import useSWR from "swr";

import { useLocale } from "../../components/locale/LocaleProvider";
import { DefaultApi } from "./client";

export const api = new DefaultApi();

export function useGetData<
  DataType = any,
  RequestType = Record<string, string | number>
>(apiMethod: Function, params: RequestType) {
  const { locale } = useLocale();
  const ps = { ...params, locale };
  const cacheKey = [apiMethod.name, JSON.stringify(params), locale];
  return useSWR<DataType>(cacheKey, () => {
    return apiMethod.apply(api, [ps]);
  });
}
