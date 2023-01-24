import { Github, Web } from "./svg";

type CardProps = {
  title: string;
  description: string;
  background: string;
  github: string;
  web: string | undefined;
  direction?: boolean;
};

export function CardProyect({
  title,
  description,
  background,
  github,
  web,
  direction = true,
}: CardProps) {
  const url__background: string = background;

  return direction ? (
    <div className="card__main__proyect">
      <div className="card__main__proyect__content">
        <h1 className="card__main__proyect__content__title">{title}</h1>
        <p className="card__main__proyect__content__description">
          {description}
        </p>
        <div className="card__main__proyect__content__buttons">
          <a
            href={github}
            className="card__main__proyect__content__buttons__direccion"
          >
            <Github width="20px" height="20px" /> Github
          </a>
          {!web ? (
            <></>
          ) : (
            <a
              href={web}
              className="card__main__proyect__content__buttons__direccion"
            >
              <Web width="20px" height="20px" color="#85C1E9" />
              Web
            </a>
          )}
        </div>
      </div>
      <div
        className="card__main__proyect__img"
        style={{ backgroundImage: `url(${url__background})` }}
      ></div>
    </div>
  ) : (
    <div className="card__main__proyect">
      <div
        className="card__main__proyect__img"
        style={{ backgroundImage: `url(${url__background})` }}
      ></div>
      <div className="card__main__proyect__content">
        <h1 className="card__main__proyect__content__title">{title}</h1>
        <p className="card__main__proyect__content__description">
          {description}
        </p>
        <div className="card__main__proyect__content__buttons">
          <a
            href={github}
            className="card__main__proyect__content__buttons__direccion"
          >
            <Github width="20px" height="20px" /> Github
          </a>
          {!web ? (
            <></>
          ) : (
            <a
              href={web}
              className="card__main__proyect__content__buttons__direccion"
            >
              <Web width="20px" height="20px" color="#85C1E9" />
              Web
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
