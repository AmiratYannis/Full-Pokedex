import React, { useState } from "react"
import Header from "../component/Header"
import Pokemons from "../component/Pokemons"


const Home = () => {
    const [pokemon, setPokemon] = useState([])

    const handlePokemonFromChild = (pokemon) => {
        console.log(pokemon)
        setPokemon(pokemon)
    }

    return (
        <div className="main">
            <Header sendPokemonsToParent={handlePokemonFromChild} />
            <Pokemons />
        </div>
    )
}

export default Home;