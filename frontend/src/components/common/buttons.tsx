import { Link } from "react-router-dom";

export function ButtonShadown({ children, onClick, path }: any) {
  return (
    <Link to={path} className="button__shadown" onClick={onClick}>
      {children}
    </Link>
  );
}

export function ButtonNormal({ children, onClick, path }: any) {
  return (
    <Link to={path} className="button__normal" onClick={onClick}>
      {children}
    </Link>
  );
}
