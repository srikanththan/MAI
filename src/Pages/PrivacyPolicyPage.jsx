import BreadCumb from "../Components/Common/BreadCumb";

const PrivacyPolicyPage = () => {
    return (
        <div>
            <BreadCumb
                Title="Privacy policy"
                bgimg="/assets/images/bg/breadcumgBg.png"
            />
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content-wrapper">
                                <h2 className="mb-4">Privacy policy</h2>
                                <p className="mb-4">Last updated: March 22, 2025</p>

                                <h4 className="mb-3">1. Information we collect</h4>
                                <p className="mb-4">At MetaNova AI, we collect and process information to provide and improve our AI services. This includes:</p>
                                <ul className="mb-4">
                                    <li>Information you provide directly to us</li>
                                    <li>Usage data and analytics</li>
                                    <li>Technical information about your devices and systems</li>
                                    <li>Customer service communications</li>
                                </ul>

                                <h4 className="mb-3">2. How we use your information</h4>
                                <p className="mb-4">We use the collected information to:</p>
                                <ul className="mb-4">
                                    <li>Provide and maintain our AI services</li>
                                    <li>Improve and personalize your experience</li>
                                    <li>Develop new features and services</li>
                                    <li>Ensure platform security and prevent fraud</li>
                                    <li>Communicate with you about our services</li>
                                </ul>

                                <h4 className="mb-3">3. Data security</h4>
                                <p className="mb-4">We implement industry-standard security measures to protect your data, including:</p>
                                <ul className="mb-4">
                                    <li>Encryption of data in transit and at rest</li>
                                    <li>Regular security assessments and audits</li>
                                    <li>Strict access controls and authentication</li>
                                    <li>Continuous monitoring and threat detection</li>
                                </ul>

                                <h4 className="mb-3">4. Data sharing and disclosure</h4>
                                <p className="mb-4">We may share your information with:</p>
                                <ul className="mb-4">
                                    <li>Service providers who assist in our operations</li>
                                    <li>Partners with your explicit consent</li>
                                    <li>Law enforcement when required by law</li>
                                </ul>

                                <h4 className="mb-3">5. Your rights</h4>
                                <p className="mb-4">You have the right to:</p>
                                <ul className="mb-4">
                                    <li>Access your personal data</li>
                                    <li>Request corrections or deletions</li>
                                    <li>Opt-out of marketing communications</li>
                                    <li>Data portability</li>
                                </ul>

                                <h4 className="mb-3">6. Contact us</h4>
                                <p className="mb-4">If you have questions about this Privacy Policy, please contact us at:</p>
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

export default PrivacyPolicyPage;