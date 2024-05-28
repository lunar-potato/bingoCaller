"use client"
import { useState } from "react";

const Home = () => {
  const [num, setNum] = useState(0);

  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(generateNumber(1,80));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-slate-600 to-slate-800">
      <button 
      onClick={handleClick}
      className="w-80 h-80 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-lg text-white text-lg font-bold flex items-center justify-center">
        <div className="flex items-center justify-center text-9xl">
          {num}
        </div>
      </button>
    </main>
  );
};

export default Home;
