import React from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import BreadCumb from '../Components/Common/BreadCumb';
import blogData from '../Data/blog.json';
import '../assets/blog-details.css';

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const post = blogData.find(post => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-details-page">
      <BreadCumb title={post.title} />
      
      <div className="blog-details__container">
        <div className="blog-details__content">
          <div className="blog-details__header">
            <div className="blog-details__meta">
              <div className="blog-details__category">
                <img src="/assets/images/icon/FolderIcon.svg" alt="category" />
                {post.categories[0]}
              </div>
              <div className="blog-details__date">
                <img src="/assets/images/icon/calendar.svg" alt="date" />
                {format(new Date(post.publishedAt), 'MMM d, yyyy')}
              </div>
              <div className="blog-details__read-time">
                <img src="/assets/images/icon/clock.svg" alt="read time" />
                {post.readTime}
              </div>
            </div>
            <h1 className="blog-details__title">{post.title}</h1>
          </div>

          <div className="blog-details__image">
            <img src={post.featuredImage} alt={post.title} />
          </div>

          <div className="blog-details__body">
            <p className="blog-details__excerpt">{post.excerpt}</p>
            <div className="blog-details__content">
              {post.content}
            </div>
          </div>

          <div className="blog-details__footer">
            <div className="blog-details__tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="blog-details__tag">#{tag}</span>
              ))}
            </div>
            <div className="blog-details__author">
              <img src={post.author.avatar} alt={post.author.name} />
              <div className="blog-details__author-info">
                <h4>{post.author.name}</h4>
                <p>{post.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage; 