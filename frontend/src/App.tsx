import { Routes } from "./routes/routes";
import { NavBar } from "./components/layout/index";
import { useGithub } from "./hook/useContext";
import { LoadingPage } from "./pages/loading";

function App() {
  const contextGithub = useGithub();

  return (
    <div className="App">
      {!contextGithub ? (
        <LoadingPage />
      ) : (
        <>
          <NavBar />
          <Routes />
        </>
      )}
    </div>
  );
}

export default App;
