"use client";

import Image from "next/image";

const blogData = [
  {
    id: 1,
    title: "Mastering React: From Basics to Advanced Patterns",
    author: "Rebeka Sultana",
    date: "2025-04-15",
    image: "images/blogs/react-blog.jpg",
    summary:
      "Learn how to build modern web applications with React. This guide covers everything from components and hooks to advanced concepts like context, performance optimization, and design patterns.",
  },
  {
    id: 2,
    title: "10 UI/UX Tips for Better Web Design",
    author: "Rebeka Sultana",
    date: "2025-03-28",
    image: "images/blogs/ui-ux-tips.jpg",
    summary:
      "A visually appealing website is not enough—users also expect smooth interactions. This blog explores ten practical UI/UX techniques to improve user satisfaction and engagement.",
  },
];

const AllBlogs = () => {
  return (
    <section id="blog" className="py-16 bg-gray-900 text-white">
      <div className="text-center mb-10 relative">
        <h2 className="text-9xl uppercase opacity-5 font-bold">My Hobby</h2>

        <div className="text-center mb-10  absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <h2 className="text-4xl font-bold text-white">Latest Blogs</h2>
          <div className="mt-2 w-24 h-1 bg-pink-500 mx-auto rounded"></div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {blogData.map((blog) => (
          <div
            data-aos="rotate-left"
            data-aos-delay="100"
            key={blog.id}
            className="bg-[#2c2f34] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src="./file.svg"
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-400 mb-3">
                By {blog.author} | {new Date(blog.date).toLocaleDateString()}
              </p>
              <p className="text-gray-300 mb-4">{blog.summary}</p>
              <button className="text-pink-500 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
