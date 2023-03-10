import { useEffect } from "react";
import { BookLoader, CardProyect } from "../common/index";
import { Animations } from "../../lib/animations";
import { useMyAPI } from "../../hook/useContext";

let animation = new Animations();
let direction = true;

export function Proyects() {
  const myAPI = useMyAPI();
  const projects = myAPI?.proyects?.body;

  useEffect(() => {
    let projects_left = document.querySelectorAll(".card__proyect");
    let projects_right = document.querySelectorAll(".card__proyect__right");
    let cleanAnimation_left =
      animation.showElementWithScrollLeftAndRight(projects_left);
    let cleanAnimation_right = animation.showElementWithScrollLeftAndRight(
      projects_right,
      350,
      "right"
    );
    return () => {
      cleanAnimation_left();
      cleanAnimation_right();
    };
  }, [projects]);

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
