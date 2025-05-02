import { useState } from "react";

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div id="project" className="w-full max-w-4xl mx-auto px-4 py-10">
      {/* Tab buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          data-aos="zoom-in"
          data-aos-delay="100"
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded font-semibold transition ${
            activeTab === "all"
              ? "bg-pink-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-pink-100"
          }`}
        >
          All Projects
        </button>
        <button
          data-aos="zoom-in"
          data-aos-delay="300"
          onClick={() => setActiveTab("new")}
          className={`px-4 py-2 rounded font-semibold transition ${
            activeTab === "new"
              ? "bg-pink-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-pink-100"
          }`}
        >
          New Projects
        </button>
        <button
          data-aos="zoom-in"
          data-aos-delay="600"
          onClick={() => setActiveTab("photo")}
          className={`px-4 py-2 rounded font-semibold transition ${
            activeTab === "photo"
              ? "bg-pink-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-pink-100"
          }`}
        >
          Project Photos
        </button>
      </div>

      {/* Tab content */}
      <div className="bg-[#1f2227] p-6 rounded-lg shadow-lg text-white">
        {activeTab === "all" && (
          <div>
            <h2 className="text-xl font-bold mb-3">All Projects</h2>
            <p>Here are all of my featured full-stack and frontend projects.</p>
          </div>
        )}
        {activeTab === "new" && (
          <div>
            <h2 className="text-xl font-bold mb-3">New Projects</h2>
            <p>Recently developed or in-progress projects go here.</p>
          </div>
        )}
        {activeTab === "photo" && (
          <div>
            <h2 className="text-xl font-bold mb-3">Project Photos</h2>
            <p>Gallery or screenshots of your project interfaces.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectTabs;
