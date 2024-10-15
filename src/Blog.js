import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Healing Power of Art',
      excerpt: 'Discover how art therapy can transform lives and promote healing through creativity.',
      date: 'October 1, 2024',
    },
    {
      title: 'Art Therapy Techniques for Children',
      excerpt: 'Explore effective art therapy techniques that help children express their emotions and thoughts.',
      date: 'September 15, 2024',
    },
    {
      title: 'Building Confidence Through Art',
      excerpt: 'Learn how engaging in artistic activities can boost self-esteem in children.',
      date: 'September 5, 2024',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="blog-section">
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-card">
          <h3 className="blog-title">{post.title}</h3>
          <p className="blog-excerpt">{post.excerpt}</p>
          <span className="blog-date">{post.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Blog;
