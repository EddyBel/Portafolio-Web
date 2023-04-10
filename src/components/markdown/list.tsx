import { ValidateTypeByTagNameOrType } from "./validate_type";

export function Ul(props: any) {
  return <ul className="markdown__list">{props.children}</ul>;
}

export function Ol(props: any) {
  return <ol className="markdown__list">{props.children}</ol>;
}

export function Li(props: any) {
  const renderedChildren = ValidateTypeByTagNameOrType(props);
  return (
    <li className="markdown__item">
      <div className="markdown__item__decoration"></div>
      {renderedChildren}
    </li>
  );
}
