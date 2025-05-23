import React from "react";
import { Link } from "react-router-dom";
import { format } from 'date-fns';

const Blog1 = ({ post }) => {
    return (
        <div className="blog-card style1 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
            <div className="thumb">
                <img src={post.featuredImage} alt={post.title} />
            </div>
            <div className="body">
                <div className="tag-meta">
                    <img src="/assets/images/icon/FolderIcon.svg" alt="category" />
                    {post.categories[0]}
                </div>
                <h3>
                    <Link to={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>
                <div className="blog-meta">
                    <div className="item child1">
                        <span className="icon">
                            <img src="/assets/images/icon/userIcon.svg" alt="author" />
                        </span>
                        <span className="text">
                            By {post.author.name}
                        </span>
                    </div>
                    <div className="item">
                        <span className="icon">
                            <img src="/assets/images/icon/calendar.svg" alt="date" />
                        </span>
                        <span className="text">
                            {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                        </span>
                    </div>
                    <div className="item">
                        <span className="icon">
                            <img src="/assets/images/icon/clock.svg" alt="read time" />
                        </span>
                        <span className="text">
                            {post.readTime}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog1;