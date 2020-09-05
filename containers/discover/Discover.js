import styles from './Discover.module.scss'
import Slider from 'react-slick'

const DiscoverContainer = ({
  title = 'Discover'
}) => {
  const settings = {
    infinite: true
  }
  return (
    <div className={`container ${styles.discover}`}>
      <h2>{title}</h2>
      <section className={styles.new}>
        <h3 className='subtitle'>What's new today?</h3>
        <Slider {...settings}>
          <div className='card'>
            <div className='card-image'>
              <figure className='image is-4by3'>
                <img src='https://source.unsplash.com/random/400x200' />
              </figure>
            </div>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-48x48'>
                    <img src='https://bulma.io/images/placeholders/96x96.png' alt='Placeholder image' />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='card-image'>
              <figure className='image is-4by3'>
                <img src='https://source.unsplash.com/random/400x200' />
              </figure>
            </div>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-48x48'>
                    <img src='https://bulma.io/images/placeholders/96x96.png' alt='Placeholder image' />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='card-image'>
              <figure className='image is-4by3'>
                <img src='https://source.unsplash.com/random/400x200' />
              </figure>
            </div>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-48x48'>
                    <img src='https://bulma.io/images/placeholders/96x96.png' alt='Placeholder image' />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      <section className={styles.browse}>
        <h3 className='subtitle'>Browse all</h3>
        <div className={styles.gallery}>
          <div>
            <figure className='image'>
              <img src='https://source.unsplash.com/random/200x200' />
            </figure>
          </div>

          <div>
            <figure className='image'>
              <img src='https://source.unsplash.com/random/200x200' />
            </figure>
          </div>

          <div>
            <figure className='image'>
              <img src='https://source.unsplash.com/random/200x200' />
            </figure>
          </div>

          <div>
            <figure className='image'>
              <img src='https://source.unsplash.com/random/200x200' />
            </figure>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DiscoverContainer
