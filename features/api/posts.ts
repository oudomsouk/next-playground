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
    searchString?: string
  }
  addDelay?: boolean
}

export const usePosts = ({
  variables: { page = 1, searchString = '' },
  addDelay,
}: IPostQueryOptions) => {
  const result = useQuery('posts', () => fetchPosts(addDelay))
  const filtered = result.data?.filter((post) =>
    searchString ? post.title.startsWith(searchString) : true
  )

  return {
    ...result,
    data: filtered
      ? {
          posts: filtered.slice((page - 1) * 5, (page - 1) * 5 + 5),
          totalPosts: filtered.length,
        }
      : undefined,
  }
}
