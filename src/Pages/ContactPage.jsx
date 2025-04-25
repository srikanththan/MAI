import BreadCumb from "../Components/Common/BreadCumb";
import ContactInfo from "../Components/ContactInfo/ContactInfo";

const ContactPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Support center"
            //content="Your AI-powered assistant is here to help! Whether you need troubleshooting guidance, software updates, or have general inquiries, we've got you covered with smart solutions."
            ></BreadCumb> 
            <ContactInfo></ContactInfo>            
        </div>
    );
};

export default ContactPage;