import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'
import fetchProducts from '../../api/fetchProducts'

export const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('')

    const handleSearch = async (event: any) => {
        event.preventDefault()

        const products = await fetchProducts(searchValue)
        setSearchValue('')
    }

    return (
        <div className="container">
            <form action="" className="search-bar" onSubmit={handleSearch} >
                <input
                    type="search"
                    value={searchValue}
                    placeholder="Buscar produtos"
                    className="search__input"
                    onChange={({ target }) => setSearchValue(target.value)}
                    required
                />
                <button type="submit" className="search__button">
                    <BsSearch />
                </button>
            </form>
        </div>
    )
}