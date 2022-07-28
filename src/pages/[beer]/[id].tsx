/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout/Layout'
import axios from 'axios'
import { BEER_API } from '../../constants/beerApi'
import Beer from '../../components/screens/Beer/Beer'

const BeerPage: NextPage = ({ beerData }: any) => {
  const router = useRouter()

  const breadcrumbs = useMemo(
    () => [
      {
        title: router.query.beer,
      },
    ],
    [router.query.beer]
  )

  return (
    <Layout isHiddenSearch={true} breadcrumb={breadcrumbs}>
      <Beer beer={beerData[0]} />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const urls = [
    'https://api.punkapi.com/v2/beers?page=1&per_page=80',
    'https://api.punkapi.com/v2/beers?page=2&per_page=80',
    'https://api.punkapi.com/v2/beers?page=3&per_page=80',
    'https://api.punkapi.com/v2/beers?page=4&per_page=80',
    'https://api.punkapi.com/v2/beers?page=5&per_page=80',
  ]

  const arrayFetchData = urls.map((url) =>
    fetch(url).then((res) => res.json())
  )

  const beersData = await Promise.allSettled(
    arrayFetchData
  ).then((res) => {
    return res.map((item: any) => {
      return item.value
    })
  })

  const paths = beersData
    .flat()
    .map((beer: { name: string; id: number }) => {
      return {
        params: {
          beer: `${beer.name}`,
          id: `${beer.id}`,
        },
      }
    })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const res = await axios.get(
    `${BEER_API}/beers/${context.params.id}`
  )

  const beerData = await res.data

  return {
    props: { beerData },
  }
}

export default BeerPage
