import type {JSXElement} from "solid-js"

import {BiRegularLogInCircle} from "solid-icons/bi"

import Logo from "../../components/Logo/Logo"

import SiteMenu from "./SiteMenu"


export default function SiteHeader(): JSXElement {
  return (
    <div class="container row overflow-hidden h-14 my-5 rounded-lg bg-zinc-700 shadow-md text-zinc-100">
      <Logo />
      <SiteMenu />
      <BiRegularLogInCircle size={24} />
    </div>
  )
}
