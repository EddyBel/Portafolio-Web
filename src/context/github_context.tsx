import { createContext, useEffect, useState } from "react";
import { getUserData, getUserRepositories } from "../service/github.api";
import { GITHUB_REPO, GITHUB_RESPONSE } from "../types/index";
import { TOKEN_GITHUB } from "../web.config";

/** Information that will have the context */
type ContextGithub = {
  user_data: GITHUB_RESPONSE | null;
  repos: GITHUB_REPO[] | null;
  reorderRepositoriesByCommit: Function;
};

/** Global context of github data */
export const GithubContext = createContext<ContextGithub | null>(null);

/**
 * Global context provider for github repositories
 * @param {any} children - Children to be provided by the global context
 * @returns - Supplier component
 */
export function GithubProvider({ children }: any) {
  /** Status of a user's gitbub account information */
  const [userData, setUserData] = useState<GITHUB_RESPONSE | null>(null);
  /** Status of github repository information */
  const [userRepositories, setUserRepositories] = useState<
    GITHUB_REPO[] | null
  >(null);

  /**
   * This function reorders the repositories obtained by the n repos with the most recent commit
   * @param {number} n Number of repositories to return
   * @returns {Promise<GITHUB_REPO[]>} Returns the list of retrieved repositories
   */
  const reorderRepositoriesByCommit = async (
    n: number
  ): Promise<GITHUB_REPO[]> => {
    // If the state of the repositories and user data contains something, then you can run the function
    // If it does not contain any values yet, the repositories returns an empty list
    if (userRepositories && userData) {
      // Loop through all repositories and get the date of their last commit
      // returns a list containing the repository and its last commit
      const repositoriesWithLastCommitDates = await Promise.all(
        userRepositories.map(async (repo) => {
          const url = `https://api.github.com/repos/${userData.login}/${repo.name}/commits`;
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${TOKEN_GITHUB}`,
            },
          });
          const commits = await response.json();
          const commitDates = commits.map(
            (commit: any) => new Date(commit.commit.author.date)
          );
          const lastCommitDate = commitDates[0] || new Date(0); // If no commits, set date to 1970
          return { repo, lastCommitDate };
        })
      );
      // Reorders the repositories from the one with the most recent commit date to the least recent
      const sortedRepositories = repositoriesWithLastCommitDates.sort(
        (a, b) => b.lastCommitDate.getTime() - a.lastCommitDate.getTime()
      );
      // Get only the first n repositories specified as the function parameter.
      const latestRepositories = sortedRepositories
        .slice(0, n)
        .map((x) => x.repo);
      // Returns the list of retrieved repositories
      return latestRepositories;
    } else return [];
  };

  /** Executes requests to the github api */
  useEffect(() => {
    // Request user information
    getUserData()
      .then((response) => setUserData(response))
      .catch((response) => setUserData(null));
    // Request user repositories
    getUserRepositories()
      .then((response) => setUserRepositories(response))
      .catch((response) => setUserRepositories(null));
  }, []);

  /** Values to be provided by the context */
  const values = {
    user_data: userData,
    repos: userRepositories,
    reorderRepositoriesByCommit,
  };

  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  );
}
