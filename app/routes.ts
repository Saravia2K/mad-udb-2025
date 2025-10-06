import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("*", "./routes/redirect-coming-soon.tsx"),
  index("routes/home.tsx"),
  route("proximamente", "./routes/proximamente.tsx"),
] satisfies RouteConfig;
