import { CardProyect } from "../components/common/index";
import { FrontImg, MainText } from "../components/pages/index";

export function Index() {
  return (
    <div className="home">
      <section className="home__main">
        <MainText />
        <FrontImg />
      </section>
      <section className="home__body">
        <section className="home__proyects">
          <CardProyect />
          <CardProyect direccion={false} />
          <CardProyect />
        </section>
        <section className="home__skills">
          <ul>
            <li>
              <div className="home__skills__tec"></div>
            </li>
            <li>
              <div className="home__skills__tec"></div>
            </li>
            <li>
              <div className="home__skills__tec"></div>
            </li>
            <li>
              <div className="home__skills__tec"></div>
            </li>
            <li>
              <div className="home__skills__tec"></div>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}
