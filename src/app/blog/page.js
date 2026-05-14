import Link from "next/link";

export default async function Blog() {
  // DB Calls

  // Data Fetching
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-cache"})
  const posts = await data.json()


  return (
    <div>
      <h1 className="text-2xl font-semibold">Blog Page</h1>
      {posts.map((post) => (
        <div key={post.id} className="border my-2 rounded-sm p-2">
          <Link href={`/blog/${post.id}`}>
            <h2 className="bg-green-400/50 max-w-max">Title: {post.title}</h2>
          </Link>
          <p>Body: {post.body}</p>
        </div>
      ))}
    </div>
  );
}
