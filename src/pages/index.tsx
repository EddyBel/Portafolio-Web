import {
  MainText,
  Proyects,
  IndexAbout,
  MoreProyects,
} from "../components/pages/index";
import { Contact } from "./contact";

export function Index() {
  return (
    <div className="home">
      <MainText />
      <IndexAbout />
      <Proyects />
      <MoreProyects />
      <Contact />
    </div>
  );
}
