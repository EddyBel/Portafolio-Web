import { Linkedin, Gmail, Github } from "../components/common/svg";
import React from "react";

const sizeIcons: string = "50px";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__content">
        <h1 className="contact__content__title">Contact us</h1>
        <p className="contact__content__description">
          These are addresses where you can contact me, please feel free to send
          me a message
        </p>
        <ul className="contact__content__list__text">
          <li>eduardoantonio72432@gmail.com</li>
          <li>+52 5621836340</li>
        </ul>
        <div className="contact__social__networks__links">
          <a href="https://www.linkedin.com/in/eduardo-rangel-eddybel/">
            <Linkedin width={sizeIcons} height={sizeIcons} />
          </a>
          <a href="mailto:eduardoantonio72432@gmail.com">
            <Gmail width={sizeIcons} height={sizeIcons} />
          </a>
          <a href="https://github.com/EddyBel">
            <Github width={sizeIcons} height={sizeIcons} />
          </a>
        </div>
      </div>
      <div className="contact__form"></div>
    </section>
  );
};
