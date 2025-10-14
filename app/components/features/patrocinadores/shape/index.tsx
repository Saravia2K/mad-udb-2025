import { type SVGProps } from "react";
import CornerArrow from "./corner-arrow";

type ShapeProps = SVGProps<SVGSVGElement> & {
  imageUrl?: string;
  imageX?: string | number;
  imageY?: string | number;
  imageWidth?: string | number;
  imageHeight?: string | number;
};

export default function Shape(props: ShapeProps) {
  const {
    imageHeight,
    imageWidth,
    imageX = 0,
    imageY = 0,
    imageUrl,
    ..._svgProps
  } = props;

  return (
    <div className="relative h-fit w-full">
      <CornerArrow className="absolute right-0 bottom-0 w-[15%]" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={917}
        height={459}
        viewBox="0 0 917 459"
        className="h-fit w-full"
        fill="none"
        {..._svgProps}
      >
        <defs>
          <clipPath id="sponshorships-shape">
            <path
              fill="#fff"
              d="M852.473.237c35.427 0 64.146 28.72 64.146 64.147v205.459c0 15.678-19.621 25.273-34.447 20.175-10.747-3.696-22.28-5.703-34.281-5.703-58.202 0-105.384 47.182-105.384 105.384 0 12.002 2.006 23.535 5.702 34.283 5.099 14.826-4.497 34.447-20.174 34.447H64.384c-35.427 0-64.147-28.721-64.147-64.148V64.384C.237 28.957 28.957.237 64.384.237h788.089Z"
            />
          </clipPath>
        </defs>
        <g clipPath="url(#sponshorships-shape)">
          <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" />
          {props.imageUrl && (
            <image
              href={imageUrl}
              width={imageWidth}
              height={imageHeight}
              x={imageX}
              y={imageY}
            />
          )}
        </g>
      </svg>
    </div>
  );
}
