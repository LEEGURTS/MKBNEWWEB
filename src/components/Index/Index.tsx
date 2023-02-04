import React, { useEffect, useState, useRef } from "react";
import useVH from "react-viewport-height";
import Slider from "./../Slider/Slider";
import { motion } from "framer-motion";
import Navigate from "../Navigate/Navigate";
import MusicPlayer from "../MusicPlay/MusicPlayer";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../Firebase";
import { musicForm } from "./../MusicList/MusicList";

const Index: React.FunctionComponent = () => {
  const vh = useVH();
  const [wholeMusicList, setWholeMusicList] = useState<musicForm[]>([
    { title: "", url: "", thumbnail: "", explain: "" },
  ]);
  const syncMusicList = useRef<musicForm[]>([]);
  const getFirebaseData = async (path: string) => {
    const modernDanceCollection = collection(db, path);
    const data = await getDocs(modernDanceCollection);
    const albumData = data.docs.map((doc) => ({ ...doc.data() }));
    sessionStorage.setItem(path, JSON.stringify(albumData as musicForm[]));
    return albumData as musicForm[];
  };

  useEffect(() => {
    if (!JSON.parse(sessionStorage.getItem("moderndance") as string)) {
      getFirebaseData("moderndance").then((item) => {
        syncMusicList.current.push(...item);
        setWholeMusicList(syncMusicList.current);
      });
    }
    if (!JSON.parse(sessionStorage.getItem("koreadance") as string)) {
      getFirebaseData("koreadance").then((item) => {
        syncMusicList.current.push(...item);
        setWholeMusicList(syncMusicList.current);
      });
    }
    if (!JSON.parse(sessionStorage.getItem("ballet") as string)) {
      getFirebaseData("ballet").then((item) => {
        syncMusicList.current.push(...item);
        setWholeMusicList(syncMusicList.current);
      });
    } else {
      setWholeMusicList([
        ...JSON.parse(sessionStorage.getItem("moderndance") as string),
        ...JSON.parse(sessionStorage.getItem("koreadance") as string),
        ...JSON.parse(sessionStorage.getItem("ballet") as string),
      ]);
    }
  }, []);
  console.log(wholeMusicList);
  const indexSlideList = [
    <motion.div
      key={1}
      className="relative z-10 w-screen flex items-center justify-center"
      style={{ height: 100 * vh }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center">
        <p className="text-bold text-[2.4em]">M</p>
        <p>MKB DANCEMUSIC</p>
      </div>
      <div className="absolute bottom-[8em] flex flex-col items-center text-[0.4em]">
        <p>ⒸMKB MUSIC 2023 All Rights Reserved.</p>
        <p> DO NOT COPY WITHOUT PERMISSION</p>
      </div>
    </motion.div>,
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
      <MusicPlayer
        musicListVisible={false}
        setWorkState={() => {}}
        musicList={wholeMusicList}
      />
    </div>,
  ];

  return (
    <div className="relative">
      <Navigate />
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
