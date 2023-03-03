import {Component, lazy} from "solid-js"

import type {RouteDataFunc} from "@solidjs/router"

import Home from "../pages/Home/Home"
import homeData from "../pages/Home/home.data"


type RouteData = {
  title?: string,
  path: string,
  component: Component,
  data?: RouteDataFunc,
  children?: RouteData[],
}

export const rootRoutes: RouteData[] = [
  {
    title: "Home",
    path: "/",
    component: Home,
    data: homeData,
  },
  {
    title: "Blog",
    path: "/blog",
    component: lazy(() => import("../pages/Blog/Blog")),
  },
  {
    title: "Service",
    path: "/service",
    component: lazy(() => import("../pages/Service/Service")),
  },
  {
    path: "**",
    component: lazy(() => import("../errors/404")),
  },
]
