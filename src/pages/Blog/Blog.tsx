import {createEffect} from "solid-js"

import {updateHeadTags} from "../../components/Head/Head"
import ContentLayout from "../../layout/BlogLayout"


export default function Blog() {
  createEffect(() => {
    updateHeadTags({title: "Blog"}, true)
  })
  return (
    <ContentLayout>
      <main>
        Content
      </main>
    </ContentLayout>
  )
}
