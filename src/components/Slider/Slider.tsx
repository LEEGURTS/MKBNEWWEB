import React, { ReactNode, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
  currentIdx?: number;
  autoPlay?: {};
  mouseScroll?: boolean;
  setCurrentIdx?: React.Dispatch<React.SetStateAction<number>>;
}

SwiperCore.use([Mousewheel, Autoplay]);

const Slider: React.FunctionComponent<SliderProps> = ({
  children,
  SwiperClassName,
  SlideClassName,
  mouseScroll = true,
  currentIdx = 0,
  autoPlay = false,
  isVerticalSlide = false,
  bulletVisible = true,
  paginateVisible = true,
  setCurrentIdx = () => {},
}) => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [slideIdx, setSlideIdx] = useState(currentIdx);
  const handleIndex = (selectedIdx: number) => {
    swiper?.slideTo(selectedIdx);
    setCurrentIdx(selectedIdx);
  };

  useEffect(() => {
    setSlideIdx(currentIdx);
    swiper?.slideTo(currentIdx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIdx]);

  return (
    <>
      <Swiper
        onSwiper={setSwiper}
        autoplay={autoPlay}
        onRealIndexChange={(e) => {
          setSlideIdx(e.realIndex);
          setCurrentIdx(e.realIndex);
        }}
        cssMode={isMobile ? true : false}
        modules={[Mousewheel, Autoplay]}
        className={
          "relative z-10 flex items-center justify-center " + SwiperClassName
        }
        lazy={{
          loadPrevNext: true,
        }}
        style={{
          alignItems: "center",
        }}
        direction={isVerticalSlide ? "vertical" : "horizontal"}
        mousewheel={
          mouseScroll
            ? {
                forceToAxis: false,
              }
            : false
        }
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
