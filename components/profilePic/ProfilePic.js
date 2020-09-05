import styles from './ProfilePic.module.scss'

const ProfilePic = ({ url }) => {
  return (
    <figure className={`image ${styles.profilePic}`}>
      <img src={url} />
    </figure>
  )
}
export default ProfilePic
