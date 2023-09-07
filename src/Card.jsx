
import './card.css'
import { useEffect, useState } from 'react'



export default function Card() {
    const [data, setData] = useState([]);
    const [fetched, setFetched] = useState(false);

    async function getPokemon() {
        let pokemonArray = [];
        for (let i = 1; i <= 10; i++) {
            const n = Math.floor(Math.random()*700+1);
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+n);
            const result = await response.json();

            const newPokemon = {
                name: result.forms[0].name,
                image: result.sprites.front_default,
                id: i
            }
            pokemonArray.push(newPokemon);
        }
        console.log(pokemonArray)
        setData(pokemonArray);
        setFetched(true);
    }

    useEffect(() => {
        getPokemon();
    }, []);

    if (!fetched)
        return <div />

    return (
        <div className="cardcontainer">
            {data.map(pokemon => {
                return (
                    <div className="card" key={pokemon.id}>
                        <img src={pokemon.image} />
                        <div className="name">{pokemon.name}</div>
                    </div>
                )
            })}
        </div>
            
    )
}