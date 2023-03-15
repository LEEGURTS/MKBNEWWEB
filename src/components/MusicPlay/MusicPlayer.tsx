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
import PauseSvg from "../../Icon/Svg/PauseSvg";
import localforage from "localforage";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase";

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
  musicType?: string;
}

const MusicPlayer: React.FunctionComponent<MusicPlayerProps> = ({
  setWorkState,
  musicListVisible = true,
  musicList,
  customPlayIdx = 0,
  musicType,
}) => {
  const [musicPlaying, setMusicPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [, setMusicVolume] = useState<number>(1);
  const intervalRef = useRef<NodeJS.Timer>();
  const [playIdx, setPlayIdx] = useState(customPlayIdx);
  const audio = useRef<HTMLAudioElement>(new Audio());
  const [slideIdx, setSlideIdx] = useState(0);
  const [isLoopState, setIsLoopState] = useState(false);

  useEffect(() => {
    setPlayIdx(customPlayIdx);
    handlePlayMusic(musicList[customPlayIdx].title).then(() => musicStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customPlayIdx]);

  const shuffleMusicList = () => {
    musicList.sort(() => Math.random() - 0.5);
    setPlayIdx(0);
    handlePlayMusic(musicList[0].title).then(() => {
      musicStart();
    });
  };

  const increasePlayIdx = () => {
    musicPause();
    if (playIdx === musicList.length - 1) {
      handlePlayMusic(musicList[0].title).then(() => musicStart());
      setPlayIdx(0);
    } else {
      handlePlayMusic(musicList[playIdx + 1].title).then(() => musicStart());
      setPlayIdx(playIdx + 1);
    }
  };

  const decreasePlayIdx = () => {
    musicPause();
    if (playIdx === 0) {
      handlePlayMusic(musicList[musicList.length - 1].title).then(() =>
        musicStart()
      );
      setPlayIdx(musicList.length - 1);
    } else {
      handlePlayMusic(musicList[playIdx - 1].title).then(() => musicStart());
      setPlayIdx(playIdx - 1);
    }
  };

  useEffect(
    () => {
      handlePlayMusic(musicList[0].title);
      console.log(musicList);
      audio.current.currentTime = 0;
      musicPause();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [musicList]
  );

  useEffect(() => {
    if (audio.current.currentTime === audio.current.duration) {
      if (isLoopState) {
        audio.current.currentTime = 0;
        musicStart();
      } else {
        increasePlayIdx();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio.current.currentTime]);

  useEffect(() => {
    audio.current.preload = "none";
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audio.current.pause();
    };
  }, []);

  const handlePlayMusic = async (musicName: string) => {
    const item: Blob | null = await localforage.getItem(musicName);
    if (item) {
      audio.current.src = URL.createObjectURL(item);
    } else {
      try {
        const attachmentRef = ref(storage, `${musicType}/${musicName}.mp3`);
        const url = await getDownloadURL(attachmentRef);
        const res = await fetch(url);
        const blob = await res.blob();
        localforage.setItem(musicName, blob);
        audio.current.src = URL.createObjectURL(blob);
      } catch {
        audio.current.src = "";
      }
    }
  };

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
      controlIdx={slideIdx}
      setControlIdx={setSlideIdx}
      SwiperClassName="w-screen h-full"
      SlideClassName="flex items-center justify-center"
      bulletVisible={false}
      mouseScroll={false}
      isCssMode={true}
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
              onClick={() => setSlideIdx(slideIdx + 1)}
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
          <div className="p-1">
            <ShuffleSvg onClick={() => shuffleMusicList()} />
          </div>
          <div className="flex items-center w-[40%] lg:w-[30%] justify-between">
            <div className="rounded-full p-2 cursor-pointer hover:shadow-3xl hover:bg-[#e8e8e8] duration-300">
              <PrevPlaySvg onClick={() => decreasePlayIdx()} />
            </div>
            {musicPlaying && (
              <div className="rounded-full p-2 cursor-pointer hover:shadow-3xl hover:bg-[#e8e8e8] duration-300">
                <PauseSvg onClick={() => musicPause()} />
              </div>
            )}
            {!musicPlaying && (
              <div className="rounded-full p-2 cursor-pointer hover:shadow-3xl hover:bg-[#e8e8e8] duration-300">
                <PlaySvg onClick={() => musicStart()} />
              </div>
            )}
            <div className="rounded-full p-2 cursor-pointer hover:shadow-3xl hover:bg-[#e8e8e8] duration-300">
              <PrevPlaySvg isRotate={true} onClick={() => increasePlayIdx()} />
            </div>
          </div>
          <div
            className={
              isLoopState
                ? "p-1 cursor-pointer rounded-full bg-[#ff0000] bg-opacity-20 duration-300"
                : "p-1 cursor-pointer hover:bg-black hover:bg-opacity-20 rounded-full duration-300"
            }
          >
            <OneRoofSvg onClick={() => setIsLoopState(!isLoopState)} />
          </div>
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
      <WorkExplain
        setSlideIdx={setSlideIdx}
        explainContent={musicList[playIdx].explain}
      />
    </Slider>
  );
};

export default MusicPlayer;
