import { motion } from "framer-motion";
import EmailSvg from "../../Icon/Svg/EmailSvg";
import InstagramSvg from "../../Icon/Svg/InstagramSvg";
import YoutubeSvg from "../../Icon/Svg/YoutubeSvg";

const Footer: React.FunctionComponent = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center absolute bottom-0 w-[90%] border-t-2 border-[#aaaaaa] p-3"
    >
      <div className="flex flex-row items-center w-[40%] justify-around">
        <InstagramSvg size="1em" />
        <YoutubeSvg size="1em" />
        <EmailSvg size="1em" />
      </div>
      <p className="whitespace-pre-line text-[0.4em] mt-3">{`MKB DANCE MUSIC CEO. CHOI MINJI
E-MAIL chldnd63@naver.com
Republic of Korea`}</p>
    </motion.footer>
  );
};

export default Footer;
