import React, { useCallback, useRef, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout/Layout'
import { useGetBeers } from '../hooks/useGetBeers'
import { BeerCard } from '../components/BeerCard/BeerCard'
import Catalog from '../components/screens/Catalog/Catalog'

const Index: NextPage = () => {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const handleSearch = useCallback((value: string) => {
    setQuery(value)
    setPageNumber(1)
  }, [])

  return (
    <Layout
      isHiddenSearch={false}
      handleSearch={handleSearch}>
      <Catalog
        pageNumber={pageNumber}
        query={query}
        setPageNumber={setPageNumber}
      />
    </Layout>
  )
}

export default Index
