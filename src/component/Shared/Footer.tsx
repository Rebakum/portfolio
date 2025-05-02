import Link from "next/link";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f2125] text-white py-12">
      <div className="container mx-auto px-5 grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-gray-400">
            I&apos;m Rebeka Sultana, a passionate full-stack web developer dedicated
            to building user-friendly and scalable applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:text-pink-500">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-pink-500">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-pink-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
          <p className="text-gray-400 mb-2">📧 rebakpi@gmail.com</p>
          <p className="text-gray-400 mb-4">📍 Kushtia, Bangladesh</p>

          <div className="flex space-x-4 text-pink-500 text-2xl">
            <a
                             href="https://www.linkedin.com/in/mst-rebeka-sultana-reba05/"
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                             <FaLinkedin />
                           </a>
                           <a
                             href="https://github.com/Rebakum"
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                             <FaGithub />
                           </a>
                           <a
                             href="https://www.facebook.com/profile.php?id=61554784244564"
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                             <FaFacebook />
                           </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
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
