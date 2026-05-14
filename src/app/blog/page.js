import { Suspense } from "react";
import Posts from "./components/posts";

export default async function Blog() {
  console.log("Server Component")
  // DB Calls

  // Data Fetching | Server Components
  // const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
  // cache: "no-cache",
  // });
  // const posts = await data.json();

  // Data Fetching | Client Component
  const promise = fetch(
    "https://jsonplaceholder.typicode.com/posts",
  ).then((res) => res.json());

  return (
    <div>
      <h1 className="text-2xl font-semibold">Blog Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Posts promise={promise} />
      </Suspense>
    </div>
  );
}
