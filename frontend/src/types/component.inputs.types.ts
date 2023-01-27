import { ChangeEventHandler } from "react";

/**
 * Properties of the search engine component.
 * @property {string | undefined} placeholder - Input placeholder text.
 * @property {ChangeEventHandler | undefinend} onChange - Function that will handle the input event.
 */
export type SearchEngineProps = {
  placeholder?: string;
  onChange?: ChangeEventHandler;
};
