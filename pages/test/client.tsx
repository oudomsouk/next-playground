import { usePosts } from '../../features/api/posts'
import { LoadingOverlay } from '@mantine/core'
import PostList from '../../components/post-list'
import PostListLayout from '../../layouts/post-list-layout'
import { usePostListPage } from '../../features/store/post-list-variables'

const Client = (): JSX.Element => {
  const { data } = usePosts({ variables: { page: 1 }, addDelay: true })
  const [page] = usePostListPage()

  return (
    <PostListLayout header="Client-side Rendered">
      {data ? (
        <PostList posts={data.posts} page={page} />
      ) : (
        <LoadingOverlay visible />
      )}
    </PostListLayout>
  )
}

export default Client
