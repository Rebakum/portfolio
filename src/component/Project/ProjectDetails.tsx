"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectDetails = ({ project }) => {
  return (
    <section className="container mx-auto px-5 py-16 bg-[#2c2f34]">
      {/* Title with Background Effect */}
      <div className="text-center my-10 relative">
        <h2 className="text-9xl text-gray-100 uppercase opacity-5 font-bold">
          My Project
        </h2>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl font-bold text-white">{project.title}</h2>
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
            {project.image.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img.trim()}
                  alt={`${project.title} - Slide ${index + 1}`}
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
          <p className="text-gray-100 mb-4 font-semibold">{project.name}</p>
          <p className="text-gray-100 mb-4">{project.description}</p>

          <h4 className="text-2xl text-gray-100 font-semibold mb-4">
            Technologies Used:
          </h4>
          <div className="py-3 px-2  text-gray-100 font-semibold">
            {project.technologiesUsed?.map((tech, index) => (
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
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline"
            >
              {project.projectUrl}
            </a>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
