import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/okaidia";

export function Pre(props: any) {
  let className: string = props.children[0].props.className;
  let lang = className.replace(/language-/, "").toUpperCase();
  return (
    <section className="markdown__code__box">
      <div className="markdown__box__data">
        <div className="markdown__box__decoration">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <h1>{lang}</h1>
      </div>
      <pre className="markdown__container__code">{props.children}</pre>
    </section>
  );
}

export function Code(props: any) {
  let className = props.className;
  let language: string;
  try {
    language = verificarLenguaje(className.replace(/language-/, ""));
  } catch {
    language = "jsx";
  }
  let line_number = 0;

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={props.children[0]}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => {
            line_number += 1;
            if (line_number != tokens.length)
              return (
                <div className="line__code" key={`code-${Math.random()}`}>
                  <h4 className="line__code__number">{line_number}</h4>
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                </div>
              );
          })}
        </>
      )}
    </Highlight>
  );
}

function verificarLenguaje(lenguaje: string): string {
  const lenguajes: string[] = [
    "markup",
    "bash",
    "clike",
    "c",
    "cpp",
    "css",
    "css-extras",
    "javascript",
    "js",
    "jsx",
    "js-extras",
    "js-templates",
    "coffeescript",
    "diff",
    "git",
    "go",
    "graphql",
    "markup-templating",
    "handlebars",
    "json",
    "less",
    "makefile",
    "markdown",
    "objectivec",
    "ocaml",
    "python",
    "reason",
    "sass",
    "scss",
    "sql",
    "stylus",
    "tsx",
    "typescript",
    "wasm",
    "yaml",
  ];

  if (lenguajes.includes(lenguaje)) {
    return lenguaje;
  } else {
    return "cpp";
  }
}
