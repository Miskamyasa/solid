import type {ParentProps} from "solid-js"

import SiteHeader from "../components/SiteHeader/SiteHeader"
import SiteWrapper from "../components/SiteWrapper/SiteWrapper"


export default function RootLayout(props: ParentProps) {
  return (
    <SiteWrapper>
      <SiteHeader />
      {props.children}
    </SiteWrapper>
  )
}
