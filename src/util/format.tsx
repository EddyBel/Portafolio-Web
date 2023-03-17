import { GITHUB_REPO } from "../types/index";

export const stringToStar = (level: string) => {
  const newLevel = level.toLowerCase();

  if (newLevel === "basico" || newLevel === "basic") return "⭐";
  else if (newLevel === "medium" || newLevel === "medio") return "⭐⭐⭐";
  else if (newLevel === "hard" || newLevel === "complicado")
    return "⭐⭐⭐⭐⭐";

  return level;
};

export const stringToArray = (tags: string) => {
  return tags.split(", ");
};

export const getExtension = (text: string) => {
  // Encontrar la última ocurrencia del caracter '.'
  const lastDotIndex = text.lastIndexOf(".");
  // Si no hay un punto en el texto, devolver el texto completo
  if (lastDotIndex === -1) return { name: text, extension: "" };
  // Extraer el nombre del archivo y la extensión
  const name = text.slice(0, lastDotIndex);
  const extension = text.slice(lastDotIndex);
  // Devolver un objeto con el nombre del archivo y la extensión
  return { name, extension };
};

export const validateToDataFromDict = (data: any) => {
  const level = data.level
    ? data.level
    : data.Dificultad
    ? data.Dificultad
    : data.dificulty
    ? data.dificulty
    : "Basic";

  const tags = data.tags
    ? data.tags
    : data.Etiquetas
    ? data.Etiquetas
    : data.theme
    ? data.theme
    : "Document";

  const date = data.date
    ? data.date
    : data.Fecha
    ? data.Fecha
    : data.fecha
    ? data.fecha
    : "0/0/2002";

  const name = data.title
    ? data.title
    : data.name
    ? data.name
    : data.Name
    ? data.Name
    : "Apunte";

  return {
    level,
    tags,
    name,
    date,
  };
};

/**
 * Reordena un array de manera aleatoria utilizando el algoritmo de Fisher-Yates.
 *
 * @param array - El array a reordenar.
 * @returns El array reordenado aleatoriamente.
 * @typeParam T - El tipo de los elementos del array.
 */
export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
