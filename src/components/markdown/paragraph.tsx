import { ValidateTypeByTagNameOrType } from "./validate_type";

export function P(props: any) {
  const renderedChildren = ValidateTypeByTagNameOrType(props);
  return <p className="markdown__paragraph__normal">{renderedChildren}</p>;
}
