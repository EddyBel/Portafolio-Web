import { BookLoader, CardProyect } from "../common/index";
import { useMyAPI } from "../../hook/useContext";

let direction = true;

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
          projects.map((project, index) => {
            direction = !direction;
            return (
              <CardProyect
                direction={direction}
                background={project.background}
                title={project.name}
                description={shortenString(project.description, 230)}
                tags={project.tags}
                github={project.github}
                web={project.web}
                key={project.github}
              />
            );
          })
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
