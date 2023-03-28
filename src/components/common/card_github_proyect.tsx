import { useEffect } from "react";
import { Folder, ContorGithub } from "./svg";
import { getValueRandom } from "../../util/index";
import { Animations } from "../../lib/animations";

const animation = new Animations();

type PropsCardGithub = {
  github: string;
  web?: string;
  name: string;
  description: string;
  tags: string[];
};

const numbers = ["one", "two", "tree", "four", "five"];

export function CardGithub(props: PropsCardGithub) {
  useEffect(() => {
    const element = document.getElementById(props.github) as HTMLElement;
    const cleanAnimation = animation.trackerAndRotateMouse3D(element);

    return () => cleanAnimation();
  }, []);

  return (
    <a
      href={props.github}
      title={props.name}
      id={props.github}
      className="github__card__container"
    >
      <div className={`github__card ${getValueRandom(numbers)}`}>
        <div className="shadow__background">
          <div className="github__card__proyect">
            <Folder
              width="40px"
              height="40px"
              color="#fff"
              key="icon-folder-card-github"
            />
            <ContorGithub
              width="25px"
              height="25px"
              color="#fff"
              key="icon-github-contor-card-github"
            />
          </div>
          <h1 className="github__card__proyect__title">{props.name}</h1>
          <p className="github__card__proyect__description">
            {props.description}
          </p>
          <div className="github__card__tags">
            {props.tags.map((tag) => (
              <p
                className="github__card__tag"
                key={`tagnames__github__card__${
                  props.github
                }__${Math.random()}`}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
