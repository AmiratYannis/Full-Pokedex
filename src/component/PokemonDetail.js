import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../style/pokemonDetail.css"

const PokemonDetail = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true); // To handle loading state

    useEffect(() => {
        console.log(id)
        axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
            .then((res) => {
                console.log(res.data)
                setPokemon(res.data)
                setLoading(false)})
            .catch((err) => {
                console.error("Error fetching Pokémon details:", err)
                setLoading(false)
            })
    }, [id])

    // Show loading spinner while data is being fetched
    if (loading) {
        return (
            <div className="center">
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        );
    }

    // Handle case when pokemon is null due to API issues
    if (!pokemon) {
        return <h1 color='red'>Error loading Pokémon details. Please try again later.</h1>;
    }

    return (
        
        <div className='pokemon-detail container'>
            <div className="card horizontal z-depth-2">
                <div className="card-image">
                    <img src={pokemon.image} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5>N° {pokemon.id}</h5>
                        <h4 className="card-title">{pokemon.name}</h4>
                        <div className="chip-container">
                            {pokemon.apiTypes.map((type, index) => (
                                <div key={index} className={`chip ${type.name.toLowerCase()}`}>
                                    <img src={type.image} alt={type.name} />
                                    {type.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <h5>Statistiques de base</h5>
                <ul className="collection">
                    <li className="collection-item"><strong>PV:</strong> {pokemon.stats.HP}</li>
                    <li className="collection-item"><strong>Attaque:</strong> {pokemon.stats.attack}</li>
                    <li className="collection-item"><strong>Défense:</strong> {pokemon.stats.defense}</li>
                    <li className="collection-item"><strong>Attaque Spécial:</strong> {pokemon.stats.special_attack}</li>
                    <li className="collection-item"><strong>Défense Spécial:</strong> {pokemon.stats.special_defense}</li>
                    <li className="collection-item"><strong>Vitesse:</strong> {pokemon.stats.speed}</li>
                </ul>
            </div>
        </div>



    );
};

export default PokemonDetail;