import { Routes as Switch, Route } from "react-router-dom";
import { Index } from "../pages/index";
import { About } from "../pages/about";
import { Repositories } from "../pages/repositories";
import { Contact } from "../pages/contact";

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/repositories" element={<Repositories />} />
      <Route path="/contact" element={<Contact />} />
    </Switch>
  );
}
