import { List, Title } from '@mantine/core'
import { IPost } from '../types/post'

interface IPostListProps {
  posts: IPost[]
}

const PostList = ({ posts }: IPostListProps): JSX.Element => {
  return (
    <List
      center
      styles={(theme) => ({
        item: {
          margin: theme.spacing.sm,
          padding: theme.spacing.lg,
          backgroundColor: 'white',
        },
      })}
      listStyleType="none"
    >
      {posts.map((post, index) => (
        <List.Item key={post.id}>
          <span>
            <Title
              order={2}
              sx={(theme) => ({
                fontSize: theme.fontSizes.md,
              })}
            >
              {index + 1}. {post.title}
            </Title>
          </span>
          <span>{post.body}</span>
        </List.Item>
      ))}
    </List>
  )
}

export default PostList
