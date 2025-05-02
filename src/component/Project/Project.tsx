import ProjectTabs from "./Project_tabs";

const Project = () => {
  return (
    <section id="projects" className="bg-[#2c2f34] text-white py-16 px-6">
      <div className="text-center mb-10 relative">
        <h2 className="text-9xl uppercase opacity-5 font-bold">My Work</h2>

        <div className="text-center mb-10  absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <h2 className="text-4xl font-bold text-white"> Projects</h2>
          <div className="mt-2 w-24 h-1 bg-pink-500 mx-auto rounded"></div>
        </div>
      </div>
      <ProjectTabs />
    </section>
  );
};

export default Project;
