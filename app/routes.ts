import {
    type RouteConfig,
    index,
    layout,
    route
} from "@remix-run/route-config";

export default [
    index("routes/_index.tsx"),
    layout("routes/redirect.tsx", [
        route("/fail", "routes/_index.tsx", {
            id: "fail"
        })
    ])
] satisfies RouteConfig;
