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
            <button className={`button ${styles.login}`}>Log in</button>
            <button className={`button ${styles.register}`}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContainer
