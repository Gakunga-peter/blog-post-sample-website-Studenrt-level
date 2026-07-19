import { useState } from "react";
import type { BlogPost as BlogPostType } from "../data/blogData";

type Props = {
  post: BlogPostType;
};

function BlogPost({ post }: Props) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card">
      <h2>{post.title}</h2>

      <p>{post.content}</p>

      <div className="info">
        <span>👤 {post.author}</span>
        <span>📅 {post.date}</span>
      </div>

      <button
        className="like-btn"
        onClick={() => setLikes(likes + 1)}
      >
        ❤️ {likes}
      </button>
    </div>
  );
}

export default BlogPost;