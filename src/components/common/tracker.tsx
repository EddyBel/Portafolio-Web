import { useEffect } from "react";

export function Tracker() {
  useEffect(() => {
    const blob = document.getElementById("blob") as HTMLDivElement;

    document.addEventListener("mousemove", (event) => {
      const x = event.clientX;
      const y = event.clientY;
      blob.style.left = x + "px";
      blob.style.top = y + "px";
    });
  }, []);

  return <div className="blob" id="blob"></div>;
}
