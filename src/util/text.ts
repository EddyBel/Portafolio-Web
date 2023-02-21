/**
 * Esta funcion resive un texto por parametro y lo recorta al numero de caracteres indicado y retorna el nuevo texto.
 * @param {string} text - Texto a recortar
 * @param {number} maxLength - Numero maximo de caracteres
 * @returns {string} - Texto recortado
 */
export const trimTheString = (text: string, maxLength: number): string => {
  if (text.length > maxLength) return text.substr(0, maxLength - 3) + "...";
  return text;
};

/**
 * Esta funcion recibe un texto y se crea un texto nuevo con el texto recibido clonado el numero de veces especificado
 * @param {string} text - Texto a clonar
 * @param {number} length - Numero de veces a clonar
 * @returns {string} - Texto final
 * @example
 * const response = createLargeString("Hello World", 3)
 * // resonse = "Hello World HelloWorld Hello World"
 */
export const createLargeString = (text: string, length: number): string => {
  let newString: string = "";
  for (let i = 0; i < length; i++) newString += text;
  return newString;
};
