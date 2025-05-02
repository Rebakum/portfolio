import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaGitAlt,
  FaGraduationCap,
  FaNodeJs,
  FaReact,
  FaTools,
} from "react-icons/fa";
import {
  SiAuth0,
  SiBootstrap,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPostman,
  SiRailway,
  SiRedux,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const allSkills = [
  {
    name: "React.js",
    icon: <FaReact />,
    bgColor: "bg-sky-200",
    hoverColor: "hover:bg-sky-300",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    bgColor: "bg-gray-200",
    hoverColor: "hover:bg-gray-300",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    bgColor: "bg-blue-200",
    hoverColor: "hover:bg-blue-300",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    bgColor: "bg-cyan-200",
    hoverColor: "hover:bg-cyan-300",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    bgColor: "bg-purple-200",
    hoverColor: "hover:bg-purple-300",
  },

  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
    bgColor: "bg-indigo-200",
    hoverColor: "hover:bg-indigo-300",
  },
  {
    name: "AOS",
    icon: <SiBootstrap />,
    bgColor: "bg-teal-200",
    hoverColor: "hover:bg-teal-300",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,
    bgColor: "bg-lime-200",
    hoverColor: "hover:bg-lime-300",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    bgColor: "bg-neutral-200",
    hoverColor: "hover:bg-neutral-300",
  },

  {
    name: "JWT",
    icon: <SiJsonwebtokens />,
    bgColor: "bg-red-200",
    hoverColor: "hover:bg-red-300",
  },
  {
    name: "Role-based Auth",
    icon: <SiAuth0 />,
    bgColor: "bg-orange-200",
    hoverColor: "hover:bg-orange-300",
  },

  {
    name: "Mongoose",
    icon: <SiMongoose />,
    bgColor: "bg-emerald-200",
    hoverColor: "hover:bg-emerald-300",
  },
  {
    name: "Aggregation",
    icon: <SiMongodb />,
    bgColor: "bg-amber-200",
    hoverColor: "hover:bg-amber-300",
  },

  {
    name: "GitHub",
    icon: <FaGitAlt />,
    bgColor: "bg-gray-300",
    hoverColor: "hover:bg-gray-400",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    bgColor: "bg-orange-100",
    hoverColor: "hover:bg-orange-200",
  },

  {
    name: "Railway",
    icon: <SiRailway />,
    bgColor: "bg-purple-100",
    hoverColor: "hover:bg-purple-200",
  },
  {
    name: "Stripe",
    icon: <SiStripe />,
    bgColor: "bg-indigo-100",
    hoverColor: "hover:bg-indigo-200",
  },
  {
    name: "ShurjoPay",
    icon: <SiStripe />,
    bgColor: "bg-pink-100",
    hoverColor: "hover:bg-pink-200",
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <section id="skills" className="bg-[#1c1e22] py-16 px-6">
      <div className="text-center mb-10 relative">
        <h2 className="text-9xl uppercase opacity-5 text-white font-bold">
          Summary
        </h2>
        <div className="text-center mb-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <h2 className="text-4xl font-bold text-white">Skills</h2>
          <div className="mt-2 w-24 h-1 bg-pink-500 mx-auto rounded"></div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-start text-white uppercase mb-10 flex items-center gap-3">
          <FaTools className="text-pink-500" />
          My Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl flex flex-col  items-center transition duration-300 ${skill.bgColor} ${skill.hoverColor}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl text-white mb-2">{skill.icon}</div>
              <p className="text-sm text-gray-500 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 justify-start mt-10 ">
        <h1 className="text-4xl font-bold text-start text-white uppercase mb-10 flex items-center gap-3">
          <FaGraduationCap className="text-pink-500 text-5xl" />
          My Education
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="bg-[#2c2f34] shadow-2xl rounded p-5 mb-4  "
        >
          <p className="inline-block bg-pink-600 text-white text-sm font-medium px-3 py-1 rounded mb-2">
            2003 - 2007
          </p>
          <h3 className="text-xl font-semibold text-white">
            Diploma in Electrical Engineering
          </h3>
          <p className="text-pink-400">Kushtia Polytechnic Institute</p>
          <p className="mb-0 text-sm text-white/70">
            Gained comprehensive knowledge in electrical systems, circuit
            design, and industrial automation. Successfully completed several
            practical projects and internships, building a strong technical
            foundation.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="bg-[#2c2f34] shadow-2xl rounded p-5 mb-4"
        >
          <p className="inline-block bg-pink-600 text-white text-sm font-medium px-3 py-1 rounded mb-2">
            1999 - 2002
          </p>
          <h3 className="text-xl font-semibold text-white">
            Secondary School Certificate – Science
          </h3>
          <p className="text-pink-400">Boiragirchore High School</p>
          <p className="mb-0 text-sm text-white/70">
            Focused on core science subjects such as Physics, Chemistry, and
            Biology. Developed strong analytical and problem-solving skills that
            laid the groundwork for future technical studies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
