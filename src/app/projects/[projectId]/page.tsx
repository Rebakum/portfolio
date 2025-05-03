"use client";

import ProjectDetails from "@/component/Project/ProjectDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:5000/projects/${projectId}`);
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (!project) return <div className="text-white p-8">Project not found.</div>;

  return (
    <div className="">
      <ProjectDetails project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
