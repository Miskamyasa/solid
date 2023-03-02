import type {JSXElement, ParentProps} from "solid-js"


export default function FullLayout(props: ParentProps): JSXElement {
  return (
    <div class="container flex-grow">
      {props.children}
    </div>
  )
}
