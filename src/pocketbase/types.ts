export interface Post {
  id: string
  collectionId: string
  collectionName: string
  created: string
  updated: string
  title: string
  slug: string
  text: string
  image: string
  description: string
}

export interface Collections {
  posts: Post
}
