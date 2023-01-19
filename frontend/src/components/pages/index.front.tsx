import { useEffect } from "react";
import { incrementValue } from "../../util/index";
import { useGithub } from "../../hook/useContext";

export function FrontImg() {
  const github_state = useGithub();
  const number_repos = github_state?.user_data?.public_repos;

  useEffect(() => {
    const parent = document.getElementById("home__stats__front__stats");
    if (parent && number_repos) incrementValue(parent, number_repos, 50);
  }, [number_repos]);

  return (
    <div className="home__container__window">
      <div className="home__img__front">
        <div className="home__decoration__front">
          <div className="home__decoration__front__scare"></div>
        </div>
        <div className="home__stats__front">
          <h1 className="home__stats__front__title">Repositories</h1>
          <h1
            className="home__stats__front__stats"
            id="home__stats__front__stats"
          >
            0
          </h1>
        </div>
      </div>
    </div>
  );
}
