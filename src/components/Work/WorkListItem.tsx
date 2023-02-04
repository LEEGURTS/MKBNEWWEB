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
    <div className="flex flex-col items-center" onClick={onClick}>
      <img
        className="w-[40vw] h-[40vw] sm:w-[22vw] sm:h-[22vw] lg:w-[20vw] lg:h-[20vw] object-cover"
        alt=""
        src={thumbnail}
      />
      <p className="mt-[1em] text-[0.6em]">{title}</p>
    </div>
  );
};

export default WorkListItem;
