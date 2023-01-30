import React from "react";
import { motion } from "framer-motion";

const NavigateWork: React.FunctionComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative top-[35%] flex flex-col items-center"
    >
      <p className="absolute -top-[50%] text-[0.8em]">WORK</p>
      <p className="my-[0.75em] cursor-pointer" onClick={() => {}}>
        MODERN DANCE
      </p>
      <p className="my-[0.75em] cursor-pointer" onClick={() => {}}>
        KOREA
      </p>
      <p className="my-[0.75em] cursor-pointer" onClick={() => {}}>
        BALLET
      </p>
    </motion.div>
  );
};

export default NavigateWork;
