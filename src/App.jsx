import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import "./index.css";

function App() {

  // const [pokemon, setPokemon] = useState([]);
  //to get the pokemon initiallt its empty array
  const [pokedata, setPokedata] = useState([]);

  const [currPageurl, setcurrPageurl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageurl, setNextpageurl] = useState();
  const [prevPageurl, setPrevpageurl] = useState();

  const [loading, setLoading]= useState(true);

async function pokeFun(){
  // const pokeFun = async () => {
    setLoading(true);
    const res= await axios.get(currPageurl);
    setNextpageurl(res.data.next);
    setPrevpageurl(res.data.previous);
    // setPokemon(res.data.results.map(p => p.name));
    
    pokeDataFun(res.data.results);

    console.log(pokedata)
    setLoading(false);
}
// async function pokeImgFun(res){
  const pokeDataFun= async(res)=>{
    res.map(async(res)=>{
    const result= await axios.get(res.url);
    console.log(result.data);

    setPokedata(pokestate=>{ //initially pokestate is empty
       pokestate=[...pokestate,result.data] //...pokestate acts like push function push the results.data to ...pokestate
      
      pokestate.sort((a,b)=> a.id>b.id? 1: -1);

       return pokestate;
    })
  
  })
  }

// ---************************--
useEffect(() => {  pokeFun() }, [currPageurl]);

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
      // pokemon={pokemon}
      pokedata={pokedata}
      />

        <div className="btndiv">
          {/* <h1>{prevUrl}</h1> */}
        {prevPageurl  && <button onClick={prevUrl} className="btn">previous</button> }
        {nextPageurl && <button onClick={nextUrl} className="btn">
            next
        </button>}
        </div>

      {/* //note **put prevPageurl &&** to check not prevurl  */}
    
    </>

  );

}
export default App;

// key is to be sent to Component hence send pokemon name as key bcz no pokemon name will repeat

// function pokeFun2(res){
//     // console.log(res)
//     res.data.results.map(p=> {
//       console.log(p.url)
//       const result= axios.get(p.url)
//       console.log(result) 
//     })

// }

  // function pokeFun() {

  //   axios.get(currPageurl).then(res => {
  //     setNextpageurl(res.data.next);
  //     setPrevpageurl(res.data.previous);
  //     setPokemon(res.data.results.map(p => p.name));
  //     return res;  
  //   }).then(res=> pokeFun2(res))
      

  // }