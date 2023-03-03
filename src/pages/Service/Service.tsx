import {createEffect, createSignal} from "solid-js"

import ServiceLayout from "../../layout/ServiceLayout"
import {updateHeadTags} from "../../components/Head/Head";


export default function Service() {
  const [count, setCount] = createSignal(0)
  createEffect(() => {
    updateHeadTags({title: "Service"}, true)
  })
  return (
    <ServiceLayout>
      <main>
        <h1 class="text-2xl font-bold">Service</h1>

        <div class="flex items-center space-x-2">
          <button
            class="border rounded-lg px-2 border-gray-900"
            onClick={(): number => setCount(count() - 1)}>
              -
          </button>

          <output class="p-10px">Count: {count()}</output>

          <button
            class="border rounded-lg px-2 border-gray-900"
            onClick={(): number => setCount(count() + 1)}>
              +
          </button>
        </div>

      </main>
    </ServiceLayout>
  )
}
