import { motion } from "framer-motion";

interface VideoProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Video: React.FunctionComponent<VideoProps> = ({ setState }) => {
  return (
    <motion.video
      className="w-screen h-screen object-cover"
      transition={{ duration: 0.7 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      loop={true}
      autoPlay={true}
      muted={true}
      playsInline={true}
      onTimeUpdate={(e) => {
        if (e.currentTarget.currentTime > 2) {
          setState(false);
        }
      }}
    >
      <source
        src={process.env.PUBLIC_URL + "/videos/FirstImpact.mp4"}
        type="video/mp4"
      ></source>
    </motion.video>
  );
};

export default Video;
