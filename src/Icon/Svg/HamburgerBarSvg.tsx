import React from "react";

interface HamburgerBarSvgProps {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
  fill?: string;
}

const HamburgerBarSvg: React.FunctionComponent<HamburgerBarSvgProps> = ({
  width = 33,
  height = 22,
  onClick,
  className = "",
  fill = "white",
}) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width={width}
      height={height}
      viewBox="0 0 33 22"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11H31"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.40002 1.60001H31.4"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 21H31"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HamburgerBarSvg;
