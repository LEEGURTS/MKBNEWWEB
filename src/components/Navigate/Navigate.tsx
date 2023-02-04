import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerBarSvg from "./../../Icon/Svg/HamburgerBarSvg";
import { NavigateState } from "./NavigateState/NAVIGATESTATE";
import NavigateNone from "./NavigateState/NavigateNone";
import NavigateWork from "./NavigateState/NavigateWork";
import CloseSvg from "./../../Icon/Svg/CloseSvg";

const Navigate: React.FunctionComponent = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [navigateState, setNavigateState] = useState<NavigateState>(
    NavigateState.NONE
  );

  const renderNavigateState = () => {
    switch (navigateState) {
      case NavigateState.NONE:
        return <NavigateNone setNavigateState={setNavigateState} />;
      case NavigateState.WORK:
        return <NavigateWork />;
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={"header"}
        className="w-full fixed z-50 flex flex-row items-center justify-between p-8"
      >
        <p className={isNavVisible ? "text-white" : "text-black"}>M</p>
        {!isNavVisible && (
          <HamburgerBarSvg
            className="cursor-pointer "
            fill="black"
            onClick={() => {
              setIsNavVisible(true);
              setNavigateState(NavigateState.NONE);
            }}
          />
        )}
        {isNavVisible && <CloseSvg onClick={() => setIsNavVisible(false)} />}
      </motion.div>
      {isNavVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"navigate"}
          className="absolute w-full h-full text-white z-40 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] py-[1em] flex flex-col items-center"
          style={{
            background: "black",

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative top-[18%] flex flex-col items-center">
            <p className="text-[3em]">M</p>
            <p className="">MKB DANCE MUSIC</p>
            <p className="text-[0.55em]">MUSIC COMPANY</p>
          </div>
          {renderNavigateState()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigate;
