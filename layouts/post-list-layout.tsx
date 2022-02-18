import { AppShell, Center, Container, Header, Title } from '@mantine/core'
import { PropsWithChildren } from 'react'

interface IPostListLayoutProps {
  header: string
}

const PostListLayout = ({
  header,
  children,
}: PropsWithChildren<IPostListLayoutProps>): JSX.Element => {
  return (
    <AppShell
      header={
        <Header height={60}>
          <Center>
            <Title order={1}>{header}</Title>
          </Center>
        </Header>
      }
      padding="sm"
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.gray[0],
        },
      })}
    >
      <Container size="md" style={{ minHeight: '100vh' }}>
        {children}
      </Container>
    </AppShell>
  )
}

export default PostListLayout
