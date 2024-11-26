import { FC } from "react";

type CrossIconProps = {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
};

const CrossIcon: FC<CrossIconProps> = ({
  width = "20",
  height = "20",
  fill = "none",
  stroke = "currentColor",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="4" height="4" fill={stroke} />
    <rect
      x="16"
      y="16"
      width="4"
      height="4"
      transform="rotate(180 16 16)"
      fill={stroke}
    />
    <rect width="4" height="4" fill={stroke} />
    <rect
      x="20"
      y="20"
      width="4"
      height="4"
      transform="rotate(180 20 20)"
      fill={stroke}
    />
    <rect x="4" y="12" width="4" height="4" fill={stroke} />
    <rect
      x="16"
      y="8"
      width="4"
      height="4"
      transform="rotate(180 16 8)"
      fill={stroke}
    />
    <rect y="16" width="4" height="4" fill={stroke} />
    <rect
      x="20"
      y="4"
      width="4"
      height="4"
      transform="rotate(180 20 4)"
      fill={stroke}
    />
    <rect x="8" y="8" width="4" height="4" fill={stroke} />
  </svg>
);

export default CrossIcon;
