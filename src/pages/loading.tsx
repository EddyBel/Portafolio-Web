import { useEffect } from "react";
import { incrementValue } from "../util/index";
import {
  Python,
  JavaScript,
  TypeScript,
  Java,
  Kotlin,
  Linux,
  SQL,
} from "../components/common/svg";

export function LoadingPage() {
  useEffect(() => {
    const percentage = document.getElementById("loading__page__percentage");
    if (percentage) incrementValue(percentage, 100, 10, "%");
  }, []);

  return (
    <section className="loading__page">
      <div className="loading__page__text__content">
        <h1
          className="loading__page__percentage"
          id="loading__page__percentage"
        >
          98%
        </h1>
        <h4 className="loading__page__description">
          Wait for a moment while the page loads
        </h4>
      </div>
      <div className="loading__page__decoration__rigth">
        <div className="loading__page__decoration__container">
          <div className="loading__page__decoration__sphere__one">
            <div className="loading__page__icon__svg python">
              <Python width="100%" height="100%" />
            </div>
            <div className="loading__page__icon__svg linux">
              <Linux width="100%" height="100%" />
            </div>
            <div className="loading__page__icon__svg SQL">
              <SQL width="100%" height="100%" />
            </div>
          </div>
          <div className="loading__page__decoration__sphere__two">
            <div className="loading__page__icon__svg javascript">
              <JavaScript width="100%" height="100%" />
            </div>
            <div className="loading__page__icon__svg kotlin">
              <Kotlin width="100%" height="100%" />
            </div>
          </div>
          <div className="loading__page__decoration__sphere__tree">
            <div className="loading__page__icon__svg typescript">
              <TypeScript width="100%" height="100%" />
            </div>
            <div className="loading__page__icon__svg java">
              <Java width="100%" height="100%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
