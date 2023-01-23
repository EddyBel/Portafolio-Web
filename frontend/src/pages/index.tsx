import { CardProyect } from "../components/common/index";
import { FrontImg, MainText } from "../components/pages/index";
import { Contact } from "./contact";

let url =
  "https://raw.githubusercontent.com/EddyBel/Notebook/main/assets/docs/front.png";

export function Index() {
  return (
    <div className="home">
      <section className="home__main">
        <MainText />
        <FrontImg />
      </section>
      <section className="home__body">
        <section className="home__body__proyects">
          <CardProyect />
          <CardProyect direction={false} />
          <CardProyect />
        </section>
        <section className="home_body__contact">
          <Contact />
        </section>
      </section>
    </div>
  );
}
