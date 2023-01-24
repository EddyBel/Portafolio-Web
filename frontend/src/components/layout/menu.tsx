import { Link } from "react-router-dom";
import { ArrowBack } from "../common/svg";
import { useGithub } from "../../hook/useContext";
import { NAVBAR_OPTIONS } from "../../web.config";
import { useEffect } from "react";

export function Menu() {
  const github__state = useGithub();
  const avatar = github__state?.user_data?.avatar_url;
  const user__name = github__state?.user_data?.login;

  useEffect(() => {
    const button = document.getElementById("button__back__menu");
    const options = document.querySelector(".menu__container__options");
    const contact = document.querySelector(".menu__button__contact");
    const main = document.querySelector(".menu__container__avatar");
    const menu = document.getElementById("menu");

    main?.addEventListener("click", () => {
      menu?.setAttribute("style", "transform: translateX(100%);");
    });

    contact?.addEventListener("click", () => {
      menu?.setAttribute("style", "transform: translateX(100%);");
    });

    options?.addEventListener("click", () => {
      menu?.setAttribute("style", "transform: translateX(100%);");
    });

    button?.addEventListener("click", () => {
      menu?.setAttribute("style", "transform: translateX(100%);");
    });
  }, []);

  return (
    <div className="menu" id="menu">
      <button className="menu__arrow__back" id="button__back__menu">
        {""}
        <ArrowBack width="50px" height="50px" />
      </button>
      <Link to="/" className="menu__container__avatar">
        <img src={avatar} alt="Github__Avatar" className="menu__avatar" />
        <h2 className="menu__user__name">{user__name}</h2>
      </Link>
      <ul className="menu__container__options">
        {NAVBAR_OPTIONS.map((option) => (
          <li key={`option-menu${option.title}`}>
            {option.title === "CV" ? (
              <a href={option.path}>{option.title}</a>
            ) : (
              <Link to={option.path}>{option.title}</Link>
            )}
          </li>
        ))}
      </ul>
      <a href="/contact" className="menu__button__contact">
        Contact
      </a>
    </div>
  );
}
