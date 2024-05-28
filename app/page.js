"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [num, setNum] = useState(0);

  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(generateNumber(1, 80));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-slate-600 to-slate-800">
      <motion.button
        onClick={handleClick}
        className="w-80 h-80 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-full text-white font-bold flex items-center justify-center"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 1.4 }}
      >
        <div className="text-9xl">{num}</div>
      </motion.button>
    </main>
  );
};

export default Home;
