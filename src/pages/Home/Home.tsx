import {createEffect, Suspense} from "solid-js"

import {useRouteData} from "@solidjs/router"

import {updateHeadTags} from "../../components/Head/Head"
import FullLayout from "../../layout/FullLayout"

import type HomeData from "./home.data"


export default function Home() {
  const data = useRouteData<typeof HomeData>()

  createEffect(() => {
    const payload = data()
    if (!data.loading && payload) {
      updateHeadTags(payload)
    }
  })

  return (
    <FullLayout>
      <main class=" text-gray-700 p-8 bg-paper">
        <h1 class="text-2xl font-bold">HomePage</h1>

        <p class="mt-4">A home of this website.</p>

        <p class="mt-4">
          <span>We love</span>
          <Suspense fallback={<span>...</span>}>
            <span class="font-bold">&nbsp;</span>
            <span>{JSON.stringify(data(), null, 2)}</span>
          </Suspense>
        </p>
      </main>
    </FullLayout>
  )
}
