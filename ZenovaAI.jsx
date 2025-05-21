import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ZenovaAI() {
  useEffect(() => {
    document.title = "Zenova AI - Your Smart IT Assistant";
  }, []);

  // Your specific iframe code
  const chatbotIframeSrc = "https://ainerd44-zenova-ai-public.hf.space";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start pt-24">
      {/* Welcome Section */}
      <section className="text-center px-6 mb-12"> {/* Added margin-bottom */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold tracking-tight" // Adjusted for larger screens
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
          {/* Removed the button that redirects, as the chatbot will now be embedded */}
          {/* If you still want a button to *open in a new tab*, you can keep it */}
          {/* <button
            className="mt-6 px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-500"
            onClick={() => window.open(chatbotIframeSrc, "_blank")}
          >
            Open Zenova AI in New Tab
          </button> */}
        </motion.div>
      </section>

      {/* --- Chatbot Embedding Section --- */}
      <section className="w-full max-w-4xl px-4 pb-12 flex justify-center"> {/* Centering the iframe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="w-full bg-gray-800 rounded-lg shadow-2xl overflow-hidden" // Added styles for the container
          style={{ aspectRatio: '16 / 9', maxWidth: '850px' }} // Maintain aspect ratio, max width
        >
          <iframe
            src={chatbotIframeSrc}
            frameBorder="0"
            width="100%"  // Makes it fill the container's width
            height="100%" // Makes it fill the container's height
            title="Zenova AI Public Chatbot"
            allow="microphone" // Add if your chatbot uses microphone input
          ></iframe>
        </motion.div>
      </section>

      {/* Optional: Footer or other content below the chatbot */}
      <footer className="w-full text-center py-6 text-gray-400 text-sm">
        <p>&copy; 2025 Zenova AI. Powered by Hugging Face.</p>
      </footer>
    </div>
  );
}
