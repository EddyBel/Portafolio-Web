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
