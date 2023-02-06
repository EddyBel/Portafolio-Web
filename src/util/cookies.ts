import Cookie from "universal-cookie";
import { HTTP_ONLY, EXPIRATION, SECURE } from "../web.config";

const cookie = new Cookie();

/**
 * This function creates a cookie with the specified values.
 * @param {string} name - Cookie identifier.
 * @param {string} value - Cookie value.
 */
export const createCookie = (name: string, value: string): void => {
  cookie.set(name, value, {
    path: "/",
    maxAge: EXPIRATION,
    secure: SECURE,
    httpOnly: HTTP_ONLY,
    sameSite: "strict",
  });
};

/**
 * This funcino obtains a cookie given an identifier.
 * @param {string} identifierName - Name of the cookie to search.
 * @returns {any} - Returns the value of the cookie
 */
export const getCookie = (identifierName: string) => cookie.get(identifierName);
