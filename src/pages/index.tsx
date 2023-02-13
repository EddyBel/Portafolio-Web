import { CardProyect, Spinner, BookLoader } from "../components/common/index";
import {
  FrontImg,
  MainText,
  Proyects,
  IndexAbout,
} from "../components/pages/index";
import { Contact } from "./contact";
import { useMyAPI } from "../hook/useContext";

let direccion: boolean = false;

export function Index() {
  // Information obtained from the personal api.
  const myAPI = useMyAPI();
  const proyects = myAPI?.proyects?.body;

  return (
    <div className="home">
      <MainText />
      <IndexAbout />
      <Proyects />
      <Contact key={`body__contact__section`} />
    </div>
  );
}
