import { useState, useEffect } from "react";
import { SearchEngine, BookLoader } from "../components/common/index";
import { ContorGithub } from "../components/common/svg";
import { useGithub } from "../hook/useContext";
import { GITHUB_REPO } from "../types/github_api.types";
import { Animations } from "../lib/animations";
import { formatLang, formatSize } from "../util/index";

const animation = new Animations();

export const Repositories = () => {
  /** This state will manage the list of repositories and will be the ones that will be rendered on the web. */
  const [repositories, setRepositories] = useState<GITHUB_REPO[]>();

  // Extracts the global status data from github.
  // Among the data needed are the repositories obtained from the github API.
  const github__state = useGithub();
  const repos = github__state?.repos;

  /** This function is in charge of searching through the list of repositories. */
  const onChangeHanddleSearchRepo = (e: any) => {
    // Extract the value from the input.
    // Convert the value to lowercase, this will be used to search the repositories.
    // Creates an empty list where the found repositories will be stored.
    let value: string = e.target.value;
    let newValue: string = value.toLowerCase();
    let newRepos: GITHUB_REPO[] = [];

    // If there is no value to search for or it is an empty string then get the complete repositories.
    // If not then you can start the search.
    if (value === "" || value === null) {
      if (repos) setRepositories(repos);
    } else {
      repos?.map((repo) => {
        // Get the repository name and pass it in aminuscules.
        // Get the repository language and convert it to lowercase.
        // Then validate that the repository name contains what was typed as input, also validate if it is also included in the repo language and finally validate if the repository is already in the list of repositories fetched.
        let newName = repo.name.toLowerCase();
        let newLanguage = !repo.language
          ? "repository"
          : repo.language.toLowerCase();
        let validateNameLangAndNotRepo =
          newName.includes(newValue) ||
          (newLanguage.includes(newValue) && !newRepos.includes(repo));
        if (validateNameLangAndNotRepo) newRepos.push(repo);

        // It goes through the list of tagsnames in the repository.
        // If the input is contained in the tagname and also the repo has not been assigned to the repository list then you can add it to the repository list.
        repo.topics.map((tag) => {
          let newTag = tag.toLowerCase();
          if (newTag.includes(newValue) && !newRepos.includes(repo))
            newRepos.push(repo);
        });
      });

      // Adds the obtained repositories to the list of repositories
      setRepositories(newRepos);
    }
  };

  // If the repositories are found perfectly then save them in a local state
  useEffect(() => {
    if (repos) setRepositories(repos);
  }, [repos]);

  // Animations are defined here
  useEffect(() => {
    if (repositories) {
      // Create the animation that will be used by all repositories.
      // the funcino returns a function that removes the event that uses the animation.
      // Get the height of the window and subtract an action margin.
      // Run the animation function with the new distance value.
      const repos = document.querySelectorAll(".repo__data");
      const animationRepo = () => {
        const height = window.innerHeight - 20;
        const removeEvent = animation.showElementWithScrollUpAndDown(
          repos,
          height
        );
        return () => removeEvent();
      };

      // Executes the animation function at the start of the code.
      // Runs the animation function every time the window is resized.
      const cleanAnimation = animationRepo();
      window.addEventListener("resize", animationRepo);

      // Returns a function that executes the functions to eliminate the events.
      return () => {
        cleanAnimation();
        window.removeEventListener("resize", animationRepo);
      };
    }
  }, [repositories]);

  return (
    <div className="repositories">
      <div className="repositories__container__data">
        <h1 className="repositories__title">Repositories</h1>
        <p className="repositories__description__page">
          These are my github repositories, different projects with different
          languages.
        </p>
      </div>
      <div className="repositories__container">
        <SearchEngine
          placeholder="✏️ Enter the name of the repository or its technology"
          onChange={onChangeHanddleSearchRepo}
        />
        {!repositories ? (
          <div className="container__loader">
            <BookLoader />
          </div>
        ) : repositories.length === 0 ? (
          <h1 className="message_not_found__repos">No repository found 😥</h1>
        ) : (
          <table className="table-repos">
            <thead>
              <tr className="repo__head">
                <th className="repo__head__size">Size</th>
                <th className="repo__head__name">Name</th>
                <th className="repo__head__lang">Lang</th>
                <th className="repo__head__link">Link</th>
              </tr>
            </thead>
            <tbody>
              {repositories.map((repo) => (
                <tr className="repo__data" key={`ìd-repo-${repo.id}`}>
                  <th className="repo__data__size">{formatSize(repo.size)}</th>
                  <th className="repo__data__name">{repo.name}</th>
                  <th className="repo__data__lang">
                    {formatLang(repo.language)}
                  </th>
                  <th className="repo__data__link">
                    <a href={repo.html_url} title={repo.html_url}>
                      <ContorGithub height="20px" width="20px" color="#000" />
                    </a>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
