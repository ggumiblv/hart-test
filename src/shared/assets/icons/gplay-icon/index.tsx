import { FC } from "react";

type GplayIconProps = {
  width?: string;
  height?: string;
  fill?: string;
};

const GplayIcon: FC<GplayIconProps> = ({
  width = "24",
  height = "24",
  fill = "white",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4018 11.2391L6.749 3.45741L16.4856 9.12584L14.4018 11.2391ZM4.7523 3C4.30125 3.23911 4 3.67515 4 4.24115V19.7589C4 20.3249 4.30181 20.7609 4.7523 21L13.6501 11.998L4.7523 3ZM19.4954 10.933L17.4532 9.73404L15.1752 12.002L17.4532 14.2699L19.537 13.071C20.1611 12.5685 20.1611 11.436 19.4954 10.933ZM6.74955 20.5471L16.4862 14.8787L14.4024 12.7654L6.74955 20.5471Z"
      fill={fill}
    />
  </svg>
);

export default GplayIcon;
