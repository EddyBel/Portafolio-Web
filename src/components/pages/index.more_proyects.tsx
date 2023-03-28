import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardGithub, BookLoader } from "../common/index";
import { useGithub } from "../../hook/useContext";
import { trimTheString, shuffleArray } from "../../util/index";
import { GITHUB_REPO } from "../../types/index";
import { Animations } from "../../lib/animations";

let animations = new Animations();
const maxProjects = 6;

export function MoreProyects() {
  const [repos, setRepos] = useState<GITHUB_REPO[]>();

  const github = useGithub();
  const projects = github?.repos;
  const reorderRepos = github?.reorderRepositoriesByCommit;

  useEffect(() => {
    if (projects && reorderRepos)
      reorderRepos(6).then((response: GITHUB_REPO[]) => setRepos(response));
  }, [projects]);

  useEffect(() => {
    let elements = document.querySelectorAll(".github__card");
    let title_page = document.querySelector(
      ".github__more__title"
    ) as HTMLElement;
    const removeAnimation = animations.showElementWithScrollUpAndDown(
      title_page,
      550
    );
    const removeEffect = animations.showElementWithScrollUpAndDown(
      elements,
      550
    );
    return () => {
      removeAnimation();
      removeEffect();
    };
  }, [repos]);

  return (
    <div className="github__more__proyects">
      <h1 className="github__more__title">Other Noteworthy Projects</h1>
      <div className="more__proyects__container">
        {!repos ? (
          <div className="container__loader">
            <BookLoader key="loader__proyects__card__github" />
          </div>
        ) : (
          repos.map((project, index) =>
            index < maxProjects ? (
              <CardGithub
                name={trimTheString(project.name, 17)}
                description={trimTheString(project.description, 150)}
                github={project.html_url}
                tags={project.topics}
                web=""
                key={`github__card__${project.html_url}${Math.random()}`}
              />
            ) : (
              ""
            )
          )
        )}
      </div>
      <Link
        to="/repositories"
        key={`repo__github__${Math.random()}`}
        className="button__more__repositories"
      >
        <span>More Repos</span>
        <i></i>
      </Link>
    </div>
  );
}
