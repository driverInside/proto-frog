import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { Result } from '../../components'
import styles from './Search.module.scss'

const SearchContainer = ({
  title = 'Search'
}) => {
  const q = React.createRef()
  const ak = 'miZrJN0BGJruD4YCsx-nxpmOzbAdjiQvTxtAhViTGpQ'

  const [results, setResults] = useState([])

  const handleOnChange = async (evt) => {
    const query = q.current.value
    const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${ak}&per_page=13`)
      .then(res => res.json())

    const results = []
    res.results.forEach(photo => {
      results.push(<Result url={photo.urls.regular} />)
    })
    setResults(results)
  }

  return (
    <div className={`container ${styles.search}`}>
      <h2 className='title'>{title}</h2>
      <section className='content'>
        <div className='field'>
          <div className='control has-icons-left'>
            <input ref={q} className='input is-medium' onChange={() => handleOnChange()} />
            <span class='icon is-small is-left'>
              <GoSearch />
            </span>
          </div>
        </div>

        <h3 className='subtitle'>All results</h3>
        <div className={styles.results}>
          {results}
        </div>
      </section>
    </div>
  )
}

export default SearchContainer
