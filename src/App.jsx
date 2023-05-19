import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import "./index.css";

function App() {

 
  const [pokedata, setPokedata] = useState([]);

  const [currPageurl, setcurrPageurl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageurl, setNextpageurl] = useState();
  const [prevPageurl, setPrevpageurl] = useState();

  const [loading, setLoading]= useState(true);




  const pokeDataFun= async(res)=>{
    res.map(async(res)=>{
    const result= await axios.get(res.url);
   

    setPokedata(pokestate=>{ 
       pokestate=[...pokestate,result.data] 
      
      pokestate.sort((a,b)=> a.id>b.id? 1: -1);

       return pokestate;
    })
  
  })
  }


useEffect(() =>  async() => {
  setLoading(true);
  const res= await axios.get(currPageurl);
  setNextpageurl(res.data.next);
  setPrevpageurl(res.data.previous);
  
  
  pokeDataFun(res.data.results);

  setLoading(false);
}  , [currPageurl]);

function prevUrl(){
  setPokedata([]);
  setcurrPageurl(prevPageurl);
}

function nextUrl(){
  setPokedata([]);
  setcurrPageurl(nextPageurl);
}
  return (
    <>

      <PokemonList
      key={pokedata.name}
      loading={loading}
      pokedata={pokedata}
      />

        <div className="btndiv">
        {prevPageurl  && <button onClick={prevUrl} className="btn">previous</button> }
        {nextPageurl && <button onClick={nextUrl} className="btn">
            next
        </button>}
        </div>

      
    
    </>

  );

}
export default App;
