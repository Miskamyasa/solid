import type {ParentProps, JSXElement} from "solid-js"

import SiteHeader from "./partials/SiteHeader"
import SiteWrapper from "./partials/SiteWrapper"


export default function RootLayout(props: ParentProps): JSXElement {
  return (
    <SiteWrapper>
      <SiteHeader />
      {props.children}
    </SiteWrapper>
  )
}
