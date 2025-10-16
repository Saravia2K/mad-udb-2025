import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("*", "./routes/404.tsx"),
  layout("./routes/layout.tsx", [
    index("./routes/home.tsx"),
    route("patrocinadores", "./routes/patrocinadores.tsx"),
    route("portafolios", "./routes/portafolios.tsx"),
    route("sobre-el-evento", "./routes/sobre-el-evento.tsx"),
    route(":profile-slug", "./routes/profile.tsx"),
  ]),
] satisfies RouteConfig;
