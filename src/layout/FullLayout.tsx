import type {ParentProps} from "solid-js"


export default function FullLayout(props: ParentProps) {
  return (
    <div class="container flex-grow">
      {props.children}
    </div>
  )
}
