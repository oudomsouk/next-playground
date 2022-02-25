import { fetchPosts, usePosts } from '../../features/api/posts'
import PostListLayout from '../../layouts/post-list-layout'
import PostList from '../../components/post-list'
import { LoadingOverlay } from '@mantine/core'
import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import {
  usePostListPage,
  usePostListSearch,
  usePostListVariables,
} from '../../features/store/post-list-variables'
import PaginationSection from '../../components/pagination-section'
import Range from '../../components/range'
import SearchBar from '../../components/search-bar'

const SearchBarWithData = (): JSX.Element => {
  const [searchString, setSearchString] = usePostListSearch()

  return (
    <SearchBar
      value={searchString}
      onChange={(event) => setSearchString(event.target.value)}
    />
  )
}

const PostListWithData = (): JSX.Element => {
  const variables = usePostListVariables()
  const { data } = usePosts({ variables })
  const [page] = usePostListPage()

  return (
    <>
      {data ? (
        <>
          <PostList posts={data.posts} page={page} />
        </>
      ) : (
        <LoadingOverlay visible />
      )}
    </>
  )
}

const RangeWithData = (): JSX.Element => {
  const variables = usePostListVariables()
  const { data } = usePosts({ variables })
  const [page] = usePostListPage()
  return <Range page={page} totalPosts={data?.totalPosts || 0} />
}

const PaginationSectionWithData = (): JSX.Element => {
  const variables = usePostListVariables()
  const { data } = usePosts({ variables })

  return <PaginationSection totalRecords={data?.totalPosts || 0} />
}

const StateManagement = (): JSX.Element => {
  return (
    <PostListLayout header="State Management">
      <SearchBarWithData />
      <PostListWithData />
      <RangeWithData />
      <PaginationSectionWithData />
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
