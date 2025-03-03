import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ZenovaAI() {
  useEffect(() => {
    document.title = "Zenova AI - Your Smart IT Assistant";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="text-center py-24 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl font-bold tracking-tight"
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
          <button 
            className="mt-6 px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-500"
            onClick={() => window.open("https://huggingface.co/spaces/AInerd44/Zenova_AI_Public", "_blank")}
          >
            Try Zenova AI
          </button>
        </motion.div>
      </section>
    </div>
  );
}
