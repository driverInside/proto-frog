import styles from './Auth.module.scss'

const AuthContainer = ({
  title = 'Log in',
  action = 'Log in'
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <div className='field'>
          <div className='control'>
            <input
              type='email'
              className='input is-medium'
              placeholder='jane@example.com'
            />
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <input
              type='password'
              className='input is-medium'
              placeholder='********'
            />
          </div>
        </div>

        <div className={styles.btnGroup}>
          <div className='are-large'>
            <button className={`button ${styles.action}`}>{action}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthContainer
