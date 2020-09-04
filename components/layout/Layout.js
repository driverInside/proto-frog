import Head from 'next/head'

const Layout = ({
  children,
  title = 'Frog challenge'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main>
        <p>Este es el layout</p>
        {children}
      </main>
    </>
  )
}

export default Layout
