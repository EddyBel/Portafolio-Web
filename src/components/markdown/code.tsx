import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/okaidia";
import { Copy } from "../../components/common/svg";
import { useEffect, useState } from "react";

export function Pre(props: any) {
  // This state copies the code passed to the block
  const [code, setCode] = useState("");

  // Extracts the className of the element that will be used to identify the block code.
  // Extracts only the string that has the language name
  let className: string = props.children[0]?.props?.className || "Code";
  let lang = className.replace(/language-/, "").toUpperCase();

  /** What this function does is to copy the code provided in this block to the user */
  const copyCode = () => navigator.clipboard.writeText(code);

  useEffect(() => {
    // In this section the code obtained from the block will be stored in the state.
    // The first thing to do is to verify that the element from which the code will be extracted exists.
    // Then send it to the state to be used.
    if (!props.children || !props.children[0]?.props?.children) return;
    const newCode = props.children[0].props.children;
    if (newCode !== code) setCode(newCode);
  }, [props.children, code]);

  return (
    <section className="markdown__code__box">
      <div className="markdown__box__data">
        <div className="markdown__box__decoration">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <h1>{lang}</h1>
        <button onClick={copyCode} title="copy" className="button__copy__code">
          <Copy width="15px" height="15px" color="#fff" />
        </button>
      </div>
      <pre className="markdown__container__code">{props.children}</pre>
    </section>
  );
}

export function Code(props: any) {
  // First get the className of the code block.
  // Assign a default value to the language to use.
  // Initialize the code line counter.
  let className = props?.className;
  let language: any = "jsx";
  let line_number = 0;

  // Extracts the language from the className.
  // If no language is found, it uses the default language.
  try {
    language = verificarLenguaje(className.replace(/language-/, ""));
  } catch {}

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
