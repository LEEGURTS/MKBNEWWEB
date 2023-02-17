import useVH from "react-viewport-height";
import BGSLIDE1 from "../../Icon/Image/Background/BGSLIDE1.jpg";
import { EditIconSvg } from "../../Icon/Svg/EditIconSvg";
import Footer from "../Navigate/Footer";
import Navigate from "./../Navigate/Navigate";
import WorkProcessItem from "./WorkProcessItem";
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
        className="relative top-[7em] w-full p-[5%] overflow-y-scroll scrollbar-hide"
        style={{
          height: `calc(100*${vh}px - 16em)`,
        }}
      >
        <WorkProcessItem
          icon={<EditIconSvg />}
          itemPos="right"
          barText="WRITE"
          title="기획서 양식 작성"
          engTitle="Please write a proposal"
          content="아이콘을 클릭하여 양식을 다운로드 후 작성해 주세요"
        />
        <WorkProcessItem
          icon={<EditIconSvg />}
          itemPos="left"
          barText="SEND"
          title="기획서 전달"
          engTitle="Send proposal to our email"
          content="작성된 기획서를 MKB DANCE MUSIC 의 원하는 연락처를 통해 전송해주세요."
        />
        <WorkProcessItem
          icon={<EditIconSvg />}
          itemPos="right"
          barText="CONSULT"
          title="세부사항 상담"
          engTitle="Consulting details with us"
          content="세부적인 상당 및 진행방향, 가격 측정을 도와드립니다."
        />
      </div>
      <Footer />
    </div>
  );
};

export default WorkProcess;
