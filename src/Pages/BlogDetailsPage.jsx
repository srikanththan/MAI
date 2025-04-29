import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { format } from 'date-fns';
import BreadCumb from '../Components/Common/BreadCumb';
import blogData from '../Data/blog.json';
import { MDXProvider } from '@mdx-js/react';
import '../assets/blog-details.css';

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogData.find(post => post.slug === slug);
  const [MDXContent, setMDXContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // This makes it instant without animation
    });
  }, [slug]);

  // Share functionality
  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post.title;
    let shareUrl;

    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        // You might want to show a toast notification here
        break;
      default:
        return;
    }

    if (platform !== 'copy') {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Custom components for MDX
  const components = {
    h1: (props) => <h1 className="blog-content__title" {...props} />,
    h2: (props) => <h2 className="blog-content__subtitle" {...props} />,
    p: (props) => <p className="blog-content__paragraph" {...props} />,
    img: (props) => {
      // Skip the image if it's the same as the featured image
      if (props.src === post?.featuredImage) {
        return null;
      }
      return <img className="blog-content__image" {...props} />;
    },
    ul: (props) => <ul className="blog-content__list" {...props} />,
    ol: (props) => <ol className="blog-content__list" {...props} />,
    li: (props) => <li className="blog-content__list-item" {...props} />,
  };

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

  // Handle article card click
  const handleArticleClick = (articleSlug) => {
    navigate(`/blog/${articleSlug}`);
    // Scroll to top when navigating to new article
    window.scrollTo(0, 0);
  };

  const handleViewMore = () => {
    // Navigate to blog page and ensure grid view is selected
    navigate('/blog', { state: { viewMode: 'grid' } });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-details-page">
      <BreadCumb title={post.title} />
      <div className="blog-details__container">
        {/* Main Content Card */}
        <div className="blog-details__content">
          {/* Share Button */}
          <div className="blog-share">
            <button className="blog-share__button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
            <div className="blog-share__dropdown">
              <button className="blog-share__item whatsapp" onClick={() => handleShare('whatsapp')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </button>
              <button className="blog-share__item twitter" onClick={() => handleShare('twitter')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span>Twitter</span>
              </button>
              <button className="blog-share__item facebook" onClick={() => handleShare('facebook')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </button>
              <button className="blog-share__item linkedin" onClick={() => handleShare('linkedin')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </button>
              <button className="blog-share__item email" onClick={() => handleShare('email')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Email</span>
              </button>
              <button className="blog-share__item copy" onClick={() => handleShare('copy')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
                <span>Copy Link</span>
              </button>
            </div>
          </div>

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

        {/* Related Articles Card */}
        <div className="blog-details__related-section">
          <div className="related-articles">
            <h2 className="related-articles__title">Related Articles</h2>
            <div className="related-articles__grid">
              {blogData
                .filter(article => 
                  article.slug !== post.slug && 
                  (
                    article.categories.some(cat => post.categories.includes(cat)) ||
                    article.tags.some(tag => post.tags.includes(tag))
                  )
                )
                .slice(0, 3)
                .map(article => (
                  <Link 
                    to={`/blog/${article.slug}`}
                    key={article.slug} 
                    className="related-article-card"
                  >
                    <div className="related-article-card__image">
                      <img src={article.featuredImage} alt={article.title} />
                    </div>
                    <div className="related-article-card__content">
                      <div className="related-article-card__meta">
                        <span className="related-article-card__category">
                          {article.categories[0]}
                        </span>
                        <span className="related-article-card__date">
                          {format(new Date(article.publishedAt), 'MMM d, yyyy')}
                        </span>
                      </div>
                      <h3 className="related-article-card__title">{article.title}</h3>
                      <p className="related-article-card__excerpt">{article.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="related-articles__footer">
              <button 
                className="view-more-button"
                onClick={handleViewMore}
              >
                View More Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
