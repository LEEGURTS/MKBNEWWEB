import React from "react";

interface InstagramSvgProps {
  onClick?: () => void;
  size?: string;
}

const InstagramSvg: React.FunctionComponent<InstagramSvgProps> = ({
  onClick,
  size = "25",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={onClick}
    >
      <path
        d="M17.7084 2.0835H7.29171C4.41522 2.0835 2.08337 4.41535 2.08337 7.29183V17.7085C2.08337 20.585 4.41522 22.9168 7.29171 22.9168H17.7084C20.5849 22.9168 22.9167 20.585 22.9167 17.7085V7.29183C22.9167 4.41535 20.5849 2.0835 17.7084 2.0835Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6667 11.8436C16.7952 12.7105 16.6472 13.5959 16.2435 14.3738C15.8399 15.1517 15.2012 15.7825 14.4184 16.1766C13.6355 16.5706 12.7484 16.7077 11.8831 16.5685C11.0179 16.4293 10.2185 16.0207 9.59881 15.401C8.9791 14.7813 8.57057 13.982 8.43134 13.1167C8.29211 12.2514 8.42926 11.3643 8.82328 10.5815C9.2173 9.79863 9.84813 9.15997 10.626 8.75633C11.404 8.35268 12.2893 8.20461 13.1563 8.33316C14.0406 8.46429 14.8592 8.87635 15.4914 9.50848C16.1235 10.1406 16.5356 10.9593 16.6667 11.8436Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2291 6.771H18.2395"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InstagramSvg;
