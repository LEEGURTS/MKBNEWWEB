import React, { useRef, useState } from "react";
import THUMBNAILSAMPLE from "../../Icon/Image/THUMBNAILSAMPLE.png";
import ShuffleSvg from "../../Icon/Svg/ShuffleSvg";
import PrevPlaySvg from "../../Icon/Svg/PrevPlaySvg";
import PlaySvg from "../../Icon/Svg/PlaySvg";
import OneRoofSvg from "../../Icon/Svg/OneRoofSvg";
import SoundMinSvg from "../../Icon/Svg/SoundMinSvg";
import SoundMaxSvg from "../../Icon/Svg/SoundMaxSvg";
import styled from "styled-components";

interface MusicPlayerProps {
  url: string;
}

const MusicPlayer: React.FunctionComponent<MusicPlayerProps> = ({ url }) => {
  const [musicPlaying, setMusicPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [, setMusicVolume] = useState<number>(1);
  const intervalRef = useRef<NodeJS.Timer>();

  const audio = useRef(new Audio(url));

  const musicStart = () => {
    clearInterval(intervalRef.current);
    setMusicPlaying(true);
    audio.current.play();
    intervalRef.current = setInterval(() => {
      setCurrentTime(audio.current.currentTime);
    }, 1000);
  };

  const musicPause = () => {
    clearInterval(intervalRef.current);
    audio.current.pause();
    setMusicPlaying(false);
  };

  const VolumeControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  input[type='range'] {
    -webkit-appearance: none;
    background: transparent;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 10px;
      width: 10px;
      margin-top: -3.7px;
      border-radius: 50%;
      background: black;
      cursor: pointer;
    }

    &::-webkit-slider-runnable-track {
      height: 2px;
      background: #6D6C6C;
      transition: all 0.5s;
      cursor: pointer;
    }
`;
  return (
    <div className="flex flex-col items-center w-[60vw] lg:w-[35vw]">
      <div className="w-full">
        <img alt="" src={THUMBNAILSAMPLE} className="w-full" />
        <p className="text-[0.6em]">Untitled</p>
        <p className="text-[0.4em] text-[#4a4a4a]">MKB DANCE MUSIC</p>
      </div>
      <VolumeControl>
        <input
          type="range"
          className="flex justify-between mt-[1em] w-full"
          step={1}
          min={0}
          max={audio.current.duration}
          value={currentTime}
          onChange={(e) => {
            audio.current.currentTime = Number(e.target.value);
            setCurrentTime(Number(e.target.value));
          }}
        />
      </VolumeControl>
      <div className="w-[calc(100%+40px)] my-[2em] flex flex-row items-center justify-between">
        <ShuffleSvg />
        <div className="flex items-center w-[40%] lg:w-[30%] justify-between">
          <PrevPlaySvg onClick={() => audio.current.play()} />
          {musicPlaying && <p onClick={() => musicPause()}>ll</p>}
          {!musicPlaying && <PlaySvg onClick={() => musicStart()} />}
          <PrevPlaySvg onClick={() => audio.current.pause()} />
        </div>
        <OneRoofSvg />
      </div>
      <div className="w-[calc(100%+40px)] flex flex-row items-center justify-between">
        <SoundMinSvg />
        <VolumeControl>
          <input
            className="w-full"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={audio.current.volume}
            onChange={(e) => {
              audio.current.volume = Number(e.target.value);
              setMusicVolume(Number(e.target.value));
            }}
          />
        </VolumeControl>
        <SoundMaxSvg />
      </div>
    </div>
  );
};

export default MusicPlayer;
