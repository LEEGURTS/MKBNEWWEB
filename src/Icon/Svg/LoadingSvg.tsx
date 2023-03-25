const LoadingSvg: React.FunctionComponent = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        animation: "rotate(360deg) 10s linear infinite",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="url(#paint0_angular_2_4)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.7816 9.6007C23.3294 9.53003 23.8307 9.91677 23.9014 10.4645C23.9671 10.9737 24 11.4866 24 12C24 12.5523 23.5523 13 23 13C22.4477 13 22 12.5523 22 12C22 11.5722 21.9725 11.1448 21.9178 10.7204C21.8471 10.1727 22.2339 9.67136 22.7816 9.6007Z"
        fill="#111111"
      />
      <defs>
        <radialGradient
          id="paint0_angular_2_4"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 12) scale(12)"
        >
          <stop stopColor="#030303" stopOpacity="0" />
          <stop offset="1" stop-color="#030303" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default LoadingSvg;
