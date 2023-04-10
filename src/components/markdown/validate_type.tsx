import { SimpleCodeBlock } from "./code";
export function ValidateTypeByTagNameOrType(props: any) {
  //   console.log(props);
  try {
    const children = props.node.children;

    const renderedChildren = children.map((child: any, index: number) => {
      let type = child.type;
      let tagName = child.tagName;

      if (type === "text") return child.value;
      else if (child.tagName == "strong")
        return <span className="text__bold">{child.children[0].value}</span>;
      else if (tagName === "pre")
        return (
          <pre key={`${child}-${index}`}>
            <SimpleCodeBlock
              text={child.children[0].children[0].value}
              param="special"
            />
          </pre>
        );
      else if (tagName == "code")
        return (
          <SimpleCodeBlock
            key={`${child}-${index}`}
            text={child.children[0].value}
          />
        );
    });
    return renderedChildren;
  } catch (error) {
    console.log(error);
    return "**Error Rendering**";
  }
}
