import React, { useContext, useState } from "react";

interface ILocaleContext {
  locale: string;
  currency: string;
  setLocale?: Function;
  setCurrency?: Function;
}

/**
 * Locale and currency are stored in a context that is provided to all children of the LocaleProvider
 */
const LocaleContext = React.createContext<ILocaleContext>({
  locale: "de",
  currency: "EUR",
});

/**
 * Use this react hook in any functional component
 * where you need to get or set locale or currency.
 *
 * ts```
 * const {locale, setLocale, currency, setCurrency} = useLocale();
 * ```
 */
export const useLocale = () => useContext(LocaleContext);

/**
 * LocaleProvider is installed at the top of the app so all children can get or set locale and currency.
 */
export const LocaleProvider = ({
  children,
  initialLocale = "de",
  initialCurrency = "EUR",
}: {
  children: React.ReactNode;
  initialLocale?: string;
  initialCurrency?: string;
}) => {
  const [locale, setLocale] = useState(initialLocale);
  const [currency, setCurrency] = useState(initialCurrency);

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, currency, setCurrency }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

// getStaticProps getServerSideProps
