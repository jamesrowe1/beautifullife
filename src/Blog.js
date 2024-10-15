import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Healing Power of Art",
      content: "In every brushstroke, in every swirl of color, we find a path to self-expression, where emotions take form and healing begins. Art therapy opens the door to emotions too deep for words, offering a safe place for both children and parents to explore their inner worlds.",
      date: "October 1, 2024",
    },
    {
      title: "Creating Connections Through Color",
      content: "Each color on the canvas tells a story, fostering deeper connections between parents and their children. In our nurturing space, we guide these connections through shared creativity, where paintbrushes become instruments of joy and understanding.",
      date: "September 24, 2024",
    },
    // Add more blog posts here
  ];

  return (
    <div className="blog-container">
      {blogPosts.map((post, index) => (
        <div className="blog-post" key={index}>
          <h2 className="blog-title">{post.title}</h2>
          <p className="blog-content">{post.content}</p>
          <p className="blog-date">{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
