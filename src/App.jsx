import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import "./index.css";
import Footer from "./Footer";

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
    pokeDataFun(res.data.results);
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
    <>
      <nav className="navbar">
        <h1>Pokedex</h1>
      </nav>

      {console.log(pokedata)}
      <PokemonList key={pokedata.name} pokedata={pokedata} loading={loading} />

      <div className="btndiv">
        {prevPageurl && (
          <button onClick={prevUrl} className="btn">
            Previous
          </button>
        )}
        {nextPageurl && (
          <button onClick={nextUrl} className="btn">
            Next
          </button>
        )}
      </div>

      <Footer />
    </>
  );
}
export default App;
