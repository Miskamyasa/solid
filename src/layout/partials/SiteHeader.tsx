import type {JSXElement} from "solid-js"

import SiteMenu from "./SiteMenu"


export default function SiteHeader(): JSXElement {
  return (
    <div class="h-14 mx-5 mt-3 mb-5 overflow-hidden rounded-md bg-gray-200 shadow-md flex justify-center items-center">
      <SiteMenu />
    </div>
  )
}
