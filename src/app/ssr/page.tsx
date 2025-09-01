// app/ssr/page.tsx
export default async function SsrPage() {
  // সরাসরি server-side এ fetch ব্যবহার করা যায়
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    // caching: "no-store" দিলে SSR (fresh) behaviour হবে
    cache: "no-store",
  });
  const post = await res.json();

  return (
    <div>
      <h1>SSR Example (App Router)</h1>
      <p>{post.title}</p>
    </div>
  );
}
