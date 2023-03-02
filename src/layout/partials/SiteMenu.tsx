import {For, type JSXElement} from "solid-js"

import {Link} from "@solidjs/router"

import {rootRoutes} from "../../navigation/rootRoutes"


function MenuItem(props: { title: string, href: string }): JSXElement {
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


export default function SiteMenu(): JSXElement {
  return (
    <nav>
      <ul class="flex items-center font-bold ">
        <For each={rootRoutes}>
          {(route): JSXElement => route.title && (
            <MenuItem
              href={route.path}
              title={route.title} />
          )}
        </For>
      </ul>
    </nav>
  )
}
