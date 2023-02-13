import { useEffect, useState } from "react";
import { YoAPIBiographyContent } from "../types/index";
import { BookLoader } from "../components/common/index";
import { useMyAPI, useWeb } from "../hook/useContext";
import { YO_API } from "../web.config";

export const About = () => {
  /** State containing the content to be rendered. */
  const [aboutContent, setAbout] = useState<YoAPIBiographyContent>();

  // Information obtained from the personal api.
  const myAPI = useMyAPI();
  const about = myAPI?.aboutMe?.body;
  // Web configuration.
  const web = useWeb();

  useEffect(() => {
    about?.map((section) => {
      if (section.section === web.language) setAbout(section);
    });
  }, [about]);

  return (
    <div className="about__me">
      <div className="about__me__container__title">
        <div className="about__me__decoration__title"></div>
        <h1 className="about__me__title">About me</h1>
        <div className="about__me__decoration__title"></div>
      </div>
      <div className="about__me__container__content">
        <div className="about__me__content__text">
          {!aboutContent ? (
            <BookLoader key="Spinner loading about me" />
          ) : (
            aboutContent?.content.map((paragraph) => (
              <p key={`content_paragraph_${paragraph}`}>{paragraph}</p>
            ))
          )}
        </div>
        <div className="about__me__content__img">
          <img
            src={`${YO_API}api/assets/img/front_about.png`}
            alt="front__img__by__about__page"
            className="about__me__front__img"
          />
        </div>
      </div>
    </div>
  );
};
