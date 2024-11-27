import { FC } from "react";

type VkIconProps = {
  width?: string;
  height?: string;
  fill?: string;
};

const VkIcon: FC<VkIconProps> = ({
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
      d="M21.2161 19H19.0343C18.2077 19 17.9532 18.2848 16.4663 16.6412C15.1749 15.2753 14.6029 15.094 14.2845 15.094C13.8346 15.094 13.7068 15.2323 13.7068 15.9055V18.0563C13.7068 18.6332 13.5406 18.9795 12.1411 18.9795C9.82678 18.9795 7.25887 17.4527 5.45832 14.6083C2.74295 10.4399 2 7.31773 2 6.67218C2 6.32482 2.1268 6 2.73825 6H4.92483C5.47805 6 5.68844 6.27769 5.90353 6.92323C6.98461 10.3282 8.78515 13.311 9.5281 13.311C9.80236 13.311 9.92916 13.1727 9.92916 12.4093V8.89265C9.84557 7.27059 9.06317 7.13124 9.06317 6.55537C9.06317 6.27769 9.27356 6 9.61075 6H13.0494C13.5143 6 13.6852 6.27769 13.6852 6.87507V11.6193C13.6852 12.1316 13.8956 12.313 14.0224 12.313C14.2967 12.313 14.5315 12.1316 15.0396 11.5763C16.6101 9.655 17.7353 6.69268 17.7353 6.69268C17.8818 6.34531 18.1363 6.02049 18.6896 6.02049H20.8761C21.5317 6.02049 21.6783 6.38835 21.5317 6.90069C21.2575 8.28809 18.5815 12.4083 18.5815 12.4083C18.3514 12.8243 18.2631 13.0057 18.5815 13.4699C18.8164 13.8172 19.58 14.5376 20.0881 15.1831C21.0227 16.341 21.7412 17.3124 21.9328 17.9846C22.1479 18.6516 21.8304 18.999 21.2133 18.999L21.2161 19Z"
      fill={fill}
    />
  </svg>
);

export default VkIcon;
