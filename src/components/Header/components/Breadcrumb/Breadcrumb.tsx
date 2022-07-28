import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyledBreadcrumb } from './SBreadcrumb'

export const Breadcrumb: React.FC<{
  breadcrumb?: { href?: string; title?: string | string[] | undefined }[]
}> = (props) => {
  const { breadcrumb } = props

  const router = useRouter()

  return (
    <StyledBreadcrumb>
      <StyledBreadcrumb.Item>
        <Link href={'/'}>Главная </Link>
      </StyledBreadcrumb.Item>
      {breadcrumb?.map(({ href, title }) => {
        return (
          <StyledBreadcrumb.Item key={`${title}:${href}`}>
            {href ? (
              <Link href={href}>{title}</Link>
            ) : (
              title
            )}
          </StyledBreadcrumb.Item>
        )
      })}
    </StyledBreadcrumb>
  )
}
