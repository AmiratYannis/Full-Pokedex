import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";
import "../style/pokemons.css"


const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])


    useEffect(() => {
        const cachedData = localStorage.getItem("pokemons");
        if (cachedData) {
            setPokemons(JSON.parse(cachedData));
        } else {
            axios.get("https://pokebuildapi.fr/api/v1/pokemon")
                .then((res) => {
                    setPokemons(res.data);
                    localStorage.setItem("pokemons", JSON.stringify(res.data));
                });
        }
    }, []);


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