import { Text } from '@mantine/core'

interface IRangeProps {
  page: number
}

const Range = ({ page }: IRangeProps): JSX.Element => {
  return (
    <Text
      sx={(theme) => ({
        marginLeft: theme.spacing.sm,
      })}
    >
      <strong>{(page - 1) * 5 + 1}</strong> to{' '}
      <strong>{(page - 1) * 5 + 5}</strong> of <strong>100</strong> results
    </Text>
  )
}

export default Range
