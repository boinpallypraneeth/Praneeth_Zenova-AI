import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function ZenovaAI() {
  const [showChatbot, setShowChatbot] = useState(false);
  const chatbotSectionRef = useRef(null);

  useEffect(() => {
    document.title = "Zenova AI - Your Smart IT Assistant";
    console.log("ZenovaAI component mounted."); // Added
  }, []);

  const chatbotIframeSrc = "https://ainerd44-zenova-ai-public.hf.space";

  const handleTryZenovaAIClick = () => {
    console.log("Button clicked! Setting showChatbot to true."); // Added
    setShowChatbot(true);
    setTimeout(() => {
      if (chatbotSectionRef.current) { // Added null check
        console.log("Scrolling to chatbot section."); // Added
        chatbotSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.log("Chatbot section ref is null. Not scrolling."); // Added
      }
    }, 100);
  };

  console.log("Current showChatbot state:", showChatbot); // Added (runs on every render)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start pt-24">
      <section className="text-center px-6 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          Meet <span className="text-blue-500">Zenova AI</span>
        </motion.h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Your advanced AI assistant for debugging, optimization, and IT solutions.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {!showChatbot && (
            <button
              className="mt-6 px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-300"
              onClick={handleTryZenovaAIClick}
            >
              Try Zenova AI
            </button>
          )}
          {showChatbot && (
              <p className="mt-6 text-blue-400">Zenova AI is active below!</p>
          )}
        </motion.div>
      </section>

      {showChatbot && (
        <section
          ref={chatbotSectionRef}
          className="w-full max-w-4xl px-4 pb-12 flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
            style={{ aspectRatio: '16 / 9', maxWidth: '850px' }}
          >
            <iframe
              src={chatbotIframeSrc}
              frameBorder="0"
              width="100%"
              height="100%"
              title="Zenova AI Public Chatbot"
              allow="microphone"
            ></iframe>
          </motion.div>
        </section>
      )}

      <footer className="w-full text-center py-6 text-gray-400 text-sm">
        <p>&copy; 2025 Zenova AI. Powered by Hugging Face.</p>
      </footer>
    </div>
  );
}
