import React from 'react'
import Head from 'next/head'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ProductsTable } from '@/components'
import styles from '@/styles/Home.module.css'
// TODO uncomment the line below to import the API calls
// import { getProductProperties, getProducts } from '@/api/products'

export async function getStaticProps(): Promise<{ props }> {
  // TODO call getProductProperties and getProducts from '@/api/products'
  // and return the data in order to receive it in the `Home` component
  return {
    props: {
      // TODO products and product properties data
    }
  }
}

const Home: React.FC = (props) => {
  const {
    // TODO consume the products and product properties data coming from `getStaticProps`
  } = props

  const theme = createMuiTheme({ palette: { type: 'dark' } })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.container}>
        <Head>
          <title>Healthy Foods</title>
          <meta name="description" content="Healthy Foods Challenge" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Healthy Foods</h1>
          <p className={styles.description}>
            A comphrehensive inventory of all the <code>Healthy Foods</code> in our store
          </p>
          {/* TODO: implement the rest of the functionality starting in ProductsTable component */}
          <ProductsTable />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Home
