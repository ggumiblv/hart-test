import { FC } from "react";

type CrossIconHoverProps = {
  width?: string;
  height?: string;
  stroke?: string;
};

const CrossIconHover: FC<CrossIconHoverProps> = ({
  width = "20",
  height = "20",
  stroke = "#131516",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4.5" y="4.5" width="3" height="3" stroke={stroke} />
    <rect
      x="15.5"
      y="15.5"
      width="3"
      height="3"
      transform="rotate(180 15.5 15.5)"
      stroke={stroke}
    />
    <rect x="0.5" y="0.5" width="3" height="3" stroke={stroke} />
    <rect
      x="19.5"
      y="19.5"
      width="3"
      height="3"
      transform="rotate(180 19.5 19.5)"
      stroke={stroke}
    />
    <rect x="4.5" y="12.5" width="3" height="3" stroke={stroke} />
    <rect
      x="15.5"
      y="7.5"
      width="3"
      height="3"
      transform="rotate(180 15.5 7.5)"
      stroke={stroke}
    />
    <rect x="0.5" y="16.5" width="3" height="3" stroke={stroke} />
    <rect
      x="19.5"
      y="3.5"
      width="3"
      height="3"
      transform="rotate(180 19.5 3.5)"
      stroke={stroke}
    />
    <rect x="8.5" y="8.5" width="3" height="3" stroke={stroke} />
  </svg>
);

export default CrossIconHover;
