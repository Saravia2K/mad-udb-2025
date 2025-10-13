import { type SVGProps } from "react";
import CornerArrow from "./corner-arrow";

interface ResponsiveShapeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  imageUrl?: string;
}

const Shape = ({
  color = "#5C5C76",
  imageUrl,
  ...props
}: ResponsiveShapeProps) => {
  return (
    <div className="relative z-3 md:col-span-2">
      <CornerArrow className="absolute right-0 bottom-0 h-fit w-[7.5%]" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 1520 704"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        <defs>
          {/* ClipPath para recortar la imagen con la forma del SVG */}
          <clipPath id="shapeClip">
            <path d="M1422.6 0c53.79 0 97.4 43.607 97.4 97.398V542.83c0 13.987-18.07 22.518-31.3 17.958-8.9-3.102-18.65-4.787-28.7-4.787-48.6 0-88 39.399-88 88 0 10.05 1.68 19.707 4.79 28.704 4.56 13.222-3.97 31.296-17.96 31.296H97.398C43.607 704 0 660.393 0 606.602V97.398C0 43.607 43.607 0 97.398 0H1422.6Z" />
          </clipPath>
        </defs>

        {/* Grupo con clipPath para la imagen */}
        <g clipPath="url(#shapeClip)">
          {/* Fondo con imagen o color sólido. Usamos <image> con preserveAspectRatio="none" para
              que ocupe exactamente 100% del ancho y 100% del alto del viewBox sin recortarse. */}
          {imageUrl ? (
            <image
              href={imageUrl}
              x="0"
              y="0"
              width="1520"
              height="704"
              preserveAspectRatio="none"
              aria-hidden="true"
            />
          ) : (
            <path
              fill={color}
              d="M1422.6 0c53.79 0 97.4 43.607 97.4 97.398V542.83c0 13.987-18.07 22.518-31.3 17.958-8.9-3.102-18.65-4.787-28.7-4.787-48.6 0-88 39.399-88 88 0 10.05 1.68 19.707 4.79 28.704 4.56 13.222-3.97 31.296-17.96 31.296H97.398C43.607 704 0 660.393 0 606.602V97.398C0 43.607 43.607 0 97.398 0H1422.6Z"
            />
          )}
        </g>
      </svg>
    </div>
  );
};

export default Shape;
