/* eslint-disable react-hooks/exhaustive-deps */
import { AnimatePresence, motion } from "framer-motion";
import useVH from "react-viewport-height";
import MusicPlayer from "../MusicPlay/MusicPlayer";
import { useState } from "react";
import { WorkState } from "./WORKSTATE";
import WorkList from "./WorkList";
import React, { useMemo } from "react";
import { MKBLogoSvg } from "../../Icon/Svg/MKBLogoSvg";
import Navigate from "../Navigate/Navigate";
import { useEffect } from "react";
import { useRef } from "react";
import { throttle } from "lodash";
import { isMobile } from "react-device-detect";
import ArrorNoBarSvg from "./../../Icon/Svg/ArrorNoBarSvg";

interface WorkProps {
  titlePath: string;
}

const Work: React.FunctionComponent<WorkProps> = ({ titlePath }) => {
  const vh = useVH();
  const [workState, setWorkState] = useState<WorkState>(WorkState.MUSICPLAY);
  const [modernDanceList, koreaDanceList, balletList, personalWorkList] = [
    JSON.parse(sessionStorage.getItem("moderndance") as string),
    JSON.parse(sessionStorage.getItem("koreadance") as string),
    JSON.parse(sessionStorage.getItem("ballet") as string),
    JSON.parse(sessionStorage.getItem("personalwork") as string),
  ];
  const [playIdx, setPlayIdx] = useState(0);
  const [isScreenTouched, setIsScreenTouched] = useState(false);
  const [playerPos, setPlayerPos] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const musicDataList = useMemo(() => {
    switch (titlePath) {
      case "MODERN DANCE":
        return modernDanceList;
      case "KOREA TRADITIONAL DANCE":
        return koreaDanceList;
      case "BALLET":
        return balletList;
      case "PERSONAL WORK":
        return personalWorkList;
      default:
        return [{ title: "", url: "", explain: "", thumbnail: "" }];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titlePath]);

  useEffect(() => {
    if (workState === WorkState.MUSICPLAY) {
      setPlayerPos(0);
    } else if (workState === WorkState.MUSICLIST) {
      setPlayerPos(90 * vh);
    }
  }, [workState]);

  useEffect(() => {
    if (localStorage.getItem("isScreenTouched")) {
      setIsScreenTouched(true);
    }
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        setWorkState(WorkState.MUSICLIST);
      } else {
        setWorkState(WorkState.MUSICPLAY);
      }
    };
    const throttleHandleScroll = throttle((e) => handleScroll(e), 200);

    document.addEventListener("wheel", throttleHandleScroll);
    return () => document.removeEventListener("wheel", throttleHandleScroll);
  }, []);

  useEffect(() => {
    let touchStart = 0;
    let touchMove = 0;
    let isFin = false;

    const handleTouchStart = (e: TouchEvent) => {
      isFin = false;
      e.preventDefault();
      touchStart = e.touches[0].pageY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (isFin) {
        return;
      }
      touchMove = e.touches[0].pageY - touchStart;
      setPlayerPos(e.touches[0].pageY - 3 * vh);
    };

    const handleTouchEnd = () => {
      isFin = true;
      if (touchMove > 50) {
        setWorkState(WorkState.MUSICLIST);
      } else if (touchMove < -50) {
        setWorkState(WorkState.MUSICPLAY);
      } else {
        setPlayerPos(workState === WorkState.MUSICPLAY ? 0 : 90 * vh);
      }
    };

    const throttleDrag = throttle((e: TouchEvent) => handleTouchMove(e), 100);

    const removeBounce = () => {
      setIsScreenTouched(true);
      localStorage.setItem("isScreenTouched", "true");
      document.removeEventListener("touchstart", removeBounce);
    };
    scrollRef.current?.addEventListener("touchstart", handleTouchStart);
    scrollRef.current?.addEventListener("touchmove", throttleDrag);
    scrollRef.current?.addEventListener("touchend", handleTouchEnd);
    if (!localStorage.getItem("isScreenTouched")) {
      document.addEventListener("touchstart", removeBounce);
    }
    return () => {
      scrollRef.current?.removeEventListener("touchstart", handleTouchStart);
      scrollRef.current?.removeEventListener("touchmove", throttleDrag);
      scrollRef.current?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [workState]);

  return (
    <div
      className="relative w-full"
      style={{
        height: `${100 * vh}px`,
      }}
    >
      <motion.div
        className="w-full fixed z-20 bg-[#D9D9D9] flex flex-col items-center rounded-[2em]"
        style={{
          height: 100 * vh,
        }}
        transition={
          isScreenTouched
            ? {}
            : {
                duration: 0.7,
                repeat: Infinity,
                ease: "easeOut",
                repeatType: "reverse",
              }
        }
        animate={
          isScreenTouched
            ? {
                y: playerPos,
                opacity: 1,
              }
            : {
                y: `${10 * vh}px`,
                opacity: 1,
              }
        }
      >
        <Navigate isLogoVisible={false} />
        {isMobile && (
          <div
            className="relative z-50 w-[6em] h-[4em] px-[1em] py-[1.9em] rounded-full"
            ref={scrollRef}
          >
            <div className="w-full h-full rounded-full bg-black"></div>
          </div>
        )}
        <div className="relative flex flex-col items-center top-[5%]">
          <MKBLogoSvg width="2.5em" height="2.5em" />
          <p className="mt-[2em] text-[0.8em] mb-[1em]">
            {titlePath +
              (workState === WorkState.MUSICLIST ? " MUSIC WORK" : "")}
          </p>
          <AnimatePresence>
            <motion.div
              key={"musicplay"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <MusicPlayer
                customPlayIdx={playIdx}
                musicList={musicDataList}
                setWorkState={setWorkState}
                musicType={titlePath}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <motion.div
        className="w-full relative z-10 bg-white flex flex-col items-center"
        style={{ height: 100 * vh }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {!isScreenTouched && (
          <div className="relative flex flex-col items-center">
            <ArrorNoBarSvg rotate={270} className="relative top-[10px]" />
            <ArrorNoBarSvg rotate={270} className="relative top-[-10px]" />
          </div>
        )}
        <div className="relative flex flex-col items-center top-[10%]">
          <MKBLogoSvg width="2.5em" height="2.5em" />
          <p className="mt-[2em] text-[0.8em] mb-[1em]">
            {titlePath +
              (workState === WorkState.MUSICLIST ? " MUSIC WORK" : "")}
          </p>
          <AnimatePresence>
            <motion.div
              key={"musicplay"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <WorkList
                musicList={musicDataList}
                setMusicState={setPlayIdx}
                setWorkState={setWorkState}
              ></WorkList>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
