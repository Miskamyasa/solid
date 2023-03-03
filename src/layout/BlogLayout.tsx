import type {ParentProps} from "solid-js"

import RightSidebar from "../components/RightSidebar/RightSidebar"


export default function ContentLayout(props: ParentProps) {
  return (
    <div class="container flex items-start gap-6">
      <div class="flex-grow">
        {props.children}
      </div>
      <RightSidebar />
    </div>
  )
}
