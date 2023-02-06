import { YO_API, USERNAME_YO_API, PASSWORD_YO_API } from "../web.config";
import { YoAPIAuth, YoAPIBiography, YoAPIProyects } from "../types/index";

/**
 * Authentication in the api to access the application.
 * @returns {Promise<YoAPIAuth | null>} - Promise contain tocken and message
 */
export const autenticationInMyAPI = async (): Promise<YoAPIAuth | null> => {
  try {
    // Information that will be sent to the api to authenticate me on the api.
    const data = JSON.stringify({
      username: USERNAME_YO_API,
      password: PASSWORD_YO_API,
    });

    // Creates a POST request to the api and sends the user and password to the api.
    return fetch(`${YO_API}api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(`Failed to fetch projects: ${response.statusText}`);
        return response.json();
      })
      .catch((error) => {
        console.error(`Error in autenticationInMyAPI: ${error.message}`);
        throw new Error(`Authentication failed: ${error.message}`);
      });
  } catch (err) {
    throw new Error(`Error in the request`);
  }
};

/**
 * This function creates a request to the api to obtain the biography information.
 * @param {string} tocken - This tocken gives access to the following information.
 * @returns {Promise<YoAPIBiography | null>} - Returns the server's response or a null.
 */
export const getMyBiography = async (
  tocken: string
): Promise<YoAPIBiography | null> => {
  try {
    // Create request headers
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-Tocken", tocken);

    // Create the request to the api
    return fetch(`${YO_API}api/personal/biography`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(`Failed to fetch projects: ${response.statusText}`);
        return response.json();
      })
      .catch((error) => {
        console.error(`Error in getMyBiography: ${error.message}`);
        throw new Error(`Error getting biography: ${error.message}`);
      });
  } catch (err) {
    throw new Error(`Error in the request`);
  }
};

/**
 * Get my personal projects, from my api.
 * @param {string} tocken - This tocken gives access to the following information.
 * @returns {Promise<YoAPIBiography | null>} - Returns the server's response or a null.
 */
export const getMyProyects = async (
  tocken: string
): Promise<YoAPIProyects | null> => {
  try {
    // Create request headers
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-Tocken", tocken);

    // Create the request to the api
    return fetch(`${YO_API}api/personal/proyects`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(`Failed to fetch projects: ${response.statusText}`);
        return response.json();
      })
      .catch((error) => {
        console.error(`Error in getMyProyects: ${error.message}`);
        throw new Error(`Failed to fetch projects: ${error.message}`);
      });
  } catch (err) {
    throw new Error(`Error in the request`);
  }
};

/**
 * This function allows you to send a message through the personal api to a gmail account.
 * @param {string} tocken - This tocken gives access to the api function.
 * @param {object} data - This object is the information that will be sent for the message.
 * @returns - Returns the server's response or a null
 */
export const sendMessageFromAPI = (tocken: string, data: object) => {
  try {
    // Create request headers
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-Tocken", tocken);

    // Create the request to the api
    return fetch(`${YO_API}api/message/gmail`, {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `Failed to fetch message gmail: ${response.statusText}`
          );
        return response.json();
      })
      .catch((error) => {
        console.error(`Error in sendMessageFromAPI: ${error.message}`);
        throw new Error(`Error sending message: ${error.message}`);
      });
  } catch (err) {
    throw new Error(`Error in the request`);
  }
};
