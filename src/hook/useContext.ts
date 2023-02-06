import { useContext } from "react";
import { GithubContext } from "../context/github_context";
import { YoApiContext } from "../context/yoapi_context";
import { WebContext } from "../context/web_context";

/** Function providing context information. */
export const useGithub = () => useContext(GithubContext);

/** Function that provides personal information. */
export const useMyAPI = () => useContext(YoApiContext);

/** Function that provides the global configuration of the web site. */
export const useWeb = () => useContext(WebContext);
