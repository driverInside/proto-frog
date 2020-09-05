import styles from './Result.module.scss'
const Result = ({
  url = 'https://dummyimage.com/400x400.png'
}) => {
  return (
    <div className={styles.result}>
      <img src={url} className={styles.resultImg} />
    </div>
  )
}
export default Result
