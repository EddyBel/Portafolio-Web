import { Search } from "./svg";
import { SearchEngineProps } from "../../types/index";

/**
 * Component rendering a search engine.
 * @param {string | undefined} placeholder - Input placeholder text.
 * @param {ChangeEventHandler | undefinend} onChange - Function that will handle.
 * @returns {Component} Search component.
 */
export function SearchEngine({ placeholder, onChange }: SearchEngineProps) {
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder={placeholder}
        onChange={onChange}
      />
      <Search height="30px" width="30px" color="#3498DB" />
    </div>
  );
}
