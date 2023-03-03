import type {JSXElement, ParentProps} from "solid-js"


export default function SiteWrapper(props: ParentProps): JSXElement {
  return (
    <div class="w-screen h-screen overflow-hidden bg-amber-50 p-2 lg:p-3">
      <div class="h-full w-full overflow-hidden rounded-lg shadow-lg drop-shadow-md bg-gray-100 px-2 lg:p-3">
        {props.children}
      </div>
    </div>
  )
}
