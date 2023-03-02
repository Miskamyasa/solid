import type {JSXElement} from "solid-js"

import {Link, useLocation} from "@solidjs/router"


export default function SiteMenu(): JSXElement {
  const location = useLocation()

  return (
    <nav class="bg-gray-200 text-gray-900 px-4">
      <ul class="flex items-center">
        <li class="py-2 px-4">
          <Link
            end
            activeClass="text-red-200"
            class="no-underline"
            href="/">
            Home
          </Link>
        </li>
        <li class="py-2 px-4 px-4">
          <Link
            activeClass="text-red-200"
            class="no-underline"
            href="/about">
            About
          </Link>
        </li>
        <li class="py-2 px-4">
          <Link
            activeClass="text-red-200"
            class="no-underline"
            href="/error">
            Error
          </Link>
        </li>

        <li class="text-sm flex items-center space-x-1 ml-auto">
          <span>URL:</span>
          <input
            readOnly
            class="w-75px p-1 bg-white text-sm rounded-lg"
            type="text"
            value={location.pathname} />
        </li>
      </ul>
    </nav>
  )
}
