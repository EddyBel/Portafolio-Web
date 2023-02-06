import { CardRepoProps } from "../../types/index";

/**
 * Chart component displaying a github repository.
 * @param {string} name - Repository name
 * @param {string} description - Repository description
 * @param {string[]} meta - List of labels
 * @param {string} path - Repository path
 * @param {string} language - Repository language primary
 * @param {number} id - Repository id
 * @returns {Component} - Component that renders a card.
 */
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
