import type {JSXElement} from "solid-js"

import logoSrc from "./logo.png"


interface Props {
  width?: number
}

export default function Logo(props: Props): JSXElement {
  return (
    <img
      alt="Logo"
      src={logoSrc}
      width={props.width ?? 100} />
  )
}
