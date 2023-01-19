const env = import.meta.env;

/** @type {string} Github api */
const API_GITHUB = env.VITE_API_GITHUB || "";
/** @type {string} Github username */
const USER_NAME = env.VITE_GITHUB_USER_NAME || "eddybel";

export { API_GITHUB, USER_NAME };
