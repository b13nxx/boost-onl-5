import { useState, useEffect, useMemo } from "react"

import styles from "./FilterPage.module.css"

export function FilterPage () {
  const [products, setProducts] = useState([])
  const [searchInputValue, setSearchInputValue] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    console.log('useMemo callback calisti')

    return products.slice().filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [products, searchQuery])

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await response.json()

      setProducts(data)
    })()
  }, [])

  const handleSearchInputValueChange = (event) => {
    setSearchInputValue(event.target.value)
  }

  const handleSearchButtonClick = () => {
    if (searchInputValue.trim() === '') return

    setSearchQuery(searchInputValue)
    setSearchInputValue('')
  }

  console.log('FilterPage componenti render ediliyor')

  return <div>
    <h1>Filter Page</h1>
    <div>
      <div className={styles['search-box']}>
        <input className={styles['search-input']} type="text" placeholder="Ara..." value={searchInputValue} onChange={handleSearchInputValueChange} />
        <button className={styles['search-button']} onClick={handleSearchButtonClick}>Ara</button>
      </div>
      <br />
      <h2>Ürünler</h2>
      <div>
        <ul>
          {filteredProducts.map((filteredProduct) => <li key={filteredProduct.id}>{filteredProduct.title}</li>)}
        </ul>
      </div>
    </div>
  </div>
}