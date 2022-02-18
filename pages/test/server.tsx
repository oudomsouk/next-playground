import { fetchPosts, usePosts } from '../../features/api/posts'
import { LoadingOverlay } from '@mantine/core'
import PostList from '../../components/post-list'
import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import PostListLayout from '../../layouts/post-list-layout'

const Server = (): JSX.Element => {
  const { data } = usePosts({ variables: { page: 1 } })

  return (
    <PostListLayout header="Server-side Rendered">
      {data ? <PostList posts={data} /> : <LoadingOverlay visible />}
    </PostListLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('posts', () => fetchPosts())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Server
