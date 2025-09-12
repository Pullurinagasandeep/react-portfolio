import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dopefolio" element={<ProjectPage />} />
          <Route path="/game" element={<ProjectPage />} />
          <Route path="/youtube" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}
