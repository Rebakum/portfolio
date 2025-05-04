import About from "@/component/About";
import Bannar from "@/component/Bannar";
import Contact from "@/component/Contact";
import Services from "@/component/Services";
import Skills from "@/component/Skills";
import BlogsPage from "./blogs/page";
import ProjectsPage from "./projects/page";

const HomePage = () => {
  return (
    <div>
      <Bannar />
      <About />
      <Services />
      <Skills />
      <ProjectsPage />
      <BlogsPage />
      <Contact />
    </div>
  );
};

export default HomePage;
