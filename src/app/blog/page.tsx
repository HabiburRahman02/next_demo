import React from "react";

const page = () => {
  const blogs = [
    {
      title: "CSR (Client Side Rendering)",
      description: "Rendering happens on the client/browser using JavaScript.",
      questions: [
        { q: "What is CSR?", a: "CSR means the page is rendered in the browser using JavaScript after loading." },
        { q: "Why do we use CSR?", a: "We use CSR for highly interactive apps where fast client-side updates are needed." }
      ]
    },
    {
      title: "SSR (Server Side Rendering)",
      description: "Rendering happens on the server on each request.",
      questions: [
        { q: "What is SSR?", a: "SSR means the page HTML is generated on the server on each request." },
        { q: "Why do we use SSR?", a: "SSR improves SEO and initial load performance for dynamic content." }
      ]
    },
    {
      title: "SSG (Static Site Generation)",
      description: "Pages are generated at build-time and served statically.",
      questions: [
        { q: "What is SSG?", a: "SSG means the pages are pre-rendered at build time and served as static HTML." },
        { q: "Why do we use SSG?", a: "SSG is used for fast, SEO-friendly pages with content that doesn’t change often." }
      ]
    }
  ];

  return (
    <div className="px-52 w-full p-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Blogs</h1>

      {blogs.map((blog, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-bold mb-2 text-sky-700">{blog.title}</h2>
          <p className="mb-4 text-gray-700">{blog.description}</p>
          
          <div className="space-y-4">
            {blog.questions.map((item, i) => (
              <div key={i} className="w-full">
                <p className="font-bold">{item.q}</p>
                <p className="ml-4 text-gray-800">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
