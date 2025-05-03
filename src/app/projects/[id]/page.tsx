"use client";
"use client";

import { projects } from "@/data/projects"; // Adjust path if needed
import Image from "next/image";
import { use } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectDetailsPage = ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = use(params);
  const singleproject = projects.find((project) => project.id === Number(id));

  if (!singleproject) {
    return (
      <div className="text-white text-center mt-10">Project not found</div>
    );
  }

  const { title, name, description, image, technologiesUsed, projectUrl } =
    singleproject;

  return (
    <div>
      <section className="container mx-auto px-5 py-16 bg-[#2c2f34]">
        {/* Title with Background Effect */}
        <div className="text-center my-10 relative">
          <h2 className="text-9xl text-gray-100 uppercase opacity-5 font-bold">
            My Project
          </h2>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-4xl font-bold text-white">{title}</h2>
            <div className="mt-2 w-24 h-1 bg-pink-500 mx-auto rounded"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-8 rounded-lg">
          {/* Swiper Slider */}
          <div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={20}
              className="w-full h-full"
            >
              {image?.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img.trim()}
                    alt={`${title} - Slide ${index + 1}`}
                    width={800}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="text-2xl text-gray-100 font-semibold mb-4">
              Project Overview
            </h3>
            <p className="text-gray-100 mb-4 font-semibold">{name}</p>
            <p className="text-gray-100 mb-4">{description}</p>

            <h4 className="text-2xl text-gray-100 font-semibold mb-4">
              Technologies Used:
            </h4>
            <div className="py-3 px-2 text-gray-100 font-semibold">
              {technologiesUsed?.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block mr-2 mb-2 py-1 px-3 bg-pink-500 hover:bg-pink-600 text-gray-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="mt-4">
              <span className="text-xl text-gray-100 font-semibold">
                Live Link:{" "}
              </span>
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                {projectUrl}
              </a>
            </h4>
          </div>
        </div>
      </section>
    </div>
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

export default ProjectDetailsPage;
