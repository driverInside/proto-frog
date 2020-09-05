import Link from 'next/link'
import { BsFillLayersFill } from 'react-icons/bs'
import styles from './Home.module.scss'

const HomeContainer = () => {
  return (
    <div className={`${styles.logout}`}>
      <div className={styles.container}>
        <div className={`${styles.name}`}>
          <p>
            <span className={styles.icon}>
              <BsFillLayersFill />
            </span>
            photo
          </p>
        </div>
        <div className={styles.btnGroup}>
          <div className='are-large'>
            <Link href={{ pathname: '/auth', query: { title: 'Log in', action: 'Enter' } }}>
              <button className={`button ${styles.login}`}>Log in</button>
            </Link>
            <Link href={{ pathname: '/auth', query: { title: 'Register', action: 'Create account'} }}>
              <button className={`button ${styles.register}`}>Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContainer
