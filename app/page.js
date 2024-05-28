"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

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
        className="w-80 h-80 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white font-bold flex items-center justify-center"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 1.4 }}
      >
        <div className="text-9xl">{num}</div>
      </motion.button>

      <div className="absolute bottom-4 right-4 text-white text-sm">
      <Image
          src="/favicon.ico"
          alt="Luna"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute bottom-4 left-4 text-white text-xs">Gwy &copy; 2024</div>
    </main>
  );
};

export default Home;
