import blogPosts from "../data/blogData";
import BlogPost from "./BlogPost";

function BlogList() {
  return (
    <div>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogList;