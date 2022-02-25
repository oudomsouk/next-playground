import { TextInput } from '@mantine/core'
import { ChangeEventHandler } from 'react'

interface ISearchBarProps {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const SearchBar = ({ value, onChange }: ISearchBarProps) => {
  return (
    <TextInput
      value={value}
      onChange={onChange}
      label="Search by title"
      placeholder="e.g. voluptate"
      sx={(theme) => ({
        padding: theme.spacing.sm,
      })}
    />
  )
}

export default SearchBar
