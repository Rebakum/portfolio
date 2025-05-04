"use client";
import Image from "next/image";
import { use } from "react";

const DetailsBlogPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  const singleBlog = blogs.find((blog) => blog.id === Number(id));

  if (!singleBlog) {
    return <div className="text-white text-center mt-10">Blog not found</div>;
  }

  const { title, author, description, image, date } = singleBlog;

  return (
    <section className="container mx-auto px-5 py-16 bg-[#2c2f34]">
      <div
        data-aos="fade-bottom"
        data-aos-delay="300"
        className="max-w-4xl mx-auto p-6 text-white bg-[#2c2f34] rounded-lg shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300"
      >
        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />

        <p className="text-gray-400 mb-4">
          By {author} | {new Date(date).toLocaleDateString()}
        </p>

        <p className="text-lg leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </section>
  );
};

const blogs = [
  {
    id: 1,
    title: "Mastering React: From Basics to Advanced Patterns",
    author: "Rebeka Sultana",
    date: "2025-04-15",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fb8e1a5r2hs33vt1r5f37.png",
    description:
      "1. React কি? React হল একটি JavaScript লাইব্রেরি যা UI তৈরি করতে ব্যবহৃত হয়। 2. JSX: JSX হল JavaScript এর সাথে HTML এর সংমিশ্রণ। 3. কম্পোনেন্টস: একটি স্বাধীন ও পুনঃব্যবহারযোগ্য কোড ব্লক। 4. Props: প্যারেন্ট থেকে চাইল্ডে ডেটা পাঠানোর উপায়। 5. State: কম্পোনেন্টের অভ্যন্তরীণ ডেটা। 6. Lifecycle Methods: componentDidMount, componentDidUpdate, componentWillUnmount। 7. Hooks: useState ও useEffect ব্যবহার করা যায়। 8. Context API: গ্লোবাল ডেটা শেয়ার করার উপায়। 9. Redux: কেন্দ্রীয় স্টেট ম্যানেজমেন্ট। 10. React Router: রাউটিং পরিচালনা করার লাইব্রেরি। 11. Performance Optimization: React.memo, useMemo, useCallback। 12. Testing: Jest, Enzyme, React Testing Library।",
  },
  {
    id: 2,
    title: "10 UI/UX Tips for Better Web Design",
    author: "Rebeka Sultana",
    date: "2025-03-28",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219162542/Become-UI-Designer-in-2023.png",
    description:
      "1. সরলতা বজায় রাখুন। 2. সঠিক রঙের প্যালেট ব্যবহার করুন। 3. পাঠ্য এবং ফন্টের গুরুত্ব। 4. সঠিক ইমেজ ব্যবহার করুন। 5. ব্যবহারকারীর অভিজ্ঞতা উন্নত করুন। 6. প্রতিক্রিয়া সংগ্রহ করুন। 7. মোবাইল ফ্রেন্ডলি ডিজাইন করুন। 8. সঠিক নেভিগেশন ব্যবহার করুন। 9. সঠিক স্পেসিং ব্যবহার করুন। 10. পরীক্ষা এবং উন্নতি করুন। 11. ব্র্যান্ডিং বজায় রাখুন। 12. সঠিক কন্টেন্ট ব্যবহার করুন।",
  },
  {
    id: 3,
    title: "Getting Started with Node.js and Express",
    author: "Rebeka Sultana",
    date: "2025-04-01",
    image:
      "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4085508%2Fcover_image%2Fregular_1708x683%2Fcover-secure-rest-api-in-nodejs-80fb5c435d64e62d270b46dc5618d74e.png",
    description:
      "1. Node.js হল একটি সার্ভার-সাইড রানটাইম এনভায়রনমেন্ট। 2. Express হল একটি হালকা ও দ্রুত Node.js ফ্রেমওয়ার্ক। 3. Routing তৈরি করা সহজ। 4. Middleware ব্যবহারের সুবিধা। 5. REST API তৈরি করা যায়। 6. MongoDB এর সাথে সংযুক্তি সহজ।",
  },
  {
    id: 4,
    title: "Understanding TypeScript for JavaScript Developers",
    author: "Rebeka Sultana",
    date: "2025-03-18",
    image:
      "https://images-cdn.openxcell.com/wp-content/uploads/2024/08/13102435/What-is-TypeScript_.jpg",
    description:
      "1. TypeScript হল JavaScript এর সুপারসেট। 2. Static typing ব্যবহারে কোড নিরাপদ হয়। 3. Interface এবং Type ব্যবহার করা যায়। 4. ক্লাস ও OOP সমর্থন করে। 5. IDE support উন্নত করে। 6. বড় স্কেল প্রজেক্টে ব্যবহারের জন্য উপযুক্ত।",
  },
  {
    id: 5,
    title: "How to Optimize Your Website for SEO in 2025",
    author: "Rebeka Sultana",
    date: "2025-02-20",
    image:
      "https://www.vocso.com/blog/wp-content/uploads/2023/03/How-to-Optimize-Your-Website-for-SEO.webp",
    description:
      "1. কিওয়ার্ড রিসার্চ করুন। 2. মেটা ট্যাগ ও টাইটেল লিখুন। 3. Alt টেক্সট সহ ইমেজ ব্যবহার করুন। 4. ফাস্ট লোডিং স্পিড নিশ্চিত করুন। 5. মোবাইল ফ্রেন্ডলি ডিজাইন করুন। 6. Internal এবং external linking করুন।",
  },
  {
    id: 6,
    title: "A Beginner’s Guide to MongoDB",
    author: "Rebeka Sultana",
    date: "2025-03-05",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcg18uwdftllzzt0o5yec.png",
    description:
      "1. MongoDB হল একটি NoSQL ডাটাবেজ। 2. Document-based স্টোরেজ ব্যবহার করে। 3. Schema flexible হয়। 4. CRUD অপারেশন করা যায় সহজে। 5. Mongoose দিয়ে ডেটা ভ্যালিডেশন ও মডেলিং সহজ। 6. Aggregation pipeline বিশ্লেষণের জন্য ব্যবহৃত হয়।",
  },
];

export default DetailsBlogPage;
