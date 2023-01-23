import { Github, Web } from "./svg";

type CardProps = {
  direction?: boolean;
};

export function CardProyect({ direction = true }: CardProps) {
  const url__background: string =
    "https://raw.githubusercontent.com/EddyBel/Math-my/main/assets/doc/white.png";

  return direction ? (
    <div className="card__main__proyect">
      <div className="card__main__proyect__content">
        <h1 className="card__main__proyect__content__title">Title Proyect</h1>
        <p className="card__main__proyect__content__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          possimus sunt distinctio ad recusandae ipsum, tempora assumenda quas
          nesciunt omnis id adipisci quos, praesentium rerum incidunt nam magnam
          impedit nisi?
        </p>
        <div className="card__main__proyect__content__buttons">
          <a
            href="#"
            className="card__main__proyect__content__buttons__direccion"
          >
            <Github width="20px" height="20px" /> Github
          </a>
          <a
            href="#"
            className="card__main__proyect__content__buttons__direccion"
          >
            <Web width="20px" height="20px" color="#85C1E9" />
            Web
          </a>
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
        <h1 className="card__main__proyect__content__title">Title Proyect</h1>
        <p className="card__main__proyect__content__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          possimus sunt distinctio ad recusandae ipsum, tempora assumenda quas
          nesciunt omnis id adipisci quos, praesentium rerum incidunt nam magnam
          impedit nisi?
        </p>
        <div className="card__main__proyect__content__buttons">
          <a
            href="#"
            className="card__main__proyect__content__buttons__direccion"
          >
            <Github width="20px" height="20px" /> Github
          </a>
          <a
            href="#"
            className="card__main__proyect__content__buttons__direccion"
          >
            <Web width="20px" height="20px" color="#85C1E9" />
            Web
          </a>
        </div>
      </div>
    </div>
  );
}
