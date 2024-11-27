import { FC } from "react";

type FolderIconProps = {
  width?: string;
  height?: string;
  fill?: string;
};

const FolderIcon: FC<FolderIconProps> = ({
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
      d="M8 8H12H16H20H24V12H20H16H12H8V8ZM4 16V12H8V16H4ZM4 36H0V32V28V24V20V16H4V20V24V28V32V36ZM36 36H32H28H24H20H16H12H8H4V40H8H12H16H20H24H28H32H36V36ZM36 32V36H40V32V28V24V20V16H36V12H32H28H24V16H28H32H36V20V24V28V32Z"
      fill={fill}
    />
  </svg>
);

export default FolderIcon;
