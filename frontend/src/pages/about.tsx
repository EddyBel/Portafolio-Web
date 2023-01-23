import React from "react";

export const About = () => {
  return (
    <div className="about__me">
      <div className="about__me__container__title">
        <div className="about__me__decoration__title"></div>
        <h1 className="about__me__title">About me</h1>
        <div className="about__me__decoration__title"></div>
      </div>
      <div className="about__me__container__content">
        <div className="about__me__content__text">
          <p>
            Mi nombre es Eduardo Antonio Rangel Serrano y comencé mi viaje en el
            mundo de la tecnología a la edad de 14 años, cuando aprendí a
            programar en Visual Basic. Desde entonces, mi interés en la
            informática ha crecido cada vez más y actualmente estoy estudiando
            Ingeniería en Sistemas Computacionales.
          </p>
          <p>
            Mi pasión es la inteligencia artificial y he estado trabajando en
            proyectos relacionados con esta área, tanto en mi tiempo libre como
            en mi educación. También he tenido la oportunidad de participar en
            proyectos de código abierto, lo que me ha permitido aprender de
            otros desarrolladores y contribuir a la comunidad.
          </p>
          <p>
            Mi objetivo es seguir desarrollando mis habilidades en la
            inteligencia artificial y en la programación en general, y espero
            poder aplicarlas en proyectos impactantes que puedan tener un
            impacto positivo en la sociedad. También me gustaría seguir
            participando en proyectos de código abierto y ayudar a otros a
            aprender y crecer en el mundo de la tecnología.
          </p>

          <p>
            Además de mi interés y estudios en inteligencia artificial, también
            he tenido la oportunidad de trabajar en el desarrollo de sitios web
            y aplicaciones móviles. He trabajado con diferentes lenguajes y
            herramientas, como HTML, CSS, JavaScript, Python, y React Native, y
            he desarrollado soluciones para diferentes plataformas, como iOS y
            Android.
          </p>
          <p>
            He trabajado en proyectos tanto personales como profesionales, y he
            aprendido mucho sobre el diseño y la usabilidad, así como sobre las
            mejores prácticas de desarrollo. Me gusta trabajar con equipos y
            colaborar con otros desarrolladores para lograr los mejores
            resultados.
          </p>
        </div>

        <div className="about__me__content__img">
          <img
            src="img/fronts/fronts (17).png"
            alt="front__img__by__about__page"
            className="about__me__front__img"
          />
        </div>
      </div>
    </div>
  );
};
