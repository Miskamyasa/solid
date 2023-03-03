import {createResource} from "solid-js"

import {getRecordBySlug} from "../../pocketbase/pocketbase"


const HomeData = () => {
  const [data] = createResource(() => {
    return getRecordBySlug("posts", "/")
  })
  return data
}

export default HomeData
