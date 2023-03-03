import PocketBase, {ListResult, RecordService} from "pocketbase"

import type {Collections} from "./types"


const pb = new PocketBase("http://127.0.0.1:8090")

export {pb}

function getCollection<T extends keyof Collections>(name: T): RecordService | null {
  try {
    return pb.collection(name)
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getRecord<T extends keyof Collections>(
  collection: T,
  id: string,
): Promise<Collections[T] | null> {
  try {
    const collectionData = getCollection(collection)
    if (collectionData) {
      return collectionData.getOne(id)
    }
    return null
  } catch (error) {
    return null
  }
}

export async function getRecordBySlug<T extends keyof Collections>(
  collection: T,
  slug: string,
): Promise<Collections[T] | null> {
  try {
    const collectionData = getCollection(collection)
    if (collectionData) {
      return collectionData.getFirstListItem(`slug="${slug}"`)
    }
    return null
  } catch (error) {
    return null
  }
}

export async function getRecords<T extends keyof Collections>(
  collection: T,
): Promise<ListResult<Collections[T]> | null> {
  try {
    const collectionData = getCollection(collection)
    if (collectionData) {
      return collectionData.getList(1, 50)
    }
    return null
  } catch (error) {
    return null
  }
}
