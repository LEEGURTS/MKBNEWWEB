import Navigate from "../Navigate/Navigate";
import useVH from "react-viewport-height";
import Slider from "../Slider/Slider";
import BGSLIDE1 from "../../Icon/Image/Background/BGSLIDE1.jpg";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "../Navigate/Footer";
import ArrorNoBarSvg from "./../../Icon/Svg/ArrorNoBarSvg";
import { motion } from "framer-motion";

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
      <p className="relative top-[15%]">ABOUT MKB</p>
      <AnimatePresence>
        {slideIdx !== 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-[85%] left-[50%] -translate-x-[50%] cursor-pointer p-4"
            onClick={() => setSlideIdx(4)}
          >
            <ArrorNoBarSvg rotate={270} size="2em" />
          </motion.div>
        )}
      </AnimatePresence>
      <Slider
        infoIdx={slideIdx}
        controlIdx={slideIdx}
        setInfoIdx={setSlideIdx}
        isVerticalSlide={true}
        bulletVisible={false}
        spaceBetween={300}
        SwiperClassName="relative top-[15%] w-[75%] sm:w-[60%] lg:w-[50%]"
        SlideClassName="flex items-center justify-center"
        style={{ height: `calc(${100 * vh}px - 82px - ${15 * vh}px - 2.5em)` }}
      >
        <p className="whitespace-pre-line text-[0.6em] font-pretendard flex flex-col items-center relative ">
          {`MKB는 Modern dance (Contemporary dance), Korean traditional dance, Ballet 를 의미하며 2018년부터 꾸준히 무용음악 장르에서 활동중 입니다.

무용음악은 춤과 함께 공연되는 음악으로, 춤의 분위기와 무대 연출을 결정하는 중요한 역할을 합니다. 따라서 춤의 움직임과 음악의 리듬, 멜로디, 무용수의 감정 등이 서로 조화를 이루고 상호작용하며 하나의 예술작품으로 완성하고 결합시키는 것이 가장 중요합니다. 그러기 위해서 작곡가는 춤의 분위기와 스토리를 잘 이해하고, 그에 맞는 음악을 작곡하는 능력이 필요합니다. 

MKB는 무용을 전공한 작곡가로서 무용수들이 가지고 있는 고충과 생각들을 이해하며 무용수 개개인의 이야기를 음악에 녹여내 무용수가 보다 완성도 있는 예술작품을 만들 수 있도록 기여하고자 합니다. 
`}
        </p>
        <p className="whitespace-pre-line text-[0.6em] font-pretendard flex flex-col items-center relative ">
          {`작곡하고 있는 현대무용, 한국무용, 발레를 중점으로 무용 공연과 콩쿠르, 입시, 오디션 등의 음악들을 개개인에 맞게 작곡 및 편집 작업을 하고 있습니다.또 현재 국내 예술 중학교와 예술 고등학교 그리고 대학교, 더불어 해외에서도 활동하고 있습니다.

MKB DANCEMUSIC 은 한국의 전통 악기부터 트렌드하고 다양한 Synth Sound 로 음악 장르를 구분하지 않고 넓은 스펙트럼을 구사할 수 있으며, MKB만의 창의성과 독창성으로 무용수가 가장 춤추기 편한 음악을 선보이고자 적극적으로 노력하고 있습니다.
`}
        </p>
        <p className="text-[10px] whitespace-pre-line">{`MKB stands for Modern dance ( Contemporary dance), Korean traditional dance, and Ballet. We have been steadily active in the genre of dance music since 2018.

Dance music is the music being performed along with the dance, and it plays an important role in determining the mood of the dance and the stage direction. Therefore, it is important to complete and combine into one art piece by harmonizing and interacting each other through the movement of the dance, rhythm of the music, melody, emotions of the dancers, and so forth.`}</p>
        <p className="text-[10px] whitespace-pre-line">{`To do so, the composer needs to completely understand the story and mood of the dance, through having the skill to compose the music that fits in.

MKB, the composer who majored in dance, contributes to understand the struggles and thoughts what the dance performers have, and to make much completed work of art through dissolving the stories of each dance performers’ stories.
`}</p>
        <p className="text-[10px] whitespace-pre-line">{`Current works of composing list as Contemporary dance, Korean traditional dance, Ballet, and they are being composed and edited to suit individually for clients as for dance performances, competitions, entrance exams, and auditions. Additionally, we are currently being active at working in the Art middle and high school and University based in Korea, and in the countries overseas.

MKB DANCEMUSIC has a skill in wide spectrum regardless of music genre from Korean traditional musical instruments to trendy and diverse Synth Sounds, furthermore, we are actively putting an effort to present music for the dancers to dance in the most comfortable way.`}</p>
      </Slider>
      <AnimatePresence>{slideIdx === 4 && <Footer />}</AnimatePresence>
    </div>
  );
};
