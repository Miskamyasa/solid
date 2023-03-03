import {createRoot, createSignal} from "solid-js"

import {Meta, Title} from "@solidjs/meta"


const separator = " · "

const head = createRoot(() => {
  const [meta, setMeta] = createSignal({
    title: "Great site",
    description: "A great site for great people",
  })

  const setTitle = (title: string) => {
    const _t = title.trim()
    if (!_t || _t === meta().title) return
    setMeta({...meta(), title: _t})
  }

  const appendTitle = (str: string) => {
    const _s = str.trim()
    if (!_s) return

    const [title, old] = meta().title.split(separator)
    if (_s === old) return

    setMeta({...meta(), title: title + separator + _s})
  }

  const setDescription = (description: string) => {
    const d = description.trim()
    if (!d || d === meta().description) return

    setMeta({...meta(), description})
  }

  return {meta, setTitle, appendTitle, setDescription}
})

export const updateHeadTags = (data?: {title?: string, description?: string}, replace = false) => {
  if (data) {
    const {title, description} = data
    if (title) {
      replace ? head.setTitle(title) : head.appendTitle(title)
    }
    if (description) {
      head.setDescription(description)
    }
  }
}

export default function Head() {
  const {meta} = head
  return (
    <>
      <Title>{meta().title}</Title>
      <Meta
        content={meta().description}
        name="description" />
    </>
  )
}
