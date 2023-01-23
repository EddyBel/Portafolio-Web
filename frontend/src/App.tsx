import { Routes } from "./routes/routes";
import { NavBar, Footer } from "./components/layout/index";
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
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
