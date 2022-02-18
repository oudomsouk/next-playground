import { fetchPosts, usePosts } from '../../features/api/posts'
import PostListLayout from '../../layouts/post-list-layout'
import PostList from '../../components/post-list'
import { LoadingOverlay } from '@mantine/core'
import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import {
  usePostListPage,
  usePostListVariables,
} from '../../features/store/post-list-variables'
import PaginationSection from '../../components/pagination-section'
import Range from '../../components/range'

const RangeWithData = (): JSX.Element => {
  const [page] = usePostListPage()
  return <Range page={page} />
}

const PostListWithData = (): JSX.Element => {
  const variables = usePostListVariables()
  const { data } = usePosts({ variables })

  return (
    <>
      {data ? (
        <>
          <PostList posts={data} />
          <RangeWithData />
        </>
      ) : (
        <LoadingOverlay visible />
      )}
    </>
  )
}

const StateManagement = (): JSX.Element => {
  return (
    <PostListLayout header="State Management">
      <PostListWithData />
      <PaginationSection />
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
