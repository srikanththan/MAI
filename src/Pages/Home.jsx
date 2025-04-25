import About1 from "../Components/About/About1";
// import Blog1 from "../Components/Blog/Blog1";
import Brand1 from "../Components/Brand/Brand1";
import Choose1 from "../Components/Choose/Choose1";
import Choose5 from "../Components/Choose/Choose5";
// import Counter1 from "../Components/Counter/Counter1";
import Cta1 from "../Components/Cta/Cta1";
import Faq1 from "../Components/Faq/Faq1";
import Feature1 from "../Components/Feature/Feature1";
import Feature2 from "../Components/Feature/Feature2";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import HowWork from "../Components/HowWork/HowWork";
// import Pricing1 from "../Components/Pricing/Pricing1";
// import Testimonial from "../Components/Testimonial/Testimonial";
//import BasicGauges from './components/BasicGauges'
import ChatBotLocal2 from "../Components/ChatBotLocal/ChatBotLocal2";
// import AnimatedCursor from "react-animated-cursor"
// import CursorAnimation from "../Components/CursorAnimation/CursorAnimation";
// import MouseParticles from "react-mouse-particles";
// import { Analytics } from "@vercel/analytics/react"

const Home = () => {
    return (
        <div>
            <HeroBanner1
                subtitle="<span>News!</span>Find your solution"
                title="Every industry is being reshaped by AI. Are you leading or catching up?"
                content="The world is changing—fast. AI isn't a trend; it's the engine driving the next generation of businesses. Companies that don't adopt AI today risk getting left behind."
                btnname="Get started now"
                btnurl="/contact#get-started-section"
                btntwo="Learn more"
                btn2url="/about"
                cusimg="/assets/images/intro/introProfileThumb1_1.png"
                cusnumber="2,291"
                cuscontent="Happy customers"
                rating="4.8/5"
                ratingcon="Rating"
                img="/assets/images/intro/introThumb1_4.png"
            ></HeroBanner1>
            <Brand1></Brand1>
            <About1
                img1="/assets/images/about/ai_g1.png"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="About our app"
                title="At MetaNova AI, we don't just talk about AI—we build it. Our AI solutions"
                content="AI should work for you, not the other way around. Our solutions help you make sense of complex data, automate repetitive tasks, and grow your business with ease. Whether you're looking to streamline operations or uncover new opportunities, we build AI that actually makes a difference."
                FeatureList={[
                    "Turn raw data into powerful insights",
                    "Automate what slows you down",
                    "Help you scale smarter, faster, and more efficiently",
                ]}
                btnname="Discover more"
                btnurl="/about"
            ></About1>
            <HowWork></HowWork>
            <Choose1
                subtitle="App advantage"
                title="The problem:"
                content="Nobody likes waiting forever for a reply—slow support means annoyed customers and lost sales. Answering the same questions over and over? Total time-waster. No 24/7 help? That's money walking away. And if security's weak, trust goes out the window. It's time for a smarter way to handle things."
                FeatureList={[
                    "Slow customer support = frustrated customers & lost sales",
                    "Repetitive questions waste your team's time",
                ]}
                FeatureList2={[
                    "No 24/7 support means lost opportunities",
                    "No strong security",
                ]}
                btnname="Know more"
                btnurl="/Blog"
            ></Choose1>
            <br></br>
            <Choose5
                subtitle="App advantage"
                title="Our AI solution:"
                content="Why make customers wait when AI can reply instantly? Our smart chatbots handle FAQs, bookings, and DMs 24/7—no more wasted time. Whether it's WhatsApp, your website, or social media, we've got you covered. Oh, and we speak multiple languages too. Plus, top-tier security keeps everything locked down. Smarter support, happier customers."
                FeatureList={[
                    "Our AI chatbots respond instantly on WhatsApp, websites, and social media",
                    "Our AI assistants handle FAQs, bookings, and inquiries—all day, every day",
                ]}
                FeatureList2={[
                    "Our AI supports multiple languages, expanding your global reach",
                    "Strong security",
                ]}
                btnname="Request a demo"
                btnurl="/contact#get-started-section"
            ></Choose5>

            <Feature1></Feature1>
            {/* <Counter1></Counter1> */}
            
            <Faq1></Faq1>
            {/* <Testimonial></Testimonial> */}
            <Feature2></Feature2>
            {/* <Pricing1></Pricing1> */}
            <Cta1
                subtitle="Our app"
                title="The question isn't if—it's when. Be the business that leads, not the one that plays catch-up."
                content="Experience the power of AI in action—see how our AI solutions can transform your business. Request a personalized demo today and discover the future of efficiency, automation, and smart decision-making!"
                btnurl1="https://play.google.com/store"
                btnurl2="https://www.apple.com/store"
                img="/assets/images/cta/Screenshot from 2025-03-22 10-32-46(1).png"
            ></Cta1>
            {/* <Blog1></Blog1> */}
            <a 
                href="https://wa.me/919618089966"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-toggle-btn"
                style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '30px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                    zIndex: 998,
                    transition: 'all 0.3s ease'
                }}
            >
                <i className="bi bi-whatsapp" style={{ color: '#fff', fontSize: '24px' }}></i>
            </a>
            <ChatBotLocal2></ChatBotLocal2>
            {/* <AnimatedCursor></AnimatedCursor> */}
            {/* <CursorAnimation></CursorAnimation>
            <MouseParticles>
            <div>
            <MouseParticles g={1} color="random" cull="MuiSvgIcon-root" />
            </div>
            </MouseParticles> */}
            {/* <Analytics></Analytics> */}
        </div>
    );
};

export default Home;
