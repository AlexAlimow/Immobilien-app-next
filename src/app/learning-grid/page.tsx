"use client";
import { motion } from "framer-motion";

export default function LearningGrid() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Grid</h2>
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-amber-300 col-span-3">1</div>
        <div className="bg-amber-300 col-span-4">2</div>
        <div className="bg-amber-300 ">3</div>
        <div className="bg-amber-300 col-start-4">4</div>
      </div>

      <h2>Flexible grids</h2>
      <p>It depens on width of viewport</p>

      <div className="bg-amber-600 w-40 min-[327px]:w-44 sm:w-70 md:w-120 lg:w-200 h-100">
        1
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div className="bg-amber-300 col-span-3">1</div>
        <div className="bg-amber-300 col-span-4">2</div>
        <div className="bg-amber-300 col-span-4 md:col-span-2">3</div>
        <div className="bg-amber-300 col-span-4 md:col-span-2">4</div>
      </div>
      <h2>Task</h2>
      <div className="grid grid-cols-4 lg:grid-cols-3 gap-2">
        <div className="bg-green-200 col-span-4 lg:col-span-1">1</div>
        <div className="bg-green-200 col-span-4 md:col-span-2 lg:col-span-1">
          2
        </div>
        <div className="bg-green-200 col-span-4 md:col-span-2 lg:col-span-1">
          3
        </div>
      </div>
    </motion.div>
  );
}

// Задание
// на широком экране lg - хочу - чтобы все три были на одной строке
// на md - хочу чтобы первый занимал всю строку,
// а 2 и 3 были вместе на следующей строке

// на всех величинах меньше md - хочу чтобы
// каждый элемент занимал всю свою строку

//   'sm': '640px',
//   // => @media (min-width: 640px) { ... }

//   'md': '768px',
//   // => @media (min-width: 768px) { ... }

//   'lg': '1024px',
//   // => @media (min-width: 1024px) { ... }

//   'xl': '1280px',
//   // => @media (min-width: 1280px) { ... }