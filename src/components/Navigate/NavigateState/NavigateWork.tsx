import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface NavigateWorkProps {
  setIsNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigateWork: React.FunctionComponent<NavigateWorkProps> = ({
  setIsNavVisible,
}) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute top-[40%] flex flex-col items-center"
    >
      <p
        className="my-[1em] cursor-pointer"
        onClick={() => {
          navigate("/work/moderndance");
          setIsNavVisible(false);
        }}
      >
        MODERN DANCE
      </p>
      <p
        className="my-[1em] cursor-pointer"
        onClick={() => {
          setIsNavVisible(false);
          navigate("/work/koreadance");
        }}
      >
        KOREA TRADITIONAL DANCE
      </p>
      <p
        className="my-[1em] cursor-pointer"
        onClick={() => {
          setIsNavVisible(false);
          navigate("/work/ballet");
        }}
      >
        BALLET
      </p>
    </motion.div>
  );
};

export default NavigateWork;
