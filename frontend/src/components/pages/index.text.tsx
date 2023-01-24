import { useEffect } from "react";
import { typingText } from "../../util/index";
import { ButtonNormal, ButtonShadown } from "../common/index";
import { useGithub } from "../../hook/useContext";

export function MainText() {
  const github_state = useGithub();
  const description = github_state?.user_data?.bio;

  useEffect(() => {
    const parent = document.getElementById("home__data__description");
    if (parent && description) typingText(parent, description, 100);
  }, [description]);

  return (
    <div className="home__container__data">
      <h3 className="home__data__mini__banner">
        <img
          src="img/nave.png"
          alt="wave_img"
          className="home__data__mini__banner__ship"
        />
        Full-Stack Developer
      </h3>
      <h1 className="home__data__title">
        <span className="home__data__title__greetings">Hi!</span>
        <span className="home__data__title__greetings">My name is</span>
        <span className="home__data__title__name">Eduardo Rangel</span>
      </h1>
      <p className="home__data__description" id="home__data__description">
        ""
      </p>
      <div className="home__data__container__buttons">
        <ButtonNormal path="/about">About more</ButtonNormal>
        <ButtonShadown path="/repositories">Repositories</ButtonShadown>
      </div>
    </div>
  );
}
