import { IPost } from '../../types/post'
import { useQuery } from 'react-query'

const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export const fetchPosts = async (addDelay?: boolean): Promise<IPost[]> => {
  if (addDelay) {
    await delay(2000)
  }

  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  )
}

export const usePosts = (addDelay?: boolean) => {
  return useQuery('posts', () => fetchPosts(addDelay))
}
