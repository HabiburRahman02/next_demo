'use client';
import React, { useState } from 'react';

const Blogs = () => {
  const [isBangla, setIsBangla] = useState(false);
  const blogsEnglish = [
    {
      title: 'CSR (Client Side Rendering)',
      description: 'Rendering happens on the client/browser using JavaScript.',
      notes: [
        'The server sends a mostly empty HTML file with a JS bundle.',
        'The browser executes JavaScript and fetches data from APIs.',
        'UI is built and rendered on the client side.',
        'Good for dynamic, user-specific data and when SEO is not required.',
      ],
      questions: [
        {
          q: 'What is CSR?',
          a: 'Rendering happens fully on the client or browser. The server sends a blank HTML with React JS, then the browser executes JS, fetches API data, and shows it in the frontend.',
        },
        {
          q: 'Why do we use CSR?',
          a: 'We use CSR for highly interactive apps, dashboards, or features where SEO is not important and fast client-side updates are needed.',
        },
      ],
    },
    {
      title: 'SSR (Server Side Rendering)',
      description: 'Rendering happens on the server on each request.',
      notes: [
        'A request comes from the browser.',
        'The server renders the React component and generates HTML.',
        'The complete HTML page is sent to the browser.',
        'The browser displays the page, then JS hydrates it to add interactivity.',
        'Good for SEO and always provides fresh data.',
      ],
      questions: [
        {
          q: 'What is SSR?',
          a: 'SSR means server-side rendering. When a user sends a request, the server renders the page and sends the complete HTML to the browser.',
        },
        {
          q: 'Why do we use SSR?',
          a: 'SSR is SEO-friendly, gives fully loaded pages immediately, provides fresh data on each request, and works well on older browsers.',
        },
      ],
    },
    {
      title: 'SSG (Static Site Generation)',
      description: 'Pages are generated at build-time and served statically.',
      notes: [
        'Pages are pre-rendered into static HTML during build time.',
        'The static HTML is cached and served instantly to users.',
        'Very fast loading because no rendering is required at request time.',
        'Best for content that doesn’t change frequently, like blogs or documentation.',
      ],
      questions: [
        {
          q: 'What is SSG?',
          a: 'SSG means the pages are pre-rendered at build time and served as static HTML.',
        },
        {
          q: 'Why do we use SSG?',
          a: 'SSG is used for fast, SEO-friendly pages with content that doesn’t change often.',
        },
      ],
    },
  ];

  const blogsBangla = [
    {
      title: 'CSR (Client Side Rendering)',
      description: 'রেন্ডারিং হয় ক্লায়েন্ট/ব্রাউজারে জাভাস্ক্রিপ্ট ব্যবহার করে।',
      notes: [
        'সার্ভার থেকে খালি HTML ফাইল এবং JS bundle পাঠানো হয়।',
        'ব্রাউজার জাভাস্ক্রিপ্ট চালায় এবং API থেকে ডাটা আনে।',
        'UI তৈরি ও রেন্ডার হয় ব্রাউজার (ক্লায়েন্ট) এ।',
        'Dynamic data বা user-specific data এর জন্য ভালো এবং যখন SEO দরকার নেই।',
      ],
      questions: [
        {
          q: 'CSR কী?',
          a: 'CSR মানে পুরো রেন্ডারিং কাজটা ক্লায়েন্ট বা ব্রাউজারে হয়। সার্ভার থেকে খালি HTML আসে সাথে React JS bundle, তারপর ব্রাউজার JS চালায়, API কল করে এবং ফ্রন্টএন্ডে ডাটা দেখায়।',
        },
        {
          q: 'আমরা CSR কেন ব্যবহার করি?',
          a: 'আমরা CSR ব্যবহার করি highly interactive অ্যাপ, dashboard, বা যেসব ক্ষেত্রে SEO দরকার নেই এবং দ্রুত client-side update দরকার।',
        },
      ],
    },
    {
      title: 'SSR (Server Side Rendering)',
      description: 'প্রতিটি রিকোয়েস্টের সময় সার্ভারে রেন্ডারিং হয়।',
      notes: [
        'ব্রাউজার থেকে রিকোয়েস্ট আসে।',
        'সার্ভার React component রেন্ডার করে এবং HTML তৈরি করে।',
        'সম্পূর্ণ HTML ব্রাউজারে পাঠানো হয়।',
        'ব্রাউজার পেজ দেখায়, তারপর JS hydrate হয়ে ইন্টার‌্যাকটিভ করে।',
        'SEO এর জন্য ভালো এবং সবসময় fresh data দেয়।',
      ],
      questions: [
        {
          q: 'SSR কী?',
          a: 'SSR মানে Server Side Rendering। যখন ইউজার ব্রাউজার থেকে রিকোয়েস্ট পাঠায়, সার্ভার সেই পেজ রেন্ডার করে এবং পূর্ণ HTML ব্রাউজারে পাঠায়।',
        },
        {
          q: 'আমরা SSR কেন ব্যবহার করি?',
          a: 'SSR SEO-friendly, দ্রুত পুরো UI দেখায়, প্রতিবার fresh data দেয় এবং পুরনো ব্রাউজারেও ভালো কাজ করে।',
        },
      ],
    },
    {
      title: 'SSG (Static Site Generation)',
      description: 'পেজগুলো build-time এ জেনারেট হয় এবং static আকারে serve করা হয়।',
      notes: [
        'Build সময়েই পেজগুলো static HTML আকারে তৈরি হয়।',
        'Static HTML cache হয়ে ব্যবহারকারীদের কাছে খুব দ্রুত পৌঁছে যায়।',
        'লোডিং অনেক দ্রুত হয় কারণ request এর সময় নতুন রেন্ডার করতে হয় না।',
        'যেসব কন্টেন্ট বেশি পরিবর্তন হয় না যেমন blog, documentation – এগুলোর জন্য উপযুক্ত।',
        'পরে যতবার ইউজার পেজ লোড করবে, একই HTML দেখাবে (যতক্ষণ না revalidate বা নতুন build হয়)।',
      ],
      questions: [
        {
          q: 'SSG কী?',
          a: 'SSG মানে build সময়েই পেজগুলো pre-render হয়ে static HTML হিসেবে সার্ভ হয়।',
        },
        {
          q: 'আমরা SSG কেন ব্যবহার করি?',
          a: 'SSG ব্যবহার করা হয় খুব দ্রুত লোড হওয়া, SEO-friendly পেজের জন্য যেখানে কন্টেন্ট ঘন ঘন পরিবর্তন হয় না।',
        },
      ],
    },
  ];

  const toggleLanguage = () => {
    setIsBangla(!isBangla);
  };

  const blogs = isBangla ? blogsBangla : blogsEnglish;

  return (
    <div className="md:px-52 w-full p-12">
      <div className="flex justify-between  items-center">
        <h1 className="text-3xl font-bold mb-8 text-center">Blogs</h1>
        <button
          onClick={toggleLanguage}
          className="mb-6 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
        >
          {isBangla ? 'Switch to English' : 'Switch to Bangla'}
        </button>
      </div>
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
                <p className="font-bold"># {item.q}</p>
                <p className="text-gray-800">
                  {`=>`} {item.a}
                </p>
              </div>
            ))}

            {/* Notes  */}
            {blog.notes && (
              <div className="mt-4">
                <p className="font-bold mb-2">Notes:</p>
                <ol className="list-decimal list-inside text-gray-800 space-y-1">
                  {blog.notes.map((note, n) => (
                    <li key={n}>{note}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
