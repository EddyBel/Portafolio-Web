import { GITHUB_RESPONSE, GITHUB_REPO } from "../types/index";
import { API_GITHUB, USER_NAME, TOKEN_GITHUB } from "../web.config";

/**
 * Function that makes a request to the github api and obtains user profile data.
 * @returns {Promise<GITHUB_RESPONSE>} - Response to the request
 */
export const getUserData = async (): Promise<GITHUB_RESPONSE> => {
  try {
    const response = await fetch(`${API_GITHUB}${USER_NAME}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN_GITHUB}`,
      },
    });
    if (!response) throw new Error("Data not found");
    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error("Server error");
  }
};

/**
 * Function that makes a request to the github api and obtains a list of repository properties.
 * @returns {Promise<GITHUB_REPO[]>} - Response to the request
 */
export const getUserRepositories = async (): Promise<GITHUB_REPO[]> => {
  try {
    const response = await fetch(`${API_GITHUB}${USER_NAME}/repos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN_GITHUB}`,
      },
    });
    if (!response) throw new Error("Repos not found");
    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error("Server error");
  }
};
