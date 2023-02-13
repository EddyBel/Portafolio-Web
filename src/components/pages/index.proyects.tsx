import { BookLoader } from "../common/index";
import { useMyAPI } from "../../hook/useContext";

export function Proyects() {
  const myAPI = useMyAPI();
  const projects = myAPI?.proyects?.body;

  return (
    <section className="proyects">
      <div className="projects__scrolling__text_left">
        <h1>{CreateLargeString("- FEATURED WORK", 3)}</h1>
      </div>
      <div className="projects__scrolling__text_right">
        <h1>{CreateLargeString("FEATURED WORK - ", 3)}</h1>
      </div>
      <div className="container__proyects">
        {!projects ? (
          <BookLoader />
        ) : (
          projects.map((project) => (
            <a
              href={project.github}
              className="card__project"
              key={`card__project__${project.github}`}
            >
              <img
                src={project.background}
                alt=""
                className="project__background"
              />
              <div className="project__background__efect"></div>
              <div className="project__container__buttons">
                <button>
                  <span>Button</span>
                  <i></i>
                </button>
              </div>
              <h1 className="name__background">{project.name}</h1>
              <div className="project__container__data">
                <h5 className="project__description">
                  {shortenString(project.description, 80)}
                </h5>
              </div>
            </a>
          ))
        )}
      </div>
    </section>
  );
}

function shortenString(text: string, maxLength: number): string {
  if (text.length > maxLength) return text.substr(0, maxLength - 3) + "...";
  return text;
}

function CreateLargeString(text: string, length: number): string {
  let newString: string = "";
  for (let i = 0; i < length; i++) newString += text;
  return newString;
}
