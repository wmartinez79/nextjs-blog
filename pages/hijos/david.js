import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function David() {
  return (
    <Layout>
    <Head>
        <title>David Alejandro</title>
      </Head>
      <h1>Mi hijo David Alejandro</h1>
      <h2>
        <Link href="/">
          <a>Regresar al inicio</a>
        </Link>
      </h2>
    </Layout>
  )
}