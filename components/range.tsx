import { Text } from '@mantine/core'

interface IRangeProps {
  page: number
  totalPosts: number
}

const Range = ({ page, totalPosts }: IRangeProps): JSX.Element => {
  return (
    <Text
      sx={(theme) => ({
        marginLeft: theme.spacing.sm,
      })}
    >
      <strong>{Math.min((page - 1) * 5 + 1, totalPosts)}</strong> to{' '}
      <strong>{Math.min((page - 1) * 5 + 5, totalPosts)}</strong> of{' '}
      <strong>{totalPosts}</strong> results
    </Text>
  )
}

export default Range
