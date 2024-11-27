import { FC } from "react";

type FbIconProps = {
  width?: string;
  height?: string;
  fill?: string;
};

const FbIcon: FC<FbIconProps> = ({
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
      d="M13.704 22.0001V12.5268H16.3191L16.6656 9.26221H13.704L13.7085 7.62827C13.7085 6.77682 13.7894 6.32059 15.0123 6.32059H16.6471V3.05566H14.0317C10.8901 3.05566 9.78441 4.63933 9.78441 7.30255V9.26258H7.82617V12.5271H9.78441V22.0001H13.704Z"
      fill={fill}
    />
  </svg>
);

export default FbIcon;
