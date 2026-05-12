import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    { id: 1, title: "Blog Post 1 Title", body: "Blog Post 1 Body" },
    { id: 2, title: "Blog Post 2 Title", body: "Blog Post 2 Body" },
    { id: 3, title: "Blog Post 3 Title", body: "Blog Post 3 Body" },
    { id: 4, title: "Blog Post 4 Title", body: "Blog Post 4 Body" },
  ];

  return (
    <div>
      <h1>This is Blog Page</h1>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
