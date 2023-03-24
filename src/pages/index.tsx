import {
  MainText,
  Proyects,
  IndexAbout,
  MoreProyects,
} from "../components/pages/index";
import { Counters } from "../components/layout/index";
import { Contact } from "./contact";

export function Index() {
  return (
    <div className="home">
      <MainText />
      <IndexAbout />
      <Counters />
      <Proyects />
      <MoreProyects />
      <Contact />
    </div>
  );
}
