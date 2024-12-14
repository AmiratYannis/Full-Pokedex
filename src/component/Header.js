import React, { useState } from "react";
import axios from "axios";
import "../style/header.css"

const Header = ({ sendPokemonsToParent }) => {
    const [searchValue, setSearchValue] = useState("");



    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
            .then((res) => sendPokemonsToParent(res.data))


    }

    return (
        <header className="header">
            <div className="header__logo">
                <a hreaf="/">
                    <img className="js lg:tw-mx-auto lazyautosizes lazyloaded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" />
                </a>
            </div>
            <div className="header__right">
                <div className="header__top">
                    <div className="header__search">
                        <input type="text" placeholder="Recherche" value={searchValue} onChange={handleSearchInputChanges} />

                        <svg className="icon icon-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={search}>
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>



            </div>

        </header >
    );
}

export default Header;