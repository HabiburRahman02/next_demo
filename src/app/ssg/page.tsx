// app/ssg/page.tsx
export default async function SsgPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "force-cache", // build-time/static behavior
  });
  const post = await res.json();

  return (
    <div>
      <h1>SSG Example (App Router)</h1>
      <p>{post.title}</p>
    </div>
  );
}
