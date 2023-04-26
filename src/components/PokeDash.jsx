import { useEffect, useState } from 'react';

const PokeDash = () => {

    const [pokemon, setPokemon] = useState([]);
    

    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => {
        // not the actual JSON response body but the entire HTTP response
        return res.json();
        }).then(res => {
        // we now run another promise to parse the HTTP response into usable JSON
        setPokemon (res.results);
        })
        .catch(err=>{
            console.log(err);
        });

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