import { fetchPosts, usePosts } from '../../features/api/posts'
import PostListLayout from '../../layouts/post-list-layout'
import PostList from '../../components/post-list'
import { LoadingOverlay } from '@mantine/core'
import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'

const StateManagement = (): JSX.Element => {
  const { data } = usePosts()

  return (
    <PostListLayout header="State Management">
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

export default StateManagement
