/**
 * Add a character from a string to an element with a delay time
 * @param {HTMLElement} element - The element to add the character
 * @param {string} string - The string with the characters
 * @param {number} delay - The delay time between each character added
 */
export const typingText = (
  element: HTMLElement,
  string: string,
  delay: number,
  prefig: string = ""
) => {
  let i = 0;
  let text = "";
  element.innerHTML = "";
  let intervalId = setInterval(() => {
    text += `${string[i]}`;
    element.innerHTML = `${text}${prefig}`;
    i++;
    if (i === string.length) clearInterval(intervalId);
  }, delay);
};

/**
 * Function that will show an animation of numbers incrementing one by one up to the maximum value.
 * @param {HTMLElement} element - The element to add the character
 * @param {number} value - Total value
 * @param {number} delay - The delay tume between each character added
 */
export const incrementValue = (
  element: HTMLElement,
  value: number,
  delay: number,
  prefig: string = ""
) => {
  let i = 0;
  element.innerHTML = "";
  let intervalId = setInterval(() => {
    element.innerHTML = `${i}${prefig}`;
    if (i === value) clearInterval(intervalId);
    i++;
  }, delay);
};

/**
 * Cambia el contenido y la opacidad de un elemento en un intervalo de tiempo infinito.
 *
 * @param {HTMLElement} element - El elemento a ser modificado.
 * @param {string[]} values - Una lista de valores a ser rotados como el contenido del elemento.
 * @param {number} time - El tiempo en milisegundos para esperar antes de cambiar la opacidad del elemento.
 */
export const changeStringInfinite = (
  element: HTMLElement,
  values: string[],
  time: number
) => {
  // Indicates the position of the array.
  let index = 0;
  // This function is executed every certain time passed by parameter, it changes the content of the element and after the time it removes the opacity of the element, then it returns to give it opacity and to show the following content, like this with all the elements of the array
  const changeStringInner = () => {
    element.style.opacity = "100";
    element.innerHTML = values[index % values.length];
    setTimeout(() => {
      element.style.opacity = "0";
    }, time);
    index++;
  };
  // Call the function once to cover empty spaces
  changeStringInner();
  // Create an interval that executes the function infinitely
  setInterval(changeStringInner, time * 2);
};
