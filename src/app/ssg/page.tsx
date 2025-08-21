import { FC } from "react";

// Simulate fetch/build-time data
const fetchBuildData = async (): Promise<string> => {
  return new Date().toLocaleDateString();
};

const SSGPage: FC<{ buildDate: string }> = async () => {
  const buildDate = await fetchBuildData();

  return (
    <div className="px-52 w-full p-12">
      <h1>SSG Page</h1>
      <p>Build Date: {buildDate}</p>
      <p>This is statically generated at build time.</p>
    </div>
  );
};

export default SSGPage;
