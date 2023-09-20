import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'

export const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="container">
            <form action="" className="search-bar" >
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