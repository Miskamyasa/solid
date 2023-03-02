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
