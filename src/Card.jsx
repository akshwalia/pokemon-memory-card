
import './card.css'
import { useEffect, useState } from 'react'
import loadingImage from './assets/loading.png'

let clickedCards = [];


export default function Card({ updateScore, updateHighScore, changeGameOver, pokemonData, setData, reset, numberOfPokemons }) {
    const [fetched, setFetched] = useState(false);

    async function getPokemon() {
        let pokemonArray = [];
        for (let i = 1; i <= numberOfPokemons; i++) {
            const n = Math.floor(Math.random() * 700 + 1);
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + n);
            const result = await response.json();

            const newPokemon = {
                name: result.forms[0].name.charAt(0).toUpperCase() + result.forms[0].name.substring(1),
                image: result.sprites.front_default,
                id: `${i}`
            }

            if (!pokemonArray.includes(newPokemon))
                pokemonArray.push(newPokemon);
            else
                i--;
        }
        console.log(pokemonArray)
        setData(pokemonArray);
        setFetched(true);
    }

    useEffect(() => {
        setFetched(false);
        getPokemon();
        clickedCards=[];
    }, [reset]);

    function handleClick(e) {
        if (!clickedCards.includes(e.currentTarget.id)) {
            clickedCards.push(e.currentTarget.id);

            updateScore();
            console.log(clickedCards);
            shuffleCards();
        }
        else {
            changeGameOver();
            updateHighScore();

        }
    }

    

    function shuffleCards() {
        let shuffled = [];
        while (shuffled.length !== pokemonData.length) {
            let ran = Math.floor(Math.random() * numberOfPokemons);
            if (!shuffled.includes(pokemonData[ran])) {
                shuffled.push(pokemonData[ran]);
            }
        }
        console.log(shuffled);
        setData(shuffled);
    }

    if (!fetched)
        return (
            <>
                <div>The game is loading...</div>
                <img src={loadingImage} className='rotate'/>
            </>
    )

    return (
        <div className="cardcontainer">
            {pokemonData.map(pokemon => {
                return (
                    <div className="card" id={pokemon.id} key={pokemon.id} onClick={handleClick}>
                        <img src={pokemon.image} />
                        <div className="name">{pokemon.name}</div>
                    </div>
                )
            })}
        </div>

    )

}