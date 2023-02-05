interface WorkExplainProps {
  explainContent: string;
}

const WorkExplain: React.FunctionComponent<WorkExplainProps> = ({
  explainContent,
}) => {
  return (
    <p className="w-full h-full flex items-center justify-center whitespace-pre-line text-center">
      {explainContent.split(`!점프`).map((text) => `\n` + text)}
    </p>
  );
};

export default WorkExplain;
