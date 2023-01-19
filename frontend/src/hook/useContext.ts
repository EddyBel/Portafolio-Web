import { useContext } from "react";
import { GithubContext } from "../context/github_context";

/** Function providing context information */
export const useGithub = () => useContext(GithubContext);
