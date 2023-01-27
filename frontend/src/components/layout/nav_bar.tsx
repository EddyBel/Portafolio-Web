import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGithub } from "../../hook/useContext";
import { NAVBAR_OPTIONS } from "../../web.config";

export function NavBar() {
  const user_github = useGithub();
  let img = !user_github ? "#" : user_github.user_data?.avatar_url;
  let user_name = !user_github ? "User" : user_github.user_data?.login;

  useEffect(() => {
    clickSelect();
  }, []);

  useEffect(() => {
    const button = document.getElementById("navbar__button__burguer");
    const menu = document.getElementById("menu");

    button?.addEventListener("click", () => {
      menu?.setAttribute("style", "transform: translateX(0%);");
    });
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__container__profile">
        <img src={img} alt="user_img" className="navbar__img__profile" />
        <h4 className="navbar__user__name">{user_name}</h4>
      </Link>
      <ul className="navbar__container__options">
        {NAVBAR_OPTIONS.map((item) => (
          <li key={item.title}>
            {item.title === "CV" ? (
              <a href={item.path} className="navbar__option">
                {item.title}
              </a>
            ) : (
              <Link to={item.path} className="navbar__option">
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <Link to="/contact" className="navbar__button__contact">
        Contact
      </Link>
      <button className="navbar__button__burguer" id="navbar__button__burguer">
        {""}
        <div className="line__burguer one"></div>
        <div className="line__burguer special"></div>
        <div className="line__burguer two"></div>
      </button>
    </nav>
  );
}

const clickSelect = () => {
  const buttons = document.querySelectorAll(".navbar__option");

  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      buttons.forEach((two_element) =>
        two_element.classList.remove("activate")
      );
      element.classList.add("activate");
    });
  });
};
