import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { projectPageData } from "./projectPageData";
import ProjectPage from "./pages/ProjectPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  const projectPagesElements = projectPageData.map((project) => (
    <Route
      key={project.id}
      path={project.link}
      element={<ProjectPage project={project} />}
    />
  ));
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* here we are creating different routes based on projectpagadata array */}
          {projectPagesElements}
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}
