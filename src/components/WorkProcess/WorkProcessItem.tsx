interface WorkProcessItemProps {
  icon: React.ReactNode;
  itemPos: "left" | "right";
  barText: string;
  title: string;
  engTitle: string;
  content: string;
  onClick?: () => void;
}

const WorkProcessItem: React.FunctionComponent<WorkProcessItemProps> = ({
  icon,
  itemPos,
  barText,
  title,
  engTitle,
  content,
  onClick,
}) => {
  return (
    <div
      className="relative w-full h-[10em] flex items-center mb-[1.5em]"
      style={{
        flexDirection: itemPos === "left" ? "row-reverse" : "row",
      }}
    >
      <div className="flex flex-col w-[5.5em] h-full items-center justify-between ">
        <div className="border border-black " style={{ flexGrow: 1 }} />
        <div className="flex flex-col">
          {Array.from(barText)
            .map((item, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    transform: "rotate(-90deg)",
                    fontSize: "0.6em",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </div>
              );
            })
            .reverse()}
        </div>
        <div className="flex-grow border border-black" />
      </div>
      <div
        className="flex-grow p-4 flex flex-col justify-around h-full bg-white shadow-3xl rounded-[0.5em]"
        style={{
          alignItems: itemPos === "left" ? "flex-start" : "flex-end",
        }}
      >
        <div className="flex items-center justify-center bg-black rounded-full p-4">
          {icon}
        </div>
        <div
          className="mt-[0.5em] flex flex-col"
          style={{
            alignItems: itemPos === "left" ? "flex-start" : "flex-end",
          }}
        >
          <div className="font-bold text-[0.7em]">{title}</div>
          <div className="text-[0.6em]">{engTitle}</div>
        </div>
        <p className="mt-[1em] text-[0.5em] text-[#606060]">{content}</p>
      </div>
    </div>
  );
};

export default WorkProcessItem;
