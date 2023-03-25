import React from "react";

interface PlaySvgProps {
  onClick?: () => void;
  className?: string;
}

const PlaySvg: React.FunctionComponent<PlaySvgProps> = ({
  onClick,
  className,
}) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M18.4611 9.56395L2.98666 1.8267C2.18878 1.42776 1.25 2.00796 1.25 2.90001V18.0167C1.25 18.9088 2.18877 19.489 2.98665 19.09L18.4611 11.3528C19.1982 10.9843 19.1982 9.93247 18.4611 9.56395Z"
        stroke="#222222"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlaySvg;
