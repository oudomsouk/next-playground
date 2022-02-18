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

interface IPostQueryOptions {
  variables: {
    page: number
  }
  addDelay?: boolean
}

export const usePosts = ({ variables, addDelay }: IPostQueryOptions) => {
  const result = useQuery('posts', () => fetchPosts(addDelay))

  return {
    ...result,
    data: result.data?.slice(
      (variables.page - 1) * 10,
      (variables.page - 1) * 10 + 5
    ),
  }
}
