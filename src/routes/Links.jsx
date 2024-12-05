import { Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import ProjectDetails from "../components/ProjectDetails"; 

const Links = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<ProjectDetails />} /> 
    </Routes>
  );
};

export default Links;
