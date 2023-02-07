import React from "react";

interface SlideBulletProps {
  slideLength: number;
  currentIdx: number;
  setSlidePage: (num: number) => void;
  isVertical?: boolean;
  bulletVisible?: boolean;
}

const SlideBullet: React.FunctionComponent<SlideBulletProps> = ({
  slideLength,
  currentIdx,
  setSlidePage,
  isVertical = false,
  bulletVisible = true,
}) => {
  if (!bulletVisible) {
    return <></>;
  }
  return (
    <div
      className={
        isVertical
          ? "absolute z-20 top-[50%] -translate-y-[50%] right-[1em]"
          : "absolute z-20 left-[50%] -translate-x-[50%] bottom-[1em] flex flex-col items-center -rotate-90"
      }
    >
      {Array(slideLength)
        .fill(0)
        .map((_, idx) => {
          return (
            <div
              key={idx}
              className={
                "duration-300 z-30 rounded-full w-[5px] h-[5px] p-[5px] my-[0.4em] cursor-pointer hover:bg-black hover:bg-opacity-50 text-white " +
                (idx === currentIdx ? "bg-black " : "bg-[#B0B0B0] ")
              }
              onClick={() => setSlidePage(idx)}
            />
          );
        })}
    </div>
  );
};

export default SlideBullet;
