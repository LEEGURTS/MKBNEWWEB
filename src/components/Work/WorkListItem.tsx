import Alt1 from "../../Icon/Image/Alt1.png";

interface WorkListItemProps {
  title: string;
  thumbnail: string;
  onClick: () => void;
}

const WorkListItem: React.FunctionComponent<WorkListItemProps> = ({
  title,
  thumbnail,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <img
        className="w-[40vw] h-[40vw] sm:w-[22vw] sm:h-[22vw] lg:w-[20vw] lg:h-[20vw] object-cover"
        alt=""
        src={thumbnail || Alt1}
      />
      <p className="mt-[1em] text-[0.6em]">{title}</p>
    </div>
  );
};

export default WorkListItem;
