import WorkListItem from "./WorkListItem";
import { WorkState } from "./WORKSTATE";
import { musicForm } from "./../MusicList/MusicList";

interface WorkListProps {
  musicList: musicForm[];
  setWorkState: React.Dispatch<React.SetStateAction<WorkState>>;
  setMusicState: React.Dispatch<React.SetStateAction<number>>;
}

const WorkList: React.FunctionComponent<WorkListProps> = ({
  musicList,
  setMusicState,
  setWorkState,
}) => {
  return (
    <>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10vw] lg:gap-[5vw]">
        {musicList.map((item, idx) => {
          return (
            <WorkListItem
              key={idx}
              thumbnail={item.thumbnail}
              title={item.title}
              onClick={() => {
                setWorkState(WorkState.MUSICPLAY);
                setMusicState(idx);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default WorkList;
