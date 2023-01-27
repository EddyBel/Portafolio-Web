import { Link } from "react-router-dom";

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
