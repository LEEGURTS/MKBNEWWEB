import React, { ReactNode, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/effect-fade";
import SwiperCore, { Mousewheel, Autoplay, EffectFade } from "swiper";
import SlideBullet from "./SlideBullet";

interface SliderProps {
  isCssMode?: boolean;
  children: ReactNode[];
  SwiperClassName?: string;
  SlideClassName?: string;
  isVerticalSlide?: boolean;
  bulletVisible?: boolean;
  paginateVisible?: boolean;
  controlIdx?: number;
  infoIdx?: number;
  autoPlay?: {};
  mouseScroll?: boolean;
  setControlIdx?: React.Dispatch<React.SetStateAction<number>>;
  setInfoIdx?: React.Dispatch<React.SetStateAction<number>>;
  style?: React.CSSProperties;
  spaceBetween?: number;
  allowTouchMove?: boolean;
  effect?:
    | "slide"
    | "fade"
    | "cube"
    | "coverflow"
    | "flip"
    | "creative"
    | "cards"
    | undefined;
}

SwiperCore.use([Mousewheel, Autoplay, EffectFade]);

const Slider: React.FunctionComponent<SliderProps> = ({
  allowTouchMove = true,
  children,
  SwiperClassName,
  SlideClassName,
  mouseScroll = true,
  controlIdx = 0,
  infoIdx = 0,
  autoPlay = false,
  isVerticalSlide = false,
  bulletVisible = true,
  paginateVisible = true,
  setControlIdx = () => {},
  setInfoIdx = () => {},
  style,
  spaceBetween = 0,
  effect,
  isCssMode = false,
}) => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [slideIdx, setSlideIdx] = useState(controlIdx);
  const handleIndex = (selectedIdx: number) => {
    swiper?.slideTo(selectedIdx);
  };
  useEffect(() => {
    setSlideIdx(controlIdx);
    setInfoIdx(controlIdx);
    swiper?.slideTo(controlIdx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlIdx]);

  return (
    <>
      <Swiper
        allowTouchMove={allowTouchMove}
        onSwiper={setSwiper}
        autoplay={autoPlay}
        spaceBetween={spaceBetween}
        onRealIndexChange={(e) => {
          setSlideIdx(e.realIndex);
          setInfoIdx(e.realIndex);
        }}
        mousewheel={mouseScroll ? true : false}
        cssMode={isCssMode}
        effect={effect}
        modules={[Mousewheel, Autoplay, EffectFade]}
        className={
          "relative z-10 flex items-center justify-center " + SwiperClassName
        }
        lazy={{
          loadPrevNext: true,
        }}
        direction={isVerticalSlide ? "vertical" : "horizontal"}
        style={style}
        centeredSlides={true}
      >
        {children.map((item, idx) => {
          return (
            <SwiperSlide key={idx} className={SlideClassName}>
              {item}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {paginateVisible && (
        <SlideBullet
          slideLength={Math.ceil(children.length)}
          currentIdx={Math.ceil(slideIdx)}
          setSlidePage={handleIndex}
          isVertical={isVerticalSlide}
          bulletVisible={bulletVisible}
        ></SlideBullet>
      )}
    </>
  );
};

export default Slider;
