import { CardProyectProps } from "../../types/index";
import { Github, Web } from "./svg";

export function CardProyect(props: CardProyectProps) {
  if (props.direction)
    return (
      <div className="card__proyect">
        <img
          src={props.background}
          alt={props.title}
          className="card__proyect__img__proyect"
        />
        <div className="card__proyect__data__container">
          <h4 className="card__proyect__data__subtitle">Featured Project</h4>
          <h1 className="card__proyect__data__name">{props.title}</h1>
          <p className="card__proyect__data__container__description">
            {props.description}
          </p>
          <div className="card__proyect__data__container__tags">
            {!props.tags ? (
              <></>
            ) : (
              props.tags.map((tag) => (
                <h5 key={`tag-proyect-${tag}-${Math.random()}`}>{tag}</h5>
              ))
            )}
          </div>
          <div className="card__proyect__data__container__buttons">
            <a href={props.github} className="cssbuttons-io">
              <span>
                <Github width="20px" height="20px" color="#000" /> Github
              </span>
            </a>
            {!props.web ? (
              <></>
            ) : (
              <a href={props.web} className="cssbuttons-io">
                <span>
                  <Web width="20px" height="20px" color="#fff" /> Web
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="card__proyect__right">
        <div className="card__proyect__data__container">
          <h4 className="card__proyect__data__subtitle">Featured Project</h4>
          <h1 className="card__proyect__data__name">{props.title}</h1>
          <p className="card__proyect__data__container__description">
            {props.description}
          </p>
          <div className="card__proyect__data__container__tags">
            {!props.tags ? (
              <></>
            ) : (
              props.tags.map((tag) => (
                <h5 key={`tag-proyect-${tag}-${Math.random()}`}>{tag}</h5>
              ))
            )}
          </div>
          <div className="card__proyect__data__container__buttons">
            <a href={props.github} className="cssbuttons-io">
              <span>
                <Github width="20px" height="20px" color="#000" /> Github
              </span>
            </a>
            {!props.web ? (
              <></>
            ) : (
              <a href={props.web} className="cssbuttons-io">
                <span>
                  <Web width="20px" height="20px" color="#fff" /> Web
                </span>
              </a>
            )}
          </div>
        </div>
        <img
          src={props.background}
          alt={props.title}
          className="card__proyect__img__proyect"
        />
      </div>
    );
}
