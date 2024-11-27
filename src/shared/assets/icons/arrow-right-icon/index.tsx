import { FC } from "react";

type ArrowRightIconProps = {
  width?: string;
  height?: string;
  fill?: string;
};

const ArrowRightIcon: FC<ArrowRightIconProps> = ({
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
      d="M20 2H24V6H20V2ZM28 10H24V6H28V10ZM32 14H28V10H32V14ZM36 18V14H32V18H28H24H20H16H12H8H4H0V22H4H8H12H16H20H24H28H32V26H28V30H24V34H20V38H24V34H28V30H32V26H36V22H40V18H36ZM36 18H32V22H36V18Z"
      fill={fill}
    />
  </svg>
);

export default ArrowRightIcon;
