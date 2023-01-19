import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGithub } from "../../hook/useContext";

const options = [
  {
    title: "Repositories",
    path: "/repositories",
  },
  {
    title: "About me",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "CV",
    path: "/cv",
  },
];

export function NavBar() {
  const user_github = useGithub();
  let img = !user_github ? "#" : user_github.user_data?.avatar_url;
  let user_name = !user_github ? "User" : user_github.user_data?.login;

  useEffect(() => {
    clickSelect();
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__container__profile">
        <img src={img} alt="user_img" className="navbar__img__profile" />
        <h4 className="navbar__user__name">{user_name}</h4>
      </Link>
      <ul className="navbar__container__options">
        {options.map((item) => (
          <li key={item.title}>
            <Link to={item.path} className="navbar__option">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <a href="#" className="navbar__button__contact">
        Contact
      </a>
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
