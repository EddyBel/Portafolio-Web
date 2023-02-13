import { Link } from "react-router-dom";
import { useEffect } from "react";
import { NAVBAR_OPTIONS } from "../../web.config";

export function NavOptions() {
  useEffect(() => {
    const button = document.getElementById("navbar__button__burguer");
    const menu = document.getElementById("menu");

    button?.addEventListener("click", () => {
      menu?.setAttribute("style", "transform: translateX(0%);");
    });
  }, []);

  return (
    <div className="options_navigations">
      <div className="options__navigations__container">
        {NAVBAR_OPTIONS.map((option) => {
          if (option.title === "CV")
            return (
              <a
                href={option.path}
                className="option__nav"
                key={`option-${option.title}`}
              >
                {option.title}
              </a>
            );
          else
            return (
              <Link
                to={option.path}
                className="option__nav"
                key={`option-${option.title}`}
              >
                {option.title}
              </Link>
            );
        })}
      </div>
      <button className="option__nav" id="navbar__button__burguer">
        menu
      </button>
    </div>
  );
}
