import useSWR from 'swr'
import { Chat } from '../../components'
import styles from './Chats.module.scss'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const ChatContainer = () => {
  const { data, error } = useSWR(`/api/chats?userId=}`, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) {
    return (
      <progress className='progress is-small is-primary' max='100'>15%</progress>
    )
  }

  return (
    <div className={styles.chats}>
      <div className={styles.header}>
        <h2 className='title'>Chats</h2>
      </div>

      <div className={styles.content}>
        {data.chats.map((chat) => (
          <Chat 
            text={chat.text}
            pic={chat.profilePic}
            date={chat.date}
            name={chat.name}
          />
        ))}
      </div>
    </div>
  )
}
export default ChatContainer
