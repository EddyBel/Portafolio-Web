import { H1, H2, H3, H4, H5, H6 } from "./titles";
import { P } from "./paragraph";
import { Line } from "./line";
import { Pre, Code } from "./code";
import { Li, Ul, Ol } from "./list";
import { Blockquote } from "./blockquote";
import { Img } from "./imagen";
import { Em } from "./em";

const rendersMarkdown = {
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  h4: (props: any) => <H4 {...props} />,
  h5: (props: any) => <H5 {...props} />,
  h6: (props: any) => <H6 {...props} />,
  p: (props: any) => <P {...props} />,
  hr: (props: any) => <Line {...props} />,
  pre: (props: any) => <Pre {...props} />,
  code: (props: any) => <Code {...props} />,
  ul: (props: any) => <Ul {...props} />,
  ol: (props: any) => <Ol {...props} />,
  li: (props: any) => <Li {...props} />,
  blockquote: (props: any) => <Blockquote {...props} />,
  img: (props: any) => <Img {...props} />,
  em: (props: any) => <Em {...props} />,
};

export { rendersMarkdown };
