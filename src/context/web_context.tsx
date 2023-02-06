import { createContext, useState } from "react";

type WEB_PROPS = {
  language: string;
  updateLang: Function;
};

/** Context of some web configurations. */
export const WebContext = createContext<WEB_PROPS>({
  language: "en",
  updateLang: () => {},
});

/**
 * Global web configuration provider.
 * @param {any} children - Children who can access the data.
 * @returns {Element} - Global configuration provider.
 */
export function ProviderWeb({ children }: any) {
  /** This state saves the language of the web */
  const [lang, setLang] = useState<string>("English");

  /**
   * Updates the language status value.
   * @param {string} lang - Web language.
   * @returns {void} - Returns nothing.
   */
  const updateLang = (lang: string) => setLang(lang);

  /** Values to be served on the web. */
  const values = {
    language: lang,
    updateLang,
  };

  return <WebContext.Provider value={values}>{children}</WebContext.Provider>;
}
