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

  console.log(beerData)

  return (
    <Layout isHiddenSearch={true} breadcrumb={breadcrumbs}>
      <Beer beer={beerData[0]} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const res = await axios.get(
    `${BEER_API}/beers/${context.params.id}`
  )

  const beerData = await res.data

  return {
    props: { beerData },
  }
}

export default BeerPage
