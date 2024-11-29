import { forwardRef } from "react";

type FooterIconProps = {
  width?: string;
  height?: string;
  stroke?: string;
  fill?: string;
};

const FooterIcon = forwardRef<SVGSVGElement, FooterIconProps>(
  ({ width = "20", height = "20", stroke = "white", fill = "white" }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="18"
        stroke={stroke}
        strokeWidth="2"
      />
      <rect
        x="1.70711"
        y="17.7234"
        width="22.6505"
        height="1"
        transform="rotate(-45 1.70711 17.7234)"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  ),
);

export default FooterIcon;
