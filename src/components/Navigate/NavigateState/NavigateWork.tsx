import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavigateWork: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute top-[50%] flex flex-col items-center"
    >
      <p className="absolute -top-[35%] text-[0.8em]">WORK</p>
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => navigate("/work/moderndance")}
      >
        MODERN DANCE
      </p>
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => navigate("/work/koreadance")}
      >
        KOREA
      </p>
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => navigate("/work/ballet")}
      >
        BALLET
      </p>
    </motion.div>
  );
};

export default NavigateWork;
