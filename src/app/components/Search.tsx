'use client'

import { FC, useState, ChangeEvent, useEffect } from 'react'
import styles from '@/styles/Search.module.scss'

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [results, setResults] = useState<any[]>([])

  useEffect(() => {
    const mockData = [{ shoeName: 'Jordan 1 High' }]

    if (searchValue !== '') {
      setResults(mockData)
    } else {
      setResults([])
    }
  }, [searchValue])

  return (
    <div className="grid">
      <input
        type="search"
        className={styles.search}
        placeholder="Search..."
        value={searchValue}
        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
          setSearchValue(ev.target.value)
        }
      />
      {results.length !== 0 && (
        <div className={styles.results}>
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item.shoeName}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Search
