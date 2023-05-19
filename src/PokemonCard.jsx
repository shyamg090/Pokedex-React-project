import React from "react";

function PokemonCard({pokeid, pokeimg, pokename}) {
    return ( 
     
            <div className="pokeCard">
                <h2>#{pokeid}</h2>
                <img src={pokeimg} alt="pokeimg" />
                <h1>{pokename}</h1>
            </div>
     
     );
}

export default PokemonCard;