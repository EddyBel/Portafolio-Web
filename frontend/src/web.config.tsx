import { Link, Phone, Email, Apps, Game, Paper } from "./components/common/svg";
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

//  ------------------------------------------ FOOTER OPTIONS OF RENDERER

/** @type {object[]} List of objects containing the elements with the pages to be rendered in the footer  */
const FOOTER_PAGES = [
  {
    path: "eddybel.github.io/Notebook/",
    title: "Notebook",
    svg: <Link width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "eddybel.github.io/Notebook/",
    title: "Portafolio",
    svg: <Link width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "eddybel.github.io/Notebook/",
    title: "EddyBel",
    svg: <Link width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
];

/** @type {object[]} List of objects containing the elements with the resources to be rendered in the footer  */
const FOOTER_RESOURCES = [
  {
    path: "eddybel.github.io/Notebook/",
    title: "Aplications",
    svg: <Apps width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "eddybel.github.io/Notebook/",
    title: "VideoGames",
    svg: <Game width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "eddybel.github.io/Notebook/",
    title: "Documentation",
    svg: <Paper width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
];

/** @type {object[]} List of objects containing the elements with the contact to be rendered in the footer  */
const FOOTER_CONTACT = [
  {
    path: "eddybel.github.io/Notebook/",
    title: "Github",
    svg: <Email width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "eddybel.github.io/Notebook/",
    title: "Linkedin",
    svg: <Email width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "eddybel.github.io/Notebook/",
    title: "Instagram",
    svg: <Email width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "eddybel.github.io/Notebook/",
    title: "Twitter",
    svg: <Email width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "eddybel.github.io/Notebook/",
    title: "kratos61918@gmail.com",
    svg: <Email width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "eddybel.github.io/Notebook/",
    title: "eduardoantonio72432@gmail.com",
    svg: <Email width={SIZE_MINI} height={SIZE_MINI} color={COLOR__WHITE} />,
  },
  {
    path: "eddybel.github.io/Notebook/",
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
};
