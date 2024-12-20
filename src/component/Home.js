import React, { useState } from "react"
import Header from "../component/Header"
import Pokemons from "../component/Pokemons"
import PokemonCard from "./PokemonCard"
import { Link } from "react-router-dom"



const Home = () => {
    const [pokemon, setPokemon] = useState(null)

    const handlePokemonFromChild = (pokemon) => {

        setPokemon(pokemon)
    }

    return (
        <div className="main">
            <Header sendPokemonsToParent={handlePokemonFromChild} />
            {pokemon !== null && pokemon !== "" && typeof pokemon === "object" && !Array.isArray(pokemon) ? (

                <Link to={`/pokemon/${pokemon.id}`}>
                    <PokemonCard pokemon={pokemon} />
                </Link>


            ) : (
                <Pokemons />
            )}

        </div>
    )
}

export default Home;