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
  setCurrentIdx?: React.Dispatch<React.SetStateAction<number>>;
}

SwiperCore.use([Mousewheel, Autoplay]);

const Slider: React.FunctionComponent<SliderProps> = ({
  children,
  SwiperClassName,
  SlideClassName,
  autoPlay = false,
  isVerticalSlide = false,
  bulletVisible = true,
  paginateVisible = true,
  setCurrentIdx = () => {},
}) => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [slideIdx, setSlideIdx] = useState(0);

  const handleIndex = (selectedIdx: number) => {
    swiper?.slideTo(selectedIdx);
    setCurrentIdx(selectedIdx);
  };

  useEffect(() => {
    return setCurrentIdx(0);
    // eslint-disable-next-line
  }, []);

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
        mousewheel={{
          forceToAxis: false,
        }}
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
