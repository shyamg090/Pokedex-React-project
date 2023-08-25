import React, { useEffect, useState} from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import "./index.css";
import { BiSolidChevronsRight } from 'react-icons/bi'
import { BiSolidChevronsLeft } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'


function App() {
  const [pokedata, setPokedata] = useState([]);
  const [currPageurl, setcurrPageurl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageurl, setNextpageurl] = useState();
  const [prevPageurl, setPrevpageurl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pokeFun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPageurl]);

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(currPageurl);
    setNextpageurl(res.data.next);
    setPrevpageurl(res.data.previous);
    const [...pokeresults] = res.data.results;
    pokeDataFun(pokeresults);
    setLoading(false);
  };

  const pokeDataFun = async (res) => {
    res.map(async (res) => {
      const result = await axios.get(res.url);

      setPokedata((pokestate) => {
        pokestate = [...pokestate, result.data];
        pokestate.sort((a, b) => (a.id > b.id ? 1 : -1));
        return pokestate;
      });
    });
  };

  function prevUrl() {
    setPokedata([]);
    setcurrPageurl(prevPageurl);
  }

  function nextUrl() {
    setPokedata([]);
    setcurrPageurl(nextPageurl);
  }

  return (
    <div>
      
      {/* {console.log(pokedata)} */}
      <PokemonList key={pokedata.name} pokedata={pokedata} loading={loading} />

      <div className="btndiv">

        {prevPageurl && (
          <button onClick={prevUrl} className="btn">
            <BiSolidChevronsLeft />
          </button>
        )}

        <BsThreeDots />

        {nextPageurl && (
          <button onClick={nextUrl} className="btn">
            <BiSolidChevronsRight />
          </button>
        )}
        
      </div>

    </div>
  );
}
export default App;
