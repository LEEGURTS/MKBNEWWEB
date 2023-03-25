import React from "react";

interface PrevPlaySvgProps {
  isRotate?: boolean;
  onClick?: () => void;
}

const PrevPlaySvg: React.FunctionComponent<PrevPlaySvgProps> = ({
  isRotate = false,
  onClick,
}) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: isRotate ? "rotate(180deg)" : "",
      }}
      onClick={onClick}
    >
      <path
        d="M18 17L8 9L18 1V17Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 16V2"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PrevPlaySvg;
