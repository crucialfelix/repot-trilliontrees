import { BASE_PATH } from "./client";

/**
 * Simple interface to fetch JSON from the API
 *
 * @param url
 */
export const getData = (url: string): Promise<any> => {
  return fetch(BASE_PATH + url).then((response) => response.json());
};
