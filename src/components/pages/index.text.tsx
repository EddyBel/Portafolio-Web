import { useEffect } from "react";
import { typingText } from "../../util/index";
import { useGithub } from "../../hook/useContext";

export function MainText() {
  const github_state = useGithub();
  const description = github_state?.user_data?.bio;

  useEffect(() => {
    const parent = document.getElementById("home__data__description");
    if (parent && description) typingText(parent, description, 100);
  }, [description]);

  return (
    <section className="home__main">
      <div className="home__main__circle__center"></div>
      {/* <div className="gooey"></div> */}

      <h1 className="home__main__title">
        <span className="greeting one">HI!</span>
        <span className="greeting two">I AM</span>
        <span className="greeting tree">EDUARDO</span>
      </h1>

      <h6 className="home__main__description" id="home__data__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        voluptatum, repellat labore rerum cumque ipsa aliquid odit alias
        architecto provident numquam quidem deserunt doloremque nesciunt soluta
        nemo asperiores fuga dignissimos!
      </h6>

      <DecorationPoints />
      <DecorationPoints prefig="two" />

      <div className="home__main__decoration__img__one"></div>
      <div className="home__main__decoration__img__two"></div>
      <a href="#ABOUT" className="scroll_indication" title="More info">
        <div className="scroll"> </div>
      </a>
    </section>
  );
}

export function DecorationPoints({ prefig }: any) {
  return (
    <div className={`home__main__decoration__points ${prefig}`}>
      <div className="home__main__decoration__container__points">
        <div className="home__main__decoration__point"></div>
        <div className="home__main__decoration__point"></div>
        <div className="home__main__decoration__point"></div>
        <div className="home__main__decoration__point"></div>
      </div>
      <div className="home__main__decoration__container__points">
        <div className="home__main__decoration__point"></div>
        <div className="home__main__decoration__point"></div>
        <div className="home__main__decoration__point"></div>
        <div className="home__main__decoration__point"></div>
      </div>
      <div className="home__main__decoration__container__points">
        <div className="home__main__decoration__point"></div>
        <div className="home__main__decoration__point"></div>
        <div className="home__main__decoration__point"></div>
        <div className="home__main__decoration__point"></div>
      </div>
    </div>
  );
}
