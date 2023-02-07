import React, { ReactNode, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Mousewheel, Autoplay } from "swiper";
import SlideBullet from "./SlideBullet";
import { isMobile } from "react-device-detect";

interface SliderProps {
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
}

SwiperCore.use([Mousewheel, Autoplay]);

const Slider: React.FunctionComponent<SliderProps> = ({
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
        allowTouchMove={false}
        touchRatio={0}
        onSwiper={setSwiper}
        autoplay={autoPlay}
        spaceBetween={spaceBetween}
        onRealIndexChange={(e) => {
          setSlideIdx(e.realIndex);
          setInfoIdx(e.realIndex);
        }}
        cssMode={isMobile ? true : false}
        modules={[Mousewheel, Autoplay]}
        className={
          "relative z-10 flex items-center justify-center " + SwiperClassName
        }
        lazy={{
          loadPrevNext: true,
        }}
        direction={isVerticalSlide ? "vertical" : "horizontal"}
        mousewheel={
          mouseScroll
            ? {
                forceToAxis: false,
              }
            : false
        }
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
