import useSWR from 'swr'
import Link from 'next/link'
import { ProfilePic } from '../../components'
import styles from './Profile.module.scss'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const ProfileContainer = ({
  user
}) => {
  const { data, error } = useSWR(`/api/user?userId=${user}`, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) {
    return (
      <progress className='progress is-small is-primary' max='100'>15%</progress>
    )
  }

  return (
    <div className={styles.profile}>
      <div className={styles.profileImage}>
        <figure class='image'>
          <img class='is-rounded' src={data.profilePic} />
        </figure>
        <div className={styles.profileName}>
          <h2 className='title'>{data.firstName}</h2>
          <p className='subtitle'>{data.location}</p>
        </div>
      </div>
      <div className={styles.followButtons}>
        <button class={`button ${styles.follow}`}>Follow {data.firstName}</button>
        <Link href='/chats'>
          <button class='button'>Message</button>
        </Link>
      </div>

      <div className={styles.gallery}>
        {data.pics.map((pic) => (
          <ProfilePic url={pic.url} />
        ))}
      </div>
    </div>
  )
}

export default ProfileContainer
