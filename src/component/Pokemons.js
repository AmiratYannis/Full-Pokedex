import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../component/Pokemon";
import "../style/pokemons.css"


const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])


    useEffect(() => {
        axios.get("https://pokebuildapi.fr/api/v1/pokemon")
            .then((res) => setPokemons(res.data))
    })


    return (
        <div className='pokemons'>
            <h1>Pokemons</h1>
            <ul className="pokemonList">
                {
                    pokemons.map((pokemon, index) =>
                    (
                        <Pokemon key={index} pokemon={pokemon} />
                    )

                    )
                }
            </ul>
        </div >
    );
};

export default Pokemons;