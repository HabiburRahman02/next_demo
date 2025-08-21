"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-sky-700 text-white py-6 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left side - Blog link */}
          <div className="text-xl font-bold hover:text-yellow-300 transition-colors">
            <Link href="/blog">Blogs</Link>
          </div>

          {/* Right side - Navigation links */}
          <nav className="space-x-6 text-lg">
            <Link href="/ssr" className="hover:text-yellow-300 transition-colors">
              SSR
            </Link>
            <Link href="/csr" className="hover:text-yellow-300 transition-colors">
              CSR
            </Link>
            <Link href="/ssg" className="hover:text-yellow-300 transition-colors">
              SSG
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
