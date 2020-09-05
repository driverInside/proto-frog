import useSWR from 'swr'
import styles from './Discover.module.scss'
import Slider from 'react-slick'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const DiscoverContainer = ({
  title = 'Discover'
}) => {
  const settings = {
    infinite: true
  }

  const { data, error } = useSWR(`/api/discover`, fetcher)

  console.log('-----------')
  console.log(data)
  console.log('-----------')

  if (error) return <div>failed to load</div>
  if (!data) {
    return (
      <progress className='progress is-small is-primary' max='100'>15%</progress>
    )
  }

  return (
    <div className={`container ${styles.discover}`}>
      <h2>{title}</h2>
      <section className={styles.new}>
        <h3 className='subtitle'>What's new today?</h3>
        <Slider {...settings}>
          {data.discover.main.map((el) => (
            <div className='card'>
              <div className='card-image'>
                <figure className='image is-4by3'>
                  <img src={el.pic} />
                </figure>
              </div>
              <div className='card-content'>
                <div className='media'>
                  <div className='media-left'>
                    <figure className='image is-48x48'>
                      <img src={el.user.pic} alt='Placeholder image' />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{el.user.name}</p>
                    <p class="subtitle is-6">@{el.user.userName}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <section className={styles.browse}>
        <h3 className='subtitle'>Browse all</h3>
        <div className={styles.gallery}>
          {data.discover.pics.map((el) => (
            <div>
              <figure className='image'>
                <img src={el.url} />
              </figure>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DiscoverContainer
