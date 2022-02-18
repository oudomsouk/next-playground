import { Pagination } from '@mantine/core'
import { usePostListPage } from '../features/store/post-list-variables'

const PaginationSection = (): JSX.Element => {
  const [page, setPage] = usePostListPage()

  return (
    <Pagination
      total={20}
      page={page}
      onChange={(page) => {
        setPage(page)
      }}
      style={{
        position: 'fixed',
      }}
      sx={(theme) => ({
        bottom: theme.spacing.lg,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      })}
    />
  )
}

export default PaginationSection
