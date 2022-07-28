import React, { useEffect, useState } from 'react'
import axios, { Canceler } from 'axios'
import { BEER_API } from '../constants/beerApi'

export const useGetBeers = (
  query: string,
  pageNumber: number
) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [beers, setBeers] = useState<any[]>([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setBeers([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel: Canceler
    axios
      .get(`${BEER_API}/beers`, {
        params: !!query.length
          ? {
              page: pageNumber,
              per_page: 10,
              beer_name: query,
            }
          : {
              page: pageNumber,
              per_page: 10,
            },
        cancelToken: new axios.CancelToken(
          (c) => (cancel = c)
        ),
      })
      .then((res) => {
        setBeers((prevBeers) => [...prevBeers, ...res.data])
        setHasMore(!!res.data.length)
        setLoading(false)
      })
      .catch((error) => {
        if (axios.isCancel(error)) return
        setError(true)
      })

    return () => cancel()
  }, [pageNumber, query])

  return {
    loading,
    error,
    beers,
    hasMore,
  }
}
