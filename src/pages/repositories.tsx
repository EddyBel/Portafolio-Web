import { useState, useEffect } from "react";
import { SearchEngine, BookLoader } from "../components/common/index";
import { ContorGithub } from "../components/common/svg";
import { useGithub } from "../hook/useContext";
import { GITHUB_REPO } from "../types/github_api.types";
import { Animations } from "../lib/animations";

const animation = new Animations();

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

  const formatSize = (size: number) => {
    let megas = Math.round(size / 100);
    if (megas == 0) return `${size} Kb`;
    else return `${megas} Mb`;
  };

  const formatLang = (lang: string) => {
    if (lang) return lang.toUpperCase();
    else return "Repository".toUpperCase();
  };

  useEffect(() => {
    if (repos) setRepositories(repos);
  }, [repos]);

  useEffect(() => {
    setTimeout(() => {
      const repos = document.querySelectorAll(".repo__data");
      let removeEvent = animation.showElementWithScrollUpAndDown(repos, 620);
      return () => removeEvent();
    }, 1000);
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
                  <th>
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
