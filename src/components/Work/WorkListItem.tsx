import Alt1 from "../../Icon/Image/Alt1.png";
import Alt2 from "../../Icon/Image/Alt1.png";

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
  const alt = [Alt1, Alt2];
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <img
        className="w-[40vw] h-[40vw] sm:w-[22vw] sm:h-[22vw] lg:w-[20vw] lg:h-[20vw] object-cover"
        alt=""
        src={thumbnail || alt[Math.round(Math.random())]}
      />
      <p className="mt-[1em] text-[0.6em]">{title}</p>
    </div>
  );
};

export default WorkListItem;
