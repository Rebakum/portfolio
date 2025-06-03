import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f2125] container mx-auto text-white py-12">
      <div className=" px-10 justify-center  grid md:grid-cols-3 sm:grid-cols-2 gap-10">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-gray-400">
            I&apos;m Rebeka Sultana, a passionate full-stack web developer
            dedicated to building user-friendly and scalable applications.
          </p>
        </div>

        {/* Quick Links */}
        <div className="">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/#" className="hover:text-pink-500">
                гє๒єкค✍
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-pink-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-pink-500">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-pink-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="">
          <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
          <p className="text-gray-400 mb-2">📧 rebakpi@gmail.com</p>
          <p className="text-gray-400 mb-4">📍 Kushtia, Bangladesh</p>

          <div className="flex space-x-4 text-pink-500 text-2xl">
            <Link
              href="https://www.linkedin.com/in/mst-rebeka-sultana-reba05/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/Rebakum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61554784244564"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Rebeka Sultana. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
