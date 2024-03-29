import { useEffect } from "react";
import { Routes as Switch, Route, useLocation } from "react-router-dom";
import { Index } from "../pages/index";
import { About } from "../pages/about";
import { Repositories } from "../pages/repositories";
import { Notes } from "../pages/notes";
import { Article } from "../pages/article_note";
import { Contact } from "../pages/contact";
import { Error } from "../pages/error";

const ScrollToTop = () => {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/notes/:matter/:note" element={<Article />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Switch>
      <ScrollToTop />
    </>
  );
}
