import React from "react";

interface YoutubeSvgProps {
  onClick?: () => void;
}

const YoutubeSvg: React.FunctionComponent<YoutubeSvgProps> = ({ onClick }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={onClick}
    >
      <path
        d="M23.4791 6.68734C23.3554 6.19297 23.1034 5.74002 22.7485 5.37422C22.3937 5.00842 21.9486 4.74274 21.4583 4.604C19.6666 4.1665 12.4999 4.1665 12.4999 4.1665C12.4999 4.1665 5.33328 4.1665 3.54161 4.64567C3.05124 4.7844 2.60617 5.05009 2.25135 5.41589C1.89652 5.78168 1.64452 6.23464 1.52078 6.729C1.19288 8.54729 1.03248 10.3918 1.04161 12.2394C1.02992 14.1009 1.19033 15.9595 1.52078 17.7915C1.65719 18.2705 1.91485 18.7062 2.26884 19.0566C2.62284 19.4069 3.06122 19.6601 3.54161 19.7915C5.33328 20.2707 12.4999 20.2707 12.4999 20.2707C12.4999 20.2707 19.6666 20.2707 21.4583 19.7915C21.9486 19.6528 22.3937 19.3871 22.7485 19.0213C23.1034 18.6555 23.3554 18.2025 23.4791 17.7082C23.8045 15.9036 23.9649 14.0731 23.9583 12.2394C23.97 10.3779 23.8096 8.51931 23.4791 6.68734Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1562 15.646L16.1458 12.2397L10.1562 8.8335V15.646Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default YoutubeSvg;
