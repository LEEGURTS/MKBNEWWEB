interface WorkExplainProps {
  explainContent: string;
}

const WorkExplain: React.FunctionComponent<WorkExplainProps> = ({
  explainContent,
}) => {
  return (
    <p className="whitespace-pre-line text-center">
      {explainContent.split(`!점프`).map((text) => `\n` + text)}
    </p>
  );
};

export default WorkExplain;
