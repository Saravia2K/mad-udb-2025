import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("*", "./routes/redirect-coming-soon.tsx"),
  route("proximamente", "./routes/proximamente.tsx"),
  layout("./routes/layout.tsx", [
    index("./routes/home.tsx"),
    route("patrocinadores", "./routes/patrocinadores.tsx"),
    route("portafolios", "./routes/portafolios.tsx"),
    route(":profile-slug", "./routes/profile.tsx"),
  ]),
] satisfies RouteConfig;
