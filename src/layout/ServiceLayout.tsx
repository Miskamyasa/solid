import type {ParentProps} from "solid-js"

import LeftSidebar from "../components/LeftSidebar/LeftSidebar"


export default function ServiceLayout(props: ParentProps) {
  return (
    <div class="container flex items-start gap-6">
      <LeftSidebar />
      <div class="flex-grow">
        {props.children}
      </div>
    </div>
  )
}
