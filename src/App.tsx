import { Routes } from "./routes/routes";
import { NavBar, Footer, Menu } from "./components/layout/index";
import { useGithub, useMyAPI } from "./hook/useContext";
import { LoadingPage } from "./pages/loading";

function App() {
  const contextGithub = useGithub();
  const MyApi = useMyAPI();

  return (
    <div className="App">
      {!contextGithub && !MyApi ? (
        <LoadingPage />
      ) : (
        <>
          <Menu />
          <NavBar />
          <Routes />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
