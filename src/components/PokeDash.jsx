import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokeDash = () => {

    const [pokemon, setPokemon] = useState([]);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    
            .then ((res) => { 
            setPokemon  (res.data.results);
            })
            // console.log(res);

            .catch((err) => 
            console.log(err));
            },[]);
             
    

  return (
    <div>
        <h1>PokeDash</h1>
         <ul>
        {
          pokemon.map((poke, i)=>{
            return (
                <li className="list" key={i}>{poke.name}</li>
                )
          })}
      </ul>

    </div>
  )
}

export default PokeDash