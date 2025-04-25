import { useState } from "react";
import { FaRobot } from "react-icons/fa"; // Import chatbot icon

const responses = {
    "hello": "Hi there! Welcome to MetaNova AI. How can I assist you today?",
    "what is metanova ai": "MetaNova AI is a leading provider of AI-powered business solutions, including automation, data analytics, and custom AI software.",
    "what services do you offer": "We offer AI consulting, business intelligence, automation, custom AI solutions, AI audits, and integration services.",
    "do you provide ai consulting": "Yes! We help businesses find the best AI opportunities and create AI adoption roadmaps.",
    "how can ai improve my business": "AI can turn data into insights, automate processes, optimize operations, and help you scale efficiently.",
    "do you offer ai chatbots": "Yes! Our AI chatbots provide instant responses on WhatsApp, websites, and social media, improving customer support.",
    "how do ai chatbots help businesses": "Our chatbots handle FAQs, bookings, and inquiries 24/7, reducing response times and improving customer satisfaction.",
    "what industries do you work with": "We work with various industries, including retail, healthcare, education, manufacturing, finance, and more.",
    "can ai help with lead generation": "Absolutely! Our AI qualifies leads, automates follow-ups, and centralizes lead tracking to improve conversions.",
    "do you offer ai-powered marketing solutions": "Yes! Our AI generates high-converting content, personalizes campaigns, and optimizes ad performance in real-time.",
    "how can ai improve content creation": "Our AI can generate blogs, emails, ads, and other marketing content quickly and efficiently.",
    "do you offer ai for business intelligence": "Yes! Our AI finds trends, provides data-driven insights, and enables better decision-making.",
    "what is ai-powered automation": "AI-powered automation streamlines operations, reduces costs, and improves efficiency by handling repetitive tasks.",
    "do you develop custom ai solutions": "Yes! We build AI-powered software tailored to your specific business needs.",
    "how does ai help in e-commerce": "Our AI optimizes inventory, provides personalized product recommendations, and enhances customer experience.",
    "how does ai help in healthcare": "Our AI-powered scheduling, diagnostics, and medical data analysis improve patient care and operational efficiency.",
    "how does ai help in education": "We offer AI-driven personalized tutoring and adaptive learning experiences for students.",
    "can ai optimize supply chains": "Yes! Our AI predicts demand, reduces waste, and enhances efficiency in supply chain management.",
    "do you provide ai fraud detection for banking": "Yes! Our AI detects fraudulent activities, manages risks, and automates reporting.",
    "do you offer ai for urban development": "Yes! We provide AI-driven solutions for traffic management, energy optimization, and waste management.",
    "how can ai help in agriculture": "Our AI-powered solutions monitor crops, optimize farming operations, and improve yield prediction.",
    "do you provide ai-powered crm solutions": "Yes! Our AI-driven CRM automates customer interactions, lead scoring, and outreach.",
    "what is ai integration": "AI integration involves seamlessly connecting AI systems to your existing business operations.",
    "what is an ai audit": "An AI audit assesses your business readiness for AI, identifies opportunities, and provides a roadmap for implementation.",
    "how can i get a demo": "You can request a demo on our website to see our AI solutions in action!",
    "how much do your services cost": "Our pricing depends on your business needs. Contact us for a custom quote.",
    "default": "I'm sorry, I don't have an answer for that. Could you rephrase or ask something else?",

    // Industry-Specific Solutions
    "how does ai help in manufacturing": "Our AI solutions optimize production schedules, predict equipment maintenance, reduce downtime, and improve quality control through computer vision.",
    "what ai solutions do you offer for retail": "We provide AI for inventory optimization, customer behavior analysis, personalized recommendations, and automated visual merchandising.",
    "how can ai help small businesses": "Our AI solutions help small businesses automate customer service, optimize operations, analyze market trends, and compete more effectively.",
    "what ai solutions do you have for restaurants": "Our AI helps with inventory management, demand forecasting, staff scheduling, and automated order processing.",
    "how does ai help in real estate": "Our AI solutions assist with property valuation, market analysis, lead qualification, and automated customer interactions.",
    "what can ai do for logistics": "Our AI optimizes routing, predicts delivery times, manages warehouse operations, and automates fleet management.",
    "how does ai help in human resources": "Our AI streamlines recruitment, automates screening, personalizes employee training, and optimizes workforce planning.",

    // Technical Capabilities
    "what programming languages do you use": "We work with Python, JavaScript, Java, and other modern languages to build robust AI solutions tailored to your needs.",
    "do you use machine learning": "Yes, we implement various machine learning techniques including deep learning, NLP, and computer vision for complex problem-solving.",
    "what cloud platforms do you support": "We work with AWS, Google Cloud, Azure, and can deploy solutions on any cloud platform or on-premises.",
    "can you integrate with existing systems": "Yes, we specialize in seamless integration with existing software, databases, and business processes.",
    "how do you ensure ai security": "We implement encryption, access controls, audit trails, and follow industry best practices for AI security.",
    "what about data privacy": "We ensure GDPR, CCPA compliance and implement strict data protection measures in all our AI solutions.",
    "how do you handle big data": "We use distributed computing and optimized algorithms to process large datasets efficiently.",

    // Implementation & Support
    "how long does implementation take": "Implementation timelines vary from 2-12 weeks depending on project scope and complexity.",
    "do you provide training": "Yes, we offer comprehensive training and documentation to help your team make the most of our AI solutions.",
    "what kind of support do you offer": "We provide 24/7 technical support, regular updates, and ongoing optimization of our AI solutions.",
    "do you offer maintenance": "Yes, we provide continuous monitoring, updates, and improvements to ensure optimal AI performance.",
    "what is your development process": "We follow an agile methodology with regular client feedback and iterative improvements.",
    "how do you handle updates": "We provide regular updates and continuously optimize our AI models based on new data and feedback.",
    "what about system downtime": "Our solutions are designed for high availability with redundancy and failover mechanisms.",

    // ROI & Benefits
    "what roi can i expect": "ROI varies by solution but clients typically see 2-5x return through increased efficiency and revenue.",
    "how do you measure success": "We track KPIs like efficiency gains, cost savings, revenue increase, and customer satisfaction.",
    "what are the long term benefits": "Long-term benefits include improved efficiency, data-driven decisions, competitive advantage, and scalable operations.",
    "how quickly can i see results": "Many clients see initial results within the first month of implementation.",
    "what makes your ai different": "Our AI solutions are custom-built for your specific needs and integrate seamlessly with your existing systems.",
    "how do you handle scalability": "Our solutions are designed to scale efficiently as your business grows and needs evolve.",
    "what about future upgrades": "We continuously improve our AI models and provide regular updates to enhance performance.",

    // Industry-Specific Deep Dive
    "how does ai help in insurance": "Our AI automates claims processing, detects fraud, assesses risk, and provides personalized customer service.",
    "what about telecommunications": "We help optimize network performance, predict maintenance needs, and improve customer experience.",
    "how does ai help in energy sector": "Our AI optimizes energy distribution, predicts equipment maintenance, and improves grid efficiency.",
    "what about construction industry": "We provide AI for project planning, risk assessment, resource optimization, and safety monitoring.",
    "how does ai help in hospitality": "Our AI optimizes pricing, personalizes guest experiences, and automates booking management.",
    "what about automotive industry": "We offer AI for quality control, predictive maintenance, supply chain optimization, and autonomous systems.",
    "how does ai help in pharmaceuticals": "Our AI accelerates drug discovery, optimizes clinical trials, and improves manufacturing quality.",

    // Specific AI Applications
    "do you offer facial recognition": "Yes, we provide secure facial recognition solutions with privacy protection measures.",
    "what about voice recognition": "We offer advanced voice recognition and natural language processing solutions.",
    "do you provide recommendation engines": "Yes, we build personalized recommendation systems for products, content, and services.",
    "what about predictive analytics": "Our predictive analytics solutions help forecast trends, demand, and business outcomes.",
    "do you offer sentiment analysis": "Yes, we analyze customer sentiment across social media, reviews, and feedback channels.",
    "what about image recognition": "We provide computer vision solutions for object detection, classification, and quality control.",
    "do you offer text analysis": "Yes, we process and analyze text data for insights, classification, and automation.",

    // Implementation Phases
    "what is the first step": "We start with a thorough assessment of your needs and AI readiness evaluation.",
    "how do you gather requirements": "We conduct detailed workshops and interviews to understand your specific needs and goals.",
    "what about data preparation": "We help clean, organize, and prepare your data for AI implementation.",
    "how do you handle testing": "We conduct rigorous testing including A/B tests and performance validation.",
    "what is your deployment process": "We follow a systematic deployment process with minimal disruption to your operations.",
    "how do you ensure quality": "We implement comprehensive quality assurance processes throughout development.",
    "what about user acceptance": "We work closely with users to ensure the solution meets their needs and expectations.",

    // Technical Integration
    "can you integrate with salesforce": "Yes, we offer seamless integration with Salesforce and other CRM platforms.",
    "what about sap integration": "We provide custom AI integrations for SAP and other ERP systems.",
    "can you work with apis": "Yes, we can integrate with any API-enabled system or create custom APIs.",
    "what about legacy systems": "We have experience integrating AI with legacy systems while ensuring stability.",
    "do you support mobile platforms": "Yes, our solutions work across web, iOS, Android, and other mobile platforms.",
    "what about database integration": "We integrate with all major databases and can handle custom database solutions.",
    "can you handle real-time data": "Yes, our solutions process and analyze real-time data streams efficiently.",

    // AI Strategy
    "how do i start with ai": "We begin with an AI readiness assessment and develop a customized implementation roadmap.",
    "what is your ai strategy": "We focus on practical, results-driven AI solutions that deliver measurable business value.",
    "how do you ensure adoption": "We provide training, support, and change management to ensure successful adoption.",
    "what about ai governance": "We implement AI governance frameworks to ensure responsible and ethical AI use.",
    "how do you handle bias": "We actively work to identify and eliminate bias in AI models and decisions.",
    "what about transparency": "We provide explainable AI solutions with clear decision-making processes.",
    "how do you stay current": "We continuously research and implement the latest AI advancements and best practices.",

    // Customization & Flexibility
    "can you customize solutions": "Yes, we build fully customized AI solutions tailored to your specific needs.",
    "how flexible are your solutions": "Our solutions are highly flexible and can adapt to changing business needs.",
    "can you start small": "Yes, we can start with pilot projects and scale based on results.",
    "what about specific features": "We can implement any custom features needed for your business case.",
    "can you modify existing ai": "Yes, we can enhance and optimize your existing AI implementations.",
    "do you build from scratch": "We can build custom AI solutions from scratch or enhance existing systems.",
    "what about unique requirements": "We handle unique requirements and complex business logic in our solutions.",

    // Success Stories & Validation
    "can you share case studies": "Yes, we have numerous success stories across various industries. Contact us for details.",
    "what results have others seen": "Our clients typically see significant improvements in efficiency, revenue, and customer satisfaction.",
    "do you have testimonials": "Yes, we can share client testimonials and references upon request.",
    "who else uses your solutions": "We work with businesses of all sizes across various industries globally.",
    "what are common success metrics": "We track metrics like ROI, efficiency gains, cost savings, and customer satisfaction.",
    "how do you validate results": "We use comprehensive analytics to measure and validate solution performance.",
    "what about client feedback": "We maintain high client satisfaction through continuous feedback and improvements.",

    // Future & Innovation
    "what about future ai trends": "We continuously integrate emerging AI technologies and stay ahead of industry trends.",
    "how do you handle innovation": "We invest in R&D and regularly implement innovative AI solutions.",
    "what's next in ai": "We're exploring advanced applications in quantum computing, edge AI, and autonomous systems.",
    "how do you stay competitive": "We continuously enhance our solutions with the latest AI advancements.",
    "what about emerging tech": "We evaluate and integrate emerging technologies that provide business value.",
    "how do you future-proof": "Our solutions are designed to evolve with technology and business needs.",
    "what's your vision": "We aim to make AI accessible and valuable for businesses of all sizes.",

    // Cost & Pricing
    "how do you price solutions": "Pricing depends on solution scope, complexity, and implementation requirements.",
    "what payment models do you offer": "We offer flexible pricing including subscription, pay-per-use, and custom models.",
    "are there ongoing costs": "We're transparent about all costs including implementation, support, and maintenance.",
    "what about budget constraints": "We work with you to design solutions that fit your budget and deliver value.",
    "do you offer financing": "We can discuss flexible payment terms and financing options.",
    "what's included in pricing": "Our pricing includes implementation, training, support, and regular updates.",
    "are there hidden costs": "No hidden costs - we're completely transparent about all pricing components.",

    // Support & Maintenance
    "what support levels do you offer": "We provide tiered support levels from basic to 24/7 premium support.",
    "how do you handle issues": "We have a structured issue resolution process with guaranteed response times.",
    "what about emergency support": "We offer emergency support with rapid response for critical issues.",
    "do you provide updates": "Yes, we regularly update our solutions with improvements and new features.",
    "what about maintenance": "We provide proactive maintenance to ensure optimal system performance.",
    "how do you handle backups": "We implement robust backup and disaster recovery solutions.",
    "what about monitoring": "We provide continuous monitoring and proactive issue resolution.",

    // Getting Started
    "how do we get started": "Contact us for a free consultation to discuss your AI needs and potential solutions.",
    "what's the next step": "We can schedule a demo or discovery call to explore how we can help your business.",
    "can we see a demo": "Yes, we'd be happy to provide a personalized demo of our relevant solutions.",
    "what do you need from us": "We'll need to understand your business goals and current processes to start.",
    "how quick can we start": "We can begin the process immediately after our initial consultation.",
    "what should we prepare": "Having clear goals and relevant data ready helps accelerate the process.",
    "can we talk to someone": "Yes, you can speak with our AI experts to discuss your specific needs."
};

const ChatBotLocal = () => {
  const [messages, setMessages] = useState([{ text: "Hello! Ask me anything.", sender: "bot" }]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Controls chatbot visibility

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const botResponse = responses[input.toLowerCase()] || responses["default"];

    setMessages([...messages, userMessage, { text: botResponse, sender: "bot" }]);
    setInput("");
  };

  return (
    <div>
      {/* Chatbot Floating Button */}
      <button className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        <FaRobot size={30} />
      </button>

      {/* Chatbot Window (Only visible when isOpen is true) */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot">
            <div className="chat-header">
              <span>Chatbot</span>
              <button onClick={() => setIsOpen(false)}>✖</button>
            </div>
            <div className="chat-window">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>{msg.text}</div>
              ))}
            </div>
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Type a message..." 
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotLocal;
