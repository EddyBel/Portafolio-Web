import { useEffect, useState } from "react";
import { useGithub } from "../../hook/useContext";
import { Animations } from "../../lib/animations";

const animations = new Animations();
const lenguages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "C",
  "SQL",
  "HTML",
  "CSS",
  "SASS",
  "GO",
  "Rust",
];

export function Counters() {
  const [projects, setProjects] = useState<number | undefined>();

  const github = useGithub();
  const repos = github?.repos;
  const linesCode = github?.lines_code;
  const commits = github?.commits;

  useEffect(() => {
    if (repos) setProjects(repos.length);
  }, [repos]);

  useEffect(() => {
    if (linesCode && projects && commits) {
      const description = document.querySelector(".counter__description");
      const counters = document.querySelectorAll(".counter__counts__container");
      let cleanAnimationDes: Function;
      let cleanAnimationCoun: Function;
      let height = window.innerHeight - 100;

      if (description) {
        cleanAnimationDes = animations.showElementWithScrollUpAndDown(
          description,
          height
        );
        cleanAnimationCoun = animations.showElementWithScrollUpAndDown(
          counters,
          height
        );
      }

      return () => {
        cleanAnimationDes();
        cleanAnimationCoun();
      };
    }
  }, [linesCode, projects, commits]);

  const formatNumber = (
    code: number,
    type: string = "K",
    fixed: number = 1
  ) => {
    if (type === "K") return `${(code / 1000).toFixed(fixed)}K`;
    if (type === "M") return `${(code / 1000000).toFixed(fixed)}M`;
    else return `${code}`;
  };

  return (
    <section className="counter">
      <p className="counter__description">
        I have collaborated with clients of different industries and sizes,
        delivering high quality projects and exceeding expectations at every
        opportunity. every opportunity. I hope you enjoy my work and that you
        are encouraged to contact me to contact me to collaborate on an exciting
        project together.
      </p>
      <div className="counter__counts">
        <div className="counter__counts__container">
          <p className="counter__counts__number" id="counters-commits">
            {!commits ? 0 : commits}
          </p>
          <p className="counter__counts__type">Commits</p>
        </div>
        <div className="counter__counts__container">
          <p className="counter__counts__number" id="counters-projects">
            {!projects ? 0 : projects}
          </p>
          <p className="counter__counts__type">Projects</p>
        </div>
        <div className="counter__counts__container">
          <p className="counter__counts__number" id="counters-lenguages">
            {lenguages.length}
          </p>
          <p className="counter__counts__type">Languages</p>
        </div>
        <div className="counter__counts__container">
          <p className="counter__counts__number" id="counters-lines">
            {!linesCode ? 0 : formatNumber(linesCode)}
          </p>
          <p className="counter__counts__type">Lines of code</p>
        </div>
      </div>
    </section>
  );
}
