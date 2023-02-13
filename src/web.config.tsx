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
export const API_GITHUB = "https://api.github.com/users/";
/** @type {string} Github username */
export const USER_NAME = env.VITE_GITHUB_USER_NAME || "eddybel";
/** @type {string} Personal data api */
export const YO_API = env.VITE_YO_API;
export const USERNAME_YO_API = env.VITE_USERNAME_YO_API;
export const PASSWORD_YO_API = env.VITE_PASSWORD_YO_API;

// ------------------------------------------ COOKIES OPTIONS

/** @type {number} Cookie lifetime in seconds. */
export const EXPIRATION = 1000;
/** @type {boolean} Indicates whether the cookie is secure. */
export const SECURE = true;
/** @type {boolean} Indicates if only https is supported. */
export const HTTP_ONLY = false;

// ------------------------------------------ VALUES

/** @type {string} Sizes for svg */
export const SIZE_MINI = "20px";

/** @type {string} Colors for svgs */
export const COLOR__WHITE = "#eaeceeb0";

// ------------------------------------------- LOAD OPTIONS
/** @type {string[]} List of words to use on loading screens */
export const LOAD_PHRASES = [
  "Wait a moment",
  "Getting information from the api",
  "Soon we will get the information",
];

// ------------------------------------------- NAVBAR OPTIONS OF RENDERER

export const NAVBAR_OPTIONS = [
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
    path: "source/CV.pdf",
  },
];

//  ------------------------------------------ FOOTER OPTIONS OF RENDERER

/** @type {object[]} List of objects containing the elements with the pages to be rendered in the footer  */
export const FOOTER_PAGES = [
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
export const FOOTER_RESOURCES = [
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
    path: "https://eddybel.github.io/Portafolio-Web/index.html",
    title: "Documentation",
    svg: <Paper width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
];

/** @type {object[]} List of objects containing the elements with the contact to be rendered in the footer  */
export const FOOTER_CONTACT = [
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
