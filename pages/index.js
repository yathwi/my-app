import Head from 'next/head'
import PageHeader from '../src/component/PageHeader'
import Main from '../src/component/Main'
import Hero from '../src/component/Hero'
import Footer from '../src/component/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />
      <Hero />
      <Main /> 
      <Footer />                    

    </div>
  )
}
