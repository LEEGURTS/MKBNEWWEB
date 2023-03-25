import { useState } from "react";
import Video from "./Video";
import { AnimatePresence } from "framer-motion";
import ShowLogo from "./ShowLogo";

const First2: React.FunctionComponent = () => {
  const [videoState, setVideoState] = useState(true);
  return (
    <>
      <AnimatePresence>
        {videoState && <Video setState={setVideoState} />}
      </AnimatePresence>
      <AnimatePresence>{!videoState && <ShowLogo />}</AnimatePresence>
    </>
  );
};

export default First2;
