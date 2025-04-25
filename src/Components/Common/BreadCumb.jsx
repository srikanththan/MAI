import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import { Link, useLocation } from "react-router-dom";

const BreadCumb = ({ Title, bgimg }) => {
    const location = useLocation();
    const isBlogPage = location.pathname === '/blog';
    
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="breadcumb-section" data-page={isBlogPage ? 'blog' : ''}>
            <div className="breadcumb-container-wrapper" data-background={bgimg}>
                <div className="container">
                    <div className="shape1">
                        <img src="/assets/images/shape/breadCumbShape1_1.png" alt="shape" />
                    </div>
                    <div className="shape2">
                        <img src="/assets/images/shape/breadCumbShape1_2.png" alt="shape" />
                    </div>
                    <div className="breadcumb-wrapper">
                        <div className="page-heading">
                            <h1>{Title}</h1>
                            <div className="links">
                                {!isBlogPage && (
                                    <Link to="/">Home<span className="slash">/</span></Link>
                                )}
                                {Title}
                            </div>
                            {!isBlogPage && (
                                <p className="breadcrumb-desc">
                                    Your AI-powered assistant is here to help! Whether you need troubleshooting guidance, software updates, 
                                    or have general inquiries, we've got you covered with smart solutions.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreadCumb;
