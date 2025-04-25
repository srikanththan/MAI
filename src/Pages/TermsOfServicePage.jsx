import BreadCumb from "../Components/Common/BreadCumb";

const TermsOfServicePage = () => {
    return (
        <div>
            <BreadCumb
                Title="Terms of service"
                bgimg="/assets/images/bg/breadcumgBg.png"
            />
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-wrapper">
                                <h2 className="mb-4">Terms of service</h2>
                                <p className="mb-4">Last updated: March 22, 2025</p>

                                <h4 className="mb-3">1. Agreement to terms</h4>
                                <p className="mb-4">By accessing or using MetaNova AI's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.</p>

                                <h4 className="mb-3">2. Services description</h4>
                                <p className="mb-4">MetaNova AI provides artificial intelligence and machine learning solutions, including but not limited to:</p>
                                <ul className="mb-4">
                                    <li>AI-powered automation services</li>
                                    <li>Machine learning model development</li>
                                    <li>Data analytics and insights</li>
                                    <li>AI consulting and implementation</li>
                                </ul>

                                <h4 className="mb-3">3. User responsibilities</h4>
                                <p className="mb-4">As a user of our services, you agree to:</p>
                                <ul className="mb-4">
                                    <li>Provide accurate and complete information</li>
                                    <li>Maintain the security of your account</li>
                                    <li>Use services in compliance with applicable laws</li>
                                    <li>Not misuse or attempt to exploit our services</li>
                                </ul>

                                <h4 className="mb-3">4. Intellectual property</h4>
                                <p className="mb-4">MetaNova AI retains all rights to:</p>
                                <ul className="mb-4">
                                    <li>Our proprietary AI technologies</li>
                                    <li>Software and algorithms</li>
                                    <li>Documentation and training materials</li>
                                    <li>Branding and marketing content</li>
                                </ul>

                                <h4 className="mb-3">5. Service limitations</h4>
                                <p className="mb-4">Our services are subject to:</p>
                                <ul className="mb-4">
                                    <li>Available computing resources</li>
                                    <li>Technical limitations of AI models</li>
                                    <li>Data processing constraints</li>
                                    <li>Maintenance and update requirements</li>
                                </ul>

                                <h4 className="mb-3">6. Payment terms</h4>
                                <p className="mb-4">For paid services:</p>
                                <ul className="mb-4">
                                    <li>Payments are processed securely</li>
                                    <li>Subscriptions auto-renew unless cancelled</li>
                                    <li>Refunds are subject to our refund policy</li>
                                    <li>Prices may change with notice</li>
                                </ul>

                                <h4 className="mb-3">7. Termination</h4>
                                <p className="mb-4">We may terminate or suspend access to our services:</p>
                                <ul className="mb-4">
                                    <li>For violations of these terms</li>
                                    <li>For fraudulent or illegal activities</li>
                                    <li>To protect other users</li>
                                    <li>As required by law</li>
                                </ul>

                                <h4 className="mb-3">8. Contact information</h4>
                                <p className="mb-4">For questions about these Terms of Service, contact us at:</p>
                                <ul className="mb-4">
                                    <li>Email: support@metanovaai.com</li>
                                    <li>Phone: +919618089966</li>
                                    <li>Address: Banjara Hills, Hyderabad, 500001</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfServicePage;