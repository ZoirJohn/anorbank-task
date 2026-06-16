import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("../pages/Home.tsx"), route("/comparison", "../pages/Comparison.tsx")] satisfies RouteConfig;
