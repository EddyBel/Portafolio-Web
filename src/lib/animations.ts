/** This object stores the methods of the animations to be used. */
export class Animations {
  /**
   * This function appears and disappears elements when the scroll is close.
   * @param {Element | NodeListOf<Element>} component Element or list of elements to be animated
   * @param {number} distance Distance where the function will be executed
   * @returns {function} Function that will kill the animation when executed.
   */
  elementAppearsOrDisappears(
    component: Element | NodeListOf<Element>,
    distance: number = 350
  ) {
    const watchOrHiddenElement = () => {
      // First validate the type of items received (whether it is a list of components or a component).
      if (component instanceof NodeList) {
        // Go through the list of components one by one.
        // Get the distance of the element from the ceiling of the web.
        // If the element is within the range specified as a parameter then it displays the element.
        // If not then hide the element.
        component.forEach((element) => {
          const top = element.getBoundingClientRect().top;
          const style = top < distance ? "opacity: 100;" : "opacity: 0;";
          element.setAttribute("style", style);
        });
      } else {
        // Do the same but only applied to one element
        const top = component.getBoundingClientRect().top;
        const style = top < distance ? "opacity: 100;" : "opacity: 0;";
        component.setAttribute("style", style);
      }
    };

    // Execute the function a first time before starting the scroll event.
    // Assigns the animation function to the scroll event of the web window.
    // Returns a function that when executed kills the animation performed in the scroll event of the window.
    watchOrHiddenElement();
    window.addEventListener("scroll", watchOrHiddenElement);
    return () => window.removeEventListener("scroll", watchOrHiddenElement);
  }

  /**
   * Muestra u oculta un elemento con efecto de desplazamiento horizontal al hacer scroll en la ventana.
   * @param {Element | NodeListOf<Element>} component - El elemento o la lista de elementos a mostrar u ocultar.
   * @param {number} [distance=350] - La distancia en píxeles desde el borde superior del viewport hasta el elemento para activar el efecto.
   * @param {string} [direction="left"] - La dirección del efecto de desplazamiento: "left" o "right".
   * @returns {function} Una función que remueve el evento "scroll" de la ventana.
   */
  showElementWithScrollLeftAndRight(
    component: Element | NodeListOf<Element>,
    distance: number = 350,
    direction: string = "left"
  ): Function {
    const watchOrHiddenElement = () => {
      // First validate the type of items received (whether it is a list of components or a component).
      if (component instanceof NodeList) {
        // Scroll through the list of components.
        // Extracts the distance from the element to the ceiling of the web.
        // If it is in the range of the animation run the animation.
        // And check the direction of the animation and run it on the component.
        component.forEach((element) => {
          const top = element.getBoundingClientRect().top;
          const style =
            top < distance
              ? "transform:translateX(0%); opacity: 100;"
              : direction === "left"
              ? "transform:translateX(-100%); opacity:0;"
              : "transform:translateX(100%); opacity:0;";
          element.setAttribute("style", style);
        });
      } else {
        // Run the animation in a single component
        const top = component.getBoundingClientRect().top;
        const style =
          top < distance
            ? "transform:translateX(0%); opacity: 100;"
            : direction === "left"
            ? "transform:translateX(-100%); opacity:0;"
            : "transform:translateX(100%); opacity:0;";
        component.setAttribute("style", style);
      }
    };

    // Execute the function a first time before starting the scroll event.
    // Assigns the animation function to the scroll event of the web window.
    // Returns a function that when executed kills the animation performed in the scroll event of the window.
    watchOrHiddenElement();
    window.addEventListener("scroll", watchOrHiddenElement);
    return () => window.removeEventListener("scroll", watchOrHiddenElement);
  }

  /**
   * Muestra u oculta un elemento con efecto de desplazamiento al hacer scroll en la ventana.
   * @param {Element | NodeListOf<Element>} component - El elemento o la lista de elementos a mostrar u ocultar.
   * @param {number} [distance=350] - La distancia en píxeles desde el borde superior del viewport hasta el elemento para activar el efecto.
   * @param {string} [direction="up"] - La dirección del efecto de desplazamiento: "up" o "down".
   * @returns {function} Una función que remueve el evento "scroll" de la ventana.
   */
  showElementWithScrollUpAndDown(
    component: Element | NodeListOf<Element>,
    distance: number = 350,
    direction: string = "up"
  ): Function {
    const watchOrHiddenElement = () => {
      // First validate the type of items received (whether it is a list of components or a component).
      if (component instanceof NodeList) {
        // Scroll through the list of components.
        // Extracts the distance from the element to the ceiling of the web.
        // If it is in the range of the animation run the animation.
        // And check the direction of the animation and run it on the component.
        component.forEach((element) => {
          const top = element.getBoundingClientRect().top;
          const style =
            top < distance
              ? "transform:translateY(0px); opacity: 100;"
              : direction === "up"
              ? "transform:translateY(-20px); opacity:0;"
              : "transform:translateY(20px); opacity:0;";
          element.setAttribute("style", style);
        });
      } else {
        // Si el componente es un solo elemento, se hace lo mismo pero sin iterar
        const top = component.getBoundingClientRect().top;
        const style =
          top < distance
            ? "transform:translateY(0px); opacity: 100;"
            : direction === "up"
            ? "transform:translateY(-20px); opacity:0;"
            : "transform:translateY(20px); opacity:0;";
        component.setAttribute("style", style);
      }
    };

    // Execute the function a first time before starting the scroll event.
    // Assigns the animation function to the scroll event of the web window.
    // Returns a function that when executed kills the animation performed in the scroll event of the window.
    watchOrHiddenElement();
    window.addEventListener("scroll", watchOrHiddenElement);
    return () => window.removeEventListener("scroll", watchOrHiddenElement);
  }
}
