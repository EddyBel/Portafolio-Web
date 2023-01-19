type CardRepoProps = {
  name: string;
  description: string;
  meta: string[];
  path: string;
  language: string;
  id: number;
};

export function CardRepo({
  name,
  description,
  meta,
  path,
  language,
  id,
}: CardRepoProps) {
  return (
    <div className="card__repo">
      <a href={path} className="card__repo__name">
        {name}
      </a>
      <p className="card__repo__description">{description}</p>
      <ul className="card__repo__tags">
        {meta.map((topic) => (
          <li className="card__repo__tag" key={`repo-${topic}-${id}`}>
            {topic}
          </li>
        ))}
      </ul>
      <div className="card__repo__indicator__language__container">
        <h3 className="card__repo__indicatos__language__name">
          {!language ? "Repository" : language}
        </h3>
        <div className={`card__repo__indicator__language ${language}`}></div>
      </div>
    </div>
  );
}
