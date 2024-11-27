import { FC } from "react";

type LetterIconProps = {
  width?: string;
  height?: string;
  fill?: string;
};

const LetterIcon: FC<LetterIconProps> = ({
  width = "40",
  height = "40",
  fill = "#00FFA3",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4H8H12H16H20H24H28H32H36V8H40V12V16V20V24V28V32H36V28V24V20V16V12H32V8H28H24H20H16H12H8V12H4V16V20V24V28V32H0V28V24V20V16V12V8H4V4ZM12 16H8V12H12V16ZM16 20H12V16H16V20ZM24 20V24H20H16V20H20H24ZM28 16V20H24V16H28ZM28 16H32V12H28V16ZM4 32H8H12H16H20H24H28H32H36V36H32H28H24H20H16H12H8H4V32Z"
      fill={fill}
    />
  </svg>
);

export default LetterIcon;
