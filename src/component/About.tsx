"use client";

import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="bg-[#1c1e22] text-white py-16 px-6">
      <div className="text-center mb-10 relative">
        <h2 className="text-9xl uppercase opacity-5 font-bold">About Me</h2>

        <div className="text-center mb-10  absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <h2 className="text-4xl font-bold text-white"> Know Me More</h2>
          <div className="mt-2 w-24 h-1 bg-pink-500 mx-auto rounded"></div>
        </div>
      </div>

      <div
        className="grid grid-cols-1  md:grid-cols-4 gap-5"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="md:col-span-3 p-5 bg-[#2c2f34] rounded-lg shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300 ">
          <h3 className="text-2xl ">
            I&apos;m <span className="text-pink-600">Mst. Rebeka Sultana</span>,
            a Front-End Web Developer
          </h3>
          <p className="mt-5 text-[#bbbbbb] text-base leading-relaxed">
            Self-driven and detail-oriented MERN Stack Developer with hands-on
            experience building scalable full-stack applications. Proficient in
            advanced features like role-based authentication, API security,
            payment gateway integration (Stripe & ShurjoPay), MongoDB
            aggregation pipelines, and modern UI/UX practices. Passionate about
            clean code and solving real-world problems.
          </p>
          <p className="mt-5 text-[#bbbbbb] text-base leading-relaxed">
            Strong skills in React Query, protected routing, dashboard
            development using React & Next.js, and building responsive
            interfaces.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:col-span-1 space-y-2 p-5 bg-[#2c2f34] rounded-lg shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300">
          <p>
            <strong>Location:</strong> KumarKhali, Kushtia
          </p>
          <hr className="border-[#858181]" />
          <p>
            <strong>WhatsApp:</strong> +8801914163150
          </p>
          <hr className="border-[#858181]" />
          <p>
            <strong>Email:</strong>{" "}
            <span className="text-pink-600">rebakpi@gmail.com</span>
          </p>
          <hr className="border-[#858181]" />
          <p>
            <strong>LinkedIn:</strong>{" "}
            <Link
              href="https://www.linkedin.com/in/mst-rebeka-sultana-reba05/"
              className="text-pink-600"
              target="blank"
            >
              Profile
            </Link>
          </p>
          <hr className="border-[#858181]" />
          <p>
            <strong>GitHub:</strong>{" "}
            <Link
              href="https://github.com/Rebakum"
              className="text-pink-600 "
              target="blank"
            >
              GitHub
            </Link>
          </p>
          <hr className="border-[#858181] mb-5" />
          <Link
            href="https://drive.google.com/file/d/10AuWF5IBczmlZOv92q3-u8FybsTENSRO/view?usp=sharing"
            target="_blank"
            className="px-6 py-3 rounded-full bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
          >
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
