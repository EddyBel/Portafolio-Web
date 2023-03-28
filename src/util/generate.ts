/**
 * Generates a text made up of a random selection of words from a given list.
 * @param {number} numWords - The number of words to generate in the text.
 * @param {string[]} wordList - The list of words to use to generate the text.
 * @return {string} The generated text.
 */
export const generateText = (numWords: number, wordList: string[]) => {
  let text = "";
  for (let i = 0; i < numWords; i++) {
    let randomIndex = Math.floor(Math.random() * wordList.length);
    text += wordList[randomIndex] + " ";
  }
  return text;
};

/**
 * Esta función extrae un item aleatorio de la lista.
 * @param {any[]} list Lista donde se obtendran los elementos.
 * @returns {any} Item extraido de la lista.
 */
export const getValueRandom = (list:any[]):any => {
  return list[Math.floor(Math.random() * list.length)];
}