import {Component, lazy} from "solid-js"

import type {RouteDataFunc} from "@solidjs/router"

import AboutData from "../pages/about.data"
import Home from "../pages/Home"


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
  },
  {
    title: "Blog",
    path: "/blog",
    component: lazy(() => import("../pages/Blog")),
  },
  {
    title: "Service",
    path: "/service",
    component: lazy(() => import("../services/Service")),
  },
  {
    title: "About",
    path: "/about",
    component: lazy(() => import("../pages/About")),
    data: AboutData,
  },
  {
    path: "**",
    component: lazy(() => import("../errors/404")),
  },
]
