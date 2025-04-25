import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, ArrowDown } from 'lucide-react';

const ChatBotLocal2 = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! I\'m MetaNova AI\'s virtual assistant. How can I help you today?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Company information based on the document
  const companyInfo = {
    services: [
      "AI Consulting & Strategy",
      "Business Intelligence & Data Analytics",
      "AI-Powered Automation",
      "Custom AI Solutions",
      "AI Audits & Integration Services"
    ],
    solutions: [
      "AI Chatbots & Virtual Assistants",
      "AI-Driven Sales & Lead Automation",
      "AI-Powered Marketing & Content Generation",
      "AI for Business Intelligence & Data Analytics",
      "Custom AI Software Development"
    ],
    industries: [
      "Retail & E-Commerce",
      "Healthcare",
      "Education",
      "Smart Cities & Urban Development",
      "Manufacturing & Supply Chain",
      "Agriculture & Farming",
      "Banking & Financial Services",
      "IT Services & Software Firms"
    ]
  };

  // Comprehensive Q&A database
  const qaDatabase = {
    general: {
      greetings: {
        patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
        response: "Hello! How can I help you learn more about MetaNova AI's solutions?"
      },
      goodbye: {
        patterns: ['bye', 'goodbye', 'see you', 'farewell'],
        response: "Thank you for chatting with us! If you need anything else, don't hesitate to reach out."
      },
      thanks: {
        patterns: ['thank', 'thanks', 'appreciate'],
        response: "You're welcome! If you have any other questions about MetaNova AI, feel free to ask. We're here to help transform your business with AI."
      }
    },
    services: {
      general: {
        patterns: ['services', 'what you do', 'offerings', 'solutions'],
        response: `MetaNova AI offers several services including: ${companyInfo.services.join(", ")}. What specific service would you like to know more about?`
      },
      consulting: {
        patterns: ['consulting', 'strategy', 'advisor', 'guidance'],
        response: "Our AI consulting services help businesses identify opportunities for AI implementation, develop comprehensive AI strategies, and create roadmaps for digital transformation. We assess your current capabilities and provide expert guidance on leveraging AI effectively."
      },
      automation: {
        patterns: ['automation', 'automate', 'workflow', 'process'],
        response: "Our AI-powered automation solutions streamline your business processes, reduce manual work, and increase operational efficiency. We can automate everything from document processing to complex business workflows."
      }
    },
    industries: {
      general: {
        patterns: ['industries', 'sectors', 'markets'],
        response: `We work with various industries including: ${companyInfo.industries.join(", ")}. Which industry are you interested in?`
      },
      retail: {
        patterns: ['retail', 'ecommerce', 'shop', 'store'],
        response: "For retail and e-commerce, we offer AI solutions for inventory management, demand forecasting, personalized recommendations, and customer service automation. Our solutions help increase sales and improve customer satisfaction."
      },
      healthcare: {
        patterns: ['health', 'medical', 'hospital', 'clinic'],
        response: "In healthcare, we provide AI solutions for patient care optimization, medical image analysis, predictive diagnostics, and healthcare operations management. Our solutions help improve patient outcomes while reducing costs."
      },
      finance: {
        patterns: ['banking', 'finance', 'financial', 'bank'],
        response: "For the financial sector, we offer AI solutions for risk assessment, fraud detection, algorithmic trading, and personalized banking experiences. Our solutions help institutions make better decisions and improve customer service."
      }
    },
    products: {
      chatbots: {
        patterns: ['chatbot', 'assistant', 'chat', 'bot'],
        response: "Our AI chatbots respond instantly on WhatsApp, websites, and social media. They handle FAQs, bookings, and inquiries 24/7, and support multiple languages to expand your global reach. Would you like to schedule a demo?"
      },
      sales: {
        patterns: ['sales', 'lead', 'conversion', 'crm'],
        response: "Our AI-Driven Sales & Lead Automation qualifies leads instantly, automates follow-ups at the right time, and centralizes lead tracking. This helps boost conversions and ensures no opportunities slip through the cracks."
      },
      marketing: {
        patterns: ['marketing', 'content', 'campaign', 'advertisement'],
        response: "Our AI-Powered Marketing & Content Generation creates high-converting content including blogs, emails, and ads. It personalizes campaigns and analyzes real-time data to optimize performance automatically."
      },
      analytics: {
        patterns: ['data', 'analytics', 'intelligence', 'insights', 'reporting'],
        response: "Our AI for Business Intelligence & Data Analytics helps clean and structure your data, eliminate silos, find trends before they happen, and provide powerful forecasting capabilities."
      }
    },
    business: {
      pricing: {
        patterns: ['price', 'cost', 'pricing', 'quote', 'investment'],
        response: "Our pricing varies based on your specific needs and the solutions you're interested in. I'd be happy to connect you with our team for a personalized quote. Would you like to schedule a consultation?"
      },
      demo: {
        patterns: ['demo', 'demonstration', 'show', 'preview'],
        response: "I'd be happy to arrange a demo for you! Please provide your email or phone number, and our team will contact you shortly to schedule a time that works for you."
      },
      contact: {
        patterns: ['contact', 'reach', 'connect', 'talk'],
        response: "You can request a free consultation through our website. Would you like me to help you schedule one now?"
      },
      implementation: {
        patterns: ['implement', 'integrate', 'setup', 'install'],
        response: "Our implementation process is smooth and efficient. We handle everything from initial setup to integration with your existing systems, along with comprehensive training for your team."
      }
    },
    technical: {
      aiCapabilities: {
        patterns: ['ai capabilities', 'machine learning', 'deep learning', 'neural networks', 'ml models'],
        response: "Our AI capabilities include deep learning, natural language processing, computer vision, predictive analytics, and reinforcement learning. We use state-of-the-art models and algorithms tailored to your specific needs."
      },
      dataRequirements: {
        patterns: ['data requirements', 'how much data', 'data needed', 'dataset size'],
        response: "Data requirements vary by project. We can work with both small and large datasets, and even help you collect and label data if needed. We also offer synthetic data generation for cases with limited data availability."
      },
      security: {
        patterns: ['security', 'data protection', 'privacy', 'encryption', 'gdpr', 'compliance'],
        response: "We prioritize data security with enterprise-grade encryption, GDPR compliance, and strict data handling protocols. Our solutions include regular security audits, access controls, and secure data storage."
      },
      integration: {
        patterns: ['integration', 'api', 'existing systems', 'compatibility'],
        response: "Our solutions integrate seamlessly with your existing systems through RESTful APIs, webhooks, or custom integrations. We support major platforms and can develop custom connectors as needed."
      }
    },
    
    industrySpecific: {
      manufacturing: {
        patterns: ['manufacturing', 'factory', 'production', 'industrial'],
        response: "For manufacturing, we offer AI solutions for predictive maintenance, quality control, supply chain optimization, and production planning. Our systems can reduce downtime, improve quality, and increase efficiency."
      },
      agriculture: {
        patterns: ['agriculture', 'farming', 'crop', 'livestock'],
        response: "In agriculture, we provide AI solutions for crop yield prediction, disease detection, precision farming, and resource optimization. Our systems help maximize yields while minimizing resource usage."
      },
      education: {
        patterns: ['education', 'learning', 'teaching', 'school', 'university'],
        response: "For education, we offer AI solutions for personalized learning, automated grading, student performance analytics, and content recommendation systems. We help institutions deliver better learning outcomes."
      }
    },
    
    solutions: {
      predictiveAnalytics: {
        patterns: ['predict', 'forecast', 'future trends', 'predictive analytics'],
        response: "Our predictive analytics solutions use advanced AI algorithms to forecast trends, demand, maintenance needs, and business outcomes. We help you make data-driven decisions with confidence."
      },
      nlp: {
        patterns: ['natural language', 'nlp', 'text analysis', 'language processing'],
        response: "Our NLP solutions include sentiment analysis, text classification, document processing, and multilingual support. We help you extract insights from text data and automate communication."
      },
      computerVision: {
        patterns: ['computer vision', 'image recognition', 'object detection', 'visual inspection'],
        response: "Our computer vision solutions include object detection, facial recognition, quality inspection, and video analytics. We help you automate visual tasks and extract insights from images and videos."
      },
      optimization: {
        patterns: ['optimize', 'efficiency', 'performance improvement', 'resource allocation'],
        response: "Our optimization solutions use AI to improve resource allocation, scheduling, routing, and process efficiency. We help you reduce costs and maximize performance."
      }
    },

    support: {
      training: {
        patterns: ['training', 'learn system', 'how to use', 'documentation'],
        response: "We provide comprehensive training programs, documentation, and ongoing support to ensure your team can effectively use our AI solutions. Would you like to learn more about our training options?"
      },
      maintenance: {
        patterns: ['maintenance', 'updates', 'upgrades', 'support plan'],
        response: "Our maintenance plans include regular updates, performance monitoring, system optimization, and technical support. We ensure your AI solutions continue to perform optimally."
      },
      customization: {
        patterns: ['customize', 'modify', 'adapt', 'change'],
        response: "We can customize any of our solutions to meet your specific needs. Our team works closely with you to understand your requirements and adapt our systems accordingly."
      },
      troubleshooting: {
        patterns: ['problem', 'issue', 'not working', 'error', 'help'],
        response: "Our support team is available to help resolve any issues you encounter. We provide rapid response times and comprehensive troubleshooting assistance."
      }
    },

    expertise: {
      team: {
        patterns: ['team expertise', 'developers', 'experts', 'experience'],
        response: "Our team includes AI researchers, data scientists, machine learning engineers, and domain experts with years of experience in implementing AI solutions across various industries."
      },
      methodology: {
        patterns: ['methodology', 'approach', 'process', 'how you work'],
        response: "We follow an agile methodology with regular client communication, iterative development, and continuous improvement. Our process ensures transparency and optimal results."
      },
      success: {
        patterns: ['success stories', 'case studies', 'examples', 'results'],
        response: "We've successfully implemented AI solutions across numerous industries, achieving significant ROI for our clients. Would you like to hear about specific case studies in your industry?"
      },
      partnership: {
        patterns: ['partnership', 'collaboration', 'work together', 'relationship'],
        response: "We view our clients as long-term partners and work closely with them to ensure successful implementation and ongoing optimization of their AI solutions."
      }
    },

    implementation: {
      timeline: {
        patterns: ['timeline', 'how long', 'duration', 'time frame'],
        response: "Implementation timelines vary based on project scope, typically ranging from 2-12 weeks. We can provide a detailed timeline after understanding your specific requirements."
      },
      requirements: {
        patterns: ['requirements', 'what do i need', 'prerequisites', 'get started'],
        response: "To get started, we'll need to understand your current systems, data availability, and business objectives. We can help assess your readiness and provide recommendations for implementation."
      },
      phases: {
        patterns: ['phases', 'steps', 'stages', 'process'],
        response: "Our implementation process includes: 1) Requirements gathering, 2) Solution design, 3) Development & testing, 4) Deployment, 5) Training & handover, and 6) Ongoing support & optimization."
      },
      roi: {
        patterns: ['roi', 'return on investment', 'benefits', 'value'],
        response: "Our clients typically see ROI through increased efficiency, reduced costs, improved accuracy, and new revenue opportunities. We can help calculate potential ROI for your specific use case."
      }
    }
  };

  // Scroll to bottom of chat when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const findBestMatch = (input) => {
    const inputLower = input.toLowerCase();
    let bestMatch = {
      response: "I'm here to help you learn more about how MetaNova AI can transform your business. You can ask about our services, industry solutions, or request a demo. What would you like to know?",
      score: 0
    };

    // Search through all categories and their patterns
    for (const category of Object.values(qaDatabase)) {
      for (const [_, qa] of Object.entries(category)) {
        const matchScore = qa.patterns.reduce((score, pattern) => {
          if (inputLower.includes(pattern)) {
            // Increase score based on pattern length (longer matches are better)
            return score + pattern.length;
          }
          return score;
        }, 0);

        if (matchScore > bestMatch.score) {
          bestMatch = {
            response: qa.response,
            score: matchScore
          };
        }
      }
    }

    return bestMatch.response;
  };

  const processUserInput = (input) => {
    return findBestMatch(input);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (userInput.trim() === '') return;
    
    // Add user message
    const newUserMessage = { role: 'user', content: userInput };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setUserInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate response delay
    setTimeout(() => {
      const botResponse = processUserInput(newUserMessage.content);
      setMessages(prevMessages => [...prevMessages, { role: 'bot', content: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <div className="chatbot-container" style={{ zIndex: 999 }}>
      {/* Chat toggle button */}
      <button 
        onClick={toggleChat}
        className="chatbot-toggle-btn"
      >
        {isChatOpen ? (
          <ArrowDown size={24} className="chatbot-icon" />
        ) : (
          <Bot size={24} className="chatbot-icon" />
        )}
      </button>
      
      {/* Chat window */}
      {isChatOpen && (
        <div className="chatbot-window">
          {/* Chat header */}
          <div className="chatbot-header">
            <div className="chatbot-header-title">
              <Bot className="chatbot-header-icon" size={20} />
              <h3>MetaNova AI Assistant</h3>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`chatbot-message ${message.role === 'user' ? 'chatbot-message-user' : 'chatbot-message-bot'}`}
              >
                <div className={`chatbot-message-bubble ${message.role === 'user' ? 'chatbot-message-bubble-user' : 'chatbot-message-bubble-bot'}`}>
                  {message.role === 'bot' && <Bot size={16} className="chatbot-message-icon" />}
                  <p>{message.content}</p>
                  {message.role === 'user' && <User size={16} className="chatbot-message-icon-user" />}
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="chatbot-message chatbot-message-bot">
                <div className="chatbot-message-bubble chatbot-message-bubble-bot">
                  <Bot size={16} className="chatbot-message-icon" />
                  <div className="chatbot-typing-indicator">
                    <span className="chatbot-typing-dot"></span>
                    <span className="chatbot-typing-dot"></span>
                    <span className="chatbot-typing-dot"></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="chatbot-input-container">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              ref={inputRef}
              className="chatbot-input"
            />
            <button 
              type="submit"
              className="chatbot-send-btn"
            >
              <Send size={18} className="chatbot-send-icon" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBotLocal2;