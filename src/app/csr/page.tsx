"use client";
import { useEffect, useState } from "react";

export default function CsrPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CSR Example</h1>
      <p className="text-blue-600 font-medium">{data.title}</p>
      <p className="text-gray-500 mt-2">Data fetched on client side</p>
    </div>
  );
}
