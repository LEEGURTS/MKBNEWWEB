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
  const [playerPos, setPlayerPos] = useState(0);

  const musicDataList = useMemo(() => {
    switch (titlePath) {
      case "MODERN DANCE":
        return modernDanceList;
      case "KOREA DANCE":
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
        initial={{ opacity: 0 }}
        transition={{
          type: "spring",
          bounce: 0.25,
        }}
        animate={{
          opacity: 1,
          y: playerPos,
        }}
      >
        <Navigate isLogoVisible={false} />
        <div
          className="relative z-50 top-[3%] w-[4em] h-[8px] "
          onClick={() => {
            if (workState === WorkState.MUSICPLAY) {
              setWorkState(WorkState.MUSICLIST);
            } else {
              setWorkState(WorkState.MUSICPLAY);
            }
          }}
        >
          <div className="w-full h-full rounded-full bg-black"></div>
        </div>
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
