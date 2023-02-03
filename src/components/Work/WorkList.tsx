import WorkListItem from "./WorkListItem";
import { WorkState } from "./WORKSTATE";

interface WorkListProps {
  setWorkState: React.Dispatch<React.SetStateAction<WorkState>>;
  setMusicState: React.Dispatch<
    React.SetStateAction<{
      thumbnail: string;
      url: string;
    }>
  >;
}

const WorkList: React.FunctionComponent<WorkListProps> = ({
  setMusicState,
  setWorkState,
}) => {
  const sample = [
    {
      title: "UNTITLED",
      thumbnail:
        "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202208/27/735e413e-6635-4837-a894-52f9ee3c047a.jpg",
      url: "https://firebasestorage.googleapis.com/v0/b/mkbdancemusic-47f11.appspot.com/o/NewJeans%20OMG%20Lyrics%20(%EB%89%B4%EC%A7%84%EC%8A%A4%20OMG%20%EA%B0%80%EC%82%AC)%20(Color%20Coded%20Lyrics).mp3?alt=media&token=dab74857-d405-4f24-a251-2553b4b9289e",
    },
    {
      title: "UNTITLED",
      thumbnail: "https://img.gqkorea.co.kr/gq/2022/10/style_634e7c680d723.jpg",
      url: "",
    },
    {
      title: "UNTITLED",
      thumbnail:
        "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202208/27/735e413e-6635-4837-a894-52f9ee3c047a.jpg",
      url: "",
    },
    {
      title: "UNTITLED",
      thumbnail:
        "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202208/27/735e413e-6635-4837-a894-52f9ee3c047a.jpg",
      url: "",
    },
  ];
  return (
    <>
      <div className="w-full grid grid-cols-2 gap-[2em]">
        {sample.map((item, idx) => {
          return (
            <WorkListItem
              key={idx}
              thumbnail={item.thumbnail}
              title={item.title}
              onClick={() => {
                setWorkState(WorkState.MUSICPLAY);
                setMusicState(item);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default WorkList;
