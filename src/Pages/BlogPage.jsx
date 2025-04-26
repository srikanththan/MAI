import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import BreadCumb from '../Components/Common/BreadCumb';
import Blog1 from '../Components/Blog/Blog1';
import Blog2 from '../Components/Blog/Blog2';
import blogData from '../Data/blog.json';
import '../assets/blog.css';

const BlogPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get unique categories from blog data
  const categories = ['all', ...new Set(blogData.flatMap(post => post.categories))];

  // Filter posts based on category
  const filteredPosts = blogData.filter(post => {
    if (selectedCategory === 'all') return true;
    return post.categories.includes(selectedCategory);
  });

  return (
    <div className="blog-page">
      <BreadCumb title="Blog" />
      <div className="blog-page__container">
        <div className="blog-page__sidebar">
          <div className="blog-page__view-toggle">
            <button 
              className={viewMode === 'grid' ? 'active' : ''}
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </button>
            <button 
              className={viewMode === 'list' ? 'active' : ''}
              onClick={() => setViewMode('list')}
            >
              List View
            </button>
          </div>
          <div className="blog-page__categories">
            <h3>Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={selectedCategory === category ? 'active' : ''}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="blog-page__content">
          {viewMode === 'grid' ? (
            <div className="blog-page__grid">
              {filteredPosts.map((post) => (
                <Blog1 key={post.id || post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="blog-page__list">
              {filteredPosts.map((post) => (
                <Blog2 key={post.id || post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;