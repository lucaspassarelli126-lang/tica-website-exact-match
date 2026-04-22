import { Search, Glasses } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function AnimatedSearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 relative z-40 -mt-24 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative"
      >
        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-accent/20 blur-2xl rounded-full transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-40'}`} />
        
        <div 
          className={`relative flex items-center bg-white/10 backdrop-blur-md border rounded-full p-1.5 transition-all duration-500 ${
            isFocused ? 'border-accent shadow-[0_0_20px_rgba(171,86,33,0.3)] ring-4 ring-accent/10' : 'border-white/20 shadow-xl'
          }`}
        >
          {/* Glasses Icon */}
          <div className="pl-6 pr-4">
            <Glasses className={`w-6 h-6 transition-colors duration-300 ${isFocused ? 'text-accent' : 'text-white/60'}`} />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="O que você está procurando?"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 font-sans text-base md:text-lg py-3 md:py-4"
          />

          {/* Search Button */}
          <button className="bg-white hover:bg-white/90 text-accent p-3 md:p-4 rounded-full transition-all duration-300 shadow-lg group">
            <Search className="w-5 h-5 md:w-6 md:h-6 transform group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
