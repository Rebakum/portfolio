"use client";

import About from "@/component/About";
import Bannar from "@/component/Bannar";
import AllBlogs from "@/component/Blogs/AllBlogs";
import Contact from "@/component/Contact";
import Project from "@/component/Project/Project";
import Services from "@/component/Services";
import Skills from "@/component/Skills";

const HomePage = () => {
  return (
    <div>
      <Bannar />
      <About />
      <Services />
      <Skills />
      <Project />
      <AllBlogs />
      <Contact />
    </div>
  );
};

export default HomePage;
