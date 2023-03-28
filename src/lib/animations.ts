/** This object stores the methods of the animations to be used. */
export class Animations {
  /**
   * This function rotates an element based on the mouse position.
   * @param {HTMLElement} component Component to which the transformation will be applied.
   * @returns {Function} Returns a function that removes the animation when executed.
   */
  trackerAndRotateMouse3D(
    component: HTMLElement,
    rotate: number = 20,
    scale: number = 0.9
  ): Function {
    // Extracts the dimensions of the element.
    let height = component.clientHeight;
    let width = component.clientWidth;

    const animation = (event: MouseEvent) => {
      // This function is executed every time the animation is activated.
      // It extracts the position of the mouse inside the element.
      // Calculates the rotation angle based on the element size and the mouse position.
      // Creates a string representing the styles or transformations to be done to the element.
      const { offsetX, offsetY } = event;
      const yRotation = ((offsetX - width / 2) / width) * rotate;
      const xRotation = ((offsetY - height / 2) / height) * rotate;
      const string = `perspective(500px) scale(${scale}) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      component.style.transform = string;
    };

    // This function restarts the transformations when the mouse leaves the element.
    const cleanAnimation = () => (component.style.transform = ``);

    // Assigns the mouse input events that trigger the animation.
    // And the mouse output event that deactivates the mouse animation.
    component.addEventListener("mouseover", animation);
    component.addEventListener("mouseout", cleanAnimation);

    // Returns a function that removes mouse events on the element.
    return () => {
      component.removeEventListener("mouseover", animation);
      component.removeEventListener("mouseout", cleanAnimation);
    };
  }

  /**
   * Esta funcion crea un efecto de aumento de numeros progresiva con un cierto numero.
   * !TODO Esta funcion no esta terminada aun se debe mejorar para que la animación solo se ejecute una sola vez.
   */
  typingCounter(
    component: Element,
    value: number,
    sleep: number = 0.01,
    distance: number = 450
  ) {
    let animationID: number = 0;
    let animationExecuted: boolean = false;

    const typing = () => {
      for (let i = 0; i <= value; i++)
        setTimeout(() => (component.innerHTML = `${i}`), sleep);
    };

    const animation = () => {
      cancelAnimationFrame(animationID);

      let top = component.getBoundingClientRect().top;
      if (top < distance) {
        typing();
        cancelAnimationFrame(animationID);
      }

      animationID = requestAnimationFrame(animation);
    };
  }

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
    // id animation
    let animationID: number;

    const watchOrHiddenElement = () => {
      // Remove the animation if it is already running.
      cancelAnimationFrame(animationID);

      // First validate the type of items received (whether it is a list of components or a component).
      if (component instanceof NodeList) {
        // Go through the list of components one by one.
        // Get the distance of the element from the ceiling of the web.
        // If the element is within the range specified as a parameter then it displays the element.
        // If not then hide the element.
        component.forEach((element) => {
          let top = element.getBoundingClientRect().top;
          let style = top < distance ? "opacity: 100;" : "opacity: 0;";
          element.setAttribute("style", style);
        });
      } else {
        // Do the same but only applied to one element
        let top = component.getBoundingClientRect().top;
        let style = top < distance ? "opacity: 100;" : "opacity: 0;";
        component.setAttribute("style", style);
      }

      // Animation startup
      animationID = requestAnimationFrame(watchOrHiddenElement);
    };

    // Execute the function a first time before starting the scroll event.
    // Assigns the animation function to the scroll event of the web window.
    // Returns a function that when executed kills the animation performed in the scroll event of the window.
    watchOrHiddenElement();
    return () => cancelAnimationFrame(animationID);
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
    // id animation
    let animationID: number;

    const watchOrHiddenElement = () => {
      // Remove the animation if it is already running.
      cancelAnimationFrame(animationID);

      // First validate the type of items received (whether it is a list of components or a component).
      if (component instanceof NodeList) {
        // Scroll through the list of components.
        // Extracts the distance from the element to the ceiling of the web.
        // If it is in the range of the animation run the animation.
        // And check the direction of the animation and run it on the component.
        component.forEach((element) => {
          let top = element.getBoundingClientRect().top;
          let style =
            top < distance
              ? "transform:translateX(0%); opacity: 100;"
              : direction === "left"
              ? "transform:translateX(-100%); opacity:0;"
              : "transform:translateX(100%); opacity:0;";
          element.setAttribute("style", style);
        });
      } else {
        // Run the animation in a single component
        let top = component.getBoundingClientRect().top;
        let style =
          top < distance
            ? "transform:translateX(0%); opacity: 100;"
            : direction === "left"
            ? "transform:translateX(-100%); opacity:0;"
            : "transform:translateX(100%); opacity:0;";
        component.setAttribute("style", style);
      }

      // Animation startup
      animationID = requestAnimationFrame(watchOrHiddenElement);
    };

    // Execute the function a first time before starting the scroll event.
    // Assigns the animation function to the scroll event of the web window.
    // Returns a function that when executed kills the animation performed in the scroll event of the window.
    watchOrHiddenElement();
    return () => cancelAnimationFrame(animationID);
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
    // id animation
    let animationID: number;

    const watchOrHiddenElement = () => {
      // Remove the animation if it is already running.
      cancelAnimationFrame(animationID);

      // First validate the type of items received (whether it is a list of components or a component).
      if (component instanceof NodeList) {
        // Scroll through the list of components.
        // Extracts the distance from the element to the ceiling of the web.
        // If it is in the range of the animation run the animation.
        // And check the direction of the animation and run it on the component.
        component.forEach((element) => {
          let top = element.getBoundingClientRect().top;
          let style =
            top < distance
              ? "transform:translateY(0px); opacity: 100;"
              : direction === "up"
              ? "transform:translateY(-20px); opacity:0;"
              : "transform:translateY(20px); opacity:0;";
          element.setAttribute("style", style);
        });
      } else {
        // Si el componente es un solo elemento, se hace lo mismo pero sin iterar
        let top = component.getBoundingClientRect().top;
        let style =
          top < distance
            ? "transform:translateY(0px); opacity: 100;"
            : direction === "up"
            ? "transform:translateY(-20px); opacity:0;"
            : "transform:translateY(20px); opacity:0;";
        component.setAttribute("style", style);
      }

      // Animation startup
      animationID = requestAnimationFrame(watchOrHiddenElement);
    };

    // Execute the function a first time before starting the scroll event.
    // Assigns the animation function to the scroll event of the web window.
    // Returns a function that when executed kills the animation performed in the scroll event of the window.
    watchOrHiddenElement();
    return () => cancelAnimationFrame(animationID);
  }
}
