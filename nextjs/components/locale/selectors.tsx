import React, { useState } from "react";
import { useLocale } from "./LocaleProvider";
import cx from "classnames";

// TODO get these from the server
const locales = [
  { value: "de", title: "Deutsch" },
  { value: "en", title: "English" },
];
const currencies = [
  { value: "EUR", title: "EUR" },
  { value: "USD", title: "USD" },
];

/**
 * Drop up selectors for locale (language) and currency
 */
export default function LocaleSelectors() {
  const { locale, setLocale, currency, setCurrency } = useLocale();
  // only one may be open at a time
  const [open, setOpen] = useState("");
  const selectAction = (setter?: Function) => {
    return (l: string) => {
      if (setter) {
        setter(l);
      }
      setOpen("");
    };
  };

  return (
    <div className="columns">
      <div className="column">
        <Dropup
          title={locale}
          selectAction={selectAction(setLocale)}
          isOpen={open === "locale"}
          openAction={() => setOpen("locale")}
          options={locales}
        />
      </div>
      <div className="column">
        <Dropup
          title={currency}
          selectAction={selectAction(setCurrency)}
          isOpen={open === "currency"}
          openAction={() => setOpen("currency")}
          options={currencies}
        />
      </div>
    </div>
  );
}

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
              onClick={() => selectAction(opt.value)}
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
