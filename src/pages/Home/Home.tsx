import {JSXElement, Suspense} from "solid-js"

import {useRouteData} from "@solidjs/router"

import FullLayout from "../../layout/FullLayout"


export default function Home(): JSXElement {
  const name = useRouteData<() => () => string>()

  return (
    <FullLayout>
      <main class=" text-gray-700 p-8 bg-paper">
        <h1 class="text-2xl font-bold">HomePage</h1>

        <p class="mt-4">A home of this website.</p>

        <p class="mt-4">
          <span>We love</span>
          <Suspense fallback={<span>...</span>}>
            <span class="font-bold">&nbsp;{name()}</span>
          </Suspense>
        </p>
      </main>
    </FullLayout>
  )
}
