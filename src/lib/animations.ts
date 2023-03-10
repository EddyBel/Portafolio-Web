export class Animations {
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
    // Esta función se ejecuta cada vez que se hace scroll en la ventana
    const watchOrHiddenElement = () => {
      // Si el componente es una lista de elementos, se itera sobre cada uno
      if (component instanceof NodeList) {
        component.forEach((element) => {
          // Se obtiene la posición del elemento respecto al viewport
          let top = element.getBoundingClientRect().top;
          // Si la posición es menor que la distancia especificada, se muestra el elemento con transición y opacidad
          if (top < distance) {
            let style = "transform:translateX(0%); opacity: 100;";
            element.setAttribute("style", style);
          } else {
            // Si no, se oculta el elemento con transición y opacidad según la dirección indicada
            let styleLeft = "transform:translateX(-100%); opacity:0;";
            let styleRight = "transform:translateX(100%); opacity:0;";
            if (direction === "left") element.setAttribute("style", styleLeft);
            else element.setAttribute("style", styleRight);
          }
        });
      } else {
        // Si el componente es un solo elemento, se hace lo mismo pero sin iterar
        let top = component.getBoundingClientRect().top;
        if (top < distance) {
          let style = "transform:translateX(0%); opacity: 100;";
          component.setAttribute("style", style);
        } else {
          let styleLeft = "transform:translateX(-100%); opacity:0;";
          let styleRight = "transform:translateX(100%); opacity:0;";
          if (direction === "left") component.setAttribute("style", styleLeft);
          else component.setAttribute("style", styleRight);
        }
      }
    };

    // Se agrega el evento "scroll" a la ventana con la función anterior
    window.addEventListener("scroll", watchOrHiddenElement);
    // Se retorna una función que remueve el evento "scroll" de la ventana
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
    // Esta función se ejecuta cada vez que se hace scroll en la ventana
    const watchOrHiddenElement = () => {
      // Si el componente es una lista de elementos, se itera sobre cada uno
      if (component instanceof NodeList) {
        component.forEach((element) => {
          // Se obtiene la posición del elemento respecto al viewport
          let top = element.getBoundingClientRect().top;
          // Si la posición es menor que la distancia especificada, se muestra el elemento con transición y opacidad
          if (top < distance) {
            let style = "transform:translateY(0px); opacity: 100;";
            element.setAttribute("style", style);
          } else {
            // Si no, se oculta el elemento con transición y opacidad según la dirección indicada
            let styleUp = "transform:translateY(-20px); opacity:0;";
            let styleDown = "transform:translateY(20px); opacity:0;";
            if (direction === "up") element.setAttribute("style", styleUp);
            else element.setAttribute("style", styleDown);
          }
        });
      } else {
        // Si el componente es un solo elemento, se hace lo mismo pero sin iterar
        let top = component.getBoundingClientRect().top;
        if (top < distance) {
          let style = "transform:translateY(0px); opacity: 100;";
          component.setAttribute("style", style);
        } else {
          let styleUp = "transform:translateY(-20px); opacity:0;";
          let styleDown = "transform:translateY(20px); opacity:0;";
          if (direction === "up") component.setAttribute("style", styleUp);
          else component.setAttribute("style", styleDown);
        }
      }
    };

    // Se agrega el evento "scroll" a la ventana con la función anterior
    window.addEventListener("scroll", watchOrHiddenElement);
    // Se retorna una función que remueve el evento "scroll" de la ventana
    return () => window.removeEventListener("scroll", watchOrHiddenElement);
  }
}
