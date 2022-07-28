import React from 'react'
import { HeaderWrapper } from './SHeader'
import { Breadcrumb } from './components/Breadcrumb/Breadcrumb'
import { Search } from './components/Search/Search'

export const Header: React.FC<{
  breadcrumb?: { href?: string; title?: string | string[] | undefined }[]
  isHiddenSearch?: boolean
  handleSearch?: ((value: string) => void | undefined) | undefined
}> = (props) => {
  const { breadcrumb, isHiddenSearch, handleSearch } = props

  return (
    <HeaderWrapper>
      {!isHiddenSearch && <Search handleSearch={handleSearch}/>}
      <Breadcrumb breadcrumb={breadcrumb} />
    </HeaderWrapper>
  )
}
