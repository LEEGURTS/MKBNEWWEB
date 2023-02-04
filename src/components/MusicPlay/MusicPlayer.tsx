import React, { useRef, useState, useEffect } from "react";
import ShuffleSvg from "../../Icon/Svg/ShuffleSvg";
import PrevPlaySvg from "../../Icon/Svg/PrevPlaySvg";
import PlaySvg from "../../Icon/Svg/PlaySvg";
import OneRoofSvg from "../../Icon/Svg/OneRoofSvg";
import SoundMinSvg from "../../Icon/Svg/SoundMinSvg";
import SoundMaxSvg from "../../Icon/Svg/SoundMaxSvg";
import styled from "styled-components";
import MusicListSvg from "../../Icon/Svg/MusicListSvg";
import { WorkState } from "../Work/WORKSTATE";
import { MusicExplainSvg } from "../../Icon/Svg/MusicExplainSvg";
import { musicForm } from "../MusicList/MusicList";
import Slider from "../Slider/Slider";
import WorkExplain from "./WorkExplain";
import useVH from "react-viewport-height";

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
    margin-top: -4px;
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
interface MusicPlayerProps {
  setWorkState: React.Dispatch<React.SetStateAction<WorkState>>;
  musicListVisible?: boolean;
  musicList: musicForm[];
  customPlayIdx?: number;
}

const MusicPlayer: React.FunctionComponent<MusicPlayerProps> = ({
  setWorkState,
  musicListVisible = true,
  musicList,
  customPlayIdx = 0,
}) => {
  const [musicPlaying, setMusicPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [, setMusicVolume] = useState<number>(1);
  const intervalRef = useRef<NodeJS.Timer>();
  const [playIdx, setPlayIdx] = useState(customPlayIdx);
  const audio = useRef<HTMLAudioElement>(new Audio(musicList[0].url));
  const [slideIdx, setSlideIdx] = useState(0);
  const shuffleMusicList = () => {
    musicList.sort(() => Math.random() - 0.5);
    setPlayIdx(0);
    audio.current.src = musicList[0].url;
    musicStart();
  };

  const increasePlayIdx = () => {
    if (playIdx === musicList.length - 1) {
      setPlayIdx(0);
      audio.current.src = musicList[0].url;
    } else {
      setPlayIdx(playIdx + 1);
      audio.current.src = musicList[playIdx + 1].url;
    }

    musicStart();
  };

  const decreasePlayIdx = () => {
    if (playIdx === 0) {
      setPlayIdx(musicList.length - 1);
      audio.current.src = musicList[musicList.length - 1].url;
    } else {
      setPlayIdx(playIdx - 1);
      audio.current.src = musicList[playIdx - 1].url;
    }
    musicStart();
  };

  useEffect(() => {
    audio.current.src = musicList[playIdx].url;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicList]);

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audio.current.pause();
    };
  }, []);

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

  return (
    <Slider
      currentIdx={slideIdx}
      setCurrentIdx={setSlideIdx}
      SwiperClassName="w-screen"
      SlideClassName="flex items-center justify-center"
      bulletVisible={false}
      mouseScroll={false}
    >
      <div className="flex flex-col items-center w-[60vw] lg:w-[35vw]">
        <img alt="" src={musicList[playIdx].thumbnail} className="w-full" />
        <div className="w-full flex flex-row justify-between items-end mt-[1em]">
          <div className="flex flex-col">
            <p className="text-[0.6em]">{musicList[playIdx].title}</p>
            <p className="text-[0.4em] text-[#4a4a4a]">MKB DANCE MUSIC</p>
          </div>

          <div className="flex flex-row items-center">
            {musicListVisible && (
              <MusicListSvg onClick={() => setWorkState(WorkState.MUSICLIST)} />
            )}

            <MusicExplainSvg
              className="relative top-[2px] ml-[0.3em] "
              onClick={() => setSlideIdx(1)}
            />
          </div>
        </div>
        <VolumeControl>
          <input
            type="range"
            className="flex justify-between mt-[1em] w-full"
            step={1}
            min={0}
            max={audio.current.duration || 1}
            value={currentTime}
            onChange={(e) => {
              audio.current.currentTime = Number(e.target.value);
              setCurrentTime(Number(e.target.value));
            }}
          />
        </VolumeControl>
        <div className="w-[calc(100%+40px)] my-[2em] flex flex-row items-center justify-between">
          <ShuffleSvg onClick={() => shuffleMusicList()} />
          <div className="flex items-center w-[40%] lg:w-[30%] justify-between">
            <div className="rounded-full p-2 cursor-pointer hover:shadow-3xl hover:bg-[#e8e8e8] duration-300">
              <PrevPlaySvg onClick={() => decreasePlayIdx()} />
            </div>
            {musicPlaying && (
              <p
                className="rounded-full p-2 cursor-pointer hover:shadow-3xl hover:bg-[#e8e8e8] duration-300"
                onClick={() => musicPause()}
              >
                ll
              </p>
            )}
            {!musicPlaying && <PlaySvg onClick={() => musicStart()} />}
            <div className="rounded-full p-2 cursor-pointer hover:shadow-3xl hover:bg-[#e8e8e8] duration-300">
              <PrevPlaySvg isRotate={true} onClick={() => increasePlayIdx()} />
            </div>
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
      <WorkExplain explainContent={musicList[playIdx].explain} />
    </Slider>
  );
};

export default MusicPlayer;
