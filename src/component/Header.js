import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import "../style/header.css";

const Header = ({ sendPokemonsToParent, IsHomePage }) => {
    const [searchValue, setSearchValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [pokemons, setPokemons] = useState([]);

    // Fetch all Pokemon data once when the component loads
    useEffect(() => {
        axios.get("https://pokebuildapi.fr/api/v1/pokemon")
            .then((res) => setPokemons(res.data))
            .catch((err) => console.error("Failed to fetch Pokemon list", err));
    }, []);



    const handleSearchInputChanges = (e) => {
        const value = e.target.value;
        setSearchValue(e.target.value);

        // Generate suggestions based on input
        if (value.length >= 2) {
            const filteredSuggestions = pokemons.filter((pokemon) =>
                pokemon.name.toLowerCase().startsWith(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    }

    const handleSuggestionClick = (suggestion) => {
        setSearchValue(suggestion.name);
        setSuggestions([]);
        sendPokemonsToParent(suggestion); // Send the selected Pokémon to the parent
    };

    const search = (e) => {
        e.preventDefault();

        // if (!searchValue) return;



       /* axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${searchValue}`)
            .then((res) => sendPokemonsToParent(res.data))
            .catch((err) => {
                console.error("Pokemon not found. Please try again")
            })*/

        // Find the Pokémon directly from the loaded list
        const selectedPokemon = pokemons.find(
            (pokemon) => pokemon.name.toLowerCase() === searchValue.toLowerCase()
        );

        if (selectedPokemon) {
            sendPokemonsToParent(selectedPokemon); // Send the Pokémon data to the parent
        } else {
            console.error("Pokemon not found. Please try again.");
        }

    }

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <img className="js lg:tw-mx-auto lazyautosizes lazyloaded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" />
                </Link>
            </div>
            {IsHomePage && (
                <div className="header__right">
                    <div className="header__top">
                        <div className="header__search">
                            <input type="text" placeholder="Rechercher un Pokémon à afficher au dessus du pokédex" value={searchValue} onChange={handleSearchInputChanges} />

                            <svg className="icon icon-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={search}>
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            {suggestions.length > 0 && (
                                <ul className="autocomplete-suggestions materialize-autocomplete">
                                    {suggestions.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            className="collection-item"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            {suggestion.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

            )}

        </header >
    );
}

export default Header;