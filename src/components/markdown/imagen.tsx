import { useParams } from "react-router-dom";
import { YO_API } from "../../web.config";

export function Img(props: any) {
  const { matter } = useParams();

  const isURL = (text: string) => {
    if (text.includes("https://") || text.includes("http://")) return text;
    else return `${YO_API}api/assets/note/${matter}/${props.src}`;
  };

  const imgUrl = isURL(props.src);

  return <img src={imgUrl} alt={props.alt} className="markdown__imagen" />;
}
