import { CardProyect } from "../components/common/index";
import { FrontImg, MainText } from "../components/pages/index";
import { Contact } from "./contact";
import { proyects } from "../db/proyects.json";

let direccion: boolean = false;

export function Index() {
  return (
    <div className="home">
      <section className="home__main">
        <MainText key={`main-text-section`} />
        <FrontImg key={`main-front-section`} />
      </section>
      <section className="home__body">
        <section className="home__body__proyects">
          {proyects.map((proyect) => {
            direccion = !direccion;

            return (
              <CardProyect
                title={proyect.title}
                description={proyect.description}
                background={proyect.background}
                direction={direccion}
                github={proyect.github}
                web={proyect.web}
                key={`proyect-${proyect.github}`}
              />
            );
          })}
        </section>
        <section className="home_body__contact">
          <Contact key={`body__contact__section`} />
        </section>
      </section>
    </div>
  );
}
