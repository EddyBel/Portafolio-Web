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
      <div className="container_platform">
        <div className="loader_platform" />
        <div className="loader_platform" />
        <div className="loader_platform" />
      </div>
    </section>
  );
}
