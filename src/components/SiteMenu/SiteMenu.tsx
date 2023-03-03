import {For} from "solid-js"

import {Link} from "@solidjs/router"

import {rootRoutes} from "../../navigation/rootRoutes"


function MenuItem(props: { title: string, href: string }) {
  return (
    <li class="px-4">
      <Link
        end
        activeClass="text-red-200"
        class="no-underline"
        href={props.href}>
        {props.title}
      </Link>
    </li>
  )
}

export default function SiteMenu() {
  return (
    <nav class="mx-4 grow">
      <ul class="flex items-center font-bold">
        <For each={rootRoutes}>
          {route => route.title && route.path.length > 2 && (
            <MenuItem
              href={route.path}
              title={route.title} />
          )}
        </For>
      </ul>
    </nav>
  )
}
