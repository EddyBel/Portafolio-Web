import { useEffect, useState } from "react";
import { YoAPIBiographyContent } from "../types/index";
import { LinesLoader } from "../components/common/index";
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
    <section className="about__me">
      <h2 className="about__me__welcome__message">HELLO THERE</h2>
      <h1 className="about__me__title_page">I am Eduardo</h1>
      <section className="about__me__description">
        {!aboutContent ? (
          <LinesLoader key="Spinner loading about me" />
        ) : (
          aboutContent?.content.map((paragraph) => (
            <p className="about__me__text">{paragraph}</p>
          ))
        )}
      </section>
    </section>
  );
};
