import { useState, useRef, useEffect } from "react";
import { useLang } from "../../utils/LangHandler";
import "./LanguageSelect.css";

import faFlag from "../../lang/flag/iran.svg";
import enFlag from "../../lang/flag/united kingdom.svg";
import arFlag from "../../lang/flag/saudi arabia.svg";
import trFlag from "../../lang/flag/turkey.svg";
import azFlag from "../../lang/flag/azerbaijan.svg";
import hyFlag from "../../lang/flag/armenia.svg";
import tjFlag from "../../lang/flag/tajikistan.svg";
import ruFlag from "../../lang/flag/russia.svg";
import frFlag from "../../lang/flag/france.svg";
import itFlag from "../../lang/flag/italy.svg";

const flagMap = {
  fa: faFlag,
  en: enFlag,
  ar: arFlag,
  tr: trFlag,
  az: azFlag,
  hy: hyFlag,
  tj: tjFlag,
  ru: ruFlag,
  fr: frFlag,
  it: itFlag,
};

export default function LanguageSelect({ languages }) {

  const { currentLang, changeLanguage } = useLang();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(currentLang);

  const ref = useRef();

  // sync با context
  useEffect(() => {
    setSelected(currentLang);
  }, [currentLang]);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const handleSelect = (lang) => {
    setSelected(lang);
    changeLanguage(lang.code);
    setOpen(false);
  };

  return (
    <div className="lang-select" ref={ref}>
      <div className="lang-selected" onClick={() => setOpen(!open)}>
        <img src={flagMap[selected.code]} alt={selected.code} />
        {selected.label}
      </div>

      {open && (
        <div className="lang-options">
          {languages.map((l) => (
            <div
              key={l.code}
              className="lang-option"
              onClick={() => handleSelect(l)}
            >
              <img src={flagMap[l.code]} alt={l.code} />
              {l.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
