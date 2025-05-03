import About from "@/component/About";
import Bannar from "@/component/Bannar";
import AllBlogs from "@/component/Blogs/AllBlogs";
import Contact from "@/component/Contact";
import Services from "@/component/Services";
import Skills from "@/component/Skills";
import ProjectsPage from "./projects/page";

const HomePage = () => {
  return (
    <div>
      <Bannar />
      <About />
      <Services />
      <Skills />
      <ProjectsPage />
      <AllBlogs />
      <Contact />
    </div>
  );
};

export default HomePage;
