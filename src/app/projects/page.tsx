"use client";

import ProjectCard from "@/component/Project/ProjectCard";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="bg-[#2c2f34] text-white py-16 px-6">
      <div className="text-center mb-10 relative">
        <h2 className="text-9xl uppercase opacity-5 font-bold">My Work</h2>

        <div className="text-center mb-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <div className="mt-2 w-24 h-1 bg-pink-500 mx-auto rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project: any) => (
          <ProjectCard key={project.id || project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
