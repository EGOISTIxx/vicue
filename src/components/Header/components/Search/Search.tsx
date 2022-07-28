import React from 'react'
import { StyledSearch } from './SSearch'

export const Search: React.FC<{
  handleSearch: ((value: string) => void | undefined) | undefined
}> = (props) => {
  const { handleSearch } = props

  return (
    <StyledSearch
      placeholder='Введите название пива'
      size='large'
      enterButton='Найти'
      onSearch={handleSearch}
    />
  )
}
