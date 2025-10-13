import type { Color } from "./category-item/category-item-body";

import packaging from "./images/packaging.svg";
import socialMedia from "./images/social_media.svg";
import multimedia from "./images/multimedia.svg";
import uxui from "./images/uxui.svg";
import branding from "./images/branding.svg";
import ilustracion from "./images/ilustracion.svg";
import diseno3d from "./images/diseno3d.svg";
import editorial from "./images/editorial.svg";

const CATEGORIES: Category[] = [
  {
    image: packaging,
    colors: ["#C5F9C5", "#6FEF6F", "#0FEF0F"],
    category: "packaging",
    label: "PACKAGING",
  },
  {
    image: socialMedia,
    colors: ["#FFCEB6", "#FF7936", "#FF5F10"],
    category: "social-media",
    label: "SOCIAL MEDIA",
    x: "15%",
  },
  {
    image: multimedia,
    colors: ["#ACFFFD", "#3FD2CE", "#04E7DC"],
    category: "multimedia",
    label: "MULTIMEDIA",
  },
  {
    image: uxui,
    colors: ["#D2BFFF", "#8D5FFF", "#601FFF"],
    category: "uxui",
    label: "UX | UI",
  },
  {
    image: branding,
    colors: ["#EEC2FE", "#D35CFE", "#BA03FE"],
    category: "branding",
    label: "BRANDING",
  },
  {
    image: ilustracion,
    colors: ["#FFCACA", "#FF4A4A", "#FF2424"],
    category: "ilustracion",
    label: "ILUSTRACIÓN",
  },
  {
    image: diseno3d,
    colors: ["#FFDFFF", "#FF76FF", "#FF36FF"],
    category: "3d",
    label: "DISEÑO 3D",
  },
  {
    image: editorial,
    colors: ["#FBE1B9", "#FBB03B", "#FBA115"],
    category: "editorial",
    label: "EDITORIAL",
  },
];
export default CATEGORIES;

type Category = {
  image: string;
  colors: [Color, Color, Color];
  category: string;
  label: string;
  x?: string | number;
};
