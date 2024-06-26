"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

const Home = () => {
  //* new code
  // holding the array of numbers
  const [numbers, setNumbers] = useState([]);
  // keeping track of current index in the numbers array
  const [index, setIndex] = useState(0);
  // holding the currently displayed number
  const [num, setNum] = useState(null);

  // useEffect hook initializes numbers array with shuffled numbers from 1-80
  useEffect(() => { 
    // creating array from 1-80 and shuffling
    const shuffledNumbers = shuffleArray(Array.from({ length: 80 }, (_, i) => i + 1));
    setNumbers(shuffledNumbers);
    setNum(shuffledNumbers[0]); // setting initial number to first number in the shuffled array
  }, []);

  // shuffles array using fisher-yates algorithm
  const shuffleArray = (array) => { 
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  // handle button click
  const handleClick = () => {
    let newIndex = index + 1; // increment the index
    // if the index reaches the end of the array, it reshuffles and resets index
    if (newIndex >= numbers.length) {
      newIndex = 0;
      setNumbers(shuffleArray([...numbers])); // reshuffling the array
    }
    setIndex(newIndex); // updating the index state
    setNum(numbers[newIndex]); // updates the display number
  };


  //*! old code (random number generator)
  /**
   * const [num, setNum] = useState(0);

  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(generateNumber(1, 80));
  };
   */

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-600 to-slate-800">
      <motion.button
        onClick={handleClick}
        className="flex items-center justify-center font-bold text-white rounded-full w-80 h-80 bg-gradient-to-r from-green-600 to-emerald-600"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 1.4 }}
      >
        <div className="text-9xl">{num}</div>
      </motion.button>

      <div className="absolute text-sm text-white bottom-4 right-4">
        <Image
          src="/favicon.ico"
          alt="Luna"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute text-xs text-white bottom-4 left-4">Gwy &copy; 2024</div>
    </main>
  );
};

export default Home;
