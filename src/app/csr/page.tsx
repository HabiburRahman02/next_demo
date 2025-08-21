"use client";
import { FC, useState, useEffect } from "react";

const CSRPage: FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-52 w-full p-12">
      <h1>CSR Page</h1>
      <p>Client Time: {time}</p>
      <p>This is rendered on the client/browser.</p>
    </div>
  );
};

export default CSRPage;
