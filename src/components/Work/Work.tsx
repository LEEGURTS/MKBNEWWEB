import { AnimatePresence, motion } from "framer-motion";
import useVH from "react-viewport-height";
import MusicPlayer from "../MusicPlay/MusicPlayer";
import { useState } from "react";
import { WorkState } from "./WORKSTATE";
import WorkList from "./WorkList";
import ReturnSvg from "./../../Icon/Svg/ReturnSvg";
import React, { useMemo } from "react";
import { MKBLogoSvg } from "../../Icon/Svg/MKBLogoSvg";

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
  }, []);
  console.log(musicDataList);
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
        <MKBLogoSvg width="2.5em" height="2.5em" />
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
                setMusicState={setPlayIdx}
                musicList={musicDataList}
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
                customPlayIdx={playIdx}
                musicList={musicDataList}
                setWorkState={setWorkState}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Work;
