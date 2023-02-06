/**
 * Properties of the repository card component
 * @property {string} name - Repository name
 * @property {string} description - Repository description
 * @property {string[]} meta - List of labels
 * @property {string} path - Repository path
 * @property {string} language - Repository language primary
 * @property {number} id - Repository id
 */
export type CardRepoProps = {
  name: string;
  description: string;
  meta: string[];
  path: string;
  language: string;
  id: number;
};

/**
 * Properties of the proyects card component
 * @property {string} title - Proyect title
 * @property {string} description - Proyect description
 * @property {string} background - Proyect banner background
 * @property {string} github - Project repository path
 * @property {string | undefined} web - Web deploy path if exists
 * @property {boolean | undefined} direction - Direction of how the card will render either true for left or false for right.
 */
export type CardProyectProps = {
  title: string;
  description: string;
  background: string;
  github: string;
  web: string | undefined;
  direction?: boolean;
};
