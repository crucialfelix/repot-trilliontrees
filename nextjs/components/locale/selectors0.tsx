import React, { useState } from "react";
import { useLocale } from "./LocaleProvider";
import cx from "classnames";
// double selector
// one open func

const locales = [
  { value: "de", title: "Deutsch" },
  { value: "en", title: "English" },
];
const currencies = [
  { value: "EUR", title: "EUR" },
  { value: "USD", title: "USD" },
];

export default function LocaleSelectors() {
  const { locale, setLocale, currency, setCurrency } = useLocale();
  const [open, setOpen] = useState("");

  return (
    <div className="columns">
      <div className="column">
        <Dropup
          title={locale}
          selectAction={(l: string) => setLocale && setLocale(l) && setOpen("")}
          isOpen={open === "locale"}
          openAction={() => setOpen("locale")}
          options={locales}
        />
      </div>
      <div className="column">
        <Dropup
          title={currency}
          selectAction={(l: string) =>
            setCurrency && setCurrency(l) && setOpen("")
          }
          isOpen={open === "currency"}
          openAction={() => setOpen("currency")}
          options={currencies}
        />
      </div>
    </div>
  );
}
// export function LanguageSelector() {
//   const { locale, setLocale } = useLocale();
//   const options = [
//     { value: "de", title: "Deutsch" },
//     { value: "en", title: "English" },
//   ];
//   return (
//     <Dropup
//       title={locale}
//       action={setLocale || console.log}
//       options={options}
//     />
//   );
// }

// export function CurrencySelector() {
//   const { currency, setCurrency } = useLocale();
//   const options = ;

//   return (
//     <Dropup
//       title={currency}
//       action={(c: string) => setCurrency && setCurrency(c)}
//       options={options}
//     />
//   );
// }

interface Option {
  value: string;
  title: string;
}
interface DropupProps {
  title: string;
  openAction: Function;
  selectAction: Function;
  isOpen: boolean;
  options: Array<Option>;
}

const Dropup = ({
  title,
  selectAction,
  options,
  isOpen,
  openAction,
}: DropupProps) => {
  // title
  // action on select
  // options

  // state active
  return (
    <div className={cx("dropdown is-up", { "is-active": isOpen })}>
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu7"
          onClick={() => openAction()}
        >
          <span>{title}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-up" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {options.map((opt) => (
            <a
              href="#"
              className="dropdown-item"
              onClick={selectAction(opt.value)}
              key={opt.value}
            >
              {opt.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
