import type {JSXElement,ParentProps} from "solid-js"

import LeftSidebar from "./partials/LeftSidebar"


export default function ServiceLayout(props: ParentProps): JSXElement {
  return (
    <div class="container flex items-start gap-6">
      <LeftSidebar />
      <div class="flex-grow">
        {props.children}
      </div>
    </div>
  )
}
