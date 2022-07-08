import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>College Travel Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="College Travel Group" />
        <p className="description">
        Join Columbia University, the University of Chicago, Vanderbilt University, and Brown to discover the exceptional opportunities our schools have to offer!</p>
      <p>The college admissions process is an opportunity to reflect on your many options for the future. Whether you imagine yourself studying in a city, a suburb, or in a rural area; at a large, public university or a smaller, private school; or cheering on your favorite team or sleeping in on game day, you can learn about the features that will make your future college home a perfect fit for you! Admissions counselors will discuss:</p>

      </main>

      <Footer />
    </div>
  )
}
