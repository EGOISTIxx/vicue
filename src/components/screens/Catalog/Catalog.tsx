import React, {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useRef,
} from 'react'
import { useGetBeers } from '../../../hooks/useGetBeers'
import { BeerCard } from '../../BeerCard/BeerCard'
import { CatalogWrapper } from './SCatalog'

const Catalog: React.FC<{
  query: string
  pageNumber: number
  setPageNumber: Dispatch<SetStateAction<number>>
}> = (props) => {
  const { pageNumber, setPageNumber, query } = props

  const observer = useRef<any>()

  const { beers, error, hasMore, loading } = useGetBeers(
    query,
    pageNumber
  )

  const lastBeerElemRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPageNumber(
              (prevPageNumber) => prevPageNumber + 1
            )
          }
        }
      )
      if (node) observer.current.observe(node)
    },
    [hasMore, loading, setPageNumber]
  )

  return (
    <CatalogWrapper>
      <div>
        {beers.map((beer, index) => {
          if (beers.length === index + 1) {
            return (
              <BeerCard
                elemRef={lastBeerElemRef}
                key={beer.id}
                id={beer.id}
                name={beer.name}
                image={beer.image_url}
                description={beer.description}
              />
            )
          } else {
            return (
              <BeerCard
                key={beer.id}
                id={beer.id}
                name={beer.name}
                image={beer.image_url}
                description={beer.description}
              />
            )
          }
        })}
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </div>
    </CatalogWrapper>
  )
}

export default memo(Catalog)
