import { Routes } from "./routes/routes";
import {
  NavBar,
  Footer,
  Menu,
  UserGithub,
  NavOptions,
} from "./components/layout/index";
import { useGithub, useMyAPI } from "./hook/useContext";
import { LoadingPage } from "./pages/loading";

function App() {
  const contextGithub = useGithub();
  const MyApi = useMyAPI();

  return (
    <div className="App">
      {/* <LoadingPage /> */}
      <Menu />
      <UserGithub />
      <NavOptions />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
