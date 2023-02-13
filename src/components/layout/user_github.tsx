import { Link } from "react-router-dom";
import { useGithub } from "../../hook/useContext";

export function UserGithub() {
  const github = useGithub();
  const avatar = github?.user_data?.avatar_url;
  const username = github?.user_data?.login;

  return (
    <Link to="/" className="nav__user__github__username">
      {username}
    </Link>
  );
}

{
  /* <section className="nav__container__user__github">
  <h1 className="nav__user__github__username">{username}</h1>
</section>; */
}
