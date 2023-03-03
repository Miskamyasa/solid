import {Component, lazy} from "solid-js"

import type {RouteDataFunc} from "@solidjs/router"

import Home from "../pages/Home"
import homeData from "../pages/home.data"


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
    title: "Information",
    path: "/information",
    component: lazy(() => import("../pages/Content")),
  },
  {
    title: "Service",
    path: "/service",
    component: lazy(() => import("../services/Service")),
  },
  {
    path: "**",
    component: lazy(() => import("../errors/404")),
  },
]
