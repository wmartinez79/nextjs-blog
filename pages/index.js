import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hola, mi nombre es William Martinez, soy un software developer que esta probando Next.js</p>
        <p>
          (Este es un sitio de web de ejemplo - tu construiras un sitio como este{' '}
          <a href="https://nextjs.org/learn">con el tutorial de Next.js</a>.)
        </p>
      </section>
    </Layout>
  )
}