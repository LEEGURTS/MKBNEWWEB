import Navigate from "../Navigate/Navigate";
import useVH from "react-viewport-height";
import Slider from "../Slider/Slider";
import BGSLIDE1 from "../../Icon/Image/Background/BGSLIDE1.jpg";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "../Navigate/Footer";
import ArrorNoBarSvg from "./../../Icon/Svg/ArrorNoBarSvg";

export const AboutMKB: React.FunctionComponent = () => {
  const vh = useVH();
  const [slideIdx, setSlideIdx] = useState(0);

  return (
    <div
      className="relative flex flex-col items-center text-center"
      style={{
        height: 100 * vh,
        backgroundImage: `url(${BGSLIDE1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Navigate />
      <p className="relative top-[20%]">ABOUT MKB</p>
      <Slider
        infoIdx={slideIdx}
        setInfoIdx={setSlideIdx}
        isVerticalSlide={true}
        bulletVisible={false}
        spaceBetween={150}
        SwiperClassName="relative top-[20%] w-[75%] sm:w-[60%] lg:w-[50%] h-[50vh]"
        SlideClassName="flex items-center justify-center"
      >
        <p className="whitespace-pre-line text-[0.6em] font-pretendard flex flex-col items-center relative top-[5%]">
          {`MKB Dance Music 은 2018년도에 설립 되었습니다

무용인 들이 가지고 있는 고충과 생각들을 음악으로 충족 시키며
지금까지도 수 많은 작업을 진행하고 있습니다

무용 공연과 콩쿠르의 음악을 작곡및 편곡 하고 있으며 
무용수들의 개개인에 맞춘 음악을 작업 하고 있습니다

국내 예술 중학교와 예술 고등학교 그리고 
대학교 음악들을 더불어 해외에서도 작업하고 있습니다.

MKB DNACE MUSIC 은 무용가 들에게 MKB 만에 창의성과 독창성으로 
최고로 좋은 음악을 선보이고자 적극적으로 참여 합니다
`}
          <ArrorNoBarSvg rotate={270} className="mt-[2em]" size="2em" />
        </p>
        <p className="text-[0.5em] whitespace-pre-line">{`MKB DANCE MUSIC was founded in 2018.

Filling dancers' grievances and 
thoughts with music
A lot of work is still in progress.

MKB composes and arranges music for dance performances and competitions.
We are working on music that suits individual dancers.

Domestic art middle school and art high school, and
In addition to college music, he is also active abroad.

MKB DNACE MUSIC provides dancers with MKB's originality and creativity.
Actively participate in the best music releases`}</p>
      </Slider>
      <AnimatePresence>{slideIdx === 1 && <Footer />}</AnimatePresence>
    </div>
  );
};
