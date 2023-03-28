import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Animations } from "../../lib/animations";

const animation = new Animations();

export function IndexAbout() {
  const createDecorationsPointes = (points: number) => {
    const pointers = [];
    for (let i = 0; i < points; i++)
      pointers.push(<div className="home__body__about__decoration"></div>);
    return pointers;
  };

  useEffect(() => {
    const title = document.querySelector(
      ".home__body__about__title"
    ) as HTMLElement;
    const description = document.querySelectorAll(
      ".home__body__about__description"
    );
    let height = window.innerHeight - 200;

    const cleanAnimationTitle = animation.showElementWithScrollUpAndDown(
      title,
      height
    );
    const cleanAnimationDescription = animation.showElementWithScrollUpAndDown(
      description,
      height
    );

    return () => {
      cleanAnimationTitle();
      cleanAnimationDescription();
    };
  }, []);

  return (
    <section className="home__body__about">
      <div className="home__body__about__decoration"></div>
      <div className="home__body__about__text__scrolling" id="ABOUT">
        <h1 className="home__body__about__text__infinite">
          FULL-STACK DEVELOPER AND MOBILE APP DEVELOPER
        </h1>
      </div>

      <h1 className="home__body__about__title">About my skills</h1>
      <div>
        <p className="home__body__about__description">
          I am a programmer with a wide range of skills in various programming
          languages and frameworks. I specialize in TypeScript, JavaScript,
          Python, Java, and C++, and I also have Rust experience.
        </p>
        <p className="home__body__about__description">
          My experience in web development allows me to create web applications
          and high-quality mobile using React and React Native. Also, my
          knowledge in Flask and Django allows me to develop web applications
          complex and scalable.
        </p>
      </div>
      <Link to="/about" className="button_blom">
        More about me
      </Link>
    </section>
  );
}
