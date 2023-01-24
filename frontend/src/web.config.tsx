import {
  Link,
  Phone,
  Email,
  Apps,
  Game,
  Paper,
  Linkedin__Basic,
  Github__Basic,
  Twitter__Basic,
} from "./components/common/svg";
const env = import.meta.env;

// ------------------------------------------- ENVIRONMENT VARIABLES

/** @type {string} Github api */
const API_GITHUB = env.VITE_API_GITHUB || "";
/** @type {string} Github username */
const USER_NAME = env.VITE_GITHUB_USER_NAME || "eddybel";

// ------------------------------------------ VALUES

/** Sizes for svg */
const SIZE_MINI = "20px";

/** Colors for svgs */
const COLOR__WHITE = "#eaeceeb0";

// ------------------------------------------- NAVBAR OPTIONS OF RENDERER

const NAVBAR_OPTIONS = [
  {
    title: "Repositories",
    path: "/repositories",
  },
  {
    title: "About me",
    path: "/about",
  },
  {
    title: "CV",
    path: "source/cv.pdf",
  },
];

//  ------------------------------------------ FOOTER OPTIONS OF RENDERER

/** @type {object[]} List of objects containing the elements with the pages to be rendered in the footer  */
const FOOTER_PAGES = [
  {
    path: "https://eddybel.github.io/Notebook/",
    title: "Notebook",
    svg: <Link width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "/",
    title: "Portafolio",
    svg: <Link width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "https://eddybel.github.io/",
    title: "EddyBel",
    svg: <Link width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
];

/** @type {object[]} List of objects containing the elements with the resources to be rendered in the footer  */
const FOOTER_RESOURCES = [
  {
    path: "https://github.com/EddyBel/Math-my",
    title: "Aplications",
    svg: <Apps width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "https://github.com/EddyBel/Plane-Wars-Game-Pygame",
    title: "VideoGames",
    svg: <Game width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "https://eddybel.github.io/Math-my/",
    title: "Documentations",
    svg: <Paper width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
];

/** @type {object[]} List of objects containing the elements with the contact to be rendered in the footer  */
const FOOTER_CONTACT = [
  {
    path: "https://github.com/EddyBel",
    title: "Github",
    svg: (
      <Github__Basic
        width={SIZE_MINI}
        height={SIZE_MINI}
        color={COLOR__WHITE}
      />
    ),
  },
  {
    path: "https://www.linkedin.com/in/eduardo-rangel-eddybel",
    title: "Linkedin",
    svg: (
      <Linkedin__Basic width={"15px"} height={"15px"} color={COLOR__WHITE} />
    ),
  },
  {
    path: "https://twitter.com/EddyDigitalTech",
    title: "Twitter",
    svg: <Twitter__Basic width={"15px"} height={"15px"} color={COLOR__WHITE} />,
  },
  {
    path: "mailto:kratos61918@gmail.com",
    title: "kratos61918@gmail.com",
    svg: <Email width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "mailto:eduardoantonio72432@gmail.com",
    title: "eduardoantonio72432@gmail.com",
    svg: <Email width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "https://api.whatsapp.com/send?phone=5621836340&text=Hi!%20I%20hope%20he%20is%20well.",
    title: "+52 5621836340",
    svg: <Phone width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
];

// ----------------------------------------------------------- EXPORT ALL VALUES

export {
  API_GITHUB,
  USER_NAME,
  FOOTER_PAGES,
  FOOTER_RESOURCES,
  FOOTER_CONTACT,
  NAVBAR_OPTIONS,
};
