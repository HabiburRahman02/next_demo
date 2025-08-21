import { FC } from "react";

const SSRPage: FC = () => {
  const serverTime = new Date().toLocaleTimeString();
  return (
     <div className="px-52 w-full p-12">
      <h1>SSR Page</h1>
      <p>Server Time: {serverTime}</p>
      <p>This is rendered on the server every request.</p>
    </div>
  );
};

export default SSRPage;
