import { useState, useEffect } from "react";
import { SearchEngine, CardRepo, Spinner } from "../components/common/index";
import { useGithub } from "../hook/useContext";
import { GITHUB_REPO } from "../types/github_api.types";

export const Repositories = () => {
  const [repositories, setRepositories] = useState<GITHUB_REPO[]>();

  const github__state = useGithub();
  const repos = github__state?.repos;

  const onChangeHanddleSearchRepo = (e: any) => {
    let value: string = e.target.value;
    let newValue: string = value.toLowerCase();
    let newRepos: GITHUB_REPO[] = [];

    if (value === "" || value === null) {
      if (repos) setRepositories(repos);
    } else {
      repos?.map((repo) => {
        let newName = repo.name.toLowerCase();
        let newLanguage = !repo.language
          ? "repository"
          : repo.language.toLowerCase();

        if (
          newName.includes(newValue) ||
          (newLanguage.includes(newValue) && !newRepos.includes(repo))
        )
          newRepos.push(repo);

        repo.topics.map((tag) => {
          let newTag = tag.toLowerCase();
          if (newTag.includes(newValue) && !newRepos.includes(repo))
            newRepos.push(repo);
        });
      });

      setRepositories(newRepos);
    }
  };

  useEffect(() => {
    if (repos) setRepositories(repos);
  }, [repos]);

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
        <div className="repositories__list">
          {!repositories ? (
            <Spinner />
          ) : (
            repositories.map((repo) => (
              <CardRepo
                name={repo.name}
                description={repo.description}
                meta={repo.topics}
                path={repo.html_url}
                language={repo.language}
                id={repo.id}
                key={repo.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
