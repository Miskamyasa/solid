import {createSignal, JSXElement} from "solid-js"

import ServiceLayout from "../layout/ServiceLayout"


export default function Service(): JSXElement {
  const [count, setCount] = createSignal(0)

  return (
    <ServiceLayout>
      <main>
        <h1 class="text-2xl font-bold">Home</h1>
        <p class="mt-4">This is the home page.</p>

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
