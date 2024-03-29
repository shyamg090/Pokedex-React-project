import React from "react";
import PokemonCard from "./PokemonCard";


function PokemonList({ pokedata, loading }) {


  return (
  <>
      {console.log(pokedata)}

    <div className="div-whole-left">
      {/* {props.pokemon.map(poke =>  <PokemonCard key={poke} poke={poke} /> )} 
      this is not needed bcz pokedata has name and all details
      */}
      {console.log("this is "+loading)}
      {loading  ? <div className="loading"><h1>Loading.......</h1></div> :
        pokedata.map(pokedata => {
          return <PokemonCard
            key={pokedata.name}
            pokeid={pokedata.id}
            pokeimg={pokedata.sprites.other.dream_world.front_default}
            pokename={pokedata.name}
            pokeheight={pokedata.height}
            pokeweight={pokedata.weight}
            poketype={pokedata.types.slice(0,)}
            pokestats={pokedata.stats}
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
