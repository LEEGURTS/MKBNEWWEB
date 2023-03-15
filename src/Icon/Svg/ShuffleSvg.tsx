import React from "react";

interface ShuffleSvgProps {
  onClick?: () => void;
  className?: string;
}

const ShuffleSvg: React.FunctionComponent<ShuffleSvgProps> = ({
  onClick,
  className,
}) => {
  return (
    <svg
      onClick={onClick}
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M2.375 14.2341L4.39374 14.2421C5.11416 14.2421 5.78708 13.8858 6.18291 13.292L11.2417 5.70792C11.6375 5.11417 12.3104 4.74999 13.0308 4.75791L16.6329 4.77376"
        stroke="#3D4754"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0416 15.8175L16.625 14.2342"
        stroke="#3D4754"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.03793 6.82415L6.18291 5.63665C5.77916 5.07457 5.12999 4.74207 4.44124 4.74999L2.375 4.75791"
        stroke="#3D4754"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2679 12.1758L11.2338 13.4188C11.6375 13.9413 12.2709 14.25 12.9359 14.25L16.633 14.2342"
        stroke="#3D4754"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.625 4.76586L15.0416 3.18253"
        stroke="#3D4754"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShuffleSvg;
