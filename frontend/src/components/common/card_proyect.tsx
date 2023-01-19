type CardProps = {
  direccion?: boolean;
};

export function CardProyect({ direccion = true }: CardProps) {
  return direccion ? (
    <div className="home__proyects__card">
      <div className="home__proyect__card__data">
        <h1 className="home__proyects__card__title">
          Title Proyect{" "}
          <span className="home__proyects__card__titledecoration__title"></span>
        </h1>
        <div className="home__proyects__card__decoration"></div>
        <ul className="home__proyects__list__tecnologies">
          <li className="home__proyects__list__tecnologie">
            <h5>JavaScript</h5>
          </li>
          <li className="home__proyects__list__tecnologie">
            <h5>Python</h5>
          </li>
          <li className="home__proyects__list__tecnologie">
            <h5>TypeScript</h5>
          </li>
          <li className="home__proyects__list__tecnologie">
            <h5>Java</h5>
          </li>
        </ul>
        <p className="home__proyects__card__descriptions">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          consequatur? Nostrum natus placeat iure quidem quisquam. Nihil,
          perspiciatis. Quo voluptas rem ea culpa perferendis necessitatibus
          sunt aliquam magni accusamus laboriosam.
        </p>
        <div className="home__proyects__container__buttons">
          <a href="#" className="home__proyects__buttons__direccion">
            Github
          </a>
          <a href="#" className="home__proyects__buttons__direccion">
            Web
          </a>
        </div>
      </div>
      <div className="home__proyect__card__container__img">
        <h1 className="home__proyect__card__number">1.0</h1>
        <div
          className="home__proyect__card__img"
          style={{
            backgroundImage: `url(${"https://raw.githubusercontent.com/EddyBel/Notebook/main/assets/docs/Capture.png"})`,
          }}
        ></div>
      </div>
    </div>
  ) : (
    <div className="home__proyects__card">
      <div className="home__proyect__card__container__img">
        <h1 className="home__proyect__card__number">1.0</h1>
        <div
          className="home__proyect__card__img"
          style={{
            backgroundImage: `url(${"https://raw.githubusercontent.com/EddyBel/Notebook/main/assets/docs/Capture.png"})`,
          }}
        ></div>
      </div>
      <div className="home__proyect__card__data">
        <h1 className="home__proyects__card__title">Title Proyect</h1>
        <div className="home__proyects__card__decoration"></div>
        <p className="home__proyects__card__descriptions">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          consequatur? Nostrum natus placeat iure quidem quisquam. Nihil,
          perspiciatis. Quo voluptas rem ea culpa perferendis necessitatibus
          sunt aliquam magni accusamus laboriosam.
        </p>
        <div className="home__proyects__container__buttons">
          <a href="#" className="home__proyects__buttons__direccion github">
            Github
          </a>
          <a href="#" className="home__proyects__buttons__direccion">
            Web
          </a>
        </div>
      </div>
    </div>
  );
}
