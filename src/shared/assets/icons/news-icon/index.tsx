import { FC } from "react";

type NewsIconProps = {
  width?: string;
  height?: string;
  fill?: string;
};

const NewsIcon: FC<NewsIconProps> = ({
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
      d="M4 0H8H12H16H20H24H28H32H36V4H32H28H24H20H16H12H8H4V0ZM4 28H0V24V20V16V12V8V4H4V8V12V16V20V24V28ZM24 36V32V28H20H16H12H8H4V32H8H12H16H20V36V40H24H28V36H32V32H36V28H40V24V20V16V12V8V4H36V8V12V16V20V24V28H32V32H28V36H24ZM14 18V14H10V18H14ZM22 14V18H18V14H22ZM30 18V14H26V18H30Z"
      fill={fill}
    />
  </svg>
);

export default NewsIcon;
