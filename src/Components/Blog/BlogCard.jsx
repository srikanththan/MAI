import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <div className="blog-card__image">
        <img src={post.featuredImage} alt={post.title} />
      </div>
      <div className="blog-card__content">
        <div className="blog-card__meta">
          <span className="blog-card__date">
            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
          </span>
          <span className="blog-card__read-time">{post.readTime}</span>
        </div>
        <h3 className="blog-card__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <div className="blog-card__footer">
          <div className="blog-card__author">
            <img src={post.author.avatar} alt={post.author.name} />
            <span style={{ whiteSpace: 'nowrap' }}>By {post.author.name}</span>
          </div>
          <div className="blog-card__categories">
            {post.categories.map((category, index) => (
              <span key={index} className="blog-card__category">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;