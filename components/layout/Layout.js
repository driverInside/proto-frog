import Head from 'next/head'
import Link from 'next/link'
import styles from './Layout.module.scss'
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlinePlusCircle
} from 'react-icons/ai'

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
      <main className='has-navbar-fixed-bottom'>
        {children}
        <nav class={`is-light is-fixed-bottom ${styles.navbar}`} role='navigation' aria-label='main navigation'>
          <div class={`navbar-menu is-active ${styles.navBar}`}>
            <div class='columns is-mobile'>
              <div class='column is-one-fifth-desktop'>
                <div className={styles.menuItem}>
                  <Link href='/discover'>
                    <AiOutlineHome />
                  </Link>
                </div>
              </div>
              <div class='column'>
                <div className={styles.menuItem}>
                  <Link href='/search'>
                    <AiOutlineSearch />
                  </Link>
                </div>
              </div>
              <div class='column'>
                <div className={styles.menuItem}>
                  <Link href='/upload'>
                    <AiOutlinePlusCircle />
                  </Link>
                </div>
              </div>
              <div class='column'>
                <div className={styles.menuItem}>
                  <Link href='/chats'>
                    <AiOutlineMessage />
                  </Link>
                </div>
              </div>

              <div class='column'>
                <div className={styles.menuItem}>
                  <Link href='/profile'>
                    <AiOutlineUser />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </main>
    </>
  )
}

export default Layout
