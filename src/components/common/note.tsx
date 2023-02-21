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

  return (
    <Link to={`${props.language}/${props.title}`} className="note" title={name}>
      <div className="note-left">
        <div className="note-container-data">
          <h4>Codigo</h4>
          <h1>{props.language}</h1>
        </div>
        <p className="note-level-note">{stringToStar(props.level)}</p>
      </div>
      <div className="note-right">
        <div className="note-container-tags">
          {tags.map((tag) => (
            <p className="note-tag" key={`tag-${Math.random()}`}>
              {tag}
            </p>
          ))}
        </div>
        <div className="note-container-data">
          <h1 className="note-name">{trimTheString(name, 45)}</h1>
          <h5 className="note-date">{props.date}</h5>
        </div>
      </div>
    </Link>
  );
}
