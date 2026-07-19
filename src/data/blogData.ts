export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Learning React",
    content:
      "React makes it easier to build modern user interfaces using reusable components.",
    author: "John Doe",
    date: "July 19, 2026",
  },
  {
    id: 2,
    title: "Understanding Components",
    content:
      "Components are reusable building blocks that help organize your React applications.",
    author: "Jane Smith",
    date: "July 18, 2026",
  },
];

export default blogPosts;