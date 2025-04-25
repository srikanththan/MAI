import About4 from "../Components/About/About4";
import Choose2 from "../Components/Choose/Choose2";
//import Choose4 from "../Components/Choose/Choose4";
import BreadCumb from "../Components/Common/BreadCumb";
import HowWork from "../Components/HowWork/HowWork";
// import Testimonial4 from "../Components/Testimonial/Testimonial4";

const AboutPage = () => {
    return (
        <div>
            <BreadCumb
                Title="About MetaNova AI"
            ></BreadCumb>
            <About4
                img1="/assets/images/about/Gemini_Generated_Image_bmhvbubmhvbubmhv(1).png"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="Redefining tomorrow, today"
                title="AI solutions that drive real business impact"
                content="At MetaNova AI, we turn raw data into powerful insights, automate processes, and help businesses scale smarter. AI is no longer a luxury; it's a necessity."
                FeatureList={[
                    "AI-powered business intelligence & automation",
                    "Custom AI solutions tailored to your industry",
                    "Seamless AI integration & strategy roadmapping",
                ]}                
                btnname="Discover our AI solutions"
                btnurl="/solutions"
            ></About4> 
            <Choose2
               img1="/assets/images/wcu/Gemini_Generated_Image_hdrzmthdrzmthdrz.png" 
               img2="/assets/images/wcu/wcuThumb2_2.png" 
               img3="/assets/images/wcu/wcuThumb2_3.png" 
               subtitle="Smart AI-powered insights" 
               title="Unlock the full potential of AI for your business" 
               content="From AI-driven sales automation to predictive analytics, our solutions help businesses stay ahead of the competition and optimize operations effortlessly." 
               boximg1="/assets/images/icon/wcuIcon2_1.svg" 
               boxtitle1="AI-driven automation" 
               boxcontent1="Eliminate manual processes, reduce costs, and increase efficiency with AI-powered automation." 
               boximg2="/assets/images/icon/wcuIcon2_2.svg" 
               boxtitle2="Data-driven decision making" 
               boxcontent2="Our AI-powered analytics provide actionable insights, helping businesses make informed strategic decisions." 
            ></Choose2>
            <HowWork></HowWork>  
            {/* <Choose4></Choose4>  */}
            {/* <Testimonial4></Testimonial4>                     */}
        </div>
    );
};

export default AboutPage;
