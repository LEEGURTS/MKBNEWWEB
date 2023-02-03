import { AnimatePresence, motion } from "framer-motion";
import useVH from "react-viewport-height";
import MusicPlayer from "../MusicPlay/MusicPlayer";
import { useState } from "react";
import { WorkState } from "./WORKSTATE";
import WorkExplain from "./WorkExplain";
import WorkList from "./WorkList";
import ReturnSvg from "./../../Icon/Svg/ReturnSvg";
import React from "react";
interface WorkProps {
  titlePath: string;
}

const Work: React.FunctionComponent<WorkProps> = ({ titlePath }) => {
  const vh = useVH();
  const [workState, setWorkState] = useState<WorkState>(WorkState.MUSICPLAY);
  const [musicState, setMusicState] = useState<{
    thumbnail: string;
    url: string;
  }>({ thumbnail: "", url: "" });

  return (
    <motion.div
      className="w-screen bg-[#D9D9D9] flex flex-col items-center"
      style={{ height: 100 * vh }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {workState === WorkState.MUSICLIST && (
        <ReturnSvg
          className="absolute top-[1em] right-[1em]"
          onClick={() => setWorkState(WorkState.MUSICPLAY)}
        />
      )}
      <div className="relative flex flex-col items-center top-[10%]">
        <p className="text-[2.5em]">M</p>
        <p className="mt-[2em] text-[0.8em] mb-[1em]">
          {titlePath + (workState === WorkState.MUSICLIST ? " MUSIC WORK" : "")}
        </p>
        <AnimatePresence>
          {workState === WorkState.MUSICLIST && (
            <motion.div
              key={"musiclist"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <WorkList
                setWorkState={setWorkState}
                setMusicState={setMusicState}
              />
            </motion.div>
          )}
          {workState === WorkState.MUSICPLAY && (
            <motion.div
              key={"musicplay"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <MusicPlayer
                url={musicState.url}
                thumbnail={musicState.thumbnail}
                setWorkState={setWorkState}
              />
            </motion.div>
          )}
          {workState === WorkState.EXPLAIN && (
            <motion.div
              key={"musicplay"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <WorkExplain />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Work;
