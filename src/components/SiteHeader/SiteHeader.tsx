import {BiRegularLogInCircle} from "solid-icons/bi"
import {ImSpinner9} from "solid-icons/im"

import Logo from "../Logo/Logo"
import SiteMenu from "../SiteMenu/SiteMenu"


export default function SiteHeader() {
  return (
    <div class="container row overflow-hidden h-14 my-2 lg:my-3 rounded-lg shadow-md bg-zinc-700 text-zinc-100">
      <Logo />
      <SiteMenu />
      {/* {data.loading && <ImSpinner9  class="animation-rotate" />} */}
      <BiRegularLogInCircle size={24} />
    </div>
  )
}
