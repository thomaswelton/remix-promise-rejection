import {
    type RouteConfig,
    index,
} from "@remix-run/route-config";

export default [
    index("routes/_index.tsx"),
] satisfies RouteConfig;