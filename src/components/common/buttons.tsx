import { Link } from "react-router-dom";
import { SendMessage } from "./svg";

/**
 * Button component that changes path or direction of the web with a style called shadown.
 * @param {any} children - Child of the component.
 * @param {Function} onClick - Function to execute with click.
 * @param {string} path - Path to where the web will move to.
 * @returns {Component} - Route button component
 */
export function ButtonShadown({ children, onClick, path }: any) {
  return (
    <Link to={path} className="button__shadown" onClick={onClick}>
      {children}
    </Link>
  );
}

/**
 * Button component that changes path or direction of the web with a style called normal
 * @param {any} children - Child of the component.
 * @param {Function} onClick - Function to execute with click.
 * @param {string} path - Path to where the web will move to.
 * @returns {Component} - Route button component
 */
export function ButtonNormal({ children, onClick, path }: any) {
  return (
    <Link to={path} className="button__normal" onClick={onClick}>
      {children}
    </Link>
  );
}

/**
 * This component is a button which sends a message.
 * @param {Function} sendToMessage - One-click function
 * @returns {Component} - Button component
 */
export function ButtonSendMessage({ sendToMessage }: any) {
  return (
    <button
      className="form__send__to__message"
      id="button__that__sends__the__message"
      onClick={sendToMessage}
    >
      <SendMessage width="30px" height="30px" color="#AED6F1" />
      Send message
    </button>
  );
}
