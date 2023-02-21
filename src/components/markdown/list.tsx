export function Ul(props: any) {
  return <ul className="markdown__list">{props.children}</ul>;
}

export function Ol(props: any) {
  return <ol className="markdown__list">{props.children}</ol>;
}

export function Li(props: any) {
  let text = props.children[0];
  let newText = text.charAt(0).toUpperCase() + text.slice(1);
  return (
    <li className="markdown__item">
      <div className="markdown__item__decoration"></div>
      {newText}
    </li>
  );
}
