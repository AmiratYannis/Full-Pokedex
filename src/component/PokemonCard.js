import React from 'react';
import "../style/pokemon.css"

const PokemonCard = ({ pokemon }) => {

    return (
        <div className="row">
            <div className="col s12 m7">
                <div className='card' >
                    <div className='card-image'>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </div>
                    <div className='card-content'>
                        <h5>N° {pokemon.id}</h5>
                        <h4>{pokemon.name}</h4>
                        <div className='pokemon-types'>
                            
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
        </div>
    );
};

export default PokemonCard;