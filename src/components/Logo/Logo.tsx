import {Link} from "@solidjs/router"

import logoSrc from "./logo.png"


interface Props {
  width?: number
}

export default function Logo(props: Props) {
  return (
    <Link href="/">
      <img
        alt="Logo"
        src={logoSrc}
        width={props.width ?? 100} />
    </Link>
  )
}
