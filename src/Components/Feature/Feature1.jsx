import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
    useEffect(() => {
        const boxes = document.querySelectorAll('.feature-provide-box-items');
        boxes.forEach((box, index) => {
            box.style.animationDelay = `${index * 0.2}s`;
        });
    }, []);

    return (
        <section className="feature-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="section-title text-center mb-60">
                            <SectionTitle
                                Title="Industries we transform with AI"
                            />
                            <p className="section-desc">We leverage cutting-edge AI technologies to revolutionize industries and create sustainable competitive advantages for our clients.</p>
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-xl-4 col-md-6">
                        <div className="feature-provide-box-items style-2 wow fadeInUp" data-wow-delay=".2s">
                            <div className="feature-card">
                                <div className="icon-wrapper">
                                    <img src="/assets/images/icon/wcuIcon1_1.svg" alt="Retail & E-commerce" />
                                </div>
                                <div className="content">
                                    <h3>Retail & e-commerce</h3>
                                    <p>Transform customer experiences with AI-powered chatbots, smart product recommendations</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div className="feature-provide-box-items wow fadeInUp" data-wow-delay=".4s">
                            <div className="feature-card">
                                <div className="icon-wrapper">
                                    <img src="/assets/images/icon/wcuIcon1_2.svg" alt="Education" />
                                </div>
                                <div className="content">
                                    <h3>Education</h3>
                                    <p>Revolutionize learning with AI-driven personalized tutoring systems and adaptive learning platforms.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div className="feature-provide-box-items style-2 wow fadeInUp" data-wow-delay=".6s">
                            <div className="feature-card">
                                <div className="icon-wrapper">
                                    <img src="/assets/images/icon/wcuIcon1_3.svg" alt="Smart Cities" />
                                </div>
                                <div className="content">
                                    <h3>Smart cities</h3>
                                    <p>Enhance urban living with AI-powered traffic management, waste management, and energy optimization systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div className="feature-provide-box-items wow fadeInUp" data-wow-delay=".8s">
                            <div className="feature-card">
                                <div className="icon-wrapper">
                                    <img src="/assets/images/icon/wcuIcon1_4.svg" alt="Manufacturing" />
                                </div>
                                <div className="content">
                                    <h3>Manufacturing</h3>
                                    <p>Optimize operations with AI-driven predictive maintenance, quality control, and supply chain optimization.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div className="feature-provide-box-items style-2 wow fadeInUp" data-wow-delay="1s">
                            <div className="feature-card">
                                <div className="icon-wrapper">
                                    <img src="/assets/images/icon/wcuIcon1_5.svg" alt="Agriculture" />
                                </div>
                                <div className="content">
                                    <h3>Agriculture</h3>
                                    <p>Maximize yields with AI-powered crop monitoring, precision farming, and smart resource management.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <div className="feature-provide-box-items wow fadeInUp" data-wow-delay="1.2s">
                            <div className="feature-card">
                                <div className="icon-wrapper">
                                    <img src="/assets/images/icon/wcuIcon1_6.svg" alt="Banking" />
                                </div>
                                <div className="content">
                                    <h3>Banking & finance</h3>
                                    <p>Enhance security and efficiency with AI-powered fraud detection, risk management, and automated reporting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature1;