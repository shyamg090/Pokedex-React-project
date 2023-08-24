import React from "react";
import { useRef } from "react";
import './index.css';

function PokemonCard({ pokeid, pokeimg, pokename, poketype, pokestats, pokeheight, pokeweight }) {

    const refcard = useRef();
    const pokeinfo = () => {
        refcard.current.classList.toggle('card-toggle')
    }

    // console.log(poketype)
    const [type1, type2] = poketype;
    // console.log(type1.type.name);

    // console.log(pokestats);
    const [s1, s2, s3, s4, s5, s6] = pokestats;
    // console.log(s1);

    return (


        <div className="pokeCard">

            <div onClick={() => pokeinfo()} className="mainCard">
                <h2>#{pokeid}</h2>
                <img src={pokeimg} alt="pokeimg" />
                <h1>{pokename}</h1>
            </div>

            <div ref={refcard} onClick={() => pokeinfo()} className="fullCard">
                <h1>{pokename}</h1>
                <div className="types">
                    <h2>{type1?.type?.name}</h2>
                    <h2>{type2?.type?.name}</h2>
                </div>
                <div className="h-w">
                    <h2>Ht : {pokeheight}m</h2>
                    <h2>Wt : {pokeweight}lbs</h2>
                </div>
                <div className="stats">
                    <h2>{s1?.stat?.name} : {s1?.base_stat}</h2>
                    <h2>{s2?.stat?.name} : {s2?.base_stat}</h2>
                    <h2>{s3?.stat?.name} : {s3?.base_stat}</h2>
                    <h2>{s4?.stat?.name} : {s4?.base_stat}</h2>
                    <h2>{s5?.stat?.name} : {s5?.base_stat}</h2>
                    <h2>{s6?.stat?.name} : {s6?.base_stat}</h2>

                </div>

            </div>

        </div>

    );
}

export default PokemonCard;