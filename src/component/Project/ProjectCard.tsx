import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  name: string;
  image: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="p-4  rounded-lg shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300 bg-transparent hover:bg-[#2c2f34]  ease-in-out">
      <h1 className="text-xl text-center font-semibold mb-4">{project.name}</h1>
      <Link href={`/projects/${project.id}`}>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid grid-cols-3 grid-rows-2 pb-4 gap-2 h-[500px] "
        >
          {project.image[0] && (
            <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
              <Image
                src={project.image[0].trim()}
                alt={`${project.name} image 1`}
                width={400}
                height={250}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          {project.image[1] && (
            <div className="col-span-2 row-span-2 overflow-hidden rounded-lg">
              <Image
                src={project.image[1].trim()}
                alt={`${project.name} image 2`}
                width={400}
                height={250}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          {project.image[2] && (
            <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
              <Image
                src={project.image[2].trim()}
                alt={`${project.name} image 3`}
                width={400}
                height={250}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </Link>
      <div className="text-center my-4">
        <Link
          href={`/projects/${project.id}`}
          className="px-6 py-3 rounded-full bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
