import { useRef, useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/faq1.json';

const Faq1 = () => {
    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);

    useEffect(() => {
        if (firstItemOpen) {
            setOpenItemIndex(0);
            setFirstItemOpen(false);
        }
    }, [firstItemOpen]);

    const handleItemClick = (index) => {
        setOpenItemIndex(openItemIndex === index ? -1 : index);
    };

    const FaqContent = {
        Content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly',
        img1: '/assets/images/faq/freepik__background__25455(1)(1).png'
    };

    return (
        <section className="faq-section section-padding fix">
            <div className="container">
                <div className="row gy-5 gx-60 align-items-start">
                    {/* FAQ Content */}
                    <div className="col-xl-6">
                        <div className="faq-content style1">
                            <SectionTitle SubTitle="FAQs" Title="Frequently asked questions" />
                            <p className="section-desc wow fadeInUp" data-wow-delay=".6s">{FaqContent.Content}</p>
                            <div className="faq-accordion">
                                <div className="accordion" id="accordion">
                                    {data.slice(0, 5).map((item, index) => (
                                        <div key={index} className={`accordion-item mb-3 wow fadeInUp ${index === openItemIndex ? "active" : ""}`} data-wow-delay=".3s">
                                            <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                                <button className="accordion-button collapsed" type="button">
                                                    {item.title}
                                                </button>
                                            </h5>
                                            <div ref={accordionContentRef} className={`accordion-collapse collapse ${index === openItemIndex ? "show" : ""}`}>
                                                <div className="accordion-body">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* FAQ Image */}
                    <div className="col-xl-6">
                        <div className="faq-thumb">
                            <img className="main-thumb wow fadeInUp" data-wow-delay=".2s" src={FaqContent.img1} alt="FAQ Thumbnail" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq1;
