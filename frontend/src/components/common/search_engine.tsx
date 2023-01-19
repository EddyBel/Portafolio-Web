import { Search } from "./svg";

type SearchEngineProps = {
  placeholder?: string;
  onChange?: any;
};

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
