import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  name: string;
  image: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="p-4  rounded-lg  bg-transparent hover:bg-[#2c2f34] shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300"
    >
      <Link href={`/projects/${project.id}`}>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 pb-4 h-auto ">
          {project.image[0] && (
            <div className="col-span-1 row-span-1 h-[75px] overflow-hidden rounded-lg  hover:rotate-12 transition-transform duration-300 hover:scale-200">
              <Image
                src={project.image[0].trim()}
                alt={`${project.name} image 1`}
                width={400}
                height={75}
                className="w-full h-full object-cover rounded-lg "
              />
            </div>
          )}

          {project.image[1] && (
            <div className="col-span-2 row-span-2 h-[150px] overflow-hidden rounded-lg hover:rotate-12 transition-transform duration-300 hover:scale-200">
              <Image
                src={project.image[1].trim()}
                alt={`${project.name} image 2`}
                width={800}
                height={150}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          {project.image[2] && (
            <div className="col-span-1 row-span-1 h-[75px] overflow-hidden rounded-lg hover:rotate-12 transition-transform duration-300 hover:scale-200">
              <Image
                src={project.image[2].trim()}
                alt={`${project.name} image 3`}
                width={400}
                height={750}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </Link>
      <div className="text-center flex lg:flex-row justify-between flex-col items-center gap-5 my-4">
        <h1 className="text-xl text-center font-semibold mb-4">
          {" "}
          Name:
          {project.name}
        </h1>
        <Link
          href={`/projects/${project.id}`}
          className="px-6 py-3 rounded-full flex justify-center items-center sm:text-sm bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
