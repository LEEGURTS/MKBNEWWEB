import React, { useEffect } from "react";
import useVH from "react-viewport-height";
import THUMBNAILSAMPLE from "../../Icon/Image/THUMBNAILSAMPLE.png";
import ShuffleSvg from "../../Icon/Svg/ShuffleSvg";
import PrevPlaySvg from "../../Icon/Svg/PrevPlaySvg";
import PlaySvg from "../../Icon/Svg/PlaySvg";
import OneRoofSvg from "../../Icon/Svg/OneRoofSvg";
import SoundMinSvg from "../../Icon/Svg/SoundMinSvg";
import SoundMaxSvg from "../../Icon/Svg/SoundMaxSvg";
import HamburgerBarSvg from "./../../Icon/Svg/HamburgerBarSvg";
import Slider from "./../Slider/Slider";

const Index: React.FunctionComponent = () => {
  const vh = useVH();
  useEffect(() => {});
  const indexSlideList = [
    <div
      key={1}
      className="relative w-screen flex items-center justify-center"
      style={{ height: 100 * vh }}
    >
      <div className="flex flex-col items-center">
        <p className="text-bold text-[2.4em]">M</p>
        <p>MKB DANCEMUSIC</p>
      </div>
      <div className="absolute bottom-[8em] flex flex-col items-center text-[0.4em]">
        <p>ⒸMKB MUSIC 2023 All Rights Reserved.</p>
        <p> DO NOT COPY WITHOUT PERMISSION</p>
      </div>
    </div>,
    <div
      key={2}
      className="relative w-screen flex flex-col items-center justify-center"
      style={{ height: 100 * vh }}
    >
      <div className="flex flex-col items-center leading-8">
        <p className="font-bold text-[1.8em]">MUSIC</p>
        <p className="">FOR</p>
      </div>
      <div className="flex flex-col items-center whitespace-pre-line text-center leading-[2.5em]">
        {`MODERN DANCE 
        KOREA DANCE 
        BALLET`}
      </div>
    </div>,
    <div
      key={3}
      className="relative w-screen flex flex-col items-center justify-center"
      style={{ height: 100 * vh }}
    >
      <div className="flex flex-col items-center leading-8">
        <p className="font-bold text-[1.8em]">MUSIC</p>
        <p className="">BY</p>
      </div>
      <p className="my-[1em]">MIN JI CHOI</p>
      <div className="flex flex-col items-center whitespace-pre-line text-center leading-[1.8em]">
        {`Dance competitions
            performances
            and 
            other work experience`}
      </div>
    </div>,
    <div
      key={4}
      className="relative w-screen flex flex-col items-center justify-center"
      style={{ height: 100 * vh }}
    >
      <div className="flex flex-col items-center w-[60vw] lg:w-[30vw]">
        <div className="w-full">
          <img alt="" src={THUMBNAILSAMPLE} className="w-full" />
          <p className="text-[0.6em]">Untitled</p>
          <p className="text-[0.4em] text-[#4a4a4a]">MKB DANCE MUSIC</p>
        </div>
        <div className="flex justify-between mt-[1em] w-full border-t border-[1.5px] border-[#909090]"></div>
        <div className="w-full flex flex-row justify-between text-[0.6em]">
          <p>0:00</p>
          <p>3:52</p>
        </div>
        <div className="w-[calc(100%+40px)] my-[2em] flex flex-row items-center justify-between">
          <ShuffleSvg />
          <div className="flex items-center w-[40%] lg:w-[30%] justify-between">
            <PrevPlaySvg />
            <PlaySvg />
            <PrevPlaySvg isRotate={true} />
          </div>
          <OneRoofSvg />
        </div>
        <div className="w-[calc(100%+60px)] flex flex-row items-center justify-between">
          <SoundMinSvg />
          <div className="flex-grow border border-[#6d6c6c]"></div>
          <SoundMaxSvg />
        </div>
      </div>
    </div>,
  ];

  return (
    <div className="relative">
      <div className="w-full fixed flex items-center justify-between p-[1.5em]">
        <p>M</p>
        <HamburgerBarSvg />
      </div>
      <Slider
        paginateVisible={true}
        isVerticalSlide={true}
        SwiperClassName="h-[100vh]"
        SlideClassName="mb-0"
      >
        {indexSlideList}
      </Slider>
    </div>
  );
};

export default Index;
