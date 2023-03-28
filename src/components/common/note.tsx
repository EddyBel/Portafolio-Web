import { Link } from "react-router-dom";
import {
  trimTheString,
  stringToStar,
  stringToArray,
  getExtension,
} from "../../util/index";

type PropsThemeCard = {
  title: string;
  type?: string;
  language?: string;
  tags: string;
  level: string;
  date: string;
};

export function NoteCard(props: PropsThemeCard) {
  const tags = stringToArray(props.tags);
  const { name } = getExtension(props.title);

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid Date");
      }
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return dateString;
    }
  };

  return (
    // <Link to={`${props.language}/${props.title}`} className="note" title={name}>

    // </Link>
    <div className="ag-courses_item">
      <Link
        to={`${props.language}/${props.title}`}
        className="ag-courses-item_link"
      >
        <div className="ag-courses-item_link_background"></div>
        <div className={`ag-courses-item_bg ${props.language}`} />
        <h1 className="ag-courses-item_title">{name}</h1>
        <h4 className="ag-courses-item_lenguaje">{props.language}</h4>
        <div className="ag-courses-item_date-box">
          <span className="ag-courses-item_date">{formatDate(props.date)}</span>
        </div>
      </Link>
    </div>
  );
}
