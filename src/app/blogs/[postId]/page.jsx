import React from 'react';

// TODO: Fetch data from an API instead of using static data
const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "Learn the basics of React and build your first interactive user interface.",
    author: "Sagor Barmon",
    category: "Web Development",
    date: "2026-10-01",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Introduction to Next.js",
    description:
      "Explore Next.js features and learn how to build modern web applications.",
    author: "John Smith",
    category: "Next.js",
    date: "2026-10-03",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    description:
      "Discover how to create responsive and beautiful designs using utility classes.",
    author: "Alex Morgan",
    category: "CSS",
    date: "2026-10-05",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "JavaScript Fundamentals",
    description:
      "Understand variables, functions, arrays, objects, and essential JavaScript concepts.",
    author: "Sarah Wilson",
    category: "JavaScript",
    date: "2026-10-08",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Building Projects with TypeScript",
    description:
      "Learn how TypeScript improves code quality and helps catch errors during development.",
    author: "David Lee",
    category: "TypeScript",
    date: "2026-10-10",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    readTime: "10 min read",
  },
];

const PostDetailPage = async ({params}) => {

    const {postId} = await params;
    //TODO: load data from database
    const post = blogsData.find(post => post.id === parseInt (postId));
    console.log(typeof postId, post);

    return (
        <div>
            <h2>Post Detail Page: {postId} </h2>
            {
                post && <div>
                    <h3>{post.title}</h3>
                    <p>By {post.author}</p>
                    <p>{post.description}</p>
                     </div>
            }
        </div>
    );
};

export default PostDetailPage;