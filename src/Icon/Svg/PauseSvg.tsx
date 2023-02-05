import React from "react";

interface PauseSvgProps {
  onClick?: () => void;
  className?: string;
}

const PauseSvg: React.FunctionComponent<PauseSvgProps> = ({
  onClick,
  className,
}) => {
  return (
    <svg
      width="19"
      height="21"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M3 1V15"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 1V15"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PauseSvg;
