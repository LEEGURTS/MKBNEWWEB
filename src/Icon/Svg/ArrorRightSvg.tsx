interface ArrowRightSvgProps {
  isLeft?: boolean;
}

export const ArrowRightSvg: React.FunctionComponent<ArrowRightSvgProps> = ({
  isLeft,
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isLeft ? "rotate-180" : ""}
    >
      <g clip-path="url(#clip0_174_330)">
        <path
          d="M15 12L0 12"
          stroke="#2A353D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.9999 7L15.2928 11.2929C15.6261 11.6262 15.7928 11.7929 15.7928 12C15.7928 12.2071 15.6261 12.3738 15.2928 12.7071L10.9999 17"
          stroke="#2A353D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_174_330">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
