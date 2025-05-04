"use client";

import ProjectCard from "@/component/Project/ProjectCard";

const ProjectsPage = () => {
  return (
    <section id="projects" className="bg-[#2c2f34] text-white py-16 px-6">
      <div className="text-center mb-10 relative">
        <h2 className="lg:text-9xl text-6xl uppercase opacity-5 font-bold">
          My Work
        </h2>

        <div className="text-center mb-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <h2 className="lg:text-4xl text-2xl font-bold text-white">
            Projects
          </h2>
          <div className="mt-2 w-24 h-1 bg-pink-500 mx-auto rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={{ ...project, id: project.id.toString() }}
          />
        ))}
      </div>
    </section>
  );
};
const projects = [
  {
    id: 1,
    category: "new",
    name: "Bike Store",
    title: "Full-Stack Bike Shop Application",
    projectUrl: "https://bike-store-b4-a4.vercel.app/",
    image: [
      "https://i.ibb.co/vvL7K00Q/bike-store-10.png",
      "https://i.ibb.co/d0tChtn0/bike-store-20.png",
      "https://i.ibb.co/3ykfxKQY/bike-store-30.png",
    ],
    description:
      "A full-stack web application for browsing, purchasing, and managing bikes. Features include user registration, role-based access (Admin/User), product management, SurjoPay payment integration, order tracking, and a responsive design. Built with TypeScript, Express.js, MongoDB, and React.",
    technologiesUsed: [
      "TypeScript",
      "React",
      "Express.js",
      "MongoDB",
      "SurjoPay",
      "Tailwind CSS",
      "JWT",
      "Node.js",
    ],
  },
  {
    id: 2,
    category: "new",
    name: "BasaFinder",
    title: "Smart Rental & Housing Solution",
    projectUrl: "https://basa-finder-client-swart.vercel.app/",
    image: [
      "https://i.ibb.co/rGmzFC4Q/basa-finder-10.png",
      "https://i.ibb.co/kV0Zn5F8/basa-finder-20.png",
      "https://i.ibb.co/mr7cZNhT/basa-finder-30.png",
    ],
    description:
      "A full-stack rental platform with dashboards for Admin, Landlord, and Tenant. Includes features like property listing, booking, approval workflow, Stripe payment integration, and JWT authentication.",
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
      "Tailwind CSS",
      "React Hook Form",
    ],
  },
  {
    id: 3,
    category: "old",
    name: "Tourist Guide",
    title: "Travel Companion Web App",
    projectUrl: "https://tourist-guide-3bd84.firebaseapp.com",
    image: [
      "https://i.ibb.co/57XLZWd/tourist-10.png",
      "https://i.ibb.co/FkfFV88n/tourist-20.png",
      "https://i.ibb.co/63g4d7j/tourist-30.png",
    ],
    description:
      "An interactive travel planning app with destination listings, guide bookings, and admin panel features. Built using MERN stack with secure user authentication.",
    technologiesUsed: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
      "Tailwind CSS",
    ],
  },
];

export default ProjectsPage;
