import ArrorNoBarSvg from "../../Icon/Svg/ArrorNoBarSvg";
import { isMobile } from "react-device-detect";

interface WorkExplainProps {
  explainContent: string;
  setSlideIdx: React.Dispatch<React.SetStateAction<number>>;
}

const WorkExplain: React.FunctionComponent<WorkExplainProps> = ({
  explainContent,
  setSlideIdx,
}) => {
  return (
    <div className="relative w-full">
      <p className="absolute text-[0.6em] w-[60%] left-[20%] h-full flex items-center justify-center whitespace-pre-line text-center">
        {explainContent?.split(`!점프`).map((text) => `\n` + text)}
      </p>
      <div
        className="absolute left-[2em] cursor-pointer"
        onClick={() => {
          setSlideIdx(0);
        }}
      >
        {!isMobile && <ArrorNoBarSvg />}
      </div>
    </div>
  );
};

export default WorkExplain;
