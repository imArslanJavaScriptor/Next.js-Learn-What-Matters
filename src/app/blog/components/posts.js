"use client";
import Link from "next/link";
import { use } from "react";

const Posts = ({ promise }) => {
  console.log("Client Component")
  console.log("Pormise: ", promise)
  const allPosts = use(promise)
  console.log("All Posts", allPosts)
  return (
    <>
      {allPosts.map((post) => (
        <div key={post.id} className="border my-2 rounded-sm p-2">
          <Link href={`/blog/${post.id}`}>
            <h2 className="bg-green-400/50 max-w-max">Title: {post.title}</h2>
          </Link>
          <p>Body: {post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;