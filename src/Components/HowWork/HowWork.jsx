import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
    return (
        <section className="work-process-section section-padding fix">
            <div className="work-process-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-565 mx-auto">
                        <SectionTitle
                            SubTitle="How it work"
                            Title="AI-driven business transformation"
                        ></SectionTitle>
                    </div>
                    <div className="work-process-wrapper style1">
                        <div className="shape"><img src="/assets/images/shape/workProcessShape1_1.png" alt="shape" /></div>
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".2s">
                                    {/* <div className="step">STEP - 01</div> */}
                                    <div className="title">Efficiency & productivity gains</div>
                                    <div className="text">80% Time Savings: AI automation significantly reduces manual tasks.</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 child2 wow fadeInUp" data-wow-delay=".4s">
                                    {/* <div className="step">STEP - 02</div> */}
                                    <div className="title">Enhanced customer experience</div>
                                    <div className="text">Instant Support: AI chatbots cut response time from 24 hours to under 5 minutes.</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".6s">
                                    {/* <div className="step">STEP - 03</div> */}
                                    <div className="title">Cost & resource optimization</div>
                                    <div className="text">Industry-Specific Benefits: AI minimizes waste, improves diagnosis, and reduces downtime.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;