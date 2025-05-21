import React, { useEffect, useState, useRef } from "react"; // Import useState and useRef
import { motion } from "framer-motion";

export default function ZenovaAI() {
  // State to control chatbot visibility
  const [showChatbot, setShowChatbot] = useState(false);
  // Ref to scroll to the chatbot section
  const chatbotSectionRef = useRef(null);

  useEffect(() => {
    document.title = "Zenova AI - Your Smart IT Assistant";
  }, []);

  // Your specific iframe code
  const chatbotIframeSrc = "https://ainerd44-zenova-ai-public.hf.space";

  // Function to handle button click
  const handleTryZenovaAIClick = () => {
    setShowChatbot(true); // Set state to true to show the chatbot
    // Optionally, scroll to the chatbot section after a slight delay
    // to allow it to render first
    setTimeout(() => {
      chatbotSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start pt-24">
      {/* Welcome Section */}
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
          {/* The button that will toggle the chatbot's visibility */}
          {!showChatbot && ( // Only show the button if the chatbot is not yet visible
            <button
              className="mt-6 px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-300"
              onClick={handleTryZenovaAIClick} // Call our new handler
            >
              Try Zenova AI
            </button>
          )}
          {showChatbot && ( // Show different text or a scroll button if chatbot is visible
              <p className="mt-6 text-blue-400">Zenova AI is active below!</p>
          )}
        </motion.div>
      </section>

      {/* --- Chatbot Embedding Section (Conditionally Rendered) --- */}
      {showChatbot && ( // <-- Only render this section if showChatbot is true
        <section
          ref={chatbotSectionRef} // Attach ref here for scrolling
          className="w-full max-w-4xl px-4 pb-12 flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }} // Shorter delay for appearance after click
            className="w-full bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
            style={{ aspectRatio: '16 / 9', maxWidth: '850px' }}
          >
            <iframe
              src={chatbotIframeSrc}
              frameBorder="0"
              width="100%"
              height="100%"
              title="Zenova AI Public Chatbot"
              allow="microphone" // Add if your chatbot uses microphone input
            ></iframe>
          </motion.div>
        </section>
      )}

      {/* Optional: Footer or other content below the chatbot */}
      <footer className="w-full text-center py-6 text-gray-400 text-sm">
        <p>&copy; 2025 Zenova AI. Powered by Hugging Face.</p>
      </footer>
    </div>
  );
}
