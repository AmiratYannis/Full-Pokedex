import React from 'react';
import "../style/pokemon.css"

const Pokemon = ({ pokemon }) => {

    /*
         <li className='card'>
            <img src={pokemon.image} alt={pokemon.name} />
            <div className="infos">
                <h2>{pokemon.name}</h2>

            </div>
        </li>
    */

    return (
        <div className="row">
            <div className="col s12 m7">
                <div className='card' >
                    <div className='card-image'>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </div>
                    <div className='card-content'>
                        <p>{pokemon.name}</p>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default Pokemon;