import { FaShoppingCart, FaGraduationCap, FaCity, FaIndustry, FaTractor, FaUniversity } from "react-icons/fa";

const icons = {
  "Retail & E-Commerce": <FaShoppingCart size={40} />,
  "Education": <FaGraduationCap size={40} />,
  "Smart Cities & Urban Development": <FaCity size={40} />,
  "Manufacturing & Supply Chain": <FaIndustry size={40} />,
  "Agriculture & Farming": <FaTractor size={40} />,
  "Banking & Financial Services": <FaUniversity size={40} />
};

const FeatureCard = ({img, title, content}) => {
    return (
        <div className="feature-provide-box-items wow fadeInUp">
            <div className="feature-card">
                <div className="icon-wrapper">
                    <img src={img} alt={title} />
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
