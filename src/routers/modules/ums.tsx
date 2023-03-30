import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// dashboard 模块
const dashboardRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "UMS"
		},
		children: [
			{
				path: "/ums/admin",
				element: lazyLoad(React.lazy(() => import("@/views/dashboard/dataVisualize/index"))),
				meta: {
					requiresAuth: true,
					title: "用户列表",
					key: "dataVisualize"
				}
			},
			{
				path: "/ums/role",
				element: lazyLoad(React.lazy(() => import("@/views/dashboard/embedded/index"))),
				meta: {
					requiresAuth: true,
					title: "角色列表",
					key: "embedded"
				}
			},
			{
				path: "/ums/menu",
				element: lazyLoad(React.lazy(() => import("@/views/dashboard/dataVisualize/index"))),
				meta: {
					requiresAuth: true,
					title: "菜单列表",
					key: "dataVisualize"
				}
			},
			{
				path: "/ums/resource",
				element: lazyLoad(React.lazy(() => import("@/views/dashboard/embedded/index"))),
				meta: {
					requiresAuth: true,
					title: "资源列表",
					key: "embedded"
				}
			}
		]
	}
];

export default dashboardRouter;
