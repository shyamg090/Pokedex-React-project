import React from "react";
import PokemonCard from "./PokemonCard";



function PokemonList(props) {

  return (
  <>
    <div className="navbar"> 
      <h1>Pokedex</h1>
    </div>
    <div className="div-whole-left">
      {/* {props.pokemon.map(poke =>  <PokemonCard key={poke} poke={poke} /> )} 
      this is not needed bcz pokedata has name and all details
      */}
      {props.loading === true ? <><p><a href="https://giphy.com/gifs/pokemon-pikachu-after-effects-l0HlLMeBgzK2UuHVS"></a></p></> :
        props.pokedata.map(pokedata => {
          return <PokemonCard
            key={pokedata.name}
            pokeid={pokedata.id}
            pokeimg={pokedata.sprites.front_default}
            pokename={pokedata.name}
          />
        }
        )}

    </div>
  </>
  );
}

export default PokemonList;

// props get object inside which is an array
// hence props.pokemon inside h1 gives bulbasaurpikachu
// as it is array use map() method to traverse through the array
// inside map single array item goes as alias poke which is printed inside div
// hence each pokemon in the array has a seperate div
