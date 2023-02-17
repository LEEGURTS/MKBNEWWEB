import React from "react";
import { motion } from "framer-motion";
import BGSLIDE1 from "../../Icon/Image/Background/BGSLIDE1.jpg";
import useVH from "react-viewport-height";
import { MKBLogoSvg } from "./../../Icon/Svg/MKBLogoSvg";

const First: React.FunctionComponent = () => {
  const vh = useVH();
  const iconVariants = (x: number, y: number) => {
    return {
      out: {
        x: x,
        y: y,
        opacity: 0,
      },
      in: {
        x: 0,
        y: 0,
        opacity: 1,
      },
    };
  };
  const box = {
    out: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <motion.div
      key={"Index"}
      variants={box}
      initial="out"
      animate="in"
      exit={{ opacity: 0 }}
      transition={{
        ease: "easeInOut",
        delay: 0.3,
        delayChildren: 0.7,
        staggerChildren: 0.7,
      }}
      className="font-lexend-exa w-full "
      style={{
        background: `url(${BGSLIDE1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 100 * vh,
      }}
    >
      <motion.div className="p-8" variants={iconVariants(0, -100)}>
        <MKBLogoSvg width="2em" height="2em" />
      </motion.div>
      <motion.div className="absolute leading-[2em] flex flex-row items-center top-[50%] -translate-y-[50%] left-[5%]">
        <div className="ml-[1em]">
          <motion.p variants={iconVariants(0, -100)} className="text-[1.5em]">
            MKB DANCE
          </motion.p>
          <motion.p
            variants={iconVariants(0, 100)}
            className="text-[1.5em] font-bold"
          >
            MUSIC
          </motion.p>
        </div>
      </motion.div>
      <motion.div className="absolute left-[10%] bottom-[10%] text-[10px]">
        <motion.p variants={iconVariants(-100, 0)}>
          © MKB MUSIC 2022 All Rights Reserved.
        </motion.p>
        <motion.p variants={iconVariants(-100, 0)}>
          DO NOT COPY WITHOUT PERMISSION
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default First;
