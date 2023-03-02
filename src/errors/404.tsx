import type {JSXElement} from "solid-js"

import BlogLayout from "../layout/BlogLayout"


function NotFound(): JSXElement {
  return (
    <BlogLayout>
      <section class="text-gray-700 p-8">
        <h1 class="text-2xl font-bold">404: Not Found</h1>
        <p class="mt-4">It's gone 😞</p>
      </section>
    </BlogLayout>
  )
}

export default NotFound
