import React from "react";

interface EmailSvgProps {
  onClick?: () => void;
  fill?: string;
  size?: string;
}

const EmailSvg: React.FunctionComponent<EmailSvgProps> = ({
  onClick,
  size = "25",
  fill = "black",
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
        d="M4.16671 4.1665H20.8334C21.9792 4.1665 22.9167 5.104 22.9167 6.24984V18.7498C22.9167 19.8957 21.9792 20.8332 20.8334 20.8332H4.16671C3.02087 20.8332 2.08337 19.8957 2.08337 18.7498V6.24984C2.08337 5.104 3.02087 4.1665 4.16671 4.1665Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.9167 6.25L12.5 13.5417L2.08337 6.25"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmailSvg;
