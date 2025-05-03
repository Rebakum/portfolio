"use client";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // Removed unused state 'result'

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Removed 'setResult' as 'result' state is no longer used
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "b76ad003-7ff6-4c8b-8430-8f585a965ed1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("✅ Message sent successfully! I, contact letter", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      // Removed 'setResult' as 'result' state is no longer used
      toast.error("Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="bg-[#2c2f34] text-white py-10">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <div className="text-center  relative">
          <h2 className="text-9xl uppercase opacity-5 font-bold">Contact</h2>
          <div className="text-center mb-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <h2 className="text-4xl font-bold text-white">
              Let&apos;s Get in Touch
            </h2>
            <div className="mt-2 w-24 h-1 bg-pink-500 mx-auto rounded"></div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 p-8 bg-[#2c2f34] rounded-lg">
          {/* Contact Info */}
          <div
            data-aos="fade-left "
            data-aos-delay="300"
            className="col-span-1"
          >
            <div className="space-y-6">
              <h4 className="text-3xl mt-10 text-shadoww font-semibold">
                📍 Address
              </h4>
              <p className="text-gray-400">
                Kumarkhali bus-station KumarKhali, Kushtia, Bangladesh
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 mt-10">
              <h4 className="text-xl font-semibold">📧 Email</h4>
              <p className="text-pink-500">rebakpi@gmail.com</p>
            </div>
            <div className="flex justify-start items-center gap-3 ">
              <h4 className="text-xl font-semibold">
                <span className="text-2xl">📱</span> WhatsApp
              </h4>
              <p className="text-gray-400">+8801914163150</p>
            </div>

            {/* Social Icons */}
            <div className="mt-5">
              <h4 className="text-xl font-semibold mb-3">🌐 Follow Me</h4>
              <div className="flex space-x-4 text-2xl text-pink-500">
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

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            data-aos="fade-right "
            data-aos-delay="600"
            className="space-y-6 col-span-2"
          >
            <div className="flex justify-start items-center gap-3 mt-10">
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 shadow-lg bg-[#1f2227] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                required
                className="w-full shadow-lg px-4 py-2 bg-[#1f2227] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <textarea
                rows={5}
                name="message"
                required
                className="w-full px-4 py-2 shadow-lg bg-[#1f2227] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 w-full shadow-lg hover:bg-pink-600 transition-colors duration-300 px-6 py-3 rounded font-bold text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
