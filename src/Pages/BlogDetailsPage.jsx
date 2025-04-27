import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import BreadCumb from '../Components/Common/BreadCumb';
import blogData from '../Data/blog.json';
import { MDXProvider } from '@mdx-js/react';
import '../assets/blog-details.css';

// Custom components for MDX
const components = {
  h1: (props) => <h1 className="blog-content__title" {...props} />,
  h2: (props) => <h2 className="blog-content__subtitle" {...props} />,
  p: (props) => <p className="blog-content__paragraph" {...props} />,
  img: (props) => <img className="blog-content__image" {...props} />,
  ul: (props) => <ul className="blog-content__list" {...props} />,
  ol: (props) => <ol className="blog-content__list" {...props} />,
  li: (props) => <li className="blog-content__list-item" {...props} />,
};

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const post = blogData.find(post => post.slug === slug);
  const [MDXContent, setMDXContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMDX() {
      try {
        // Dynamic import of the MDX file by slug
        const mdxModule = await import(`../content/blog/${slug}.mdx`);
        
        // Create a wrapper component that only renders the content
        const ContentWrapper = () => {
          const { default: MDXComponent } = mdxModule;
          return (
            <div className="blog-content">
              <MDXComponent components={components} />
            </div>
          );
        };
        
        setMDXContent(() => ContentWrapper);
      } catch (err) {
        console.error('Error loading MDX content:', err);
        setError(err.message);
        setMDXContent(null);
      } finally {
        setLoading(false);
      }
    }
    loadMDX();
  }, [slug]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-details-page">
      <BreadCumb title={post.title} />
      <div className="blog-details__container">
        <div className="blog-details__content">
          <div className="blog-details__header">
            <h1 className="blog-details__title">{post.title}</h1>
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
          </div>
          <div className="blog-details__image">
            <img src={post.featuredImage} alt={post.title} />
          </div>
          <div className="blog-details__body">
            {loading ? (
              <div className="loading-message">Loading content...</div>
            ) : error ? (
              <div className="error-message">
                <h3>Error Loading Content</h3>
                <p>Could not load the blog content. Please try again later.</p>
                <p>Error details: {error}</p>
              </div>
            ) : MDXContent ? (
              <MDXProvider components={components}>
                <MDXContent />
              </MDXProvider>
            ) : (
              <div className="blog-content">
                <p>{post.excerpt}</p>
              </div>
            )}
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