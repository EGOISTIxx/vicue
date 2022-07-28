import React from 'react'
import { MainLayout } from './SLayout'
import { Header } from '../Header/Header'

export const Layout: React.FC<
  React.PropsWithChildren<{
    breadcrumb?: {
      href?: string
      title?: string | string[] | undefined
    }[]
    isHiddenSearch?: boolean
    handleSearch?: (value: string) => void
  }>
> = (props) => {
  const { children, ...otherProps } = props

  return (
    <MainLayout>
      <Header isHiddenSearch={false} {...otherProps} />
      {children}
    </MainLayout>
  )
}
