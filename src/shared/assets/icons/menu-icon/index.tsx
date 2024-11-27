import { FC } from "react";

type MenuIconProps = {
  width?: string;
  height?: string;
  fill?: string;
};

const MenuIcon: FC<MenuIconProps> = ({
  width = "30",
  height = "13",
  fill = "white",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 0H0V2H30V0ZM30 11H0V13H30V11Z"
      fill={fill}
    />
  </svg>
);

export default MenuIcon;
