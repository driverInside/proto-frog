import styles from './Chat.module.scss'

const Chat = ({
  text = '',
  pic = 'https://picsum.photos/200/200',
  date = new Date(),
  name = ''
}) => {
  return (
    <div className={styles.chat}>
      <article className='media'>
        <figure class='media-left'>
          <p class='image is-64x64'>
            <img src={pic} />
          </p>
        </figure>

        <div className='media-content'>
          <div className='content'>
            <p>
              <strong>{name}</strong>
              <br />
              {text}
            </p>
          </div>
        </div>

        <div className='media-right'>
          <button className='delete' />
        </div>
      </article>
    </div>
  )
}
export default Chat
