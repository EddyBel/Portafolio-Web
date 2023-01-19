import { createContext, useEffect, useState } from "react";
import { getUserData, getUserRepositories } from "../service/github.api";
import { GITHUB_REPO, GITHUB_RESPONSE } from "../types/index";

/** Information that will have the context */
type ContextGithub = {
  user_data: GITHUB_RESPONSE | null;
  repos: GITHUB_REPO[] | null;
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
  };

  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  );
}
