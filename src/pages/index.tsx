import type { NextPage } from 'next'
import Head from 'next/head'
import { Body, Form } from '../components'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>Obten tu NFT</title>
        <meta name="description" content="Obten tu NFT" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Body queryId={!!query?.referred ? `${query.referred}` : ""} />
    </div>
  )
}

export default Home
