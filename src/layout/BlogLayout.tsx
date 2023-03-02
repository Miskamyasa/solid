import type {JSXElement, ParentProps} from "solid-js"

import RightSidebar from "./partials/RightSidebar"


export default function BlogLayout(props: ParentProps): JSXElement {
  return (
    <div class="container flex items-start gap-5">
      <div class="flex-grow">
        {props.children}
      </div>
      <RightSidebar />
    </div>
  )
}
