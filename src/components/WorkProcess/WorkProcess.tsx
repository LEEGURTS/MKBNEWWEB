import useVH from "react-viewport-height";
import BGSLIDE1 from "../../Icon/Image/Background/BGSLIDE1.jpg";
import { EditIconSvg } from "../../Icon/Svg/EditIconSvg";
import EmailSvg from "../../Icon/Svg/EmailSvg";
import Footer from "../Navigate/Footer";
import Navigate from "./../Navigate/Navigate";
import WorkProcessItem from "./WorkProcessItem";
import ConsultTalkSvg from "./../../Icon/Svg/ConsultTalkSvg";
import PlaySvg from "./../../Icon/Svg/PlaySvg";
import MusicNoteSvg from "./../../Icon/Svg/MusicNoteSvg";
const WorkProcess: React.FunctionComponent = () => {
  const vh = useVH();
  return (
    <div
      className="relative flex flex-col items-center"
      style={{
        height: 100 * vh,
        backgroundImage: `url(${BGSLIDE1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Navigate />
      <div className="relative top-[7em] w-[90%] lg:w-[50%] shadow-3xl text-[0.7em] p-[0.25em] pl-[1em] bg-white rounded-[0.2em]">
        WORK PROCESS
      </div>
      <div
        className="relative top-[7em] w-[90%] px-[5px] py-[1em] overflow-y-scroll scrollbar-hide border-t-2 border-[#aaaaaa] "
        style={{
          height: `calc(${100 * vh}px - 55px - 11em)`,
        }}
      >
        <WorkProcessItem
          icon={<EditIconSvg />}
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1qPXi6GHrHGv-7PoawqFPvMfrqYngyPhA?usp=share_link"
            )
          }
          itemPos="right"
          barText="WRITE"
          title="기획서 양식 작성"
          engTitle="Please write a proposal"
          content="아이콘을 클릭하여 원하는 편집/작곡 의 양식을 다운로드 후 작성해 주세요"
        />
        <WorkProcessItem
          icon={<EmailSvg fill="white" />}
          itemPos="left"
          barText="SEND"
          title="기획서 전달"
          engTitle="Send proposal to our email"
          content="작성된 기획서를 MKB DANCE MUSIC 인스타그램 DM 및 카카오톡 채널을 통해 전송해주세요."
        />
        <WorkProcessItem
          icon={<ConsultTalkSvg />}
          itemPos="right"
          barText="CONSULT"
          title="세부사항 상담"
          engTitle="Consulting details"
          content="세부적인 상담 및 진행방향을 결정하고 가격 측정을 도와드립니다."
        />
        <WorkProcessItem
          icon={<PlaySvg fill="white" className="w-[25px] h-[25px]" />}
          itemPos="left"
          barText="PROCESS"
          title="작업 진행"
          engTitle="Work progress"
          content="작업이 진행되면 처음 가본 음악을 먼저 받게되며 가본 음악을 토대로 안무가의 수정 사항을 고려해  편집- 3회 / 작곡 5-7회 의 수정작업을 진행합니다. "
        />
        <WorkProcessItem
          icon={<MusicNoteSvg />}
          itemPos="right"
          barText="COMPLETE"
          title="완성"
          engTitle="Complete"
          content="수정작업이 끝나면 완성 된 음악파일을 받아 볼 수 있습니다."
        />
      </div>
      <Footer />
    </div>
  );
};

export default WorkProcess;
