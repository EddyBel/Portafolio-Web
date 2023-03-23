import { Linkedin, Gmail, Github } from "../components/common/svg";
import { Animations } from "../lib/animations";
import { Form } from "../components/layout/index";
import { useEffect } from "react";

const sizeIcons: string = "50px";
const animations = new Animations();
const LINKS = [
  {
    path: "https://www.linkedin.com/in/eduardo-rangel-eddybel/",
    title: "Linkedin",
    svg: <Linkedin width={sizeIcons} height={sizeIcons} />,
  },
  {
    path: "mailto:eduardoantonio72432@gmail.com",
    title: "Gmail",
    svg: <Gmail width={sizeIcons} height={sizeIcons} />,
  },
  {
    path: "https://github.com/EddyBel",
    title: "Github",
    svg: <Github width={sizeIcons} height={sizeIcons} />,
  },
];

export const Contact = () => {
  // Assigns animations to specific elements
  useEffect(() => {
    const contact_us = document.getElementById(
      "contact__content"
    ) as HTMLElement;
    animations.elementAppearsOrDisappears(contact_us, 500);
  }, []);

  return (
    <section className="contact">
      <div className="contact__content" id="contact__content">
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
          {LINKS.map((link) => (
            <a
              href={link.path}
              title={link.title}
              key={`link-social-network-${link.title}`}
            >
              {link.svg}
            </a>
          ))}
        </div>
      </div>
      <div className="contact__form">
        <Form key="form key contact" />
      </div>
    </section>
  );
};
