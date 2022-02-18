import { usePosts } from '../../features/api/posts'
import { LoadingOverlay } from '@mantine/core'
import PostList from '../../components/post-list'
import PostListLayout from '../../layouts/post-list-layout'

const Client = (): JSX.Element => {
  const { data } = usePosts({ variables: { page: 1 }, addDelay: true })

  return (
    <PostListLayout header="Client-side Rendered">
      {data ? <PostList posts={data} /> : <LoadingOverlay visible />}
    </PostListLayout>
  )
}

export default Client
