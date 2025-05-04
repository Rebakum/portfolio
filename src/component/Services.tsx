"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaSearch,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={30} />,
    title: "Web Design",
    desc: "User-friendly, accessible, and responsive websites tailored for performance.",
  },
  {
    icon: <FaPencilRuler size={30} />,
    title: "UI/UX Design",
    desc: "Crafting intuitive and appealing user experiences with modern UI trends.",
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "App Design & Develop",
    desc: "Building modern mobile and web apps with React, Next.js, and more.",
  },
  {
    icon: <FaSearch size={30} />,
    title: "SEO Marketing",
    desc: "Optimizing sites for visibility, faster ranking, and traffic growth.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <section id="services" className="bg-[#2c2f34] text-white py-16 px-5">
      <div className="text-center mb-10 relative">
        <h2 className="lg:text-9xl  text-6xl uppercase opacity-5 font-bold">
          Services
        </h2>
        <div className="text-center mb-10  absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <h2 className="lg:text-4xl text-2xl font-bold text-white">
            What I Do?
          </h2>
          <div className="mt-2 w-24 h-1 bg-pink-500 mx-auto rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10   mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex items-start gap-6 bg-[#1f2227] p-6 rounded-lg shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={`${idx * 300}`}
          >
            <div className="bg-[#111317] p-4 rounded-lg text-pink-500">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-[#bbbbbb] leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
