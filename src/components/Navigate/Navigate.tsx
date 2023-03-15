import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerBarSvg from "./../../Icon/Svg/HamburgerBarSvg";
import { NavigateState } from "./NavigateState/NAVIGATESTATE";
import NavigateNone from "./NavigateState/NavigateNone";
import NavigateWork from "./NavigateState/NavigateWork";
import CloseSvg from "./../../Icon/Svg/CloseSvg";
import { MKBLogoSvg } from "./../../Icon/Svg/MKBLogoSvg";

interface NavigateProps {
  isLogoVisible?: boolean;
}

const Navigate: React.FunctionComponent<NavigateProps> = ({
  isLogoVisible = true,
}) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [navigateState, setNavigateState] = useState<NavigateState>(
    NavigateState.NONE
  );

  const renderNavigateState = () => {
    switch (navigateState) {
      case NavigateState.NONE:
        return <NavigateNone setNavigateState={setNavigateState} />;
      case NavigateState.WORK:
        return <NavigateWork setIsNavVisible={setIsNavVisible} />;
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={"header"}
        className="w-full fixed z-40 flex flex-row items-start justify-between p-8"
      >
        {isNavVisible && <div className="flex-grow"></div>}
        {!isNavVisible && (
          <>
            {isLogoVisible && (
              <MKBLogoSvg width="2em" height="2em" fill="black" />
            )}
            {!isLogoVisible && <div className="flex-grow"></div>}
            <HamburgerBarSvg
              className="cursor-pointer "
              fill="black"
              onClick={() => {
                setIsNavVisible(true);
                setNavigateState(NavigateState.NONE);
              }}
            />
          </>
        )}
        {isNavVisible && <CloseSvg onClick={() => setIsNavVisible(false)} />}
      </motion.div>
      {isNavVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"navigate"}
          className="absolute w-full h-full text-white z-30 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] py-[1em] flex flex-col items-center"
          style={{
            background: "black",

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative top-[12%] flex flex-col items-center">
            <MKBLogoSvg fill="white" />
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
