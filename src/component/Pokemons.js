import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";
import "../style/pokemons.css"


const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])


    useEffect(() => {
        axios.get("https://pokebuildapi.fr/api/v1/pokemon")
            .then((res) => setPokemons(res.data))
    })


    return (
        <div className='pokemons'>
            <h1>Pokémons</h1>
            <ul className="pokemonList">
                {
                    pokemons.map((pokemon, index) =>
                    (
                        <Link to={`/pokemon/${pokemon.id}`}>
                            <PokemonCard key={index} pokemon={pokemon} />
                        </Link>
                    )

                    )
                }
            </ul>
        </div >
    );
};

export default Pokemons;