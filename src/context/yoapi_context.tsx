import { createContext, useEffect, useState } from "react";
import {
  autenticationInMyAPI,
  getMyBiography,
  getMyProyects,
  getAllNotesFromApi,
} from "../service/myApi.api";
import { YoAPIBiography, YoAPIProyects, YoAPIAllNotes } from "../types/index";
import { createCookie, getCookie } from "../util/cookies";

type ContextYoAPI = {
  aboutMe: YoAPIBiography | null | undefined;
  proyects: YoAPIProyects | null | undefined;
  notes: YoAPIAllNotes | null | undefined;
};

/** Context of the personal information obtained from the api. */
export const YoApiContext = createContext<ContextYoAPI | null>(null);

/**
 * This function provides the context of the personal information obtained from the api.
 * @param {any} children - Child elements that will use the information.
 * @returns {Element} - Supplier element.
 */
export function YoAPIProvider({ children }: any) {
  /** This status stores biographical information */
  const [aboutMe, setAboutMe] = useState<YoAPIBiography | null>(null);
  /** This status keeps personal projects */
  const [proyects, setProyects] = useState<YoAPIProyects | null>(null);
  /** Status of the basic information stored in the api */
  const [info, setInfo] = useState(null);
  /** Validate that the authentication is correct */
  const [auth, setAuth] = useState<any>();
  /** This status keep all personal notes */
  const [notes, setNotes] = useState<YoAPIAllNotes | null>(null);

  /**
   * Request other information to the personal api
   * @param {string | undefined} tocken - Tocken to validate the request.
   */
  const getData = (tocken: any) => {
    // Get api biography
    getMyBiography(tocken)
      .then((response) => setAboutMe(response))
      .catch((error) => {
        // Re-authenticate in the api to obtain a token.
        autenticationInMyAPI().then((newResponse) => {
          // If the response exists, and the tocken property exists, it creates a cookie with that tocken and re-requests the data.
          if (newResponse)
            if (newResponse.tocken) {
              // Create the cookie with the tocken.
              createCookie("Access-Tocken", newResponse.tocken);
              // Make a new request.
              getData(newResponse.tocken);
            } else console.error("Error when extracting a new tocken");
        });
      });

    // Get the projects from the api
    getMyProyects(tocken)
      .then((response) => setProyects(response))
      .catch((error) => {
        // Re-authenticate in the api to obtain a token.
        autenticationInMyAPI().then((newResponse) => {
          // If the response exists, and the tocken property exists, it creates a cookie with that tocken and re-requests the data.
          if (newResponse)
            if (newResponse.tocken) {
              // Create the cookie with the tocken.
              createCookie("Access-Tocken", newResponse.tocken);
              // Make a new request.
              getData(newResponse.tocken);
            } else console.error("Error when extracting a new tocken");
        });
      });
    // Get the notes from the api
    getAllNotesFromApi(tocken)
      .then((response) => setNotes(response))
      .catch((error) => {
        // Re-authenticate in the api to obtain a token.
        autenticationInMyAPI().then((newResponse) => {
          // If the response exists, and the tocken property exists, it creates a cookie with that tocken and re-requests the data.
          if (newResponse)
            if (newResponse.tocken) {
              // Create the cookie with the tocken.
              createCookie("Access-Tocken", newResponse.tocken);
              // Make a new request.
              getData(newResponse.tocken);
            } else console.error("Error when extracting a new tocken");
        });
      });
  };

  const Authenticate = () => {
    // Get tocken cookie.
    const tocken = getCookie("Access-Tocken");

    // Validates if the cookie exists to make requests.
    if (!tocken) {
      // Aiming of the api to obtain the tocken.
      autenticationInMyAPI().then((response) => {
        // If the answer is correct, create the request with the tocken obtained and create a cookie with the name "Access-Tocken" and the tocken as value.
        if (response) {
          // If the token is found, it creates the cookie and creates the request.
          if (response.tocken) {
            // Create cookie
            createCookie("Access-Tocken", response.tocken);
            // Make a request
            getData(response.tocken);
          } else console.error("Conection not found a YoApi");
        }
      });
    } else {
      // Make the request with the cookie that has the token.
      getData(tocken);
    }
  };

  useEffect(() => {
    Authenticate(); // Make the request to the api.
    // setTimeout(() => Authenticate(), 35000); // In 35 seconds it makes the request to the api again.
    // setTimeout(() => Authenticate(), 50000); // In 50 seconds it makes the request to the api again
  }, []);

  /**Values to be served by the global state.*/
  const values = {
    aboutMe: aboutMe,
    proyects: proyects,
    notes: notes,
  };

  return (
    <YoApiContext.Provider value={values}>{children}</YoApiContext.Provider>
  );
}
